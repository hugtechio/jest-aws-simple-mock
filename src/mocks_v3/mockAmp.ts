
/**
* @description mocks_v3:mockAmp module is mocks for AWS-SDK V3
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

  export const mockAmp = {
  createAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  createAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  createAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  createRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  createRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  createRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  createWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  createWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  createWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'createWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  deleteAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  deleteRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  deleteWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'deleteWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  describeAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  describeAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  describeAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  describeRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  describeRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  describeRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  describeWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  describeWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'describeWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'destroy', 'Amp', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'destroy', 'Amp', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'destroy', 'Amp', Promise.reject(result), true, mock)
  },
  listRuleGroupsNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listRuleGroupsNamespaces', 'Amp', Promise.resolve(result), true, mock)
  },
  listRuleGroupsNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listRuleGroupsNamespaces', 'Amp', Promise.resolve(result), false, mock)
  },
  listRuleGroupsNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listRuleGroupsNamespaces', 'Amp', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listTagsForResource', 'Amp', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listTagsForResource', 'Amp', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listTagsForResource', 'Amp', Promise.reject(result), true, mock)
  },
  listWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listWorkspaces', 'Amp', Promise.resolve(result), true, mock)
  },
  listWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listWorkspaces', 'Amp', Promise.resolve(result), false, mock)
  },
  listWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'listWorkspaces', 'Amp', Promise.reject(result), true, mock)
  },
  putAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  putAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  putAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  putRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  putRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  putRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'putRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'tagResource', 'Amp', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'tagResource', 'Amp', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'tagResource', 'Amp', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'untagResource', 'Amp', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'untagResource', 'Amp', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'untagResource', 'Amp', Promise.reject(result), true, mock)
  },
  updateWorkspaceAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'updateWorkspaceAlias', 'Amp', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'updateWorkspaceAlias', 'Amp', Promise.resolve(result), false, mock)
  },
  updateWorkspaceAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'updateWorkspaceAlias', 'Amp', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'send', 'AmpClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'send', 'AmpClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amp', 'send', 'AmpClient', Promise.reject(result), true, mock)
  }
}