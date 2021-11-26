
/**
* @description mocks_v2:mockECR.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockECR = {
  batchCheckLayerAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCheckLayerAvailability', 'ECR', result, true, true, mock)
  },
  batchCheckLayerAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCheckLayerAvailability', 'ECR', result, false, true, mock)
  },
  batchCheckLayerAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCheckLayerAvailability', 'ECR', result, true, false, mock)
  },
  batchDeleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImage', 'ECR', result, true, true, mock)
  },
  batchDeleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImage', 'ECR', result, false, true, mock)
  },
  batchDeleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImage', 'ECR', result, true, false, mock)
  },
  batchGetImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetImage', 'ECR', result, true, true, mock)
  },
  batchGetImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetImage', 'ECR', result, false, true, mock)
  },
  batchGetImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetImage', 'ECR', result, true, false, mock)
  },
  completeLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLayerUpload', 'ECR', result, true, true, mock)
  },
  completeLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLayerUpload', 'ECR', result, false, true, mock)
  },
  completeLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLayerUpload', 'ECR', result, true, false, mock)
  },
  createRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'ECR', result, true, true, mock)
  },
  createRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'ECR', result, false, true, mock)
  },
  createRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRepository', 'ECR', result, true, false, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'ECR', result, true, true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'ECR', result, false, true, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'ECR', result, true, false, mock)
  },
  deleteRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistryPolicy', 'ECR', result, true, true, mock)
  },
  deleteRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistryPolicy', 'ECR', result, false, true, mock)
  },
  deleteRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistryPolicy', 'ECR', result, true, false, mock)
  },
  deleteRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'ECR', result, true, true, mock)
  },
  deleteRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'ECR', result, false, true, mock)
  },
  deleteRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepository', 'ECR', result, true, false, mock)
  },
  deleteRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepositoryPolicy', 'ECR', result, true, true, mock)
  },
  deleteRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepositoryPolicy', 'ECR', result, false, true, mock)
  },
  deleteRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRepositoryPolicy', 'ECR', result, true, false, mock)
  },
  describeImageReplicationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageReplicationStatus', 'ECR', result, true, true, mock)
  },
  describeImageReplicationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageReplicationStatus', 'ECR', result, false, true, mock)
  },
  describeImageReplicationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageReplicationStatus', 'ECR', result, true, false, mock)
  },
  describeImageScanFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageScanFindings', 'ECR', result, true, true, mock)
  },
  describeImageScanFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageScanFindings', 'ECR', result, false, true, mock)
  },
  describeImageScanFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageScanFindings', 'ECR', result, true, false, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'ECR', result, true, true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'ECR', result, false, true, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'ECR', result, true, false, mock)
  },
  describeRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegistry', 'ECR', result, true, true, mock)
  },
  describeRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegistry', 'ECR', result, false, true, mock)
  },
  describeRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegistry', 'ECR', result, true, false, mock)
  },
  describeRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositories', 'ECR', result, true, true, mock)
  },
  describeRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositories', 'ECR', result, false, true, mock)
  },
  describeRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositories', 'ECR', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECR', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECR', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECR', result, true, false, mock)
  },
  getAuthorizationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizationToken', 'ECR', result, true, true, mock)
  },
  getAuthorizationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizationToken', 'ECR', result, false, true, mock)
  },
  getAuthorizationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizationToken', 'ECR', result, true, false, mock)
  },
  getDownloadUrlForLayer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDownloadUrlForLayer', 'ECR', result, true, true, mock)
  },
  getDownloadUrlForLayerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDownloadUrlForLayer', 'ECR', result, false, true, mock)
  },
  getDownloadUrlForLayerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDownloadUrlForLayer', 'ECR', result, true, false, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'ECR', result, true, true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'ECR', result, false, true, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'ECR', result, true, false, mock)
  },
  getLifecyclePolicyPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicyPreview', 'ECR', result, true, true, mock)
  },
  getLifecyclePolicyPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicyPreview', 'ECR', result, false, true, mock)
  },
  getLifecyclePolicyPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicyPreview', 'ECR', result, true, false, mock)
  },
  getRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistryPolicy', 'ECR', result, true, true, mock)
  },
  getRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistryPolicy', 'ECR', result, false, true, mock)
  },
  getRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistryPolicy', 'ECR', result, true, false, mock)
  },
  getRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryPolicy', 'ECR', result, true, true, mock)
  },
  getRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryPolicy', 'ECR', result, false, true, mock)
  },
  getRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRepositoryPolicy', 'ECR', result, true, false, mock)
  },
  initiateLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateLayerUpload', 'ECR', result, true, true, mock)
  },
  initiateLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateLayerUpload', 'ECR', result, false, true, mock)
  },
  initiateLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateLayerUpload', 'ECR', result, true, false, mock)
  },
  listImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'ECR', result, true, true, mock)
  },
  listImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'ECR', result, false, true, mock)
  },
  listImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImages', 'ECR', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECR', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECR', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECR', result, true, false, mock)
  },
  putImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImage', 'ECR', result, true, true, mock)
  },
  putImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImage', 'ECR', result, false, true, mock)
  },
  putImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImage', 'ECR', result, true, false, mock)
  },
  putImageScanningConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageScanningConfiguration', 'ECR', result, true, true, mock)
  },
  putImageScanningConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageScanningConfiguration', 'ECR', result, false, true, mock)
  },
  putImageScanningConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageScanningConfiguration', 'ECR', result, true, false, mock)
  },
  putImageTagMutability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageTagMutability', 'ECR', result, true, true, mock)
  },
  putImageTagMutabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageTagMutability', 'ECR', result, false, true, mock)
  },
  putImageTagMutabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putImageTagMutability', 'ECR', result, true, false, mock)
  },
  putLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'ECR', result, true, true, mock)
  },
  putLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'ECR', result, false, true, mock)
  },
  putLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'ECR', result, true, false, mock)
  },
  putRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRegistryPolicy', 'ECR', result, true, true, mock)
  },
  putRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRegistryPolicy', 'ECR', result, false, true, mock)
  },
  putRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRegistryPolicy', 'ECR', result, true, false, mock)
  },
  putReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReplicationConfiguration', 'ECR', result, true, true, mock)
  },
  putReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReplicationConfiguration', 'ECR', result, false, true, mock)
  },
  putReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReplicationConfiguration', 'ECR', result, true, false, mock)
  },
  setRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRepositoryPolicy', 'ECR', result, true, true, mock)
  },
  setRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRepositoryPolicy', 'ECR', result, false, true, mock)
  },
  setRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRepositoryPolicy', 'ECR', result, true, false, mock)
  },
  startImageScan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageScan', 'ECR', result, true, true, mock)
  },
  startImageScanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageScan', 'ECR', result, false, true, mock)
  },
  startImageScanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageScan', 'ECR', result, true, false, mock)
  },
  startLifecyclePolicyPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLifecyclePolicyPreview', 'ECR', result, true, true, mock)
  },
  startLifecyclePolicyPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLifecyclePolicyPreview', 'ECR', result, false, true, mock)
  },
  startLifecyclePolicyPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLifecyclePolicyPreview', 'ECR', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECR', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECR', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECR', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECR', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECR', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECR', result, true, false, mock)
  },
  uploadLayerPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadLayerPart', 'ECR', result, true, true, mock)
  },
  uploadLayerPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadLayerPart', 'ECR', result, false, true, mock)
  },
  uploadLayerPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadLayerPart', 'ECR', result, true, false, mock)
  },
}
