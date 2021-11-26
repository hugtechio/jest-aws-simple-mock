
/**
* @description mocks_v3:mockAmplifyBackend module is mocks for AWS-SDK V3
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

  export const mockAmplifyBackend = {
  cloneBackend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'cloneBackend', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  cloneBackendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'cloneBackend', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  cloneBackendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'cloneBackend', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createBackend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackend', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createBackendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackend', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createBackendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackend', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createBackendAPI: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAPI', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createBackendAPIAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAPI', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createBackendAPIThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAPI', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createBackendAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAuth', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createBackendAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAuth', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createBackendAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendAuth', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createBackendConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendConfig', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createBackendConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendConfig', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createBackendConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendConfig', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createBackendStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendStorage', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createBackendStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendStorage', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createBackendStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createBackendStorage', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createToken', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createToken', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'createToken', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  deleteBackend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackend', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  deleteBackendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackend', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  deleteBackendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackend', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  deleteBackendAPI: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAPI', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  deleteBackendAPIAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAPI', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  deleteBackendAPIThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAPI', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  deleteBackendAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAuth', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  deleteBackendAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAuth', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  deleteBackendAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendAuth', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  deleteBackendStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendStorage', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  deleteBackendStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendStorage', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  deleteBackendStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteBackendStorage', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  deleteToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteToken', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  deleteTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteToken', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  deleteTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'deleteToken', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'destroy', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'destroy', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'destroy', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  generateBackendAPIModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'generateBackendAPIModels', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  generateBackendAPIModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'generateBackendAPIModels', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  generateBackendAPIModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'generateBackendAPIModels', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackend', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackend', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackend', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackendAPI: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPI', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendAPIAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPI', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendAPIThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPI', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackendAPIModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPIModels', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendAPIModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPIModels', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendAPIModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAPIModels', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackendAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAuth', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAuth', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendAuth', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackendJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendJob', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendJob', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendJob', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getBackendStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendStorage', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getBackendStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendStorage', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getBackendStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getBackendStorage', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  getToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getToken', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  getTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getToken', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  getTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'getToken', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  importBackendAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendAuth', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  importBackendAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendAuth', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  importBackendAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendAuth', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  importBackendStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendStorage', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  importBackendStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendStorage', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  importBackendStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'importBackendStorage', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  listBackendJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listBackendJobs', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  listBackendJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listBackendJobs', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  listBackendJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listBackendJobs', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  listS3Buckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listS3Buckets', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  listS3BucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listS3Buckets', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  listS3BucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'listS3Buckets', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  removeAllBackends: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeAllBackends', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  removeAllBackendsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeAllBackends', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  removeAllBackendsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeAllBackends', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  removeBackendConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeBackendConfig', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  removeBackendConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeBackendConfig', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  removeBackendConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'removeBackendConfig', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  updateBackendAPI: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAPI', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  updateBackendAPIAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAPI', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  updateBackendAPIThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAPI', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  updateBackendAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAuth', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  updateBackendAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAuth', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  updateBackendAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendAuth', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  updateBackendConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendConfig', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  updateBackendConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendConfig', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  updateBackendConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendConfig', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  updateBackendJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendJob', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  updateBackendJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendJob', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  updateBackendJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendJob', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  updateBackendStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendStorage', 'AmplifyBackend', Promise.resolve(result), true, mock)
  },
  updateBackendStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendStorage', 'AmplifyBackend', Promise.resolve(result), false, mock)
  },
  updateBackendStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'updateBackendStorage', 'AmplifyBackend', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'send', 'AmplifyBackendClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'send', 'AmplifyBackendClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifybackend', 'send', 'AmplifyBackendClient', Promise.reject(result), true, mock)
  }
}