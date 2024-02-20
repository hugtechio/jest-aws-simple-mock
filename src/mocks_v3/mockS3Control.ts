
/**
* @description mocks_v3:mockS3Control module is mocks for AWS-SDK V3
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
export const mockS3Control = {
  associateAccessGrantsIdentityCenter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'associateAccessGrantsIdentityCenter', 'S3Control', Promise.resolve(result), true, mock)
  },
  associateAccessGrantsIdentityCenterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'associateAccessGrantsIdentityCenter', 'S3Control', Promise.resolve(result), false, mock)
  },
  associateAccessGrantsIdentityCenterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'associateAccessGrantsIdentityCenter', 'S3Control', Promise.reject(result), true, mock)
  },
  createAccessGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrant', 'S3Control', Promise.resolve(result), true, mock)
  },
  createAccessGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrant', 'S3Control', Promise.resolve(result), false, mock)
  },
  createAccessGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrant', 'S3Control', Promise.reject(result), true, mock)
  },
  createAccessGrantsInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsInstance', 'S3Control', Promise.resolve(result), true, mock)
  },
  createAccessGrantsInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsInstance', 'S3Control', Promise.resolve(result), false, mock)
  },
  createAccessGrantsInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsInstance', 'S3Control', Promise.reject(result), true, mock)
  },
  createAccessGrantsLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsLocation', 'S3Control', Promise.resolve(result), true, mock)
  },
  createAccessGrantsLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsLocation', 'S3Control', Promise.resolve(result), false, mock)
  },
  createAccessGrantsLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessGrantsLocation', 'S3Control', Promise.reject(result), true, mock)
  },
  createAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  createAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  createAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  createAccessPointForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  createAccessPointForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  createAccessPointForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createAccessPointForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  createBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createBucket', 'S3Control', Promise.resolve(result), true, mock)
  },
  createBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createBucket', 'S3Control', Promise.resolve(result), false, mock)
  },
  createBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createBucket', 'S3Control', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createJob', 'S3Control', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createJob', 'S3Control', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createJob', 'S3Control', Promise.reject(result), true, mock)
  },
  createMultiRegionAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  createMultiRegionAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  createMultiRegionAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createMultiRegionAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  createStorageLensGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createStorageLensGroup', 'S3Control', Promise.resolve(result), true, mock)
  },
  createStorageLensGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createStorageLensGroup', 'S3Control', Promise.resolve(result), false, mock)
  },
  createStorageLensGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'createStorageLensGroup', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrant', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrant', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrant', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessGrantsInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstance', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessGrantsInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstance', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessGrantsInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstance', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessGrantsInstanceResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessGrantsInstanceResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessGrantsInstanceResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessGrantsLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsLocation', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessGrantsLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsLocation', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessGrantsLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessGrantsLocation', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessPointForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessPointForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessPointForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessPointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessPointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessPointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteAccessPointPolicyForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteAccessPointPolicyForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteAccessPointPolicyForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteAccessPointPolicyForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucket', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucket', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucket', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketLifecycleConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketReplication', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketReplication', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketReplication', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteBucketTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteJobTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteJobTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteJobTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteJobTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteJobTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteJobTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteMultiRegionAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteMultiRegionAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteMultiRegionAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteMultiRegionAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  deletePublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deletePublicAccessBlock', 'S3Control', Promise.resolve(result), true, mock)
  },
  deletePublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deletePublicAccessBlock', 'S3Control', Promise.resolve(result), false, mock)
  },
  deletePublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deletePublicAccessBlock', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteStorageLensConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteStorageLensConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteStorageLensConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteStorageLensConfigurationTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteStorageLensConfigurationTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteStorageLensConfigurationTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensConfigurationTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  deleteStorageLensGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensGroup', 'S3Control', Promise.resolve(result), true, mock)
  },
  deleteStorageLensGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensGroup', 'S3Control', Promise.resolve(result), false, mock)
  },
  deleteStorageLensGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'deleteStorageLensGroup', 'S3Control', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeJob', 'S3Control', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeJob', 'S3Control', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeJob', 'S3Control', Promise.reject(result), true, mock)
  },
  describeMultiRegionAccessPointOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeMultiRegionAccessPointOperation', 'S3Control', Promise.resolve(result), true, mock)
  },
  describeMultiRegionAccessPointOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeMultiRegionAccessPointOperation', 'S3Control', Promise.resolve(result), false, mock)
  },
  describeMultiRegionAccessPointOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'describeMultiRegionAccessPointOperation', 'S3Control', Promise.reject(result), true, mock)
  },
  dissociateAccessGrantsIdentityCenter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'dissociateAccessGrantsIdentityCenter', 'S3Control', Promise.resolve(result), true, mock)
  },
  dissociateAccessGrantsIdentityCenterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'dissociateAccessGrantsIdentityCenter', 'S3Control', Promise.resolve(result), false, mock)
  },
  dissociateAccessGrantsIdentityCenterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'dissociateAccessGrantsIdentityCenter', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrant', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrant', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrant', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessGrantsInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstance', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessGrantsInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstance', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessGrantsInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstance', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessGrantsInstanceForPrefix: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceForPrefix', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessGrantsInstanceForPrefixAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceForPrefix', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessGrantsInstanceForPrefixThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceForPrefix', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessGrantsInstanceResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessGrantsInstanceResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessGrantsInstanceResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessGrantsLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsLocation', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessGrantsLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsLocation', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessGrantsLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessGrantsLocation', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointConfigurationForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointConfigurationForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointConfigurationForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointConfigurationForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointConfigurationForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointConfigurationForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointPolicyForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointPolicyForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointPolicyForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointPolicyStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatus', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointPolicyStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatus', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointPolicyStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatus', 'S3Control', Promise.reject(result), true, mock)
  },
  getAccessPointPolicyStatusForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatusForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  getAccessPointPolicyStatusForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatusForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  getAccessPointPolicyStatusForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getAccessPointPolicyStatusForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucket', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucket', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucket', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketLifecycleConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketReplication', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketReplication', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketReplication', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  getBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketVersioning', 'S3Control', Promise.resolve(result), true, mock)
  },
  getBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketVersioning', 'S3Control', Promise.resolve(result), false, mock)
  },
  getBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getBucketVersioning', 'S3Control', Promise.reject(result), true, mock)
  },
  getDataAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getDataAccess', 'S3Control', Promise.resolve(result), true, mock)
  },
  getDataAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getDataAccess', 'S3Control', Promise.resolve(result), false, mock)
  },
  getDataAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getDataAccess', 'S3Control', Promise.reject(result), true, mock)
  },
  getJobTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getJobTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  getJobTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getJobTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  getJobTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getJobTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  getMultiRegionAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), true, mock)
  },
  getMultiRegionAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPoint', 'S3Control', Promise.resolve(result), false, mock)
  },
  getMultiRegionAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPoint', 'S3Control', Promise.reject(result), true, mock)
  },
  getMultiRegionAccessPointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  getMultiRegionAccessPointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  getMultiRegionAccessPointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  getMultiRegionAccessPointPolicyStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicyStatus', 'S3Control', Promise.resolve(result), true, mock)
  },
  getMultiRegionAccessPointPolicyStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicyStatus', 'S3Control', Promise.resolve(result), false, mock)
  },
  getMultiRegionAccessPointPolicyStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointPolicyStatus', 'S3Control', Promise.reject(result), true, mock)
  },
  getMultiRegionAccessPointRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointRoutes', 'S3Control', Promise.resolve(result), true, mock)
  },
  getMultiRegionAccessPointRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointRoutes', 'S3Control', Promise.resolve(result), false, mock)
  },
  getMultiRegionAccessPointRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getMultiRegionAccessPointRoutes', 'S3Control', Promise.reject(result), true, mock)
  },
  getPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getPublicAccessBlock', 'S3Control', Promise.resolve(result), true, mock)
  },
  getPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getPublicAccessBlock', 'S3Control', Promise.resolve(result), false, mock)
  },
  getPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getPublicAccessBlock', 'S3Control', Promise.reject(result), true, mock)
  },
  getStorageLensConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  getStorageLensConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  getStorageLensConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  getStorageLensConfigurationTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  getStorageLensConfigurationTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  getStorageLensConfigurationTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensConfigurationTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  getStorageLensGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensGroup', 'S3Control', Promise.resolve(result), true, mock)
  },
  getStorageLensGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensGroup', 'S3Control', Promise.resolve(result), false, mock)
  },
  getStorageLensGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'getStorageLensGroup', 'S3Control', Promise.reject(result), true, mock)
  },
  listAccessGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrants', 'S3Control', Promise.resolve(result), true, mock)
  },
  listAccessGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrants', 'S3Control', Promise.resolve(result), false, mock)
  },
  listAccessGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrants', 'S3Control', Promise.reject(result), true, mock)
  },
  listAccessGrantsInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsInstances', 'S3Control', Promise.resolve(result), true, mock)
  },
  listAccessGrantsInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsInstances', 'S3Control', Promise.resolve(result), false, mock)
  },
  listAccessGrantsInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsInstances', 'S3Control', Promise.reject(result), true, mock)
  },
  listAccessGrantsLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsLocations', 'S3Control', Promise.resolve(result), true, mock)
  },
  listAccessGrantsLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsLocations', 'S3Control', Promise.resolve(result), false, mock)
  },
  listAccessGrantsLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessGrantsLocations', 'S3Control', Promise.reject(result), true, mock)
  },
  listAccessPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPoints', 'S3Control', Promise.resolve(result), true, mock)
  },
  listAccessPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPoints', 'S3Control', Promise.resolve(result), false, mock)
  },
  listAccessPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPoints', 'S3Control', Promise.reject(result), true, mock)
  },
  listAccessPointsForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPointsForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  listAccessPointsForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPointsForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  listAccessPointsForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listAccessPointsForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listJobs', 'S3Control', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listJobs', 'S3Control', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listJobs', 'S3Control', Promise.reject(result), true, mock)
  },
  listMultiRegionAccessPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listMultiRegionAccessPoints', 'S3Control', Promise.resolve(result), true, mock)
  },
  listMultiRegionAccessPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listMultiRegionAccessPoints', 'S3Control', Promise.resolve(result), false, mock)
  },
  listMultiRegionAccessPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listMultiRegionAccessPoints', 'S3Control', Promise.reject(result), true, mock)
  },
  listRegionalBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listRegionalBuckets', 'S3Control', Promise.resolve(result), true, mock)
  },
  listRegionalBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listRegionalBuckets', 'S3Control', Promise.resolve(result), false, mock)
  },
  listRegionalBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listRegionalBuckets', 'S3Control', Promise.reject(result), true, mock)
  },
  listStorageLensConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensConfigurations', 'S3Control', Promise.resolve(result), true, mock)
  },
  listStorageLensConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensConfigurations', 'S3Control', Promise.resolve(result), false, mock)
  },
  listStorageLensConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensConfigurations', 'S3Control', Promise.reject(result), true, mock)
  },
  listStorageLensGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensGroups', 'S3Control', Promise.resolve(result), true, mock)
  },
  listStorageLensGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensGroups', 'S3Control', Promise.resolve(result), false, mock)
  },
  listStorageLensGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listStorageLensGroups', 'S3Control', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listTagsForResource', 'S3Control', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listTagsForResource', 'S3Control', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'listTagsForResource', 'S3Control', Promise.reject(result), true, mock)
  },
  putAccessGrantsInstanceResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  putAccessGrantsInstanceResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  putAccessGrantsInstanceResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessGrantsInstanceResourcePolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  putAccessPointConfigurationForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointConfigurationForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  putAccessPointConfigurationForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointConfigurationForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  putAccessPointConfigurationForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointConfigurationForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  putAccessPointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  putAccessPointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  putAccessPointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  putAccessPointPolicyForObjectLambda: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), true, mock)
  },
  putAccessPointPolicyForObjectLambdaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicyForObjectLambda', 'S3Control', Promise.resolve(result), false, mock)
  },
  putAccessPointPolicyForObjectLambdaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putAccessPointPolicyForObjectLambda', 'S3Control', Promise.reject(result), true, mock)
  },
  putBucketLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  putBucketLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketLifecycleConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  putBucketLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketLifecycleConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  putBucketPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  putBucketPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  putBucketPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  putBucketReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketReplication', 'S3Control', Promise.resolve(result), true, mock)
  },
  putBucketReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketReplication', 'S3Control', Promise.resolve(result), false, mock)
  },
  putBucketReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketReplication', 'S3Control', Promise.reject(result), true, mock)
  },
  putBucketTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  putBucketTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  putBucketTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  putBucketVersioning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketVersioning', 'S3Control', Promise.resolve(result), true, mock)
  },
  putBucketVersioningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketVersioning', 'S3Control', Promise.resolve(result), false, mock)
  },
  putBucketVersioningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putBucketVersioning', 'S3Control', Promise.reject(result), true, mock)
  },
  putJobTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putJobTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  putJobTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putJobTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  putJobTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putJobTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  putMultiRegionAccessPointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putMultiRegionAccessPointPolicy', 'S3Control', Promise.resolve(result), true, mock)
  },
  putMultiRegionAccessPointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putMultiRegionAccessPointPolicy', 'S3Control', Promise.resolve(result), false, mock)
  },
  putMultiRegionAccessPointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putMultiRegionAccessPointPolicy', 'S3Control', Promise.reject(result), true, mock)
  },
  putPublicAccessBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putPublicAccessBlock', 'S3Control', Promise.resolve(result), true, mock)
  },
  putPublicAccessBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putPublicAccessBlock', 'S3Control', Promise.resolve(result), false, mock)
  },
  putPublicAccessBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putPublicAccessBlock', 'S3Control', Promise.reject(result), true, mock)
  },
  putStorageLensConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfiguration', 'S3Control', Promise.resolve(result), true, mock)
  },
  putStorageLensConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfiguration', 'S3Control', Promise.resolve(result), false, mock)
  },
  putStorageLensConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfiguration', 'S3Control', Promise.reject(result), true, mock)
  },
  putStorageLensConfigurationTagging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), true, mock)
  },
  putStorageLensConfigurationTaggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfigurationTagging', 'S3Control', Promise.resolve(result), false, mock)
  },
  putStorageLensConfigurationTaggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'putStorageLensConfigurationTagging', 'S3Control', Promise.reject(result), true, mock)
  },
  submitMultiRegionAccessPointRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'submitMultiRegionAccessPointRoutes', 'S3Control', Promise.resolve(result), true, mock)
  },
  submitMultiRegionAccessPointRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'submitMultiRegionAccessPointRoutes', 'S3Control', Promise.resolve(result), false, mock)
  },
  submitMultiRegionAccessPointRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'submitMultiRegionAccessPointRoutes', 'S3Control', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'tagResource', 'S3Control', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'tagResource', 'S3Control', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'tagResource', 'S3Control', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'untagResource', 'S3Control', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'untagResource', 'S3Control', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'untagResource', 'S3Control', Promise.reject(result), true, mock)
  },
  updateAccessGrantsLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateAccessGrantsLocation', 'S3Control', Promise.resolve(result), true, mock)
  },
  updateAccessGrantsLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateAccessGrantsLocation', 'S3Control', Promise.resolve(result), false, mock)
  },
  updateAccessGrantsLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateAccessGrantsLocation', 'S3Control', Promise.reject(result), true, mock)
  },
  updateJobPriority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobPriority', 'S3Control', Promise.resolve(result), true, mock)
  },
  updateJobPriorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobPriority', 'S3Control', Promise.resolve(result), false, mock)
  },
  updateJobPriorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobPriority', 'S3Control', Promise.reject(result), true, mock)
  },
  updateJobStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobStatus', 'S3Control', Promise.resolve(result), true, mock)
  },
  updateJobStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobStatus', 'S3Control', Promise.resolve(result), false, mock)
  },
  updateJobStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateJobStatus', 'S3Control', Promise.reject(result), true, mock)
  },
  updateStorageLensGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateStorageLensGroup', 'S3Control', Promise.resolve(result), true, mock)
  },
  updateStorageLensGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateStorageLensGroup', 'S3Control', Promise.resolve(result), false, mock)
  },
  updateStorageLensGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'updateStorageLensGroup', 'S3Control', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'send', 'S3ControlClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'send', 'S3ControlClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3-control', 'send', 'S3ControlClient', Promise.reject(result), true, mock)
  }
}
