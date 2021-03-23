# jest-aws-simple-mock
The jest-aws-simple-mock is a mocking library of AWS-SDK for javascript.
Currently, only these module you can mock is. 

- @aws/dynamodb-datamapper
- aws-sdk(vesion 2)  **not all services.**
- aws-sdk(version 3) ** currently only @aws-sdk/client-dynamodb::getItem method **

## Basic Usage
```ts
import { mock<ServiceName> } from 'jest-aws-simple-mock'

let spy = mock<ServiceName>.<methodName>(<<returns>>)
```

```ts
import { V3 } from 'jest-aws-simple-mock'

let spy = V3.mockDynamo.getItem(<<returns>>)
```


## Mocking example
Our test code is useful that how to use this library.
```ts
describe('#index_v3', () => {
    describe('#dynamodb', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })

        it ('should be return dynamoDB mock', async () => {
            V3.mockDynamo.getItem({})
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result = await dynamodb.getItem({})
            expect(result).toEqual({})
        })

        it ('should be return dynamoDB mock(chaining)', async () => {
            let m = V3.mockDynamo.getItem({
                times:1
            })
            m = V3.mockDynamo.getItem({
                times:2
            }, m)
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 1})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 2})
        })

        it ('should be return dynamoDB mock(all)', async () => {
            let m = V3.mockDynamo.getItemAll({
                times: 'all'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 'all'})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 'all'})
        })

        it ('should be return dynamoDB mock(throw)', async () => {
            let m = V3.mockDynamo.getItemThrow({
                error: 'error'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            try {
                // @ts-ignore
                await dynamodb.getItem({})
                expect('Test fail').toBe(null)
            } catch (e) {
                expect(e).toEqual({error: 'error'})
            }
        })
    })
})
```

```ts
describe('#dynamodb doc client', () => {
    it('#get', async () => {
        const result = await target.mockDynamoDocClient.get({})
        // @ts-ignore
        expect(result).toHaveProperty('mock')
    }),
    it('#put', async () => {
        const result = await target.mockDynamoDocClient.put({})
        // @ts-ignore
        expect(result).toHaveProperty('mock')
    })
})

describe('#dynamodb data mapper', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })

    it('#query', async () => {
        const result = await target.mockDynamo.query([{}])
        // @ts-ignore
        expect(result).toHaveProperty('mock')
    });

    it('#query (new)', async () => {
        const dataMapper = new DataMapper({client: new DynamoDB()})
        target.mockDynamo.query([{id: 1}])
        // @ts-ignore
        const q = dataMapper.query()
        let result = [] 
        for await (const item of q) {
            result.push(item)
        }
        expect(result).toEqual([{id: 1}])
    });

    it('#query (add)', async () => {
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
        
    });

    it('#query (pages)', async () => {
        const dataMapper = new DataMapper({client: new DynamoDB()})
        let mock = target.mockDynamo.queryPages([[{id: 1}]])
        // @ts-ignore
        let q = dataMapper.query().pages()
        expect(q).toHaveProperty('lastEvaluatedKey')
        for await (const page of q) {
            expect(Array.isArray(page)).toBeTruthy()
        }
    });
})

describe ('#acm', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get requestCertificate', async () => {
        const acm = new AWS.ACM()
        let mock = target.mockAcm.requestCertificate({})
        const result = await acm.requestCertificate().promise()
        expect(result).toEqual({})
    });
    it('should get requestCertificateAll', async () => {
        const acm = new AWS.ACM()
        let mock = target.mockAcm.requestCertificateAll({})
        const result1 = await acm.requestCertificate().promise()
        const result2 = await acm.requestCertificate().promise()
        expect(result1).toEqual({})
        expect(result2).toEqual({})
    });
})

describe ('#cloudfront', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get getDistributionConfig', async () => {
        const cf = new AWS.CloudFront()
        let mock = target.mockCloudFront.getDistributionConfig({})
        const result = await cf.getDistributionConfig().promise()
        expect(result).toEqual({})
    });

    it('should get getDistributionConfigAll', async () => {
        const cf = new AWS.CloudFront()
        let mock = target.mockCloudFront.getDistributionConfigAll({})
        const result1 = await cf.getDistributionConfig().promise()
        const result2 = await cf.getDistributionConfig().promise()
        expect(result1).toEqual({})
        expect(result2).toEqual({})
    });

    it('should throw getDistributionConfigThrow', async () => {
        const cf = new AWS.CloudFront()
        let mock = target.mockCloudFront.getDistributionConfigThrow({})
        try {
            const result1 = await cf.getDistributionConfig().promise()
            expect(null).toBe('This path is fault of the test') // should be
        } catch (e) {
            expect(e).toEqual({})
        }
    });
})

describe ('#lambda', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get invoke', async () => {
        const lambda = new AWS.Lambda()
        let mock = target.mockLambda.invoke({})
        const result = await lambda.invoke().promise()
        expect(result).toEqual({})
    });

    it('should get invokeAll', async () => {
        const lambda = new AWS.Lambda()
        let mock = target.mockLambda.invokeAll({})
        const result1 = await lambda.invoke().promise()
        const result2 = await lambda.invoke().promise()
        expect(result1).toEqual({})
        expect(result2).toEqual({})
    });
})

describe ('#s3', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get getObject mock', async () => {
        const s3 = new AWS.S3()
        let mock = target.mockS3.getObject({})
        const result = await s3.getObject().promise()
        expect(result).toEqual({})
    });
    it('should get getpresignedurl mock', async () => {
        const s3 = new AWS.S3()
        let mock = target.mockS3.getSignedUrl({})
        // @ts-ignore
        const result = s3.getSignedUrl()
        expect(result).toEqual({})
    });
    it('should get getpresignedurlPromise mock', async () => {
        const s3 = new AWS.S3()
        let mock = target.mockS3.getSignedUrlPromise({})
        // @ts-ignore
        const result = await s3.getSignedUrlPromise()
        expect(result).toEqual({})
    });
})

describe ('#EventBridge', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get createEventBus mock', async () => {
        const eb = new AWS.EventBridge()
        let mock = target.mockEventBridge.createEventBus({})
        const result = await eb.createEventBus().promise()
        expect(result).toEqual({})                
    })
    it('should get putEvents mock', async () => {
        const eb = new AWS.EventBridge()
        let mock = target.mockEventBridge.putEvents({})
        const result = await eb.putEvents().promise()
        expect(result).toEqual({})                
    })
})

describe ('#StepFunction', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get startExecution mock', async () => {
        const sf = new AWS.StepFunctions()
        let mock = target.mockStepFunctions.startExecution({})
        const result = await sf.startExecution().promise()
        expect(result).toEqual({})                
    })
})

describe ('#CognitoIdp', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should get listUsers mock', async () => {
        const idp = new AWS.CognitoIdentityServiceProvider()
        let mock = target.mockCognitoIdp.listUsers({})
        const result = await idp.listUsers().promise()
        expect(result).toEqual({})                
    })

    it('should get adminInitiateAuth mock', async () => {
        const idp = new AWS.CognitoIdentityServiceProvider()
        let mock = target.mockCognitoIdp.adminInitiateAuth({})
        const result = await idp.adminInitiateAuth().promise()
        expect(result).toEqual({})                
    })
})

describe ('#Kms', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should encrypt mock', async () => {
        const kms = new AWS.KMS()
        let mock = target.mockKms.encrypt({})
        const result = await kms.encrypt().promise()
        expect(result).toEqual({})                
    })
})

describe ('#Ssm', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should GetParameter mock', async () => {
        const ssm = new AWS.SSM()
        let mock = target.mockSsm.getParameter({})
        const result = await ssm.getParameter().promise()
        expect(result).toEqual({})                
    })
})

describe ('#Ecs', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should createCapacityProvider mock', async () => {
        const ecs = new AWS.ECS()
        let mock = target.mockEcs.createCapacityProvider({})
        const result = await ecs.createCapacityProvider().promise()
        expect(result).toEqual({})                
    })
})

describe('#index_v3', () => {
    describe('#dynamodb', () => {
        it ('should be return dynamoDB mock', async () => {
            V3.mockDynamo.getItem({})
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result = await dynamodb.getItem({})
            expect(result).toEqual({})
        })
    })
})

describe ('#TimestreamQuery', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should query mock', async () => {
        const tsq = new AWS.TimestreamQuery()
        let mock = target.mockTimestreamQuery.query({})
        const result = await tsq.query().promise()
        expect(result).toEqual({})                
    })
})

describe ('#TimestreamWrite', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    it('should createDatabase mock', async () => {
        const tsw = new AWS.TimestreamWrite()
        let mock = target.mockTimestreamWrite.createDatabase({})
        const result = await tsw.createDatabase().promise()
        expect(result).toEqual({})                
    })
})

```

# Mocking pattern
Jest-aws-simple-mock generate 3 types mock which return different result.


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


## mock chaining
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

## all mockable methods (2021.03.22)

### aws-sdk-v2
```ts
exports.Acm = [
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
];
exports.CloudFront = [
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
];
exports.Lambda = [
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
];
exports.s3 = [
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
];
exports.EventBridge = [
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
];
exports.StepFunctions = [
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
];
exports.CognitoIdp = [
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
];
exports.Kms = [
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
];
exports.Ssm = [
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
];
exports.DynamoDocClient = [
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
];
exports.Ecs = [
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
];

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
#### @aws-sdk/client-dynamodb
- getItem
