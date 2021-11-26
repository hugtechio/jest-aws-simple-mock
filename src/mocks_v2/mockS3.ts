
/**
* @description mocks_v2:mockS3.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockS3 = {
  abortMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'S3', result, true, true, mock)
  },
  abortMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'S3', result, false, true, mock)
  },
  abortMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'S3', result, true, false, mock)
  },
  completeMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'S3', result, true, true, mock)
  },
  completeMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'S3', result, false, true, mock)
  },
  completeMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'S3', result, true, false, mock)
  },
  copyObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyObject', 'S3', result, true, true, mock)
  },
  copyObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyObject', 'S3', result, false, true, mock)
  },
  copyObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyObject', 'S3', result, true, false, mock)
  },
  createBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'S3', result, true, true, mock)
  },
  createBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'S3', result, false, true, mock)
  },
  createBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'S3', result, true, false, mock)
  },
  createMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultipartUpload', 'S3', result, true, true, mock)
  },
  createMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultipartUpload', 'S3', result, false, true, mock)
  },
  createMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultipartUpload', 'S3', result, true, false, mock)
  },
  deleteBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'S3', result, true, true, mock)
  },
  deleteBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'S3', result, false, true, mock)
  },
  deleteBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'S3', result, true, false, mock)
  },
  deleteBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAnalyticsConfiguration', 'S3', result, true, true, mock)
  },
  deleteBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAnalyticsConfiguration', 'S3', result, false, true, mock)
  },
  deleteBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAnalyticsConfiguration', 'S3', result, true, false, mock)
  },
  deleteBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketCors', 'S3', result, true, true, mock)
  },
  deleteBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketCors', 'S3', result, false, true, mock)
  },
  deleteBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketCors', 'S3', result, true, false, mock)
  },
  deleteBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketEncryption', 'S3', result, true, true, mock)
  },
  deleteBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketEncryption', 'S3', result, false, true, mock)
  },
  deleteBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketEncryption', 'S3', result, true, false, mock)
  },
  deleteBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketIntelligentTieringConfiguration', 'S3', result, true, true, mock)
  },
  deleteBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketIntelligentTieringConfiguration', 'S3', result, false, true, mock)
  },
  deleteBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketIntelligentTieringConfiguration', 'S3', result, true, false, mock)
  },
  deleteBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketInventoryConfiguration', 'S3', result, true, true, mock)
  },
  deleteBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketInventoryConfiguration', 'S3', result, false, true, mock)
  },
  deleteBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketInventoryConfiguration', 'S3', result, true, false, mock)
  },
  deleteBucketLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketLifecycle', 'S3', result, true, true, mock)
  },
  deleteBucketLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketLifecycle', 'S3', result, false, true, mock)
  },
  deleteBucketLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketLifecycle', 'S3', result, true, false, mock)
  },
  deleteBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketMetricsConfiguration', 'S3', result, true, true, mock)
  },
  deleteBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketMetricsConfiguration', 'S3', result, false, true, mock)
  },
  deleteBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketMetricsConfiguration', 'S3', result, true, false, mock)
  },
  deleteBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketOwnershipControls', 'S3', result, true, true, mock)
  },
  deleteBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketOwnershipControls', 'S3', result, false, true, mock)
  },
  deleteBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketOwnershipControls', 'S3', result, true, false, mock)
  },
  deleteBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketPolicy', 'S3', result, true, true, mock)
  },
  deleteBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketPolicy', 'S3', result, false, true, mock)
  },
  deleteBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketPolicy', 'S3', result, true, false, mock)
  },
  deleteBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketReplication', 'S3', result, true, true, mock)
  },
  deleteBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketReplication', 'S3', result, false, true, mock)
  },
  deleteBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketReplication', 'S3', result, true, false, mock)
  },
  deleteBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketTagging', 'S3', result, true, true, mock)
  },
  deleteBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketTagging', 'S3', result, false, true, mock)
  },
  deleteBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketTagging', 'S3', result, true, false, mock)
  },
  deleteBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketWebsite', 'S3', result, true, true, mock)
  },
  deleteBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketWebsite', 'S3', result, false, true, mock)
  },
  deleteBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketWebsite', 'S3', result, true, false, mock)
  },
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'S3', result, true, true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'S3', result, false, true, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'S3', result, true, false, mock)
  },
  deleteObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjectTagging', 'S3', result, true, true, mock)
  },
  deleteObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjectTagging', 'S3', result, false, true, mock)
  },
  deleteObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjectTagging', 'S3', result, true, false, mock)
  },
  deleteObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjects', 'S3', result, true, true, mock)
  },
  deleteObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjects', 'S3', result, false, true, mock)
  },
  deleteObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObjects', 'S3', result, true, false, mock)
  },
  deletePublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicAccessBlock', 'S3', result, true, true, mock)
  },
  deletePublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicAccessBlock', 'S3', result, false, true, mock)
  },
  deletePublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicAccessBlock', 'S3', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3', result, true, false, mock)
  },
  getBucketAccelerateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccelerateConfiguration', 'S3', result, true, true, mock)
  },
  getBucketAccelerateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccelerateConfiguration', 'S3', result, false, true, mock)
  },
  getBucketAccelerateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccelerateConfiguration', 'S3', result, true, false, mock)
  },
  getBucketAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAcl', 'S3', result, true, true, mock)
  },
  getBucketAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAcl', 'S3', result, false, true, mock)
  },
  getBucketAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAcl', 'S3', result, true, false, mock)
  },
  getBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAnalyticsConfiguration', 'S3', result, true, true, mock)
  },
  getBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAnalyticsConfiguration', 'S3', result, false, true, mock)
  },
  getBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAnalyticsConfiguration', 'S3', result, true, false, mock)
  },
  getBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketCors', 'S3', result, true, true, mock)
  },
  getBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketCors', 'S3', result, false, true, mock)
  },
  getBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketCors', 'S3', result, true, false, mock)
  },
  getBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketEncryption', 'S3', result, true, true, mock)
  },
  getBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketEncryption', 'S3', result, false, true, mock)
  },
  getBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketEncryption', 'S3', result, true, false, mock)
  },
  getBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketIntelligentTieringConfiguration', 'S3', result, true, true, mock)
  },
  getBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketIntelligentTieringConfiguration', 'S3', result, false, true, mock)
  },
  getBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketIntelligentTieringConfiguration', 'S3', result, true, false, mock)
  },
  getBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketInventoryConfiguration', 'S3', result, true, true, mock)
  },
  getBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketInventoryConfiguration', 'S3', result, false, true, mock)
  },
  getBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketInventoryConfiguration', 'S3', result, true, false, mock)
  },
  getBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLifecycleConfiguration', 'S3', result, true, true, mock)
  },
  getBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLifecycleConfiguration', 'S3', result, false, true, mock)
  },
  getBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLifecycleConfiguration', 'S3', result, true, false, mock)
  },
  getBucketLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLocation', 'S3', result, true, true, mock)
  },
  getBucketLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLocation', 'S3', result, false, true, mock)
  },
  getBucketLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLocation', 'S3', result, true, false, mock)
  },
  getBucketLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLogging', 'S3', result, true, true, mock)
  },
  getBucketLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLogging', 'S3', result, false, true, mock)
  },
  getBucketLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketLogging', 'S3', result, true, false, mock)
  },
  getBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricsConfiguration', 'S3', result, true, true, mock)
  },
  getBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricsConfiguration', 'S3', result, false, true, mock)
  },
  getBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricsConfiguration', 'S3', result, true, false, mock)
  },
  getBucketNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketNotificationConfiguration', 'S3', result, true, true, mock)
  },
  getBucketNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketNotificationConfiguration', 'S3', result, false, true, mock)
  },
  getBucketNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketNotificationConfiguration', 'S3', result, true, false, mock)
  },
  getBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketOwnershipControls', 'S3', result, true, true, mock)
  },
  getBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketOwnershipControls', 'S3', result, false, true, mock)
  },
  getBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketOwnershipControls', 'S3', result, true, false, mock)
  },
  getBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicy', 'S3', result, true, true, mock)
  },
  getBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicy', 'S3', result, false, true, mock)
  },
  getBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicy', 'S3', result, true, false, mock)
  },
  getBucketPolicyStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicyStatus', 'S3', result, true, true, mock)
  },
  getBucketPolicyStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicyStatus', 'S3', result, false, true, mock)
  },
  getBucketPolicyStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketPolicyStatus', 'S3', result, true, false, mock)
  },
  getBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketReplication', 'S3', result, true, true, mock)
  },
  getBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketReplication', 'S3', result, false, true, mock)
  },
  getBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketReplication', 'S3', result, true, false, mock)
  },
  getBucketRequestPayment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketRequestPayment', 'S3', result, true, true, mock)
  },
  getBucketRequestPaymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketRequestPayment', 'S3', result, false, true, mock)
  },
  getBucketRequestPaymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketRequestPayment', 'S3', result, true, false, mock)
  },
  getBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketTagging', 'S3', result, true, true, mock)
  },
  getBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketTagging', 'S3', result, false, true, mock)
  },
  getBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketTagging', 'S3', result, true, false, mock)
  },
  getBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketVersioning', 'S3', result, true, true, mock)
  },
  getBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketVersioning', 'S3', result, false, true, mock)
  },
  getBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketVersioning', 'S3', result, true, false, mock)
  },
  getBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketWebsite', 'S3', result, true, true, mock)
  },
  getBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketWebsite', 'S3', result, false, true, mock)
  },
  getBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketWebsite', 'S3', result, true, false, mock)
  },
  getObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'S3', result, true, true, mock)
  },
  getObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'S3', result, false, true, mock)
  },
  getObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'S3', result, true, false, mock)
  },
  getObjectAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAcl', 'S3', result, true, true, mock)
  },
  getObjectAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAcl', 'S3', result, false, true, mock)
  },
  getObjectAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAcl', 'S3', result, true, false, mock)
  },
  getObjectLegalHold: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLegalHold', 'S3', result, true, true, mock)
  },
  getObjectLegalHoldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLegalHold', 'S3', result, false, true, mock)
  },
  getObjectLegalHoldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLegalHold', 'S3', result, true, false, mock)
  },
  getObjectLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLockConfiguration', 'S3', result, true, true, mock)
  },
  getObjectLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLockConfiguration', 'S3', result, false, true, mock)
  },
  getObjectLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectLockConfiguration', 'S3', result, true, false, mock)
  },
  getObjectRetention: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectRetention', 'S3', result, true, true, mock)
  },
  getObjectRetentionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectRetention', 'S3', result, false, true, mock)
  },
  getObjectRetentionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectRetention', 'S3', result, true, false, mock)
  },
  getObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTagging', 'S3', result, true, true, mock)
  },
  getObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTagging', 'S3', result, false, true, mock)
  },
  getObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTagging', 'S3', result, true, false, mock)
  },
  getObjectTorrent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTorrent', 'S3', result, true, true, mock)
  },
  getObjectTorrentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTorrent', 'S3', result, false, true, mock)
  },
  getObjectTorrentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectTorrent', 'S3', result, true, false, mock)
  },
  getPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicAccessBlock', 'S3', result, true, true, mock)
  },
  getPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicAccessBlock', 'S3', result, false, true, mock)
  },
  getPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicAccessBlock', 'S3', result, true, false, mock)
  },
  headBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headBucket', 'S3', result, true, true, mock)
  },
  headBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headBucket', 'S3', result, false, true, mock)
  },
  headBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headBucket', 'S3', result, true, false, mock)
  },
  headObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headObject', 'S3', result, true, true, mock)
  },
  headObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headObject', 'S3', result, false, true, mock)
  },
  headObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('headObject', 'S3', result, true, false, mock)
  },
  listBucketAnalyticsConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketAnalyticsConfigurations', 'S3', result, true, true, mock)
  },
  listBucketAnalyticsConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketAnalyticsConfigurations', 'S3', result, false, true, mock)
  },
  listBucketAnalyticsConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketAnalyticsConfigurations', 'S3', result, true, false, mock)
  },
  listBucketIntelligentTieringConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketIntelligentTieringConfigurations', 'S3', result, true, true, mock)
  },
  listBucketIntelligentTieringConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketIntelligentTieringConfigurations', 'S3', result, false, true, mock)
  },
  listBucketIntelligentTieringConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketIntelligentTieringConfigurations', 'S3', result, true, false, mock)
  },
  listBucketInventoryConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketInventoryConfigurations', 'S3', result, true, true, mock)
  },
  listBucketInventoryConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketInventoryConfigurations', 'S3', result, false, true, mock)
  },
  listBucketInventoryConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketInventoryConfigurations', 'S3', result, true, false, mock)
  },
  listBucketMetricsConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketMetricsConfigurations', 'S3', result, true, true, mock)
  },
  listBucketMetricsConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketMetricsConfigurations', 'S3', result, false, true, mock)
  },
  listBucketMetricsConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBucketMetricsConfigurations', 'S3', result, true, false, mock)
  },
  listBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuckets', 'S3', result, true, true, mock)
  },
  listBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuckets', 'S3', result, false, true, mock)
  },
  listBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuckets', 'S3', result, true, false, mock)
  },
  listMultipartUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'S3', result, true, true, mock)
  },
  listMultipartUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'S3', result, false, true, mock)
  },
  listMultipartUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'S3', result, true, false, mock)
  },
  listObjectVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectVersions', 'S3', result, true, true, mock)
  },
  listObjectVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectVersions', 'S3', result, false, true, mock)
  },
  listObjectVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectVersions', 'S3', result, true, false, mock)
  },
  listObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjects', 'S3', result, true, true, mock)
  },
  listObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjects', 'S3', result, false, true, mock)
  },
  listObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjects', 'S3', result, true, false, mock)
  },
  listObjectsV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectsV2', 'S3', result, true, true, mock)
  },
  listObjectsV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectsV2', 'S3', result, false, true, mock)
  },
  listObjectsV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectsV2', 'S3', result, true, false, mock)
  },
  listParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'S3', result, true, true, mock)
  },
  listPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'S3', result, false, true, mock)
  },
  listPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'S3', result, true, false, mock)
  },
  putBucketAccelerateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAccelerateConfiguration', 'S3', result, true, true, mock)
  },
  putBucketAccelerateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAccelerateConfiguration', 'S3', result, false, true, mock)
  },
  putBucketAccelerateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAccelerateConfiguration', 'S3', result, true, false, mock)
  },
  putBucketAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAcl', 'S3', result, true, true, mock)
  },
  putBucketAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAcl', 'S3', result, false, true, mock)
  },
  putBucketAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAcl', 'S3', result, true, false, mock)
  },
  putBucketAnalyticsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAnalyticsConfiguration', 'S3', result, true, true, mock)
  },
  putBucketAnalyticsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAnalyticsConfiguration', 'S3', result, false, true, mock)
  },
  putBucketAnalyticsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketAnalyticsConfiguration', 'S3', result, true, false, mock)
  },
  putBucketCors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketCors', 'S3', result, true, true, mock)
  },
  putBucketCorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketCors', 'S3', result, false, true, mock)
  },
  putBucketCorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketCors', 'S3', result, true, false, mock)
  },
  putBucketEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketEncryption', 'S3', result, true, true, mock)
  },
  putBucketEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketEncryption', 'S3', result, false, true, mock)
  },
  putBucketEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketEncryption', 'S3', result, true, false, mock)
  },
  putBucketIntelligentTieringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketIntelligentTieringConfiguration', 'S3', result, true, true, mock)
  },
  putBucketIntelligentTieringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketIntelligentTieringConfiguration', 'S3', result, false, true, mock)
  },
  putBucketIntelligentTieringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketIntelligentTieringConfiguration', 'S3', result, true, false, mock)
  },
  putBucketInventoryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketInventoryConfiguration', 'S3', result, true, true, mock)
  },
  putBucketInventoryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketInventoryConfiguration', 'S3', result, false, true, mock)
  },
  putBucketInventoryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketInventoryConfiguration', 'S3', result, true, false, mock)
  },
  putBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLifecycleConfiguration', 'S3', result, true, true, mock)
  },
  putBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLifecycleConfiguration', 'S3', result, false, true, mock)
  },
  putBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLifecycleConfiguration', 'S3', result, true, false, mock)
  },
  putBucketLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLogging', 'S3', result, true, true, mock)
  },
  putBucketLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLogging', 'S3', result, false, true, mock)
  },
  putBucketLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketLogging', 'S3', result, true, false, mock)
  },
  putBucketMetricsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketMetricsConfiguration', 'S3', result, true, true, mock)
  },
  putBucketMetricsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketMetricsConfiguration', 'S3', result, false, true, mock)
  },
  putBucketMetricsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketMetricsConfiguration', 'S3', result, true, false, mock)
  },
  putBucketNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketNotificationConfiguration', 'S3', result, true, true, mock)
  },
  putBucketNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketNotificationConfiguration', 'S3', result, false, true, mock)
  },
  putBucketNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketNotificationConfiguration', 'S3', result, true, false, mock)
  },
  putBucketOwnershipControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketOwnershipControls', 'S3', result, true, true, mock)
  },
  putBucketOwnershipControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketOwnershipControls', 'S3', result, false, true, mock)
  },
  putBucketOwnershipControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketOwnershipControls', 'S3', result, true, false, mock)
  },
  putBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketPolicy', 'S3', result, true, true, mock)
  },
  putBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketPolicy', 'S3', result, false, true, mock)
  },
  putBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketPolicy', 'S3', result, true, false, mock)
  },
  putBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketReplication', 'S3', result, true, true, mock)
  },
  putBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketReplication', 'S3', result, false, true, mock)
  },
  putBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketReplication', 'S3', result, true, false, mock)
  },
  putBucketRequestPayment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketRequestPayment', 'S3', result, true, true, mock)
  },
  putBucketRequestPaymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketRequestPayment', 'S3', result, false, true, mock)
  },
  putBucketRequestPaymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketRequestPayment', 'S3', result, true, false, mock)
  },
  putBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketTagging', 'S3', result, true, true, mock)
  },
  putBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketTagging', 'S3', result, false, true, mock)
  },
  putBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketTagging', 'S3', result, true, false, mock)
  },
  putBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketVersioning', 'S3', result, true, true, mock)
  },
  putBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketVersioning', 'S3', result, false, true, mock)
  },
  putBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketVersioning', 'S3', result, true, false, mock)
  },
  putBucketWebsite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketWebsite', 'S3', result, true, true, mock)
  },
  putBucketWebsiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketWebsite', 'S3', result, false, true, mock)
  },
  putBucketWebsiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBucketWebsite', 'S3', result, true, false, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', result, true, true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', result, false, true, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'S3', result, true, false, mock)
  },
  putObjectAcl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectAcl', 'S3', result, true, true, mock)
  },
  putObjectAclAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectAcl', 'S3', result, false, true, mock)
  },
  putObjectAclThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectAcl', 'S3', result, true, false, mock)
  },
  putObjectLegalHold: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLegalHold', 'S3', result, true, true, mock)
  },
  putObjectLegalHoldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLegalHold', 'S3', result, false, true, mock)
  },
  putObjectLegalHoldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLegalHold', 'S3', result, true, false, mock)
  },
  putObjectLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLockConfiguration', 'S3', result, true, true, mock)
  },
  putObjectLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLockConfiguration', 'S3', result, false, true, mock)
  },
  putObjectLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectLockConfiguration', 'S3', result, true, false, mock)
  },
  putObjectRetention: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectRetention', 'S3', result, true, true, mock)
  },
  putObjectRetentionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectRetention', 'S3', result, false, true, mock)
  },
  putObjectRetentionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectRetention', 'S3', result, true, false, mock)
  },
  putObjectTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectTagging', 'S3', result, true, true, mock)
  },
  putObjectTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectTagging', 'S3', result, false, true, mock)
  },
  putObjectTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObjectTagging', 'S3', result, true, false, mock)
  },
  putPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPublicAccessBlock', 'S3', result, true, true, mock)
  },
  putPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPublicAccessBlock', 'S3', result, false, true, mock)
  },
  putPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPublicAccessBlock', 'S3', result, true, false, mock)
  },
  restoreObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreObject', 'S3', result, true, true, mock)
  },
  restoreObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreObject', 'S3', result, false, true, mock)
  },
  restoreObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreObject', 'S3', result, true, false, mock)
  },
  selectObjectContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectObjectContent', 'S3', result, true, true, mock)
  },
  selectObjectContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectObjectContent', 'S3', result, false, true, mock)
  },
  selectObjectContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectObjectContent', 'S3', result, true, false, mock)
  },
  uploadPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPart', 'S3', result, true, true, mock)
  },
  uploadPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPart', 'S3', result, false, true, mock)
  },
  uploadPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPart', 'S3', result, true, false, mock)
  },
  uploadPartCopy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPartCopy', 'S3', result, true, true, mock)
  },
  uploadPartCopyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPartCopy', 'S3', result, false, true, mock)
  },
  uploadPartCopyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadPartCopy', 'S3', result, true, false, mock)
  },
  writeGetObjectResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeGetObjectResponse', 'S3', result, true, true, mock)
  },
  writeGetObjectResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeGetObjectResponse', 'S3', result, false, true, mock)
  },
  writeGetObjectResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeGetObjectResponse', 'S3', result, true, false, mock)
  },
}
