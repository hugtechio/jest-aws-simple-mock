
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
  export const mockOrganizations = {
  acceptHandshake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptHandshake', 'Organizations', Promise.resolve(result), true, mock)
  },
  acceptHandshakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptHandshake', 'Organizations', Promise.resolve(result), false, mock)
  },
  acceptHandshakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptHandshake', 'Organizations', Promise.reject(result), true, mock)
  },
  attachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  attachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  attachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  cancelHandshake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelHandshake', 'Organizations', Promise.resolve(result), true, mock)
  },
  cancelHandshakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelHandshake', 'Organizations', Promise.resolve(result), false, mock)
  },
  cancelHandshakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelHandshake', 'Organizations', Promise.reject(result), true, mock)
  },
  createAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  createAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  createAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  createGovCloudAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGovCloudAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  createGovCloudAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGovCloudAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  createGovCloudAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGovCloudAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  createOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  createOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  createOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  createOrganizationalUnit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganizationalUnit', 'Organizations', Promise.resolve(result), true, mock)
  },
  createOrganizationalUnitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganizationalUnit', 'Organizations', Promise.resolve(result), false, mock)
  },
  createOrganizationalUnitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrganizationalUnit', 'Organizations', Promise.reject(result), true, mock)
  },
  createPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  createPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  createPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  declineHandshake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineHandshake', 'Organizations', Promise.resolve(result), true, mock)
  },
  declineHandshakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineHandshake', 'Organizations', Promise.resolve(result), false, mock)
  },
  declineHandshakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineHandshake', 'Organizations', Promise.reject(result), true, mock)
  },
  deleteOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  deleteOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  deleteOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  deleteOrganizationalUnit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationalUnit', 'Organizations', Promise.resolve(result), true, mock)
  },
  deleteOrganizationalUnitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationalUnit', 'Organizations', Promise.resolve(result), false, mock)
  },
  deleteOrganizationalUnitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationalUnit', 'Organizations', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  deregisterDelegatedAdministrator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterDelegatedAdministrator', 'Organizations', Promise.resolve(result), true, mock)
  },
  deregisterDelegatedAdministratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterDelegatedAdministrator', 'Organizations', Promise.resolve(result), false, mock)
  },
  deregisterDelegatedAdministratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterDelegatedAdministrator', 'Organizations', Promise.reject(result), true, mock)
  },
  describeAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  describeCreateAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCreateAccountStatus', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeCreateAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCreateAccountStatus', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeCreateAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCreateAccountStatus', 'Organizations', Promise.reject(result), true, mock)
  },
  describeEffectivePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeEffectivePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeEffectivePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  describeHandshake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHandshake', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeHandshakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHandshake', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeHandshakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHandshake', 'Organizations', Promise.reject(result), true, mock)
  },
  describeOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  describeOrganizationalUnit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationalUnit', 'Organizations', Promise.resolve(result), true, mock)
  },
  describeOrganizationalUnitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationalUnit', 'Organizations', Promise.resolve(result), false, mock)
  },
  describeOrganizationalUnitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationalUnit', 'Organizations', Promise.reject(result), true, mock)
  },
  describePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  describePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  describePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Organizations', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Organizations', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Organizations', Promise.reject(result), true, mock)
  },
  detachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  detachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  detachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  disableAWSServiceAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSServiceAccess', 'Organizations', Promise.resolve(result), true, mock)
  },
  disableAWSServiceAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSServiceAccess', 'Organizations', Promise.resolve(result), false, mock)
  },
  disableAWSServiceAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAWSServiceAccess', 'Organizations', Promise.reject(result), true, mock)
  },
  disablePolicyType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disablePolicyType', 'Organizations', Promise.resolve(result), true, mock)
  },
  disablePolicyTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disablePolicyType', 'Organizations', Promise.resolve(result), false, mock)
  },
  disablePolicyTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disablePolicyType', 'Organizations', Promise.reject(result), true, mock)
  },
  enableAWSServiceAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSServiceAccess', 'Organizations', Promise.resolve(result), true, mock)
  },
  enableAWSServiceAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSServiceAccess', 'Organizations', Promise.resolve(result), false, mock)
  },
  enableAWSServiceAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAWSServiceAccess', 'Organizations', Promise.reject(result), true, mock)
  },
  enableAllFeatures: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAllFeatures', 'Organizations', Promise.resolve(result), true, mock)
  },
  enableAllFeaturesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAllFeatures', 'Organizations', Promise.resolve(result), false, mock)
  },
  enableAllFeaturesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAllFeatures', 'Organizations', Promise.reject(result), true, mock)
  },
  enablePolicyType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enablePolicyType', 'Organizations', Promise.resolve(result), true, mock)
  },
  enablePolicyTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enablePolicyType', 'Organizations', Promise.resolve(result), false, mock)
  },
  enablePolicyTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enablePolicyType', 'Organizations', Promise.reject(result), true, mock)
  },
  inviteAccountToOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteAccountToOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  inviteAccountToOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteAccountToOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  inviteAccountToOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteAccountToOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  leaveOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('leaveOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  leaveOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('leaveOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  leaveOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('leaveOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  listAWSServiceAccessForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAWSServiceAccessForOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  listAWSServiceAccessForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAWSServiceAccessForOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  listAWSServiceAccessForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAWSServiceAccessForOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  listAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'Organizations', Promise.resolve(result), true, mock)
  },
  listAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'Organizations', Promise.resolve(result), false, mock)
  },
  listAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'Organizations', Promise.reject(result), true, mock)
  },
  listAccountsForParent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForParent', 'Organizations', Promise.resolve(result), true, mock)
  },
  listAccountsForParentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForParent', 'Organizations', Promise.resolve(result), false, mock)
  },
  listAccountsForParentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForParent', 'Organizations', Promise.reject(result), true, mock)
  },
  listChildren: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChildren', 'Organizations', Promise.resolve(result), true, mock)
  },
  listChildrenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChildren', 'Organizations', Promise.resolve(result), false, mock)
  },
  listChildrenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChildren', 'Organizations', Promise.reject(result), true, mock)
  },
  listCreateAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreateAccountStatus', 'Organizations', Promise.resolve(result), true, mock)
  },
  listCreateAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreateAccountStatus', 'Organizations', Promise.resolve(result), false, mock)
  },
  listCreateAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreateAccountStatus', 'Organizations', Promise.reject(result), true, mock)
  },
  listDelegatedAdministrators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedAdministrators', 'Organizations', Promise.resolve(result), true, mock)
  },
  listDelegatedAdministratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedAdministrators', 'Organizations', Promise.resolve(result), false, mock)
  },
  listDelegatedAdministratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedAdministrators', 'Organizations', Promise.reject(result), true, mock)
  },
  listDelegatedServicesForAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedServicesForAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  listDelegatedServicesForAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedServicesForAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  listDelegatedServicesForAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDelegatedServicesForAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  listHandshakesForAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  listHandshakesForAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  listHandshakesForAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  listHandshakesForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  listHandshakesForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  listHandshakesForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHandshakesForOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  listOrganizationalUnitsForParent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationalUnitsForParent', 'Organizations', Promise.resolve(result), true, mock)
  },
  listOrganizationalUnitsForParentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationalUnitsForParent', 'Organizations', Promise.resolve(result), false, mock)
  },
  listOrganizationalUnitsForParentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationalUnitsForParent', 'Organizations', Promise.reject(result), true, mock)
  },
  listParents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParents', 'Organizations', Promise.resolve(result), true, mock)
  },
  listParentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParents', 'Organizations', Promise.resolve(result), false, mock)
  },
  listParentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParents', 'Organizations', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'Organizations', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'Organizations', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'Organizations', Promise.reject(result), true, mock)
  },
  listPoliciesForTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPoliciesForTarget', 'Organizations', Promise.resolve(result), true, mock)
  },
  listPoliciesForTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPoliciesForTarget', 'Organizations', Promise.resolve(result), false, mock)
  },
  listPoliciesForTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPoliciesForTarget', 'Organizations', Promise.reject(result), true, mock)
  },
  listRoots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoots', 'Organizations', Promise.resolve(result), true, mock)
  },
  listRootsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoots', 'Organizations', Promise.resolve(result), false, mock)
  },
  listRootsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoots', 'Organizations', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Organizations', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Organizations', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Organizations', Promise.reject(result), true, mock)
  },
  listTargetsForPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargetsForPolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  listTargetsForPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargetsForPolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  listTargetsForPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargetsForPolicy', 'Organizations', Promise.reject(result), true, mock)
  },
  moveAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveAccount', 'Organizations', Promise.resolve(result), true, mock)
  },
  moveAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveAccount', 'Organizations', Promise.resolve(result), false, mock)
  },
  moveAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveAccount', 'Organizations', Promise.reject(result), true, mock)
  },
  registerDelegatedAdministrator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDelegatedAdministrator', 'Organizations', Promise.resolve(result), true, mock)
  },
  registerDelegatedAdministratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDelegatedAdministrator', 'Organizations', Promise.resolve(result), false, mock)
  },
  registerDelegatedAdministratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDelegatedAdministrator', 'Organizations', Promise.reject(result), true, mock)
  },
  removeAccountFromOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAccountFromOrganization', 'Organizations', Promise.resolve(result), true, mock)
  },
  removeAccountFromOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAccountFromOrganization', 'Organizations', Promise.resolve(result), false, mock)
  },
  removeAccountFromOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAccountFromOrganization', 'Organizations', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Organizations', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Organizations', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Organizations', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Organizations', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Organizations', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Organizations', Promise.reject(result), true, mock)
  },
  updateOrganizationalUnit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationalUnit', 'Organizations', Promise.resolve(result), true, mock)
  },
  updateOrganizationalUnitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationalUnit', 'Organizations', Promise.resolve(result), false, mock)
  },
  updateOrganizationalUnitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationalUnit', 'Organizations', Promise.reject(result), true, mock)
  },
  updatePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePolicy', 'Organizations', Promise.resolve(result), true, mock)
  },
  updatePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePolicy', 'Organizations', Promise.resolve(result), false, mock)
  },
  updatePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePolicy', 'Organizations', Promise.reject(result), true, mock)
  },
}
