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