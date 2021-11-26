
/**
* @description mocks_v2:mockRAM.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockRAM = {
  acceptResourceShareInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', result, true, true, mock)
  },
  acceptResourceShareInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', result, false, true, mock)
  },
  acceptResourceShareInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptResourceShareInvitation', 'RAM', result, true, false, mock)
  },
  associateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', result, true, true, mock)
  },
  associateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', result, false, true, mock)
  },
  associateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceShare', 'RAM', result, true, false, mock)
  },
  associateResourceSharePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', result, true, true, mock)
  },
  associateResourceSharePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', result, false, true, mock)
  },
  associateResourceSharePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResourceSharePermission', 'RAM', result, true, false, mock)
  },
  createResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', result, true, true, mock)
  },
  createResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', result, false, true, mock)
  },
  createResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceShare', 'RAM', result, true, false, mock)
  },
  deleteResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', result, true, true, mock)
  },
  deleteResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', result, false, true, mock)
  },
  deleteResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceShare', 'RAM', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RAM', result, true, false, mock)
  },
  disassociateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', result, true, true, mock)
  },
  disassociateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', result, false, true, mock)
  },
  disassociateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceShare', 'RAM', result, true, false, mock)
  },
  disassociateResourceSharePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', result, true, true, mock)
  },
  disassociateResourceSharePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', result, false, true, mock)
  },
  disassociateResourceSharePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResourceSharePermission', 'RAM', result, true, false, mock)
  },
  enableSharingWithAwsOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', result, true, true, mock)
  },
  enableSharingWithAwsOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', result, false, true, mock)
  },
  enableSharingWithAwsOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSharingWithAwsOrganization', 'RAM', result, true, false, mock)
  },
  getPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', result, true, true, mock)
  },
  getPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', result, false, true, mock)
  },
  getPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermission', 'RAM', result, true, false, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', result, true, true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', result, false, true, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'RAM', result, true, false, mock)
  },
  getResourceShareAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', result, true, true, mock)
  },
  getResourceShareAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', result, false, true, mock)
  },
  getResourceShareAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareAssociations', 'RAM', result, true, false, mock)
  },
  getResourceShareInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', result, true, true, mock)
  },
  getResourceShareInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', result, false, true, mock)
  },
  getResourceShareInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShareInvitations', 'RAM', result, true, false, mock)
  },
  getResourceShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', result, true, true, mock)
  },
  getResourceSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', result, false, true, mock)
  },
  getResourceSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceShares', 'RAM', result, true, false, mock)
  },
  listPendingInvitationResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', result, true, true, mock)
  },
  listPendingInvitationResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', result, false, true, mock)
  },
  listPendingInvitationResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPendingInvitationResources', 'RAM', result, true, false, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', result, true, true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', result, false, true, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'RAM', result, true, false, mock)
  },
  listPrincipals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', result, true, true, mock)
  },
  listPrincipalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', result, false, true, mock)
  },
  listPrincipalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrincipals', 'RAM', result, true, false, mock)
  },
  listResourceSharePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', result, true, true, mock)
  },
  listResourceSharePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', result, false, true, mock)
  },
  listResourceSharePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSharePermissions', 'RAM', result, true, false, mock)
  },
  listResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', result, true, true, mock)
  },
  listResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', result, false, true, mock)
  },
  listResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTypes', 'RAM', result, true, false, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', result, true, true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', result, false, true, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'RAM', result, true, false, mock)
  },
  promoteResourceShareCreatedFromPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', result, true, true, mock)
  },
  promoteResourceShareCreatedFromPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', result, false, true, mock)
  },
  promoteResourceShareCreatedFromPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteResourceShareCreatedFromPolicy', 'RAM', result, true, false, mock)
  },
  rejectResourceShareInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', result, true, true, mock)
  },
  rejectResourceShareInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', result, false, true, mock)
  },
  rejectResourceShareInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectResourceShareInvitation', 'RAM', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RAM', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RAM', result, true, false, mock)
  },
  updateResourceShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', result, true, true, mock)
  },
  updateResourceShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', result, false, true, mock)
  },
  updateResourceShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceShare', 'RAM', result, true, false, mock)
  },
}
