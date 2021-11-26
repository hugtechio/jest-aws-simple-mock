
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
  export const mockWorkSpaces = {
  associateConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  associateConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  associateConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  associateIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  associateIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  associateIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  authorizeIpRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeIpRules', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  authorizeIpRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeIpRules', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  authorizeIpRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeIpRules', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  copyWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  copyWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  copyWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createUpdatedWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createUpdatedWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createUpdatedWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  createWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  createWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  createWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deleteWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  deregisterWorkspaceDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  deregisterWorkspaceDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  deregisterWorkspaceDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWorkspaceDirectory', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeAccountModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountModifications', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeAccountModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountModifications', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeAccountModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountModifications', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeClientProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeClientPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeClientPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeConnectionAliasPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliasPermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeConnectionAliasPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliasPermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeConnectionAliasPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliasPermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeConnectionAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliases', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeConnectionAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliases', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeConnectionAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionAliases', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceBundles', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceBundles', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceBundles', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceDirectories', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceDirectories', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceDirectories', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImagePermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImagePermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImagePermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImages', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImages', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceImages', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaceSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceSnapshots', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspaceSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceSnapshots', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspaceSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceSnapshots', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  describeWorkspacesConnectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  describeWorkspacesConnectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  describeWorkspacesConnectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspacesConnectionStatus', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  disassociateConnectionAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionAlias', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  disassociateConnectionAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionAlias', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  disassociateConnectionAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionAlias', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  disassociateIpGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIpGroups', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  disassociateIpGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIpGroups', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  disassociateIpGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIpGroups', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  importWorkspaceImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importWorkspaceImage', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  importWorkspaceImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importWorkspaceImage', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  importWorkspaceImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importWorkspaceImage', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  listAvailableManagementCidrRanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagementCidrRanges', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  listAvailableManagementCidrRangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagementCidrRanges', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  listAvailableManagementCidrRangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagementCidrRanges', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  migrateWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('migrateWorkspace', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  migrateWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('migrateWorkspace', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  migrateWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('migrateWorkspace', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAccount', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAccount', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAccount', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyClientProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClientProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyClientPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClientProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyClientPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClientProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifySelfservicePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySelfservicePermissions', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifySelfservicePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySelfservicePermissions', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifySelfservicePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySelfservicePermissions', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceAccessProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceAccessPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceAccessPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceAccessProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceCreationProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceCreationPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceCreationPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceCreationProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceProperties', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspacePropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceProperties', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspacePropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceProperties', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  modifyWorkspaceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceState', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  modifyWorkspaceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceState', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  modifyWorkspaceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyWorkspaceState', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  rebootWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  rebootWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  rebootWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  rebuildWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebuildWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  rebuildWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebuildWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  rebuildWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebuildWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  registerWorkspaceDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  registerWorkspaceDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkspaceDirectory', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  registerWorkspaceDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkspaceDirectory', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  restoreWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreWorkspace', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  restoreWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreWorkspace', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  restoreWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreWorkspace', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  revokeIpRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeIpRules', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  revokeIpRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeIpRules', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  revokeIpRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeIpRules', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  startWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  startWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  startWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  stopWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  stopWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  stopWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  terminateWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkspaces', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  terminateWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkspaces', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  terminateWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkspaces', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateConnectionAliasPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectionAliasPermission', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateConnectionAliasPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectionAliasPermission', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateConnectionAliasPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectionAliasPermission', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateRulesOfIpGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRulesOfIpGroup', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateRulesOfIpGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRulesOfIpGroup', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateRulesOfIpGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRulesOfIpGroup', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateWorkspaceBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateWorkspaceBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceBundle', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateWorkspaceBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceBundle', 'WorkSpaces', Promise.reject(result), true, mock)
  },
  updateWorkspaceImagePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceImagePermission', 'WorkSpaces', Promise.resolve(result), true, mock)
  },
  updateWorkspaceImagePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceImagePermission', 'WorkSpaces', Promise.resolve(result), false, mock)
  },
  updateWorkspaceImagePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceImagePermission', 'WorkSpaces', Promise.reject(result), true, mock)
  },
}
