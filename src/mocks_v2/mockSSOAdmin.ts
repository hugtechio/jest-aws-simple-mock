
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
  export const mockSSOAdmin = {
  attachManagedPolicyToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  attachManagedPolicyToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  attachManagedPolicyToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createAccountAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccountAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createAccountAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccountAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createAccountAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccountAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteAccountAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteAccountAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteAccountAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteInlinePolicyFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteInlinePolicyFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteInlinePolicyFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deletePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deletePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deletePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeAccountAssignmentCreationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeAccountAssignmentCreationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeAccountAssignmentCreationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeAccountAssignmentDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeAccountAssignmentDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeAccountAssignmentDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describePermissionSetProvisioningStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describePermissionSetProvisioningStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describePermissionSetProvisioningStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  detachManagedPolicyFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  detachManagedPolicyFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  detachManagedPolicyFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getInlinePolicyForPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getInlinePolicyForPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getInlinePolicyForPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignmentCreationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentCreationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentCreationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignmentDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignments', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignments', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountAssignments', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountsForProvisionedPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountsForProvisionedPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountsForProvisionedPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listManagedPoliciesInPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listManagedPoliciesInPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listManagedPoliciesInPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSetProvisioningStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetProvisioningStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetProvisioningStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSets', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSets', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSets', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSetsProvisionedToAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetsProvisionedToAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetsProvisionedToAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  provisionPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  provisionPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  provisionPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putInlinePolicyToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putInlinePolicyToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putInlinePolicyToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updateInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updateInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updateInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updatePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updatePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updatePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
}
