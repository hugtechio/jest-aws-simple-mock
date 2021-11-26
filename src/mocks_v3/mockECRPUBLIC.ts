
/**
* @description mocks_v3:mockECRPUBLIC module is mocks for AWS-SDK V3
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

  export const mockECRPUBLIC = {
  batchCheckLayerAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchCheckLayerAvailability', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  batchCheckLayerAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchCheckLayerAvailability', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  batchCheckLayerAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchCheckLayerAvailability', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  batchDeleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchDeleteImage', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  batchDeleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchDeleteImage', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  batchDeleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'batchDeleteImage', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  completeLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'completeLayerUpload', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  completeLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'completeLayerUpload', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  completeLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'completeLayerUpload', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  createRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'createRepository', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  createRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'createRepository', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  createRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'createRepository', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  deleteRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepository', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  deleteRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepository', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  deleteRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepository', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  deleteRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  deleteRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  deleteRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'deleteRepositoryPolicy', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  describeImageTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImageTags', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  describeImageTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImageTags', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  describeImageTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImageTags', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImages', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImages', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeImages', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  describeRegistries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRegistries', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  describeRegistriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRegistries', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  describeRegistriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRegistries', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  describeRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRepositories', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  describeRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRepositories', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  describeRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'describeRepositories', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'destroy', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'destroy', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'destroy', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  getAuthorizationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getAuthorizationToken', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  getAuthorizationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getAuthorizationToken', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  getAuthorizationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getAuthorizationToken', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  getRegistryCatalogData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRegistryCatalogData', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  getRegistryCatalogDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRegistryCatalogData', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  getRegistryCatalogDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRegistryCatalogData', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  getRepositoryCatalogData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryCatalogData', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  getRepositoryCatalogDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryCatalogData', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  getRepositoryCatalogDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryCatalogData', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  getRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  getRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  getRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'getRepositoryPolicy', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  initiateLayerUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'initiateLayerUpload', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  initiateLayerUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'initiateLayerUpload', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  initiateLayerUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'initiateLayerUpload', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'listTagsForResource', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'listTagsForResource', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'listTagsForResource', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  putImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putImage', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  putImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putImage', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  putImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putImage', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  putRegistryCatalogData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRegistryCatalogData', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  putRegistryCatalogDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRegistryCatalogData', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  putRegistryCatalogDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRegistryCatalogData', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  putRepositoryCatalogData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRepositoryCatalogData', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  putRepositoryCatalogDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRepositoryCatalogData', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  putRepositoryCatalogDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'putRepositoryCatalogData', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  setRepositoryPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'setRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  setRepositoryPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'setRepositoryPolicy', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  setRepositoryPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'setRepositoryPolicy', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'tagResource', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'tagResource', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'tagResource', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'untagResource', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'untagResource', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'untagResource', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  uploadLayerPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'uploadLayerPart', 'ECRPUBLIC', Promise.resolve(result), true, mock)
  },
  uploadLayerPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'uploadLayerPart', 'ECRPUBLIC', Promise.resolve(result), false, mock)
  },
  uploadLayerPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'uploadLayerPart', 'ECRPUBLIC', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'send', 'ECRPUBLICClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'send', 'ECRPUBLICClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecr-public', 'send', 'ECRPUBLICClient', Promise.reject(result), true, mock)
  }
}