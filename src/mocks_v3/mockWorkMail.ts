
/**
* @description mocks_v3:mockWorkMail module is mocks for AWS-SDK V3
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
export const mockWorkMail = {
  associateDelegateToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateDelegateToResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  associateDelegateToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateDelegateToResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  associateDelegateToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateDelegateToResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  associateMemberToGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateMemberToGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  associateMemberToGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateMemberToGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  associateMemberToGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'associateMemberToGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  assumeImpersonationRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'assumeImpersonationRole', 'WorkMail', Promise.resolve(result), true, mock)
  },
  assumeImpersonationRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'assumeImpersonationRole', 'WorkMail', Promise.resolve(result), false, mock)
  },
  assumeImpersonationRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'assumeImpersonationRole', 'WorkMail', Promise.reject(result), true, mock)
  },
  cancelMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'cancelMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  cancelMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'cancelMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  cancelMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'cancelMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAlias', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAlias', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAlias', 'WorkMail', Promise.reject(result), true, mock)
  },
  createAvailabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createAvailabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createAvailabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createAvailabilityConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  createImpersonationRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createImpersonationRole', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createImpersonationRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createImpersonationRole', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createImpersonationRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createImpersonationRole', 'WorkMail', Promise.reject(result), true, mock)
  },
  createMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  createOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  createResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'createUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteAccessControlRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAccessControlRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteAccessControlRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAccessControlRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteAccessControlRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAccessControlRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAlias', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAlias', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAlias', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteAvailabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteAvailabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteAvailabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteAvailabilityConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteEmailMonitoringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteEmailMonitoringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteEmailMonitoringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteEmailMonitoringConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteImpersonationRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteImpersonationRole', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteImpersonationRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteImpersonationRole', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteImpersonationRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteImpersonationRole', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deleteUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  deregisterFromWorkMail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterFromWorkMail', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deregisterFromWorkMailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterFromWorkMail', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deregisterFromWorkMailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterFromWorkMail', 'WorkMail', Promise.reject(result), true, mock)
  },
  deregisterMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  deregisterMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  deregisterMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'deregisterMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeEmailMonitoringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeEmailMonitoringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeEmailMonitoringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEmailMonitoringConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEntity', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEntity', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeEntity', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeInboundDmarcSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeInboundDmarcSettings', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeInboundDmarcSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeInboundDmarcSettings', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeInboundDmarcSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeInboundDmarcSettings', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeOrganization', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeOrganization', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeOrganization', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'describeUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  disassociateDelegateFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateDelegateFromResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  disassociateDelegateFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateDelegateFromResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  disassociateDelegateFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateDelegateFromResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  disassociateMemberFromGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateMemberFromGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  disassociateMemberFromGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateMemberFromGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  disassociateMemberFromGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'disassociateMemberFromGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  getAccessControlEffect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getAccessControlEffect', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getAccessControlEffectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getAccessControlEffect', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getAccessControlEffectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getAccessControlEffect', 'WorkMail', Promise.reject(result), true, mock)
  },
  getDefaultRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getDefaultRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getDefaultRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getDefaultRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getDefaultRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getDefaultRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  getImpersonationRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRole', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getImpersonationRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRole', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getImpersonationRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRole', 'WorkMail', Promise.reject(result), true, mock)
  },
  getImpersonationRoleEffect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRoleEffect', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getImpersonationRoleEffectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRoleEffect', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getImpersonationRoleEffectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getImpersonationRoleEffect', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMailboxDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailboxDetails', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMailboxDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailboxDetails', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMailboxDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMailboxDetails', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMobileDeviceAccessEffect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessEffect', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMobileDeviceAccessEffectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessEffect', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMobileDeviceAccessEffectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessEffect', 'WorkMail', Promise.reject(result), true, mock)
  },
  getMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  getMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  getMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'getMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  listAccessControlRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAccessControlRules', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listAccessControlRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAccessControlRules', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listAccessControlRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAccessControlRules', 'WorkMail', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAliases', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAliases', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAliases', 'WorkMail', Promise.reject(result), true, mock)
  },
  listAvailabilityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAvailabilityConfigurations', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listAvailabilityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAvailabilityConfigurations', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listAvailabilityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listAvailabilityConfigurations', 'WorkMail', Promise.reject(result), true, mock)
  },
  listGroupMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupMembers', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listGroupMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupMembers', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listGroupMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupMembers', 'WorkMail', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroups', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroups', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroups', 'WorkMail', Promise.reject(result), true, mock)
  },
  listGroupsForEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupsForEntity', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listGroupsForEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupsForEntity', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listGroupsForEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listGroupsForEntity', 'WorkMail', Promise.reject(result), true, mock)
  },
  listImpersonationRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listImpersonationRoles', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listImpersonationRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listImpersonationRoles', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listImpersonationRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listImpersonationRoles', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailDomains', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailDomains', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailDomains', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailboxExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxExportJobs', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailboxExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxExportJobs', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailboxExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxExportJobs', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMobileDeviceAccessOverrides: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessOverrides', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMobileDeviceAccessOverridesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessOverrides', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMobileDeviceAccessOverridesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessOverrides', 'WorkMail', Promise.reject(result), true, mock)
  },
  listMobileDeviceAccessRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessRules', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listMobileDeviceAccessRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessRules', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listMobileDeviceAccessRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listMobileDeviceAccessRules', 'WorkMail', Promise.reject(result), true, mock)
  },
  listOrganizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listOrganizations', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listOrganizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listOrganizations', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listOrganizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listOrganizations', 'WorkMail', Promise.reject(result), true, mock)
  },
  listResourceDelegates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResourceDelegates', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listResourceDelegatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResourceDelegates', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listResourceDelegatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResourceDelegates', 'WorkMail', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResources', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResources', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listResources', 'WorkMail', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listTagsForResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listTagsForResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listTagsForResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listUsers', 'WorkMail', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listUsers', 'WorkMail', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'listUsers', 'WorkMail', Promise.reject(result), true, mock)
  },
  putAccessControlRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putAccessControlRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putAccessControlRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putAccessControlRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putAccessControlRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putAccessControlRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  putEmailMonitoringConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putEmailMonitoringConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putEmailMonitoringConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putEmailMonitoringConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putEmailMonitoringConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  putInboundDmarcSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putInboundDmarcSettings', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putInboundDmarcSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putInboundDmarcSettings', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putInboundDmarcSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putInboundDmarcSettings', 'WorkMail', Promise.reject(result), true, mock)
  },
  putMailboxPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMailboxPermissions', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putMailboxPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMailboxPermissions', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putMailboxPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMailboxPermissions', 'WorkMail', Promise.reject(result), true, mock)
  },
  putMobileDeviceAccessOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putMobileDeviceAccessOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMobileDeviceAccessOverride', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putMobileDeviceAccessOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putMobileDeviceAccessOverride', 'WorkMail', Promise.reject(result), true, mock)
  },
  putRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putRetentionPolicy', 'WorkMail', Promise.resolve(result), true, mock)
  },
  putRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putRetentionPolicy', 'WorkMail', Promise.resolve(result), false, mock)
  },
  putRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'putRetentionPolicy', 'WorkMail', Promise.reject(result), true, mock)
  },
  registerMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  registerMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  registerMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  registerToWorkMail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerToWorkMail', 'WorkMail', Promise.resolve(result), true, mock)
  },
  registerToWorkMailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerToWorkMail', 'WorkMail', Promise.resolve(result), false, mock)
  },
  registerToWorkMailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'registerToWorkMail', 'WorkMail', Promise.reject(result), true, mock)
  },
  resetPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'resetPassword', 'WorkMail', Promise.resolve(result), true, mock)
  },
  resetPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'resetPassword', 'WorkMail', Promise.resolve(result), false, mock)
  },
  resetPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'resetPassword', 'WorkMail', Promise.reject(result), true, mock)
  },
  startMailboxExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'startMailboxExportJob', 'WorkMail', Promise.resolve(result), true, mock)
  },
  startMailboxExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'startMailboxExportJob', 'WorkMail', Promise.resolve(result), false, mock)
  },
  startMailboxExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'startMailboxExportJob', 'WorkMail', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'tagResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'tagResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'tagResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  testAvailabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'testAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  testAvailabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'testAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  testAvailabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'testAvailabilityConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'untagResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'untagResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'untagResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateAvailabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateAvailabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateAvailabilityConfiguration', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateAvailabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateAvailabilityConfiguration', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateDefaultMailDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateDefaultMailDomain', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateDefaultMailDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateDefaultMailDomain', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateDefaultMailDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateDefaultMailDomain', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateGroup', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateGroup', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateGroup', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateImpersonationRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateImpersonationRole', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateImpersonationRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateImpersonationRole', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateImpersonationRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateImpersonationRole', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateMailboxQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMailboxQuota', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateMailboxQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMailboxQuota', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateMailboxQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMailboxQuota', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateMobileDeviceAccessRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateMobileDeviceAccessRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMobileDeviceAccessRule', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateMobileDeviceAccessRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateMobileDeviceAccessRule', 'WorkMail', Promise.reject(result), true, mock)
  },
  updatePrimaryEmailAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updatePrimaryEmailAddress', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updatePrimaryEmailAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updatePrimaryEmailAddress', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updatePrimaryEmailAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updatePrimaryEmailAddress', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateResource', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateResource', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateResource', 'WorkMail', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateUser', 'WorkMail', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateUser', 'WorkMail', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'updateUser', 'WorkMail', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'send', 'WorkMailClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'send', 'WorkMailClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmail', 'send', 'WorkMailClient', Promise.reject(result), true, mock)
  }
}
