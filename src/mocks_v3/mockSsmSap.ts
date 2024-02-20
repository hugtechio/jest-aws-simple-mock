
/**
* @description mocks_v3:mockSsmSap module is mocks for AWS-SDK V3
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
export const mockSsmSap = {
  deleteResourcePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deleteResourcePermission', 'SsmSap', Promise.resolve(result), true, mock)
  },
  deleteResourcePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deleteResourcePermission', 'SsmSap', Promise.resolve(result), false, mock)
  },
  deleteResourcePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deleteResourcePermission', 'SsmSap', Promise.reject(result), true, mock)
  },
  deregisterApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deregisterApplication', 'SsmSap', Promise.resolve(result), true, mock)
  },
  deregisterApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deregisterApplication', 'SsmSap', Promise.resolve(result), false, mock)
  },
  deregisterApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'deregisterApplication', 'SsmSap', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getApplication', 'SsmSap', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getApplication', 'SsmSap', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getApplication', 'SsmSap', Promise.reject(result), true, mock)
  },
  getComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getComponent', 'SsmSap', Promise.resolve(result), true, mock)
  },
  getComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getComponent', 'SsmSap', Promise.resolve(result), false, mock)
  },
  getComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getComponent', 'SsmSap', Promise.reject(result), true, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getDatabase', 'SsmSap', Promise.resolve(result), true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getDatabase', 'SsmSap', Promise.resolve(result), false, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getDatabase', 'SsmSap', Promise.reject(result), true, mock)
  },
  getOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getOperation', 'SsmSap', Promise.resolve(result), true, mock)
  },
  getOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getOperation', 'SsmSap', Promise.resolve(result), false, mock)
  },
  getOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getOperation', 'SsmSap', Promise.reject(result), true, mock)
  },
  getResourcePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getResourcePermission', 'SsmSap', Promise.resolve(result), true, mock)
  },
  getResourcePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getResourcePermission', 'SsmSap', Promise.resolve(result), false, mock)
  },
  getResourcePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'getResourcePermission', 'SsmSap', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listApplications', 'SsmSap', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listApplications', 'SsmSap', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listApplications', 'SsmSap', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listComponents', 'SsmSap', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listComponents', 'SsmSap', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listComponents', 'SsmSap', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listDatabases', 'SsmSap', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listDatabases', 'SsmSap', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listDatabases', 'SsmSap', Promise.reject(result), true, mock)
  },
  listOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listOperations', 'SsmSap', Promise.resolve(result), true, mock)
  },
  listOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listOperations', 'SsmSap', Promise.resolve(result), false, mock)
  },
  listOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listOperations', 'SsmSap', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listTagsForResource', 'SsmSap', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listTagsForResource', 'SsmSap', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'listTagsForResource', 'SsmSap', Promise.reject(result), true, mock)
  },
  putResourcePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'putResourcePermission', 'SsmSap', Promise.resolve(result), true, mock)
  },
  putResourcePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'putResourcePermission', 'SsmSap', Promise.resolve(result), false, mock)
  },
  putResourcePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'putResourcePermission', 'SsmSap', Promise.reject(result), true, mock)
  },
  registerApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'registerApplication', 'SsmSap', Promise.resolve(result), true, mock)
  },
  registerApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'registerApplication', 'SsmSap', Promise.resolve(result), false, mock)
  },
  registerApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'registerApplication', 'SsmSap', Promise.reject(result), true, mock)
  },
  startApplicationRefresh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'startApplicationRefresh', 'SsmSap', Promise.resolve(result), true, mock)
  },
  startApplicationRefreshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'startApplicationRefresh', 'SsmSap', Promise.resolve(result), false, mock)
  },
  startApplicationRefreshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'startApplicationRefresh', 'SsmSap', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'tagResource', 'SsmSap', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'tagResource', 'SsmSap', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'tagResource', 'SsmSap', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'untagResource', 'SsmSap', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'untagResource', 'SsmSap', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'untagResource', 'SsmSap', Promise.reject(result), true, mock)
  },
  updateApplicationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'updateApplicationSettings', 'SsmSap', Promise.resolve(result), true, mock)
  },
  updateApplicationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'updateApplicationSettings', 'SsmSap', Promise.resolve(result), false, mock)
  },
  updateApplicationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'updateApplicationSettings', 'SsmSap', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'send', 'SsmSapClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'send', 'SsmSapClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-sap', 'send', 'SsmSapClient', Promise.reject(result), true, mock)
  }
}
