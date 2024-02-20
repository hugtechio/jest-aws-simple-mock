
/**
* @description mocks_v3:mockGrafana module is mocks for AWS-SDK V3
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
export const mockGrafana = {
  associateLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'associateLicense', 'Grafana', Promise.resolve(result), true, mock)
  },
  associateLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'associateLicense', 'Grafana', Promise.resolve(result), false, mock)
  },
  associateLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'associateLicense', 'Grafana', Promise.reject(result), true, mock)
  },
  createWorkspaceApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspaceApiKey', 'Grafana', Promise.resolve(result), true, mock)
  },
  createWorkspaceApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspaceApiKey', 'Grafana', Promise.resolve(result), false, mock)
  },
  createWorkspaceApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspaceApiKey', 'Grafana', Promise.reject(result), true, mock)
  },
  createWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  createWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  createWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'createWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  deleteWorkspaceApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspaceApiKey', 'Grafana', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspaceApiKey', 'Grafana', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspaceApiKey', 'Grafana', Promise.reject(result), true, mock)
  },
  deleteWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'deleteWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  describeWorkspaceAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceAuthentication', 'Grafana', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceAuthentication', 'Grafana', Promise.resolve(result), false, mock)
  },
  describeWorkspaceAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceAuthentication', 'Grafana', Promise.reject(result), true, mock)
  },
  describeWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  describeWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  describeWorkspaceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceConfiguration', 'Grafana', Promise.resolve(result), true, mock)
  },
  describeWorkspaceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceConfiguration', 'Grafana', Promise.resolve(result), false, mock)
  },
  describeWorkspaceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'describeWorkspaceConfiguration', 'Grafana', Promise.reject(result), true, mock)
  },
  disassociateLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'disassociateLicense', 'Grafana', Promise.resolve(result), true, mock)
  },
  disassociateLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'disassociateLicense', 'Grafana', Promise.resolve(result), false, mock)
  },
  disassociateLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'disassociateLicense', 'Grafana', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listPermissions', 'Grafana', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listPermissions', 'Grafana', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listPermissions', 'Grafana', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listTagsForResource', 'Grafana', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listTagsForResource', 'Grafana', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listTagsForResource', 'Grafana', Promise.reject(result), true, mock)
  },
  listVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listVersions', 'Grafana', Promise.resolve(result), true, mock)
  },
  listVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listVersions', 'Grafana', Promise.resolve(result), false, mock)
  },
  listVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listVersions', 'Grafana', Promise.reject(result), true, mock)
  },
  listWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listWorkspaces', 'Grafana', Promise.resolve(result), true, mock)
  },
  listWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listWorkspaces', 'Grafana', Promise.resolve(result), false, mock)
  },
  listWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'listWorkspaces', 'Grafana', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'tagResource', 'Grafana', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'tagResource', 'Grafana', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'tagResource', 'Grafana', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'untagResource', 'Grafana', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'untagResource', 'Grafana', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'untagResource', 'Grafana', Promise.reject(result), true, mock)
  },
  updatePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updatePermissions', 'Grafana', Promise.resolve(result), true, mock)
  },
  updatePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updatePermissions', 'Grafana', Promise.resolve(result), false, mock)
  },
  updatePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updatePermissions', 'Grafana', Promise.reject(result), true, mock)
  },
  updateWorkspaceAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceAuthentication', 'Grafana', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceAuthentication', 'Grafana', Promise.resolve(result), false, mock)
  },
  updateWorkspaceAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceAuthentication', 'Grafana', Promise.reject(result), true, mock)
  },
  updateWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  updateWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  updateWorkspaceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceConfiguration', 'Grafana', Promise.resolve(result), true, mock)
  },
  updateWorkspaceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceConfiguration', 'Grafana', Promise.resolve(result), false, mock)
  },
  updateWorkspaceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'updateWorkspaceConfiguration', 'Grafana', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'send', 'GrafanaClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'send', 'GrafanaClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-grafana', 'send', 'GrafanaClient', Promise.reject(result), true, mock)
  }
}
