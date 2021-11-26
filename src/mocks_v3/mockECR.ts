
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockECR = {
  batchCheckLayerAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchCheckLayerAvailability', 'ECR', Promise.resolve(result), true, mock)
  },
  batchCheckLayerAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchCheckLayerAvailability', 'ECR', Promise.resolve(result), false, mock)
  },
  batchCheckLayerAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchCheckLayerAvailability', 'ECR', Promise.reject(result), true, mock)
  },
  batchDeleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchDeleteImage', 'ECR', Promise.resolve(result), true, mock)
  },
  batchDeleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchDeleteImage', 'ECR', Promise.resolve(result), false, mock)
  },
  batchDeleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchDeleteImage', 'ECR', Promise.reject(result), true, mock)
  },
  batchGetImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchGetImage', 'ECR', Promise.resolve(result), true, mock)
  },
  batchGetImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchGetImage', 'ECR', Promise.resolve(result), false, mock)
  },
  batchGetImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'batchGetImage', 'ECR', Promise.reject(result), true, mock)
  },
  completeLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'completeLayerUpload', 'ECR', Promise.resolve(result), true, mock)
  },
  completeLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'completeLayerUpload', 'ECR', Promise.resolve(result), false, mock)
  },
  completeLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'completeLayerUpload', 'ECR', Promise.reject(result), true, mock)
  },
  createRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'createRepository', 'ECR', Promise.resolve(result), true, mock)
  },
  createRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'createRepository', 'ECR', Promise.resolve(result), false, mock)
  },
  createRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'createRepository', 'ECR', Promise.reject(result), true, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteLifecyclePolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteLifecyclePolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteLifecyclePolicy', 'ECR', Promise.reject(result), true, mock)
  },
  deleteRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRegistryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  deleteRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRegistryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  deleteRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRegistryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  deleteRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepository', 'ECR', Promise.resolve(result), true, mock)
  },
  deleteRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepository', 'ECR', Promise.resolve(result), false, mock)
  },
  deleteRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepository', 'ECR', Promise.reject(result), true, mock)
  },
  deleteRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepositoryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  deleteRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepositoryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  deleteRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'deleteRepositoryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  describeImageReplicationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageReplicationStatus', 'ECR', Promise.resolve(result), true, mock)
  },
  describeImageReplicationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageReplicationStatus', 'ECR', Promise.resolve(result), false, mock)
  },
  describeImageReplicationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageReplicationStatus', 'ECR', Promise.reject(result), true, mock)
  },
  describeImageScanFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageScanFindings', 'ECR', Promise.resolve(result), true, mock)
  },
  describeImageScanFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageScanFindings', 'ECR', Promise.resolve(result), false, mock)
  },
  describeImageScanFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImageScanFindings', 'ECR', Promise.reject(result), true, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImages', 'ECR', Promise.resolve(result), true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImages', 'ECR', Promise.resolve(result), false, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeImages', 'ECR', Promise.reject(result), true, mock)
  },
  describeRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRegistry', 'ECR', Promise.resolve(result), true, mock)
  },
  describeRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRegistry', 'ECR', Promise.resolve(result), false, mock)
  },
  describeRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRegistry', 'ECR', Promise.reject(result), true, mock)
  },
  describeRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRepositories', 'ECR', Promise.resolve(result), true, mock)
  },
  describeRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRepositories', 'ECR', Promise.resolve(result), false, mock)
  },
  describeRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'describeRepositories', 'ECR', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'destroy', 'ECR', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'destroy', 'ECR', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'destroy', 'ECR', Promise.reject(result), true, mock)
  },
  getAuthorizationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getAuthorizationToken', 'ECR', Promise.resolve(result), true, mock)
  },
  getAuthorizationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getAuthorizationToken', 'ECR', Promise.resolve(result), false, mock)
  },
  getAuthorizationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getAuthorizationToken', 'ECR', Promise.reject(result), true, mock)
  },
  getDownloadUrlForLayer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getDownloadUrlForLayer', 'ECR', Promise.resolve(result), true, mock)
  },
  getDownloadUrlForLayerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getDownloadUrlForLayer', 'ECR', Promise.resolve(result), false, mock)
  },
  getDownloadUrlForLayerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getDownloadUrlForLayer', 'ECR', Promise.reject(result), true, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicy', 'ECR', Promise.reject(result), true, mock)
  },
  getLifecyclePolicyPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicyPreview', 'ECR', Promise.resolve(result), true, mock)
  },
  getLifecyclePolicyPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicyPreview', 'ECR', Promise.resolve(result), false, mock)
  },
  getLifecyclePolicyPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getLifecyclePolicyPreview', 'ECR', Promise.reject(result), true, mock)
  },
  getRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRegistryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  getRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRegistryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  getRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRegistryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  getRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRepositoryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  getRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRepositoryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  getRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'getRepositoryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  initiateLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'initiateLayerUpload', 'ECR', Promise.resolve(result), true, mock)
  },
  initiateLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'initiateLayerUpload', 'ECR', Promise.resolve(result), false, mock)
  },
  initiateLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'initiateLayerUpload', 'ECR', Promise.reject(result), true, mock)
  },
  listImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listImages', 'ECR', Promise.resolve(result), true, mock)
  },
  listImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listImages', 'ECR', Promise.resolve(result), false, mock)
  },
  listImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listImages', 'ECR', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listTagsForResource', 'ECR', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listTagsForResource', 'ECR', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'listTagsForResource', 'ECR', Promise.reject(result), true, mock)
  },
  putImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImage', 'ECR', Promise.resolve(result), true, mock)
  },
  putImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImage', 'ECR', Promise.resolve(result), false, mock)
  },
  putImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImage', 'ECR', Promise.reject(result), true, mock)
  },
  putImageScanningConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageScanningConfiguration', 'ECR', Promise.resolve(result), true, mock)
  },
  putImageScanningConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageScanningConfiguration', 'ECR', Promise.resolve(result), false, mock)
  },
  putImageScanningConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageScanningConfiguration', 'ECR', Promise.reject(result), true, mock)
  },
  putImageTagMutability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageTagMutability', 'ECR', Promise.resolve(result), true, mock)
  },
  putImageTagMutabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageTagMutability', 'ECR', Promise.resolve(result), false, mock)
  },
  putImageTagMutabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putImageTagMutability', 'ECR', Promise.reject(result), true, mock)
  },
  putLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putLifecyclePolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  putLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putLifecyclePolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  putLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putLifecyclePolicy', 'ECR', Promise.reject(result), true, mock)
  },
  putRegistryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putRegistryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  putRegistryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putRegistryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  putRegistryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putRegistryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  putReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putReplicationConfiguration', 'ECR', Promise.resolve(result), true, mock)
  },
  putReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putReplicationConfiguration', 'ECR', Promise.resolve(result), false, mock)
  },
  putReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'putReplicationConfiguration', 'ECR', Promise.reject(result), true, mock)
  },
  setRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'setRepositoryPolicy', 'ECR', Promise.resolve(result), true, mock)
  },
  setRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'setRepositoryPolicy', 'ECR', Promise.resolve(result), false, mock)
  },
  setRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'setRepositoryPolicy', 'ECR', Promise.reject(result), true, mock)
  },
  startImageScan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startImageScan', 'ECR', Promise.resolve(result), true, mock)
  },
  startImageScanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startImageScan', 'ECR', Promise.resolve(result), false, mock)
  },
  startImageScanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startImageScan', 'ECR', Promise.reject(result), true, mock)
  },
  startLifecyclePolicyPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startLifecyclePolicyPreview', 'ECR', Promise.resolve(result), true, mock)
  },
  startLifecyclePolicyPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startLifecyclePolicyPreview', 'ECR', Promise.resolve(result), false, mock)
  },
  startLifecyclePolicyPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'startLifecyclePolicyPreview', 'ECR', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'tagResource', 'ECR', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'tagResource', 'ECR', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'tagResource', 'ECR', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'untagResource', 'ECR', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'untagResource', 'ECR', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'untagResource', 'ECR', Promise.reject(result), true, mock)
  },
  uploadLayerPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'uploadLayerPart', 'ECR', Promise.resolve(result), true, mock)
  },
  uploadLayerPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'uploadLayerPart', 'ECR', Promise.resolve(result), false, mock)
  },
  uploadLayerPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'uploadLayerPart', 'ECR', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'send', 'ECRClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'send', 'ECRClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr', 'send', 'ECRClient', Promise.reject(result), true, mock)
  }
}