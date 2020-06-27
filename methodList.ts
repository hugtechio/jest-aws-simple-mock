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