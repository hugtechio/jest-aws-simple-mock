
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
  export const mockWorkMail = {
  associateDelegateToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDelegateToResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  associateDelegateToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDelegateToResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  associateDelegateToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDelegateToResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  associateMemberToGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberToGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  associateMemberToGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberToGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  associateMemberToGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberToGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  cancelMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  cancelMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  cancelMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'WorkMail', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  createMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  createOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  createResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteAccessControlRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessControlRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteAccessControlRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessControlRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteAccessControlRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessControlRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  deregisterFromWorkMail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterFromWorkMail', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deregisterFromWorkMailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterFromWorkMail', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deregisterFromWorkMailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterFromWorkMail', 'WorkMail', Promise.reject(result), true, mock)
  },
  deregisterMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deregisterMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deregisterMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeInboundDmarcSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundDmarcSettings', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeInboundDmarcSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundDmarcSettings', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeInboundDmarcSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundDmarcSettings', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMail', Promise.reject(result), true, mock)
  },
  disassociateDelegateFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDelegateFromResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  disassociateDelegateFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDelegateFromResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  disassociateDelegateFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDelegateFromResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  disassociateMemberFromGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberFromGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  disassociateMemberFromGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberFromGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  disassociateMemberFromGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberFromGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  getAccessControlEffect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessControlEffect', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getAccessControlEffectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessControlEffect', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getAccessControlEffectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessControlEffect', 'WorkMail', Promise.reject(result), true, mock)
  },
  getDefaultRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getDefaultRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getDefaultRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMailboxDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailboxDetails', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMailboxDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailboxDetails', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMailboxDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMailboxDetails', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMobileDeviceAccessEffect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessEffect', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMobileDeviceAccessEffectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessEffect', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMobileDeviceAccessEffectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessEffect', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  listAccessControlRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessControlRules', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listAccessControlRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessControlRules', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listAccessControlRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessControlRules', 'WorkMail', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'WorkMail', Promise.reject(result), true, mock)
  },
  listGroupMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupMembers', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listGroupMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupMembers', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listGroupMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupMembers', 'WorkMail', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailDomains', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailDomains', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailDomains', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailboxExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxExportJobs', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailboxExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxExportJobs', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailboxExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxExportJobs', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMobileDeviceAccessOverrides: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessOverrides', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMobileDeviceAccessOverridesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessOverrides', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMobileDeviceAccessOverridesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessOverrides', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMobileDeviceAccessRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessRules', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMobileDeviceAccessRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessRules', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMobileDeviceAccessRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMobileDeviceAccessRules', 'WorkMail', Promise.reject(result), true, mock)
  },
  listOrganizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizations', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listOrganizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizations', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listOrganizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizations', 'WorkMail', Promise.reject(result), true, mock)
  },
  listResourceDelegates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDelegates', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listResourceDelegatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDelegates', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listResourceDelegatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDelegates', 'WorkMail', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'WorkMail', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'WorkMail', Promise.reject(result), true, mock)
  },
  putAccessControlRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccessControlRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putAccessControlRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccessControlRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putAccessControlRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccessControlRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  putInboundDmarcSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInboundDmarcSettings', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putInboundDmarcSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInboundDmarcSettings', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putInboundDmarcSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInboundDmarcSettings', 'WorkMail', Promise.reject(result), true, mock)
  },
  putMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  putMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  putRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  registerMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  registerMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  registerMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  registerToWorkMail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerToWorkMail', 'WorkMail', Promise.resolve(result), true, mock)
  },
  registerToWorkMailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerToWorkMail', 'WorkMail', Promise.resolve(result), false, mock)
  },
  registerToWorkMailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerToWorkMail', 'WorkMail', Promise.reject(result), true, mock)
  },
  resetPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetPassword', 'WorkMail', Promise.resolve(result), true, mock)
  },
  resetPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetPassword', 'WorkMail', Promise.resolve(result), false, mock)
  },
  resetPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetPassword', 'WorkMail', Promise.reject(result), true, mock)
  },
  startMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  startMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  startMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateDefaultMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateDefaultMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateDefaultMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDefaultMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateMailboxQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMailboxQuota', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateMailboxQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMailboxQuota', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateMailboxQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMailboxQuota', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  updatePrimaryEmailAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryEmailAddress', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updatePrimaryEmailAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryEmailAddress', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updatePrimaryEmailAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryEmailAddress', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'WorkMail', Promise.reject(result), true, mock)
  },
}
