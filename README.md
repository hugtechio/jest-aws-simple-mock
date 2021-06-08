# jest-aws-simple-mock
The jest-aws-simple-mock is a mocking library of AWS-SDK for javascript.
Currently, only these module you can mock is. 

- @aws/dynamodb-datamapper
- aws-sdk(version 2) ** not all services **
- aws-sdk(version 3) ** DynamoDB, Lambda, S3, CloudFront, SESv2, CognitoIdentityProvider **

## Basic Usage
**AWS-SDK v2**
```ts 
import { mock<ServiceName> } from 'jest-aws-simple-mock'

let spy = mock<ServiceName>.<methodName>(<<returns>>)
```

**AWS-SDK v3**
```ts
import { V3 } from 'jest-aws-simple-mock'

let spy = V3.mockDynamo.getItem(<<returns>>)
```


## Mocking example
Test code of this library is helpful how to use.

### Chaining example

```ts
    // construct mock chain
    const chain = new MockChain()
    chain
        .addWithName('dynamo', V3.mockDynamo.send, 1) // mock the first call of DynamoDB.send method (AWS SDK V3)
        .addWithName('lambda', V3.mockLambda.send, {}) // mock the first call of Lambda.send method (AWS SDK V3)
        .addWithName('dynamo', V3.mockDynamo.send, 2) // mock the second call of DynamoDB.send method (AWS SDK V3)
    const spies = chain.getNamedSpies()

    // call methods
    const dynamoClient = new DynamoDBClient({region: 'us-east-1'})
    const dynamoCommandParam1 = {
        TableName: 'dummy',
        Key: {
            ID: { S: 'aaaa'}
        }
    }
    const dynamoCommand1 = new GetItemCommand(dynamoCommandParam1)
    const result1 = await dynamoClient.send(dynamoCommand1)

    const lambdaCommand = new InvokeCommand(lambdaParam)
    const lambdaClient = new LambdaClient({region: 'us-east-1'})
    const result2 = await lambdaClient.send(lambdaCommand)

    const dynamoCommandParam2 = {
        TableName: 'dummy',
        Key: {
            ID: { S: 'bbbb'}
        }
    }
    const dynamoCommand2 = new GetItemCommand(dynamoCommandParam2)
    const result3 = await dynamoClient.send(dynamoCommand2)

    // check results
    expect(result1).toBe(1)
    expect(result2).toEqual({})
    expect(result3).toEqual(2)

    // access spies.
    expect(spies.dynamo).toHaveBeenNthCalledWith(1, expect.objectContaining({
        input: dynamoCommandParam1
    }))
    expect(spies.lambda).toHaveBeenNthCalledWith(1, expect.objectContaining({
        input: lambdaParam
    }))
    expect(spies.dynamo).toHaveBeenNthCalledWith(2, expect.objectContaining({
        input: dynamoCommandParam2
    }))
```

### aws-sdk version 3 Modular style
```ts
    V3.mockDynamo.send({})
    const command = new GetItemCommand({
        TableName: 'dummy',
        Key: {
            ID: { S: 'aaaa'}
        }
    })
    const client = new DynamoDBClient({region: 'us-east-1'})
    // @ts-ignore
    const result = await client.send(command)
    expect(result).toEqual({})
```

```ts
    V3.mockS3.send({})
    const command = new GetObjectCommand({
        Bucket: 'dummy',
        Key: 'key'
    })
    const client = new S3Client({region: 'us-east-1'})
    // @ts-ignore
    const result = await client.send(command)
    expect(result).toEqual({})
```

### aws-sdk Version 2 (This is the same as the v2 style of aws-sdk version 3)
```ts DynamoDBDataMapper
    const result = await target.mockDynamoDocClient.get({})
    // @ts-ignore
    expect(result).toHaveProperty('mock')
```

```ts DynamoDBDataMapper twice calls
    const dataMapper = new DataMapper({client: new DynamoDB()})
    let mock = target.mockDynamo.query([{id: 1}])
    target.mockDynamo.query([{id: 2}], mock)

    // @ts-ignore
    let q = dataMapper.query()
    let result = [] 
    for await (const item of q) {
        result.push(item)
    }
    expect(result).toEqual([{id: 1}])

    // @ts-ignore
    q = dataMapper.query()
    result = [] 
    for await (const item of q) {
        result.push(item)
    }
    expect(result).toEqual([{id: 2}])
```

```ts mock DynamoDBDataMapper.pages
    const dataMapper = new DataMapper({client: new DynamoDB()})
    let mock = target.mockDynamo.queryPages([[{id: 1}]])
    // @ts-ignore
    let q = dataMapper.query().pages()
    expect(q).toHaveProperty('lastEvaluatedKey')
    for await (const page of q) {
        expect(Array.isArray(page)).toBeTruthy()
```

```ts
    const acm = new AWS.ACM()
    let mock = target.mockAcm.requestCertificate({})
    const result = await acm.requestCertificate().promise()
    expect(result).toEqual({})
```

# Mocking pattern
Jest-aws-simple-mock generates 3 types mock which return different result.

### mock at once (only mock first invocation)
This mocking invocation is to mock only a call of target function.

```javascript
mockLambda.invoke(resultObject)
```

### mock All invocation (mocking all calls of target function)
This mocking invocation is to mock **all** calls of target function.

```javascript
mockLambda.invokeAll(resultObject)
```


### mock with throw
This mocking invocation is to throw exception when target function was called.

```javascript
mockLambda.invokeThrow(resultObject)
```


## mock on several calls

when you want to mock target function only several times in all calls. 
You can chain mock object.

```javascript
# test code
let m = mockLambda.invoke(resultObject1)
m = mockLambda.invoke(resultObject2, m)
m = mockLambda.invoke(resultObject3, m)

# caller
const lambda = new Lambda()
const result1 = await lambda.invoke(xxx) // will return resultObject1
const result2 = await lambda.invoke(xxx) // will return resultObject2
const result3 = await lambda.invoke(xxx) // will return resultObject3
const result4 = await lambda.invoke(xxx) // This is real call of AWS lambda
```

## mock by chain object
You can also make mocks like method chaining

```ts
# test code
const chain = new MockChain()
chain
    .addWithName('db', V3.mockDynamo.send, object1)
    .addWithName('db', V3.mockDynamo.send, object2)
    .addWithName('lambda', V3.mockLambda.send, object3)
    .addWithName('db', V3.mockDynamo.send, object4)
    .addWithName('lambda', V3.mockDynamo.send, object5)

# caller
const db = new DynamoDBClient()
const lambda = new LambdaClient()
const result1 = db.send(command1) // will return object1
const result2 = db.send(command2) // will return object2
const result3 = db.send(command3) // will return object4
const result4 = lambda.send(command4) // will return object3
const result5 = lambda.send(command5) // will return object5
```
## all mockable methods (2021.04.26)

### aws-sdk-v2
```ts
export const Acm = [
    'addTagsToCertificate',
    'deleteCertificate',
    'describeCertificate',
    'exportCertificate',
    'getCertificate',
    'importCertificate',
    'listCertificates',
    'listTagsForCertificate',
    'removeTagsFromCertificate',
    'renewCertificate',
    'requestCertificate',
    'resendValidationEmail',
    'updateCertificateOptions'
]

export const CloudFront = [
    'createCloudFrontOriginAccessIdentity',
    'createDistribution',
    'createDistributionWithTags',
    'createFieldLevelEncryptionConfig',
    'createFieldLevelEncryptionProfile',
    'createInvalidation',
    'createPublicKey',
    'createStreamingDistribution',
    'createStreamingDistributionWithTags',
    'deleteCloudFrontOriginAccessIdentity',
    'deleteDistribution',
    'deleteFieldLevelEncryptionConfig',
    'deleteFieldLevelEncryptionProfile',
    'deletePublicKey',
    'deleteStreamingDistribution',
    'getCloudFrontOriginAccessIdentity',
    'getCloudFrontOriginAccessIdentityConfig',
    'getDistribution',
    'getDistributionConfig',
    'getFieldLevelEncryption',
    'getFieldLevelEncryptionConfig',
    'getFieldLevelEncryptionProfile',
    'getFieldLevelEncryptionProfileConfig',
    'getInvalidation',
    'getPublicKey',
    'getPublicKeyConfig',
    'getStreamingDistribution',
    'getStreamingDistributionConfig',
    'listCloudFrontOriginAccessIdentities',
    'listDistributions',
    'listDistributionsByWebACLId',
    'listFieldLevelEncryptionConfigs',
    'listFieldLevelEncryptionProfiles',
    'listInvalidations',
    'listPublicKeys',
    'listStreamingDistributions',
    'listTagsForResource',
    'setupRequestListeners',
    'tagResource',
    'untagResource',
    'updateCloudFrontOriginAccessIdentity',
    'updateDistribution',
    'updateFieldLevelEncryptionConfig',
    'updateFieldLevelEncryptionProfile',
    'updatePublicKey',
    'updateStreamingDistribution'
]

export const Lambda =  [
    'addLayerVersionPermission',
    'addPermission',
    'createAlias',
    'createEventSourceMapping',
    'createFunction',
    'deleteAlias',
    'deleteEventSourceMapping',
    'deleteFunction',
    'deleteFunctionConcurrency',
    'deleteFunctionEventInvokeConfig',
    'deleteLayerVersion',
    'deleteProvisionedConcurrencyConfig',
    'getAccountSettings',
    'getAlias',
    'getEventSourceMapping',
    'getFunction',
    'getFunctionConcurrency',
    'getFunctionConfiguration',
    'getFunctionEventInvokeConfig',
    'getLayerVersion',
    'getLayerVersionByArn',
    'getLayerVersionPolicy',
    'getPolicy',
    'getProvisionedConcurrencyConfig',
    'invoke',
    'invokeAsync',
    'listAliases',
    'listEventSourceMappings',
    'listFunctionEventInvokeConfigs',
    'listFunctions',
    'listLayers',
    'listLayerVersions',
    'listProvisionedConcurrencyConfigs',
    'listTags',
    'listVersionsByFunction',
    'publishLayerVersion',
    'publishVersion',
    'putFunctionConcurrency',
    'putFunctionEventInvokeConfig',
    'putProvisionedConcurrencyConfig',
    'removeLayerVersionPermission',
    'removePermission',
    'tagResource',
    'untagResource',
    'updateAlias',
    'updateEventSourceMapping',
    'updateFunctionCode',
    'updateFunctionConfiguration',
    'updateFunctionEventInvokeConfig',
]

export const s3 = [
    'abortMultipartUpload',
    'completeMultipartUpload',
    'copyObject',
    'createBucket',
    'createMultipartUpload',
    'createPresignedPost',
    'deleteBucket',
    'deleteBucketAnalyticsConfiguration',
    'deleteBucketCors',
    'deleteBucketEncryption',
    'deleteBucketInventoryConfiguration',
    'deleteBucketLifecycle',
    'deleteBucketMetricsConfiguration',
    'deleteBucketPolicy',
    'deleteBucketReplication',
    'deleteBucketTagging',
    'deleteBucketWebsite',
    'deleteObject',
    'deleteObjects',
    'deleteObjectTagging',
    'deletePublicAccessBlock',
    'getBucketAccelerateConfiguration',
    'getBucketAcl',
    'getBucketAnalyticsConfiguration',
    'getBucketCors',
    'getBucketEncryption',
    'getBucketInventoryConfiguration',
    'getBucketLifecycle',
    'getBucketLifecycleConfiguration',
    'getBucketLocation',
    'getBucketLogging',
    'getBucketMetricsConfiguration',
    'getBucketNotification',
    'getBucketNotificationConfiguration',
    'getBucketPolicy',
    'getBucketPolicyStatus',
    'getBucketReplication',
    'getBucketRequestPayment',
    'getBucketTagging',
    'getBucketVersioning',
    'getBucketWebsite',
    'getObject',
    'getObjectAcl',
    'getObjectLegalHold',
    'getObjectLockConfiguration',
    'getObjectRetention',
    'getObjectTagging',
    'getObjectTorrent',
    'getPublicAccessBlock',
    'getSignedUrl',
    'getSignedUrlPromise',
    'headBucket',
    'headObject',
    'listBucketAnalyticsConfigurations',
    'listBucketInventoryConfigurations',
    'listBucketMetricsConfigurations',
    'listBuckets',
    'listMultipartUploads',
    'listObjects',
    'listObjectsV2',
    'listObjectVersions',
    'listParts',
    'putBucketAccelerateConfiguration',
    'putBucketAcl',
    'putBucketAnalyticsConfiguration',
    'putBucketCors',
    'putBucketEncryption',
    'putBucketInventoryConfiguration',
    'putBucketLifecycle',
    'putBucketLifecycleConfiguration',
    'putBucketLogging',
    'putBucketMetricsConfiguration',
    'putBucketNotification',
    'putBucketNotificationConfiguration',
    'putBucketPolicy',
    'putBucketReplication',
    'putBucketRequestPayment',
    'putBucketTagging',
    'putBucketVersioning',
    'putBucketWebsite',
    'putObject',
    'putObjectAcl',
    'putObjectLegalHold',
    'putObjectLockConfiguration',
    'putObjectRetention',
    'putObjectTagging',
    'putPublicAccessBlock',
    'restoreObject',
    'selectObjectContent',
    'upload',
    'uploadPart',
    'uploadPartCopy'
]

export const EventBridge = [
    'activateEventSource',
    'createEventBus',
    'createPartnerEventSource',
    'deactivateEventSource',
    'deleteEventBus',
    'deletePartnerEventSource',
    'deleteRule',
    'describeEventBus',
    'describeEventSource',
    'describePartnerEventSource',
    'describeRule',
    'disableRule',
    'enableRule',
    'listEventBuses',
    'listEventSources',
    'listPartnerEventSourceAccounts',
    'listPartnerEventSources',
    'listRuleNamesByTarget',
    'listRules',
    'listTagsForResource',
    'listTargetsByRule',
    'putEvents',
    'putPartnerEvents',
    'putPermission',
    'putRule',
    'putTargets',
    'removePermission',
    'removeTargets',
    'tagResource',
    'testEventPattern',
    'untagResource'
]

export const StepFunctions = [
    'createActivity',
    'createStateMachine',
    'deleteActivity',
    'deleteStateMachine',
    'describeActivity',
    'describeExecution',
    'describeStateMachine',
    'describeStateMachineForExecution',
    'getActivityTask',
    'getExecutionHistory',
    'listActivities',
    'listExecutions',
    'listStateMachines',
    'listTagsForResource',
    'sendTaskFailure',
    'sendTaskHeartbeat',
    'sendTaskSuccess',
    'startExecution',
    'stopExecution',
    'tagResource',
    'untagResource',
    'updateStateMachine'
]

export const CognitoIdp = [
    'addCustomAttributes',
    'adminAddUserToGroup',
    'adminConfirmSignUp',
    'adminCreateUser',
    'adminDeleteUser',
    'adminDeleteUserAttributes',
    'adminDisableProviderForUser',
    'adminDisableUser',
    'adminEnableUser',
    'adminForgetDevice',
    'adminGetDevice',
    'adminGetUser',
    'adminInitiateAuth',
    'adminLinkProviderForUser',
    'adminListDevices',
    'adminListGroupsForUser',
    'adminListUserAuthEvents',
    'adminRemoveUserFromGroup',
    'adminResetUserPassword',
    'adminRespondToAuthChallenge',
    'adminSetUserMFAPreference',
    'adminSetUserPassword',
    'adminSetUserSettings',
    'adminUpdateAuthEventFeedback',
    'adminUpdateDeviceStatus',
    'adminUpdateUserAttributes',
    'adminUserGlobalSignOut',
    'associateSoftwareToken',
    'changePassword',
    'confirmDevice',
    'confirmForgotPassword',
    'confirmSignUp',
    'createGroup',
    'createIdentityProvider',
    'createResourceServer',
    'createUserImportJob',
    'createUserPool',
    'createUserPoolClient',
    'createUserPoolDomain',
    'deleteGroup',
    'deleteIdentityProvider',
    'deleteResourceServer',
    'deleteUser',
    'deleteUserAttributes',
    'deleteUserPool',
    'deleteUserPoolClient',
    'deleteUserPoolDomain',
    'describeIdentityProvider',
    'describeResourceServer',
    'describeRiskConfiguration',
    'describeUserImportJob',
    'describeUserPool',
    'describeUserPoolClient',
    'describeUserPoolDomain',
    'forgetDevice',
    'forgotPassword',
    'getCSVHeader',
    'getDevice',
    'getGroup',
    'getIdentityProviderByIdentifier',
    'getSigningCertificate',
    'getUICustomization',
    'getUser',
    'getUserAttributeVerificationCode',
    'getUserPoolMfaConfig',
    'globalSignOut',
    'initiateAuth',
    'listDevices',
    'listGroups',
    'listIdentityProviders',
    'listResourceServers',
    'listTagsForResource',
    'listUserImportJobs',
    'listUserPoolClients',
    'listUserPools',
    'listUsers',
    'listUsersInGroup',
    'resendConfirmationCode',
    'respondToAuthChallenge',
    'setRiskConfiguration',
    'setUICustomization',
    'setUserMFAPreference',
    'setUserPoolMfaConfig',
    'setUserSettings',
    'signUp',
    'startUserImportJob',
    'stopUserImportJob',
    'tagResource',
    'untagResource',
    'updateAuthEventFeedback',
    'updateDeviceStatus',
    'updateGroup',
    'updateIdentityProvider',
    'updateResourceServer',
    'updateUserAttributes',
    'updateUserPool',
    'updateUserPoolClient',
    'updateUserPoolDomain',
    'verifySoftwareToken',
    'verifyUserAttribute'
]

export const Kms = [
    'cancelKeyDeletion',
    'connectCustomKeyStore',
    'createAlias',
    'createCustomKeyStore',
    'createGrant',
    'createKey',
    'decrypt',
    'deleteAlias',
    'deleteCustomKeyStore',
    'deleteImportedKeyMaterial',
    'describeCustomKeyStores',
    'describeKey',
    'disableKey',
    'disableKeyRotation',
    'disconnectCustomKeyStore',
    'enableKey',
    'enableKeyRotation',
    'encrypt',
    'generateDataKey',
    'generateDataKeyPair',
    'generateDataKeyPairWithoutPlaintext',
    'generateDataKeyWithoutPlaintext',
    'generateRandom',
    'getKeyPolicy',
    'getKeyRotationStatus',
    'getParametersForImport',
    'getPublicKey',
    'importKeyMaterial',
    'listAliases',
    'listGrants',
    'listKeyPolicies',
    'listKeys',
    'listResourceTags',
    'listRetirableGrants',
    'putKeyPolicy',
    'reEncrypt',
    'retireGrant',
    'revokeGrant',
    'scheduleKeyDeletion',
    'sign',
    'tagResource',
    'untagResource',
    'updateAlias',
    'updateCustomKeyStore',
    'updateKeyDescription',
    'verify'
]

export const Ssm = [
    'addTagsToResource',
    'cancelCommand',
    'cancelMaintenanceWindowExecution',
    'createActivation',
    'createAssociation',
    'createAssociationBatch',
    'createDocument',
    'createMaintenanceWindow',
    'createOpsItem',
    'createPatchBaseline',
    'createResourceDataSync',
    'deleteActivation',
    'deleteAssociation',
    'deleteDocument',
    'deleteInventory',
    'deleteMaintenanceWindow',
    'deleteParameter',
    'deleteParameters',
    'deletePatchBaseline',
    'deleteResourceDataSync',
    'deregisterManagedInstance',
    'deregisterPatchBaselineForPatchGroup',
    'deregisterTargetFromMaintenanceWindow',
    'deregisterTaskFromMaintenanceWindow',
    'describeActivations',
    'describeAssociation',
    'describeAssociationExecutions',
    'describeAssociationExecutionTargets',
    'describeAutomationExecutions',
    'describeAutomationStepExecutions',
    'describeAvailablePatches',
    'describeDocument',
    'describeDocumentPermission',
    'describeEffectiveInstanceAssociations',
    'describeEffectivePatchesForPatchBaseline',
    'describeInstanceAssociationsStatus',
    'describeInstanceInformation',
    'describeInstancePatches',
    'describeInstancePatchStates',
    'describeInstancePatchStatesForPatchGroup',
    'describeInventoryDeletions',
    'describeMaintenanceWindowExecutions',
    'describeMaintenanceWindowExecutionTaskInvocations',
    'describeMaintenanceWindowExecutionTasks',
    'describeMaintenanceWindows',
    'describeMaintenanceWindowSchedule',
    'describeMaintenanceWindowsForTarget',
    'describeMaintenanceWindowTargets',
    'describeMaintenanceWindowTasks',
    'describeOpsItems',
    'describeParameters',
    'describePatchBaselines',
    'describePatchGroups',
    'describePatchGroupState',
    'describePatchProperties',
    'describeSessions',
    'getAutomationExecution',
    'getCalendarState',
    'getCommandInvocation',
    'getConnectionStatus',
    'getDefaultPatchBaseline',
    'getDeployablePatchSnapshotForInstance',
    'getDocument',
    'getInventory',
    'getInventorySchema',
    'getMaintenanceWindow',
    'getMaintenanceWindowExecution',
    'getMaintenanceWindowExecutionTask',
    'getMaintenanceWindowExecutionTaskInvocation',
    'getMaintenanceWindowTask',
    'getOpsItem',
    'getOpsSummary',
    'getParameter',
    'getParameterHistory',
    'getParameters',
    'getParametersByPath',
    'getPatchBaseline',
    'getPatchBaselineForPatchGroup',
    'getServiceSetting',
    'labelParameterVersion',
    'listAssociations',
    'listAssociationVersions',
    'listCommandInvocations',
    'listCommands',
    'listComplianceItems',
    'listComplianceSummaries',
    'listDocuments',
    'listDocumentVersions',
    'listInventoryEntries',
    'listResourceComplianceSummaries',
    'listResourceDataSync',
    'listTagsForResource',
    'modifyDocumentPermission',
    'putComplianceItems',
    'putInventory',
    'putParameter',
    'registerDefaultPatchBaseline',
    'registerPatchBaselineForPatchGroup',
    'registerTargetWithMaintenanceWindow',
    'registerTaskWithMaintenanceWindow',
    'removeTagsFromResource',
    'resetServiceSetting',
    'resumeSession',
    'sendAutomationSignal',
    'sendCommand',
    'startAssociationsOnce',
    'startAutomationExecution',
    'startSession',
    'stopAutomationExecution',
    'terminateSession',
    'updateAssociation',
    'updateAssociationStatus',
    'updateDocument',
    'updateDocumentDefaultVersion',
    'updateMaintenanceWindow',
    'updateMaintenanceWindowTarget',
    'updateMaintenanceWindowTask',
    'updateManagedInstanceRole',
    'updateOpsItem',
    'updatePatchBaseline',
    'updateResourceDataSync',
    'updateServiceSetting'    
]

export const DynamoDocClient = [
    'batchGet',
    'batchWrite',
    'createSet',
    'delete',
    'get',
    'put',
    'query',
    'scan',
    'transactGet',
    'transactWrite',
    'update'
]

export const DynamoDB = [
    'batchExecuteStatement',
    'batchGetItem',
    'batchWriteItem',
    'createBackup',
    'createGlobalTable',
    'createTable',
    'deleteBackup',
    'deleteItem',
    'deleteTable',
    'describeBackup',
    'describeContinuousBackups',
    'describeContributorInsights',
    'describeEndpoints',
    'describeExport',
    'describeGlobalTable',
    'describeGlobalTableSettings',
    'describeKinesisStreamingDestination',
    'describeLimits',
    'describeTable',
    'describeTableReplicaAutoScaling',
    'describeTimeToLive',
    'disableKinesisStreamingDestination',
    'enableKinesisStreamingDestination',
    'executeStatement',
    'executeTransaction',
    'exportTableToPointInTime',
    'getItem',
    'listBackups',
    'listContributorInsights',
    'listExports',
    'listGlobalTables',
    'listTables',
    'listTagsOfResource',
    'putItem',
    'query',
    'restoreTableFromBackup',
    'restoreTableToPointInTime',
    'scan',
    'tagResource',
    'transactGetItems',
    'transactWriteItems',
    'untagResource',
    'updateContinuousBackups',
    'updateContributorInsights',
    'updateGlobalTable',
    'updateGlobalTableSettings',
    'updateItem',
    'updateTable',
    'updateTableReplicaAutoScaling',
    'updateTimeToLive'
]

export const Ecs = [
    'createCapacityProvider',
    'createCluster',
    'createService',
    'createTaskSet',
    'deleteAccountSetting',
    'deleteAttributes',
    'deleteCapacityProvider',
    'deleteCluster',
    'deleteService',
    'deleteTaskSet',
    'deregisterContainerInstance',
    'deregisterTaskDefinition',
    'describeCapacityProviders',
    'describeClusters',
    'describeContainerInstances',
    'describeServices',
    'describeTaskDefinition',
    'describeTasks',
    'describeTaskSets',
    'discoverPollEndpoint',
    'listAccountSettings',
    'listAttributes',
    'listClusters',
    'listContainerInstances',
    'listServices',
    'listTagsForResource',
    'listTaskDefinitionFamilies',
    'listTaskDefinitions',
    'listTasks',
    'putAccountSetting',
    'putAccountSettingDefault',
    'putAttributes',
    'putClusterCapacityProviders',
    'registerContainerInstance',
    'registerTaskDefinition',
    'runTask',
    'startTask',
    'stopTask',
    'submitAttachmentStateChanges',
    'submitContainerStateChange',
    'submitTaskStateChange',
    'tagResource',
    'untagResource',
    'updateClusterSettings',
    'updateContainerAgent',
    'updateContainerInstancesState',
    'updateService',
    'updateServicePrimaryTaskSet',
    'updateTaskSet'
]

/**
 * TimestreamQuery method list
 */
export const TimestreamQuery = [
    'cancelQuery',
    'describeEndpoints',
    'query'
]

/**
 * TimestreamWrite method list
 */
export const TimestreamWrite = [
    'createDatabase',
    'createTable',
    'deleteDatabase',
    'deleteTable',
    'describeDatabase',
    'describeEndpoints',
    'describeTable',
    'listDatabases',
    'listTables',
    'listTagsForResource',
    'tagResource',
    'untagResource',
    'updateDatabase',
    'updateTable',
    'writeRecords'
]

/**
 * SES method list
 */
export const SES = [
    'cloneReceiptRuleSet',
    'createConfigurationSet',
    'createConfigurationSetEventDestination',
    'createConfigurationSetTrackingOptions',
    'createCustomVerificationEmailTemplate',
    'createReceiptFilter',
    'createReceiptRule',
    'createReceiptRuleSet',
    'createTemplate',
    'deleteConfigurationSet',
    'deleteConfigurationSetEventDestination',
    'deleteConfigurationSetTrackingOptions',
    'deleteCustomVerificationEmailTemplate',
    'deleteIdentity',
    'deleteIdentityPolicy',
    'deleteReceiptFilter',
    'deleteReceiptRule',
    'deleteReceiptRuleSet',
    'deleteTemplate',
    'deleteVerifiedEmailAddress',
    'describeActiveReceiptRuleSet',
    'describeConfigurationSet',
    'describeReceiptRule',
    'describeReceiptRuleSet',
    'getAccountSendingEnabled',
    'getCustomVerificationEmailTemplate',
    'getIdentityDkimAttributes',
    'getIdentityMailFromDomainAttributes',
    'getIdentityNotificationAttributes',
    'getIdentityPolicies',
    'getIdentityVerificationAttributes',
    'getSendQuota',
    'getSendStatistics',
    'getTemplate',
    'listConfigurationSets',
    'listCustomVerificationEmailTemplates',
    'listIdentities',
    'listIdentityPolicies',
    'listReceiptFilters',
    'listReceiptRuleSets',
    'listTemplates',
    'listVerifiedEmailAddresses',
    'putConfigurationSetDeliveryOptions',
    'putIdentityPolicy',
    'reorderReceiptRuleSet',
    'sendBounce',
    'sendBulkTemplatedEmail',
    'sendCustomVerificationEmail',
    'sendEmail',
    'sendRawEmail',
    'sendTemplatedEmail',
    'setActiveReceiptRuleSet',
    'setIdentityDkimEnabled',
    'setIdentityFeedbackForwardingEnabled',
    'setIdentityHeadersInNotificationsEnabled',
    'setIdentityMailFromDomain',
    'setIdentityNotificationTopic',
    'setReceiptRulePosition',
    'testRenderTemplate',
    'updateAccountSendingEnabled',
    'updateConfigurationSetEventDestination',
    'updateConfigurationSetReputationMetricsEnabled',
    'updateConfigurationSetSendingEnabled',
    'updateConfigurationSetTrackingOptions',
    'updateCustomVerificationEmailTemplate',
    'updateReceiptRule',
    'updateTemplate',
    'verifyDomainDkim',
    'verifyDomainIdentity',
    'verifyEmailAddress',
    'verifyEmailIdentity'
]

/**
 * SESv2 method list
 */
export const SESv2 = [
    'createConfigurationSet',
    'createConfigurationSetEventDestination',
    'createContact',
    'createContactList',
    'createCustomVerificationEmailTemplate',
    'createDedicatedIpPool',
    'createDeliverabilityTestReport',
    'createEmailIdentity',
    'createEmailIdentityPolicy',
    'createEmailTemplate',
    'createImportJob',
    'deleteConfigurationSet',
    'deleteConfigurationSetEventDestination',
    'deleteContact',
    'deleteContactList',
    'deleteCustomVerificationEmailTemplate',
    'deleteDedicatedIpPool',
    'deleteEmailIdentity',
    'deleteEmailIdentityPolicy',
    'deleteEmailTemplate',
    'deleteSuppressedDestination',
    'getAccount',
    'getBlacklistReports',
    'getConfigurationSet',
    'getConfigurationSetEventDestinations',
    'getContact',
    'getContactList',
    'getCustomVerificationEmailTemplate',
    'getDedicatedIp',
    'getDedicatedIps',
    'getDeliverabilityDashboardOptions',
    'getDeliverabilityTestReport',
    'getDomainDeliverabilityCampaign',
    'getDomainStatisticsReport',
    'getEmailIdentity',
    'getEmailIdentityPolicies',
    'getEmailTemplate',
    'getImportJob',
    'getSuppressedDestination',
    'listConfigurationSets',
    'listContactLists',
    'listContacts',
    'listCustomVerificationEmailTemplates',
    'listDedicatedIpPools',
    'listDeliverabilityTestReports',
    'listDomainDeliverabilityCampaigns',
    'listEmailIdentities',
    'listEmailTemplates',
    'listImportJobs',
    'listSuppressedDestinations',
    'listTagsForResource',
    'putAccountDedicatedIpWarmupAttributes',
    'putAccountDetails',
    'putAccountSendingAttributes',
    'putAccountSuppressionAttributes',
    'putConfigurationSetDeliveryOptions',
    'putConfigurationSetReputationOptions',
    'putConfigurationSetSendingOptions',
    'putConfigurationSetSuppressionOptions',
    'putConfigurationSetTrackingOptions',
    'putDedicatedIpInPool',
    'putDedicatedIpWarmupAttributes',
    'putDeliverabilityDashboardOption',
    'putEmailIdentityConfigurationSetAttributes',
    'putEmailIdentityDkimAttributes',
    'putEmailIdentityDkimSigningAttributes',
    'putEmailIdentityFeedbackAttributes',
    'putEmailIdentityMailFromAttributes',
    'putSuppressedDestination',
    'sendBulkEmail',
    'sendCustomVerificationEmail',
    'sendEmail',
    'tagResource',
    'testRenderEmailTemplate',
    'untagResource',
    'updateConfigurationSetEventDestination',
    'updateContact',
    'updateContactList',
    'updateCustomVerificationEmailTemplate',
    'updateEmailIdentityPolicy',
    'updateEmailTemplate'
]

```

### aws-sdk v3
```ts
export const DynamoDB = [
    'batchExecuteStatement',
    'batchGetItem',
    'batchWriteItem',
    'createBackup',
    'createGlobalTable',
    'createTable',
    'deleteBackup',
    'deleteItem',
    'deleteTable',
    'describeBackup',
    'describeContinuousBackups',
    'describeContributorInsights',
    'describeEndpoints',
    'describeExport',
    'describeGlobalTable',
    'describeGlobalTableSettings',
    'describeKinesisStreamingDestination',
    'describeLimits',
    'describeTable',
    'describeTableReplicaAutoScaling',
    'describeTimeToLive',
    'disableKinesisStreamingDestination',
    'enableKinesisStreamingDestination',
    'executeStatement',
    'executeTransaction',
    'exportTableToPointInTime',
    'getItem',
    'listBackups',
    'listContributorInsights',
    'listExports',
    'listGlobalTables',
    'listTables',
    'listTagsOfResource',
    'putItem',
    'query',
    'restoreTableFromBackup',
    'restoreTableToPointInTime',
    'scan',
    'tagResource',
    'transactGetItems',
    'transactWriteItems',
    'untagResource',
    'updateContinuousBackups',
    'updateContributorInsights',
    'updateGlobalTable',
    'updateGlobalTableSettings',
    'updateItem',
    'updateTable',
    'updateTableReplicaAutoScaling',
    'updateTimeToLive'
],

export const CloudFront = [
    'createCloudFrontOriginAccessIdentity',
    'createDistribution',
    'createDistributionWithTags',
    'createFieldLevelEncryptionConfig',
    'createFieldLevelEncryptionProfile',
    'createInvalidation',
    'createPublicKey',
    'createStreamingDistribution',
    'createStreamingDistributionWithTags',
    'deleteCloudFrontOriginAccessIdentity',
    'deleteDistribution',
    'deleteFieldLevelEncryptionConfig',
    'deleteFieldLevelEncryptionProfile',
    'deletePublicKey',
    'deleteStreamingDistribution',
    'getCloudFrontOriginAccessIdentity',
    'getCloudFrontOriginAccessIdentityConfig',
    'getDistribution',
    'getDistributionConfig',
    'getFieldLevelEncryption',
    'getFieldLevelEncryptionConfig',
    'getFieldLevelEncryptionProfile',
    'getFieldLevelEncryptionProfileConfig',
    'getInvalidation',
    'getPublicKey',
    'getPublicKeyConfig',
    'getStreamingDistribution',
    'getStreamingDistributionConfig',
    'listCloudFrontOriginAccessIdentities',
    'listDistributions',
    'listDistributionsByWebACLId',
    'listFieldLevelEncryptionConfigs',
    'listFieldLevelEncryptionProfiles',
    'listInvalidations',
    'listPublicKeys',
    'listStreamingDistributions',
    'listTagsForResource',
    'setupRequestListeners',
    'tagResource',
    'untagResource',
    'updateCloudFrontOriginAccessIdentity',
    'updateDistribution',
    'updateFieldLevelEncryptionConfig',
    'updateFieldLevelEncryptionProfile',
    'updatePublicKey',
    'updateStreamingDistribution'
]

export const Lambda =  [
    'addLayerVersionPermission',
    'addPermission',
    'createAlias',
    'createEventSourceMapping',
    'createFunction',
    'deleteAlias',
    'deleteEventSourceMapping',
    'deleteFunction',
    'deleteFunctionConcurrency',
    'deleteFunctionEventInvokeConfig',
    'deleteLayerVersion',
    'deleteProvisionedConcurrencyConfig',
    'getAccountSettings',
    'getAlias',
    'getEventSourceMapping',
    'getFunction',
    'getFunctionConcurrency',
    'getFunctionConfiguration',
    'getFunctionEventInvokeConfig',
    'getLayerVersion',
    'getLayerVersionByArn',
    'getLayerVersionPolicy',
    'getPolicy',
    'getProvisionedConcurrencyConfig',
    'invoke',
    'invokeAsync',
    'listAliases',
    'listEventSourceMappings',
    'listFunctionEventInvokeConfigs',
    'listFunctions',
    'listLayers',
    'listLayerVersions',
    'listProvisionedConcurrencyConfigs',
    'listTags',
    'listVersionsByFunction',
    'publishLayerVersion',
    'publishVersion',
    'putFunctionConcurrency',
    'putFunctionEventInvokeConfig',
    'putProvisionedConcurrencyConfig',
    'removeLayerVersionPermission',
    'removePermission',
    'tagResource',
    'untagResource',
    'updateAlias',
    'updateEventSourceMapping',
    'updateFunctionCode',
    'updateFunctionConfiguration',
    'updateFunctionEventInvokeConfig',
]

export const s3 = [
    'abortMultipartUpload',
    'completeMultipartUpload',
    'copyObject',
    'createBucket',
    'createMultipartUpload',
    'createPresignedPost',
    'deleteBucket',
    'deleteBucketAnalyticsConfiguration',
    'deleteBucketCors',
    'deleteBucketEncryption',
    'deleteBucketInventoryConfiguration',
    'deleteBucketLifecycle',
    'deleteBucketMetricsConfiguration',
    'deleteBucketPolicy',
    'deleteBucketReplication',
    'deleteBucketTagging',
    'deleteBucketWebsite',
    'deleteObject',
    'deleteObjects',
    'deleteObjectTagging',
    'deletePublicAccessBlock',
    'getBucketAccelerateConfiguration',
    'getBucketAcl',
    'getBucketAnalyticsConfiguration',
    'getBucketCors',
    'getBucketEncryption',
    'getBucketInventoryConfiguration',
    'getBucketLifecycle',
    'getBucketLifecycleConfiguration',
    'getBucketLocation',
    'getBucketLogging',
    'getBucketMetricsConfiguration',
    'getBucketNotification',
    'getBucketNotificationConfiguration',
    'getBucketPolicy',
    'getBucketPolicyStatus',
    'getBucketReplication',
    'getBucketRequestPayment',
    'getBucketTagging',
    'getBucketVersioning',
    'getBucketWebsite',
    'getObject',
    'getObjectAcl',
    'getObjectLegalHold',
    'getObjectLockConfiguration',
    'getObjectRetention',
    'getObjectTagging',
    'getObjectTorrent',
    'getPublicAccessBlock',
    'getSignedUrl',
    'getSignedUrlPromise',
    'headBucket',
    'headObject',
    'listBucketAnalyticsConfigurations',
    'listBucketInventoryConfigurations',
    'listBucketMetricsConfigurations',
    'listBuckets',
    'listMultipartUploads',
    'listObjects',
    'listObjectsV2',
    'listObjectVersions',
    'listParts',
    'putBucketAccelerateConfiguration',
    'putBucketAcl',
    'putBucketAnalyticsConfiguration',
    'putBucketCors',
    'putBucketEncryption',
    'putBucketInventoryConfiguration',
    'putBucketLifecycle',
    'putBucketLifecycleConfiguration',
    'putBucketLogging',
    'putBucketMetricsConfiguration',
    'putBucketNotification',
    'putBucketNotificationConfiguration',
    'putBucketPolicy',
    'putBucketReplication',
    'putBucketRequestPayment',
    'putBucketTagging',
    'putBucketVersioning',
    'putBucketWebsite',
    'putObject',
    'putObjectAcl',
    'putObjectLegalHold',
    'putObjectLockConfiguration',
    'putObjectRetention',
    'putObjectTagging',
    'putPublicAccessBlock',
    'restoreObject',
    'selectObjectContent',
    'upload',
    'uploadPart',
    'uploadPartCopy'
],

/**
 * Send method is used for v3 modular style.
 */
export const V3Client = [
    'send'
]
```