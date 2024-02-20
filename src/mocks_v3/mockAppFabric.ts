
/**
* @description mocks_v3:mockAppFabric module is mocks for AWS-SDK V3
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
export const mockAppFabric = {
  batchGetUserAccessTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'batchGetUserAccessTasks', 'AppFabric', Promise.resolve(result), true, mock)
  },
  batchGetUserAccessTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'batchGetUserAccessTasks', 'AppFabric', Promise.resolve(result), false, mock)
  },
  batchGetUserAccessTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'batchGetUserAccessTasks', 'AppFabric', Promise.reject(result), true, mock)
  },
  connectAppAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'connectAppAuthorization', 'AppFabric', Promise.resolve(result), true, mock)
  },
  connectAppAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'connectAppAuthorization', 'AppFabric', Promise.resolve(result), false, mock)
  },
  connectAppAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'connectAppAuthorization', 'AppFabric', Promise.reject(result), true, mock)
  },
  createAppAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppAuthorization', 'AppFabric', Promise.resolve(result), true, mock)
  },
  createAppAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppAuthorization', 'AppFabric', Promise.resolve(result), false, mock)
  },
  createAppAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppAuthorization', 'AppFabric', Promise.reject(result), true, mock)
  },
  createAppBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppBundle', 'AppFabric', Promise.resolve(result), true, mock)
  },
  createAppBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppBundle', 'AppFabric', Promise.resolve(result), false, mock)
  },
  createAppBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createAppBundle', 'AppFabric', Promise.reject(result), true, mock)
  },
  createIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestion', 'AppFabric', Promise.resolve(result), true, mock)
  },
  createIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestion', 'AppFabric', Promise.resolve(result), false, mock)
  },
  createIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestion', 'AppFabric', Promise.reject(result), true, mock)
  },
  createIngestionDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestionDestination', 'AppFabric', Promise.resolve(result), true, mock)
  },
  createIngestionDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestionDestination', 'AppFabric', Promise.resolve(result), false, mock)
  },
  createIngestionDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'createIngestionDestination', 'AppFabric', Promise.reject(result), true, mock)
  },
  deleteAppAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppAuthorization', 'AppFabric', Promise.resolve(result), true, mock)
  },
  deleteAppAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppAuthorization', 'AppFabric', Promise.resolve(result), false, mock)
  },
  deleteAppAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppAuthorization', 'AppFabric', Promise.reject(result), true, mock)
  },
  deleteAppBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppBundle', 'AppFabric', Promise.resolve(result), true, mock)
  },
  deleteAppBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppBundle', 'AppFabric', Promise.resolve(result), false, mock)
  },
  deleteAppBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteAppBundle', 'AppFabric', Promise.reject(result), true, mock)
  },
  deleteIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestion', 'AppFabric', Promise.resolve(result), true, mock)
  },
  deleteIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestion', 'AppFabric', Promise.resolve(result), false, mock)
  },
  deleteIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestion', 'AppFabric', Promise.reject(result), true, mock)
  },
  deleteIngestionDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestionDestination', 'AppFabric', Promise.resolve(result), true, mock)
  },
  deleteIngestionDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestionDestination', 'AppFabric', Promise.resolve(result), false, mock)
  },
  deleteIngestionDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'deleteIngestionDestination', 'AppFabric', Promise.reject(result), true, mock)
  },
  getAppAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppAuthorization', 'AppFabric', Promise.resolve(result), true, mock)
  },
  getAppAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppAuthorization', 'AppFabric', Promise.resolve(result), false, mock)
  },
  getAppAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppAuthorization', 'AppFabric', Promise.reject(result), true, mock)
  },
  getAppBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppBundle', 'AppFabric', Promise.resolve(result), true, mock)
  },
  getAppBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppBundle', 'AppFabric', Promise.resolve(result), false, mock)
  },
  getAppBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getAppBundle', 'AppFabric', Promise.reject(result), true, mock)
  },
  getIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestion', 'AppFabric', Promise.resolve(result), true, mock)
  },
  getIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestion', 'AppFabric', Promise.resolve(result), false, mock)
  },
  getIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestion', 'AppFabric', Promise.reject(result), true, mock)
  },
  getIngestionDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestionDestination', 'AppFabric', Promise.resolve(result), true, mock)
  },
  getIngestionDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestionDestination', 'AppFabric', Promise.resolve(result), false, mock)
  },
  getIngestionDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'getIngestionDestination', 'AppFabric', Promise.reject(result), true, mock)
  },
  listAppAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppAuthorizations', 'AppFabric', Promise.resolve(result), true, mock)
  },
  listAppAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppAuthorizations', 'AppFabric', Promise.resolve(result), false, mock)
  },
  listAppAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppAuthorizations', 'AppFabric', Promise.reject(result), true, mock)
  },
  listAppBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppBundles', 'AppFabric', Promise.resolve(result), true, mock)
  },
  listAppBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppBundles', 'AppFabric', Promise.resolve(result), false, mock)
  },
  listAppBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listAppBundles', 'AppFabric', Promise.reject(result), true, mock)
  },
  listIngestionDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestionDestinations', 'AppFabric', Promise.resolve(result), true, mock)
  },
  listIngestionDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestionDestinations', 'AppFabric', Promise.resolve(result), false, mock)
  },
  listIngestionDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestionDestinations', 'AppFabric', Promise.reject(result), true, mock)
  },
  listIngestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestions', 'AppFabric', Promise.resolve(result), true, mock)
  },
  listIngestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestions', 'AppFabric', Promise.resolve(result), false, mock)
  },
  listIngestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listIngestions', 'AppFabric', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listTagsForResource', 'AppFabric', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listTagsForResource', 'AppFabric', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'listTagsForResource', 'AppFabric', Promise.reject(result), true, mock)
  },
  startIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startIngestion', 'AppFabric', Promise.resolve(result), true, mock)
  },
  startIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startIngestion', 'AppFabric', Promise.resolve(result), false, mock)
  },
  startIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startIngestion', 'AppFabric', Promise.reject(result), true, mock)
  },
  startUserAccessTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startUserAccessTasks', 'AppFabric', Promise.resolve(result), true, mock)
  },
  startUserAccessTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startUserAccessTasks', 'AppFabric', Promise.resolve(result), false, mock)
  },
  startUserAccessTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'startUserAccessTasks', 'AppFabric', Promise.reject(result), true, mock)
  },
  stopIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'stopIngestion', 'AppFabric', Promise.resolve(result), true, mock)
  },
  stopIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'stopIngestion', 'AppFabric', Promise.resolve(result), false, mock)
  },
  stopIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'stopIngestion', 'AppFabric', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'tagResource', 'AppFabric', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'tagResource', 'AppFabric', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'tagResource', 'AppFabric', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'untagResource', 'AppFabric', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'untagResource', 'AppFabric', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'untagResource', 'AppFabric', Promise.reject(result), true, mock)
  },
  updateAppAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateAppAuthorization', 'AppFabric', Promise.resolve(result), true, mock)
  },
  updateAppAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateAppAuthorization', 'AppFabric', Promise.resolve(result), false, mock)
  },
  updateAppAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateAppAuthorization', 'AppFabric', Promise.reject(result), true, mock)
  },
  updateIngestionDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateIngestionDestination', 'AppFabric', Promise.resolve(result), true, mock)
  },
  updateIngestionDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateIngestionDestination', 'AppFabric', Promise.resolve(result), false, mock)
  },
  updateIngestionDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'updateIngestionDestination', 'AppFabric', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'send', 'AppFabricClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'send', 'AppFabricClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appfabric', 'send', 'AppFabricClient', Promise.reject(result), true, mock)
  }
}
