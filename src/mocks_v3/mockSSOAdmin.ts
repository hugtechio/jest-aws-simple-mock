
/**
* @description mocks_v3:mockSSOAdmin module is mocks for AWS-SDK V3
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
export const mockSSOAdmin = {
  attachCustomerManagedPolicyReferenceToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachCustomerManagedPolicyReferenceToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  attachCustomerManagedPolicyReferenceToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachCustomerManagedPolicyReferenceToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  attachCustomerManagedPolicyReferenceToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachCustomerManagedPolicyReferenceToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  attachManagedPolicyToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  attachManagedPolicyToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  attachManagedPolicyToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'attachManagedPolicyToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createAccountAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createAccountAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createAccountAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createAccountAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createAccountAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createAccountAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createApplicationAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplicationAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createApplicationAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplicationAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createApplicationAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplicationAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplication', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplication', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createApplication', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstance', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstance', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createInstance', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  createTrustedTokenIssuer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  createTrustedTokenIssuerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  createTrustedTokenIssuerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'createTrustedTokenIssuer', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteAccountAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteAccountAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteAccountAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteAccountAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteAccountAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteAccountAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteApplicationAccessScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteApplicationAccessScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteApplicationAccessScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAccessScope', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteApplicationAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteApplicationAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteApplicationAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteApplicationAuthenticationMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteApplicationAuthenticationMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteApplicationAuthenticationMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationAuthenticationMethod', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplication', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplication', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplication', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteApplicationGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationGrant', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteApplicationGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationGrant', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteApplicationGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteApplicationGrant', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteInlinePolicyFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteInlinePolicyFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteInlinePolicyFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInlinePolicyFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstance', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstance', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteInstance', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deletePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deletePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deletePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deletePermissionsBoundaryFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionsBoundaryFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deletePermissionsBoundaryFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionsBoundaryFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deletePermissionsBoundaryFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deletePermissionsBoundaryFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  deleteTrustedTokenIssuer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  deleteTrustedTokenIssuerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  deleteTrustedTokenIssuerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'deleteTrustedTokenIssuer', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeAccountAssignmentCreationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeAccountAssignmentCreationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeAccountAssignmentCreationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentCreationStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeAccountAssignmentDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeAccountAssignmentDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeAccountAssignmentDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeApplicationAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationAssignment', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeApplicationAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationAssignment', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeApplicationAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationAssignment', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplication', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplication', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplication', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeApplicationProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationProvider', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeApplicationProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationProvider', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeApplicationProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeApplicationProvider', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstance', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstance', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeInstance', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describePermissionSetProvisioningStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describePermissionSetProvisioningStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describePermissionSetProvisioningStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describePermissionSetProvisioningStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  describeTrustedTokenIssuer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  describeTrustedTokenIssuerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  describeTrustedTokenIssuerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'describeTrustedTokenIssuer', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  detachCustomerManagedPolicyReferenceFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachCustomerManagedPolicyReferenceFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  detachCustomerManagedPolicyReferenceFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachCustomerManagedPolicyReferenceFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  detachCustomerManagedPolicyReferenceFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachCustomerManagedPolicyReferenceFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  detachManagedPolicyFromPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  detachManagedPolicyFromPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  detachManagedPolicyFromPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'detachManagedPolicyFromPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getApplicationAccessScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getApplicationAccessScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getApplicationAccessScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAccessScope', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getApplicationAssignmentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAssignmentConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getApplicationAssignmentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAssignmentConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getApplicationAssignmentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAssignmentConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getApplicationAuthenticationMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getApplicationAuthenticationMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getApplicationAuthenticationMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationAuthenticationMethod', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getApplicationGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationGrant', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getApplicationGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationGrant', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getApplicationGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getApplicationGrant', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getInlinePolicyForPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getInlinePolicyForPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getInlinePolicyForPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getInlinePolicyForPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  getPermissionsBoundaryForPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getPermissionsBoundaryForPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  getPermissionsBoundaryForPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getPermissionsBoundaryForPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  getPermissionsBoundaryForPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'getPermissionsBoundaryForPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignmentCreationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentCreationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentCreationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentCreationStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignmentDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentDeletionStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignments', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignments', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignments', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountAssignmentsForPrincipal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentsForPrincipal', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountAssignmentsForPrincipalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentsForPrincipal', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountAssignmentsForPrincipalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountAssignmentsForPrincipal', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listAccountsForProvisionedPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listAccountsForProvisionedPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listAccountsForProvisionedPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listAccountsForProvisionedPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationAccessScopes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAccessScopes', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationAccessScopesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAccessScopes', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationAccessScopesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAccessScopes', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationAssignments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignments', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationAssignmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignments', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationAssignmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignments', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationAssignmentsForPrincipal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignmentsForPrincipal', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationAssignmentsForPrincipalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignmentsForPrincipal', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationAssignmentsForPrincipalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAssignmentsForPrincipal', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationAuthenticationMethods: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAuthenticationMethods', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationAuthenticationMethodsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAuthenticationMethods', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationAuthenticationMethodsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationAuthenticationMethods', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationGrants', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationGrants', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationGrants', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplicationProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationProviders', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationProviders', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplicationProviders', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplications', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplications', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listApplications', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listCustomerManagedPolicyReferencesInPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listCustomerManagedPolicyReferencesInPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listCustomerManagedPolicyReferencesInPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listCustomerManagedPolicyReferencesInPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listCustomerManagedPolicyReferencesInPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listCustomerManagedPolicyReferencesInPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listInstances', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listInstances', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listInstances', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listManagedPoliciesInPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listManagedPoliciesInPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listManagedPoliciesInPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listManagedPoliciesInPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSetProvisioningStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetProvisioningStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetProvisioningStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetProvisioningStatus', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSets', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSets', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSets', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listPermissionSetsProvisionedToAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listPermissionSetsProvisionedToAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listPermissionSetsProvisionedToAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listPermissionSetsProvisionedToAccount', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTagsForResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTagsForResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTagsForResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  listTrustedTokenIssuers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTrustedTokenIssuers', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  listTrustedTokenIssuersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTrustedTokenIssuers', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  listTrustedTokenIssuersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'listTrustedTokenIssuers', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  provisionPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'provisionPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  provisionPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'provisionPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  provisionPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'provisionPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putApplicationAccessScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putApplicationAccessScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAccessScope', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putApplicationAccessScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAccessScope', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putApplicationAssignmentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAssignmentConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putApplicationAssignmentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAssignmentConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putApplicationAssignmentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAssignmentConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putApplicationAuthenticationMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putApplicationAuthenticationMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAuthenticationMethod', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putApplicationAuthenticationMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationAuthenticationMethod', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putApplicationGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationGrant', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putApplicationGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationGrant', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putApplicationGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putApplicationGrant', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putInlinePolicyToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putInlinePolicyToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putInlinePolicyToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putInlinePolicyToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  putPermissionsBoundaryToPermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putPermissionsBoundaryToPermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  putPermissionsBoundaryToPermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putPermissionsBoundaryToPermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  putPermissionsBoundaryToPermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'putPermissionsBoundaryToPermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'tagResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'tagResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'tagResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'untagResource', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'untagResource', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'untagResource', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateApplication', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateApplication', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateApplication', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updateInstanceAccessControlAttributeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updateInstanceAccessControlAttributeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updateInstanceAccessControlAttributeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstanceAccessControlAttributeConfiguration', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updateInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstance', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updateInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstance', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updateInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateInstance', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updatePermissionSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updatePermissionSet', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updatePermissionSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updatePermissionSet', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updatePermissionSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updatePermissionSet', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  updateTrustedTokenIssuer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), true, mock)
  },
  updateTrustedTokenIssuerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateTrustedTokenIssuer', 'SSOAdmin', Promise.resolve(result), false, mock)
  },
  updateTrustedTokenIssuerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'updateTrustedTokenIssuer', 'SSOAdmin', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'send', 'SSOAdminClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'send', 'SSOAdminClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-admin', 'send', 'SSOAdminClient', Promise.reject(result), true, mock)
  }
}
