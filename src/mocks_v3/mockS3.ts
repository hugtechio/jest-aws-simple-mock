
/**
* @description mocks_v3:mockS3 module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockS3 = {
  abortMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'abortMultipartUpload', 'S3', Promise.resolve(result), true, mock)
  },
  abortMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'abortMultipartUpload', 'S3', Promise.resolve(result), false, mock)
  },
  abortMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'abortMultipartUpload', 'S3', Promise.reject(result), true, mock)
  },
  completeMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'completeMultipartUpload', 'S3', Promise.resolve(result), true, mock)
  },
  completeMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'completeMultipartUpload', 'S3', Promise.resolve(result), false, mock)
  },
  completeMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'completeMultipartUpload', 'S3', Promise.reject(result), true, mock)
  },
  copyObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'copyObject', 'S3', Promise.resolve(result), true, mock)
  },
  copyObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'copyObject', 'S3', Promise.resolve(result), false, mock)
  },
  copyObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'copyObject', 'S3', Promise.reject(result), true, mock)
  },
  createBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createBucket', 'S3', Promise.resolve(result), true, mock)
  },
  createBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createBucket', 'S3', Promise.resolve(result), false, mock)
  },
  createBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createBucket', 'S3', Promise.reject(result), true, mock)
  },
  createMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createMultipartUpload', 'S3', Promise.resolve(result), true, mock)
  },
  createMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createMultipartUpload', 'S3', Promise.resolve(result), false, mock)
  },
  createMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'createMultipartUpload', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucket', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucket', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucket', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketAnalyticsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketCors', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketCors', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketCors', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketEncryption', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketEncryption', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketEncryption', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketIntelligentTieringConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketInventoryConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketInventoryConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketInventoryConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketLifecycle', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketLifecycle', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketLifecycle', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketMetricsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketMetricsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketMetricsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketOwnershipControls', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketOwnershipControls', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketOwnershipControls', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketPolicy', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketPolicy', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketPolicy', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketReplication', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketReplication', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketReplication', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketTagging', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketTagging', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketTagging', 'S3', Promise.reject(result), true, mock)
  },
  deleteBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketWebsite', 'S3', Promise.resolve(result), true, mock)
  },
  deleteBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketWebsite', 'S3', Promise.resolve(result), false, mock)
  },
  deleteBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteBucketWebsite', 'S3', Promise.reject(result), true, mock)
  },
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObject', 'S3', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObject', 'S3', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObject', 'S3', Promise.reject(result), true, mock)
  },
  deleteObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjectTagging', 'S3', Promise.resolve(result), true, mock)
  },
  deleteObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjectTagging', 'S3', Promise.resolve(result), false, mock)
  },
  deleteObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjectTagging', 'S3', Promise.reject(result), true, mock)
  },
  deleteObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjects', 'S3', Promise.resolve(result), true, mock)
  },
  deleteObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjects', 'S3', Promise.resolve(result), false, mock)
  },
  deleteObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deleteObjects', 'S3', Promise.reject(result), true, mock)
  },
  deletePublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deletePublicAccessBlock', 'S3', Promise.resolve(result), true, mock)
  },
  deletePublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deletePublicAccessBlock', 'S3', Promise.resolve(result), false, mock)
  },
  deletePublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'deletePublicAccessBlock', 'S3', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'destroy', 'S3', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'destroy', 'S3', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'destroy', 'S3', Promise.reject(result), true, mock)
  },
  getBucketAccelerateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAccelerateConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketAccelerateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAccelerateConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketAccelerateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAccelerateConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAcl', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAcl', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAcl', 'S3', Promise.reject(result), true, mock)
  },
  getBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketAnalyticsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketCors', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketCors', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketCors', 'S3', Promise.reject(result), true, mock)
  },
  getBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketEncryption', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketEncryption', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketEncryption', 'S3', Promise.reject(result), true, mock)
  },
  getBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketIntelligentTieringConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketInventoryConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketInventoryConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketInventoryConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLifecycleConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLifecycleConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLifecycleConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLocation', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLocation', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLocation', 'S3', Promise.reject(result), true, mock)
  },
  getBucketLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLogging', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLogging', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketLogging', 'S3', Promise.reject(result), true, mock)
  },
  getBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketMetricsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketMetricsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketMetricsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketNotificationConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketNotificationConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketNotificationConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketOwnershipControls', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketOwnershipControls', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketOwnershipControls', 'S3', Promise.reject(result), true, mock)
  },
  getBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicy', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicy', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicy', 'S3', Promise.reject(result), true, mock)
  },
  getBucketPolicyStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicyStatus', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketPolicyStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicyStatus', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketPolicyStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketPolicyStatus', 'S3', Promise.reject(result), true, mock)
  },
  getBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketReplication', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketReplication', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketReplication', 'S3', Promise.reject(result), true, mock)
  },
  getBucketRequestPayment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketRequestPayment', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketRequestPaymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketRequestPayment', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketRequestPaymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketRequestPayment', 'S3', Promise.reject(result), true, mock)
  },
  getBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketTagging', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketTagging', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketTagging', 'S3', Promise.reject(result), true, mock)
  },
  getBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketVersioning', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketVersioning', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketVersioning', 'S3', Promise.reject(result), true, mock)
  },
  getBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketWebsite', 'S3', Promise.resolve(result), true, mock)
  },
  getBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketWebsite', 'S3', Promise.resolve(result), false, mock)
  },
  getBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getBucketWebsite', 'S3', Promise.reject(result), true, mock)
  },
  getObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObject', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObject', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObject', 'S3', Promise.reject(result), true, mock)
  },
  getObjectAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectAcl', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectAcl', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectAcl', 'S3', Promise.reject(result), true, mock)
  },
  getObjectLegalHold: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLegalHold', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectLegalHoldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLegalHold', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectLegalHoldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLegalHold', 'S3', Promise.reject(result), true, mock)
  },
  getObjectLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLockConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLockConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectLockConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  getObjectRetention: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectRetention', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectRetentionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectRetention', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectRetentionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectRetention', 'S3', Promise.reject(result), true, mock)
  },
  getObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTagging', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTagging', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTagging', 'S3', Promise.reject(result), true, mock)
  },
  getObjectTorrent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTorrent', 'S3', Promise.resolve(result), true, mock)
  },
  getObjectTorrentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTorrent', 'S3', Promise.resolve(result), false, mock)
  },
  getObjectTorrentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getObjectTorrent', 'S3', Promise.reject(result), true, mock)
  },
  getPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getPublicAccessBlock', 'S3', Promise.resolve(result), true, mock)
  },
  getPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getPublicAccessBlock', 'S3', Promise.resolve(result), false, mock)
  },
  getPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'getPublicAccessBlock', 'S3', Promise.reject(result), true, mock)
  },
  headBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headBucket', 'S3', Promise.resolve(result), true, mock)
  },
  headBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headBucket', 'S3', Promise.resolve(result), false, mock)
  },
  headBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headBucket', 'S3', Promise.reject(result), true, mock)
  },
  headObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headObject', 'S3', Promise.resolve(result), true, mock)
  },
  headObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headObject', 'S3', Promise.resolve(result), false, mock)
  },
  headObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'headObject', 'S3', Promise.reject(result), true, mock)
  },
  listBucketAnalyticsConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketAnalyticsConfigurations', 'S3', Promise.resolve(result), true, mock)
  },
  listBucketAnalyticsConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketAnalyticsConfigurations', 'S3', Promise.resolve(result), false, mock)
  },
  listBucketAnalyticsConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketAnalyticsConfigurations', 'S3', Promise.reject(result), true, mock)
  },
  listBucketIntelligentTieringConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketIntelligentTieringConfigurations', 'S3', Promise.resolve(result), true, mock)
  },
  listBucketIntelligentTieringConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketIntelligentTieringConfigurations', 'S3', Promise.resolve(result), false, mock)
  },
  listBucketIntelligentTieringConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketIntelligentTieringConfigurations', 'S3', Promise.reject(result), true, mock)
  },
  listBucketInventoryConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketInventoryConfigurations', 'S3', Promise.resolve(result), true, mock)
  },
  listBucketInventoryConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketInventoryConfigurations', 'S3', Promise.resolve(result), false, mock)
  },
  listBucketInventoryConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketInventoryConfigurations', 'S3', Promise.reject(result), true, mock)
  },
  listBucketMetricsConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketMetricsConfigurations', 'S3', Promise.resolve(result), true, mock)
  },
  listBucketMetricsConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketMetricsConfigurations', 'S3', Promise.resolve(result), false, mock)
  },
  listBucketMetricsConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBucketMetricsConfigurations', 'S3', Promise.reject(result), true, mock)
  },
  listBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBuckets', 'S3', Promise.resolve(result), true, mock)
  },
  listBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBuckets', 'S3', Promise.resolve(result), false, mock)
  },
  listBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listBuckets', 'S3', Promise.reject(result), true, mock)
  },
  listMultipartUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listMultipartUploads', 'S3', Promise.resolve(result), true, mock)
  },
  listMultipartUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listMultipartUploads', 'S3', Promise.resolve(result), false, mock)
  },
  listMultipartUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listMultipartUploads', 'S3', Promise.reject(result), true, mock)
  },
  listObjectVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectVersions', 'S3', Promise.resolve(result), true, mock)
  },
  listObjectVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectVersions', 'S3', Promise.resolve(result), false, mock)
  },
  listObjectVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectVersions', 'S3', Promise.reject(result), true, mock)
  },
  listObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjects', 'S3', Promise.resolve(result), true, mock)
  },
  listObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjects', 'S3', Promise.resolve(result), false, mock)
  },
  listObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjects', 'S3', Promise.reject(result), true, mock)
  },
  listObjectsV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectsV2', 'S3', Promise.resolve(result), true, mock)
  },
  listObjectsV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectsV2', 'S3', Promise.resolve(result), false, mock)
  },
  listObjectsV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listObjectsV2', 'S3', Promise.reject(result), true, mock)
  },
  listParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listParts', 'S3', Promise.resolve(result), true, mock)
  },
  listPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listParts', 'S3', Promise.resolve(result), false, mock)
  },
  listPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'listParts', 'S3', Promise.reject(result), true, mock)
  },
  putBucketAccelerateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAccelerateConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketAccelerateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAccelerateConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketAccelerateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAccelerateConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAcl', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAcl', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAcl', 'S3', Promise.reject(result), true, mock)
  },
  putBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAnalyticsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketAnalyticsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketCors', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketCors', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketCors', 'S3', Promise.reject(result), true, mock)
  },
  putBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketEncryption', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketEncryption', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketEncryption', 'S3', Promise.reject(result), true, mock)
  },
  putBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketIntelligentTieringConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketIntelligentTieringConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketInventoryConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketInventoryConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketInventoryConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLifecycleConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLifecycleConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLifecycleConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLogging', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLogging', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketLogging', 'S3', Promise.reject(result), true, mock)
  },
  putBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketMetricsConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketMetricsConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketMetricsConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketNotificationConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketNotificationConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketNotificationConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketOwnershipControls', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketOwnershipControls', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketOwnershipControls', 'S3', Promise.reject(result), true, mock)
  },
  putBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketPolicy', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketPolicy', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketPolicy', 'S3', Promise.reject(result), true, mock)
  },
  putBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketReplication', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketReplication', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketReplication', 'S3', Promise.reject(result), true, mock)
  },
  putBucketRequestPayment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketRequestPayment', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketRequestPaymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketRequestPayment', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketRequestPaymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketRequestPayment', 'S3', Promise.reject(result), true, mock)
  },
  putBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketTagging', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketTagging', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketTagging', 'S3', Promise.reject(result), true, mock)
  },
  putBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketVersioning', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketVersioning', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketVersioning', 'S3', Promise.reject(result), true, mock)
  },
  putBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketWebsite', 'S3', Promise.resolve(result), true, mock)
  },
  putBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketWebsite', 'S3', Promise.resolve(result), false, mock)
  },
  putBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putBucketWebsite', 'S3', Promise.reject(result), true, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObject', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObject', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObject', 'S3', Promise.reject(result), true, mock)
  },
  putObjectAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectAcl', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectAcl', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectAcl', 'S3', Promise.reject(result), true, mock)
  },
  putObjectLegalHold: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLegalHold', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectLegalHoldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLegalHold', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectLegalHoldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLegalHold', 'S3', Promise.reject(result), true, mock)
  },
  putObjectLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLockConfiguration', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLockConfiguration', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectLockConfiguration', 'S3', Promise.reject(result), true, mock)
  },
  putObjectRetention: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectRetention', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectRetentionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectRetention', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectRetentionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectRetention', 'S3', Promise.reject(result), true, mock)
  },
  putObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectTagging', 'S3', Promise.resolve(result), true, mock)
  },
  putObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectTagging', 'S3', Promise.resolve(result), false, mock)
  },
  putObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putObjectTagging', 'S3', Promise.reject(result), true, mock)
  },
  putPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putPublicAccessBlock', 'S3', Promise.resolve(result), true, mock)
  },
  putPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putPublicAccessBlock', 'S3', Promise.resolve(result), false, mock)
  },
  putPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'putPublicAccessBlock', 'S3', Promise.reject(result), true, mock)
  },
  restoreObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'restoreObject', 'S3', Promise.resolve(result), true, mock)
  },
  restoreObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'restoreObject', 'S3', Promise.resolve(result), false, mock)
  },
  restoreObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'restoreObject', 'S3', Promise.reject(result), true, mock)
  },
  selectObjectContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'selectObjectContent', 'S3', Promise.resolve(result), true, mock)
  },
  selectObjectContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'selectObjectContent', 'S3', Promise.resolve(result), false, mock)
  },
  selectObjectContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'selectObjectContent', 'S3', Promise.reject(result), true, mock)
  },
  uploadPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPart', 'S3', Promise.resolve(result), true, mock)
  },
  uploadPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPart', 'S3', Promise.resolve(result), false, mock)
  },
  uploadPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPart', 'S3', Promise.reject(result), true, mock)
  },
  uploadPartCopy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPartCopy', 'S3', Promise.resolve(result), true, mock)
  },
  uploadPartCopyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPartCopy', 'S3', Promise.resolve(result), false, mock)
  },
  uploadPartCopyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'uploadPartCopy', 'S3', Promise.reject(result), true, mock)
  },
  writeGetObjectResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'writeGetObjectResponse', 'S3', Promise.resolve(result), true, mock)
  },
  writeGetObjectResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'writeGetObjectResponse', 'S3', Promise.resolve(result), false, mock)
  },
  writeGetObjectResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'writeGetObjectResponse', 'S3', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'send', 'S3Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'send', 'S3Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3', 'send', 'S3Client', Promise.reject(result), true, mock)
  }
}