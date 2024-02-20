
/**
* @description mocks_v3:mockWorkSpaces module is mocks for AWS-SDK V3
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
export const mockWorkSpaces = {
  associateConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  associateConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  associateConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  associateIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  associateIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  associateIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  associateWorkspaceApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateWorkspaceApplication', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  associateWorkspaceApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateWorkspaceApplication', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  associateWorkspaceApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'associateWorkspaceApplication', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  authorizeIpRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'authorizeIpRules', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  authorizeIpRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'authorizeIpRules', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  authorizeIpRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'authorizeIpRules', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  copyWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'copyWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  copyWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'copyWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  copyWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'copyWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createConnectClientAddIn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createConnectClientAddInAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createConnectClientAddInThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectClientAddIn', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createStandbyWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createStandbyWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createStandbyWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createStandbyWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createStandbyWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createStandbyWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createUpdatedWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createUpdatedWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createUpdatedWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createUpdatedWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createUpdatedWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createUpdatedWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'createWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteClientBranding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteClientBranding', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteClientBrandingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteClientBranding', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteClientBrandingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteClientBranding', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteConnectClientAddIn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteConnectClientAddInAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteConnectClientAddInThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectClientAddIn', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deleteWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deployWorkspaceApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deployWorkspaceApplications', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deployWorkspaceApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deployWorkspaceApplications', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deployWorkspaceApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deployWorkspaceApplications', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deregisterWorkspaceDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deregisterWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deregisterWorkspaceDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deregisterWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deregisterWorkspaceDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'deregisterWorkspaceDirectory', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccount', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccount', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccount', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeAccountModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccountModifications', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeAccountModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccountModifications', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeAccountModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeAccountModifications', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeApplicationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplicationAssociations', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeApplicationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplicationAssociations', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeApplicationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplicationAssociations', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplications', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplications', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeApplications', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeBundleAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeBundleAssociations', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeBundleAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeBundleAssociations', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeBundleAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeBundleAssociations', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeClientBranding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientBranding', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeClientBrandingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientBranding', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeClientBrandingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientBranding', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeClientProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeClientPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeClientPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeClientProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeConnectClientAddIns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectClientAddIns', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeConnectClientAddInsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectClientAddIns', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeConnectClientAddInsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectClientAddIns', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeConnectionAliasPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliasPermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeConnectionAliasPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliasPermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeConnectionAliasPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliasPermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeConnectionAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliases', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeConnectionAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliases', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeConnectionAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeConnectionAliases', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeImageAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeImageAssociations', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeImageAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeImageAssociations', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeImageAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeImageAssociations', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceAssociations', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceAssociations', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceAssociations', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceBundles', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceBundles', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceBundles', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceDirectories', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceDirectories', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceDirectories', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImagePermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImagePermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImagePermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImages', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImages', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceImages', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceSnapshots', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceSnapshots', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaceSnapshots', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspacesConnectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspacesConnectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspacesConnectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  disassociateConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  disassociateConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  disassociateConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  disassociateIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  disassociateIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  disassociateIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  disassociateWorkspaceApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateWorkspaceApplication', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  disassociateWorkspaceApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateWorkspaceApplication', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  disassociateWorkspaceApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'disassociateWorkspaceApplication', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  importClientBranding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importClientBranding', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  importClientBrandingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importClientBranding', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  importClientBrandingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importClientBranding', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  importWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  importWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  importWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'importWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  listAvailableManagementCidrRanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'listAvailableManagementCidrRanges', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  listAvailableManagementCidrRangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'listAvailableManagementCidrRanges', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  listAvailableManagementCidrRangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'listAvailableManagementCidrRanges', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  migrateWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'migrateWorkspace', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  migrateWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'migrateWorkspace', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  migrateWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'migrateWorkspace', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyAccount', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyAccount', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyAccount', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyCertificateBasedAuthProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyCertificateBasedAuthProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyCertificateBasedAuthPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyCertificateBasedAuthProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyCertificateBasedAuthPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyCertificateBasedAuthProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyClientProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyClientProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyClientPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyClientProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyClientPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyClientProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifySamlProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySamlProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifySamlPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySamlProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifySamlPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySamlProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifySelfservicePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySelfservicePermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifySelfservicePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySelfservicePermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifySelfservicePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifySelfservicePermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceAccessProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceAccessPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceAccessPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceCreationProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceCreationPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceCreationPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspacePropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspacePropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceState', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceState', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'modifyWorkspaceState', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  rebootWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebootWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  rebootWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebootWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  rebootWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebootWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  rebuildWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebuildWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  rebuildWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebuildWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  rebuildWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'rebuildWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  registerWorkspaceDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'registerWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  registerWorkspaceDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'registerWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  registerWorkspaceDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'registerWorkspaceDirectory', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  restoreWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'restoreWorkspace', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  restoreWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'restoreWorkspace', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  restoreWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'restoreWorkspace', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  revokeIpRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'revokeIpRules', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  revokeIpRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'revokeIpRules', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  revokeIpRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'revokeIpRules', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  startWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'startWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  startWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'startWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  startWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'startWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  stopWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'stopWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  stopWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'stopWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  stopWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'stopWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  terminateWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'terminateWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  terminateWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'terminateWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  terminateWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'terminateWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateConnectClientAddIn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateConnectClientAddInAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectClientAddIn', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateConnectClientAddInThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectClientAddIn', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateConnectionAliasPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectionAliasPermission', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateConnectionAliasPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectionAliasPermission', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateConnectionAliasPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateConnectionAliasPermission', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateRulesOfIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateRulesOfIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateRulesOfIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateRulesOfIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateRulesOfIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateRulesOfIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateWorkspaceImagePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceImagePermission', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateWorkspaceImagePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceImagePermission', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateWorkspaceImagePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'updateWorkspaceImagePermission', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'send', 'WorkSpacesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'send', 'WorkSpacesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces', 'send', 'WorkSpacesClient', Promise.reject(result), true, mock)
  }
}
