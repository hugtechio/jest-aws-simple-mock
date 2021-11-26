
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
  export const mockRAM = {
  acceptResourceShareInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', Promise.resolve(result), true, mock)
  },
  acceptResourceShareInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', Promise.resolve(result), false, mock)
  },
  acceptResourceShareInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', Promise.reject(result), true, mock)
  },
  associateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', Promise.resolve(result), true, mock)
  },
  associateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', Promise.resolve(result), false, mock)
  },
  associateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', Promise.reject(result), true, mock)
  },
  associateResourceSharePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', Promise.resolve(result), true, mock)
  },
  associateResourceSharePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', Promise.resolve(result), false, mock)
  },
  associateResourceSharePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', Promise.reject(result), true, mock)
  },
  createResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', Promise.resolve(result), true, mock)
  },
  createResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', Promise.resolve(result), false, mock)
  },
  createResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', Promise.reject(result), true, mock)
  },
  deleteResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', Promise.resolve(result), true, mock)
  },
  deleteResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', Promise.resolve(result), false, mock)
  },
  deleteResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', Promise.reject(result), true, mock)
  },
  disassociateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', Promise.resolve(result), true, mock)
  },
  disassociateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', Promise.resolve(result), false, mock)
  },
  disassociateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', Promise.reject(result), true, mock)
  },
  disassociateResourceSharePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', Promise.resolve(result), true, mock)
  },
  disassociateResourceSharePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', Promise.resolve(result), false, mock)
  },
  disassociateResourceSharePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', Promise.reject(result), true, mock)
  },
  enableSharingWithAwsOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', Promise.resolve(result), true, mock)
  },
  enableSharingWithAwsOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', Promise.resolve(result), false, mock)
  },
  enableSharingWithAwsOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', Promise.reject(result), true, mock)
  },
  getPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', Promise.resolve(result), true, mock)
  },
  getPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', Promise.resolve(result), false, mock)
  },
  getPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', Promise.reject(result), true, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', Promise.resolve(result), true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', Promise.resolve(result), false, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', Promise.reject(result), true, mock)
  },
  getResourceShareAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', Promise.resolve(result), true, mock)
  },
  getResourceShareAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', Promise.resolve(result), false, mock)
  },
  getResourceShareAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', Promise.reject(result), true, mock)
  },
  getResourceShareInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', Promise.resolve(result), true, mock)
  },
  getResourceShareInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', Promise.resolve(result), false, mock)
  },
  getResourceShareInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', Promise.reject(result), true, mock)
  },
  getResourceShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', Promise.resolve(result), true, mock)
  },
  getResourceSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', Promise.resolve(result), false, mock)
  },
  getResourceSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', Promise.reject(result), true, mock)
  },
  listPendingInvitationResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', Promise.resolve(result), true, mock)
  },
  listPendingInvitationResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', Promise.resolve(result), false, mock)
  },
  listPendingInvitationResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', Promise.reject(result), true, mock)
  },
  listPrincipals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', Promise.resolve(result), true, mock)
  },
  listPrincipalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', Promise.resolve(result), false, mock)
  },
  listPrincipalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', Promise.reject(result), true, mock)
  },
  listResourceSharePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', Promise.resolve(result), true, mock)
  },
  listResourceSharePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', Promise.resolve(result), false, mock)
  },
  listResourceSharePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', Promise.reject(result), true, mock)
  },
  listResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', Promise.resolve(result), true, mock)
  },
  listResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', Promise.resolve(result), false, mock)
  },
  listResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', Promise.reject(result), true, mock)
  },
  promoteResourceShareCreatedFromPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', Promise.resolve(result), true, mock)
  },
  promoteResourceShareCreatedFromPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', Promise.resolve(result), false, mock)
  },
  promoteResourceShareCreatedFromPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', Promise.reject(result), true, mock)
  },
  rejectResourceShareInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', Promise.resolve(result), true, mock)
  },
  rejectResourceShareInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', Promise.resolve(result), false, mock)
  },
  rejectResourceShareInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', Promise.reject(result), true, mock)
  },
  updateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', Promise.resolve(result), true, mock)
  },
  updateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', Promise.resolve(result), false, mock)
  },
  updateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', Promise.reject(result), true, mock)
  },
}
