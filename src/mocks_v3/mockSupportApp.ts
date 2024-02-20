
/**
* @description mocks_v3:mockSupportApp module is mocks for AWS-SDK V3
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
export const mockSupportApp = {
  createSlackChannelConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'createSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), true, mock)
  },
  createSlackChannelConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'createSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), false, mock)
  },
  createSlackChannelConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'createSlackChannelConfiguration', 'SupportApp', Promise.reject(result), true, mock)
  },
  deleteAccountAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteAccountAlias', 'SupportApp', Promise.resolve(result), true, mock)
  },
  deleteAccountAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteAccountAlias', 'SupportApp', Promise.resolve(result), false, mock)
  },
  deleteAccountAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteAccountAlias', 'SupportApp', Promise.reject(result), true, mock)
  },
  deleteSlackChannelConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), true, mock)
  },
  deleteSlackChannelConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), false, mock)
  },
  deleteSlackChannelConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackChannelConfiguration', 'SupportApp', Promise.reject(result), true, mock)
  },
  deleteSlackWorkspaceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackWorkspaceConfiguration', 'SupportApp', Promise.resolve(result), true, mock)
  },
  deleteSlackWorkspaceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackWorkspaceConfiguration', 'SupportApp', Promise.resolve(result), false, mock)
  },
  deleteSlackWorkspaceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'deleteSlackWorkspaceConfiguration', 'SupportApp', Promise.reject(result), true, mock)
  },
  getAccountAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'getAccountAlias', 'SupportApp', Promise.resolve(result), true, mock)
  },
  getAccountAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'getAccountAlias', 'SupportApp', Promise.resolve(result), false, mock)
  },
  getAccountAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'getAccountAlias', 'SupportApp', Promise.reject(result), true, mock)
  },
  listSlackChannelConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackChannelConfigurations', 'SupportApp', Promise.resolve(result), true, mock)
  },
  listSlackChannelConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackChannelConfigurations', 'SupportApp', Promise.resolve(result), false, mock)
  },
  listSlackChannelConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackChannelConfigurations', 'SupportApp', Promise.reject(result), true, mock)
  },
  listSlackWorkspaceConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackWorkspaceConfigurations', 'SupportApp', Promise.resolve(result), true, mock)
  },
  listSlackWorkspaceConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackWorkspaceConfigurations', 'SupportApp', Promise.resolve(result), false, mock)
  },
  listSlackWorkspaceConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'listSlackWorkspaceConfigurations', 'SupportApp', Promise.reject(result), true, mock)
  },
  putAccountAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'putAccountAlias', 'SupportApp', Promise.resolve(result), true, mock)
  },
  putAccountAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'putAccountAlias', 'SupportApp', Promise.resolve(result), false, mock)
  },
  putAccountAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'putAccountAlias', 'SupportApp', Promise.reject(result), true, mock)
  },
  registerSlackWorkspaceForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'registerSlackWorkspaceForOrganization', 'SupportApp', Promise.resolve(result), true, mock)
  },
  registerSlackWorkspaceForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'registerSlackWorkspaceForOrganization', 'SupportApp', Promise.resolve(result), false, mock)
  },
  registerSlackWorkspaceForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'registerSlackWorkspaceForOrganization', 'SupportApp', Promise.reject(result), true, mock)
  },
  updateSlackChannelConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'updateSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), true, mock)
  },
  updateSlackChannelConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'updateSlackChannelConfiguration', 'SupportApp', Promise.resolve(result), false, mock)
  },
  updateSlackChannelConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'updateSlackChannelConfiguration', 'SupportApp', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'send', 'SupportAppClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'send', 'SupportAppClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support-app', 'send', 'SupportAppClient', Promise.reject(result), true, mock)
  }
}
