
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockAmp = {
  createAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  createAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  createAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  createRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  createRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  createRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  createWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  createWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  createWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  deleteAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  deleteRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  deleteWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  describeAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  describeAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  describeAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  describeRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  describeRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  describeRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  describeWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Amp', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Amp', Promise.resolve(result), false, mock)
  },
  describeWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Amp', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amp', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amp', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amp', Promise.reject(result), true, mock)
  },
  listRuleGroupsNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroupsNamespaces', 'Amp', Promise.resolve(result), true, mock)
  },
  listRuleGroupsNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroupsNamespaces', 'Amp', Promise.resolve(result), false, mock)
  },
  listRuleGroupsNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroupsNamespaces', 'Amp', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amp', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amp', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amp', Promise.reject(result), true, mock)
  },
  listWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Amp', Promise.resolve(result), true, mock)
  },
  listWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Amp', Promise.resolve(result), false, mock)
  },
  listWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Amp', Promise.reject(result), true, mock)
  },
  putAlertManagerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlertManagerDefinition', 'Amp', Promise.resolve(result), true, mock)
  },
  putAlertManagerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlertManagerDefinition', 'Amp', Promise.resolve(result), false, mock)
  },
  putAlertManagerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlertManagerDefinition', 'Amp', Promise.reject(result), true, mock)
  },
  putRuleGroupsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRuleGroupsNamespace', 'Amp', Promise.resolve(result), true, mock)
  },
  putRuleGroupsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRuleGroupsNamespace', 'Amp', Promise.resolve(result), false, mock)
  },
  putRuleGroupsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRuleGroupsNamespace', 'Amp', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amp', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amp', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amp', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amp', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amp', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amp', Promise.reject(result), true, mock)
  },
  updateWorkspaceAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAlias', 'Amp', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAlias', 'Amp', Promise.resolve(result), false, mock)
  },
  updateWorkspaceAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAlias', 'Amp', Promise.reject(result), true, mock)
  },
}
