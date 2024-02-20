
/**
* @description mocks_v3:mockIAM module is mocks for AWS-SDK V3
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
export const mockIAM = {
  addClientIDToOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addClientIDToOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  addClientIDToOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addClientIDToOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  addClientIDToOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addClientIDToOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  addRoleToInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addRoleToInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  addRoleToInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addRoleToInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  addRoleToInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addRoleToInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  addUserToGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addUserToGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  addUserToGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addUserToGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  addUserToGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'addUserToGroup', 'IAM', Promise.reject(result), true, mock)
  },
  attachGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachGroupPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  attachGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachGroupPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  attachGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachGroupPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  attachRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  attachRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  attachRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  attachUserPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachUserPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  attachUserPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachUserPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  attachUserPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'attachUserPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  changePassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'changePassword', 'IAM', Promise.resolve(result), true, mock)
  },
  changePasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'changePassword', 'IAM', Promise.resolve(result), false, mock)
  },
  changePasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'changePassword', 'IAM', Promise.reject(result), true, mock)
  },
  createAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccessKey', 'IAM', Promise.resolve(result), true, mock)
  },
  createAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccessKey', 'IAM', Promise.resolve(result), false, mock)
  },
  createAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccessKey', 'IAM', Promise.reject(result), true, mock)
  },
  createAccountAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccountAlias', 'IAM', Promise.resolve(result), true, mock)
  },
  createAccountAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccountAlias', 'IAM', Promise.resolve(result), false, mock)
  },
  createAccountAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createAccountAlias', 'IAM', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createGroup', 'IAM', Promise.reject(result), true, mock)
  },
  createInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  createInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  createInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  createLoginProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createLoginProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  createLoginProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createLoginProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  createLoginProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createLoginProfile', 'IAM', Promise.reject(result), true, mock)
  },
  createOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  createOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  createOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  createPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  createPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  createPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  createPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicyVersion', 'IAM', Promise.resolve(result), true, mock)
  },
  createPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicyVersion', 'IAM', Promise.resolve(result), false, mock)
  },
  createPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createPolicyVersion', 'IAM', Promise.reject(result), true, mock)
  },
  createRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createRole', 'IAM', Promise.resolve(result), true, mock)
  },
  createRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createRole', 'IAM', Promise.resolve(result), false, mock)
  },
  createRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createRole', 'IAM', Promise.reject(result), true, mock)
  },
  createSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  createSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  createSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  createServiceLinkedRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceLinkedRole', 'IAM', Promise.resolve(result), true, mock)
  },
  createServiceLinkedRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceLinkedRole', 'IAM', Promise.resolve(result), false, mock)
  },
  createServiceLinkedRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceLinkedRole', 'IAM', Promise.reject(result), true, mock)
  },
  createServiceSpecificCredential: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceSpecificCredential', 'IAM', Promise.resolve(result), true, mock)
  },
  createServiceSpecificCredentialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceSpecificCredential', 'IAM', Promise.resolve(result), false, mock)
  },
  createServiceSpecificCredentialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createServiceSpecificCredential', 'IAM', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createUser', 'IAM', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createUser', 'IAM', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createUser', 'IAM', Promise.reject(result), true, mock)
  },
  createVirtualMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createVirtualMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  createVirtualMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createVirtualMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  createVirtualMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'createVirtualMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  deactivateMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deactivateMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  deactivateMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deactivateMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  deactivateMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deactivateMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  deleteAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccessKey', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccessKey', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccessKey', 'IAM', Promise.reject(result), true, mock)
  },
  deleteAccountAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountAlias', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteAccountAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountAlias', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteAccountAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountAlias', 'IAM', Promise.reject(result), true, mock)
  },
  deleteAccountPasswordPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountPasswordPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteAccountPasswordPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountPasswordPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteAccountPasswordPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteAccountPasswordPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroup', 'IAM', Promise.reject(result), true, mock)
  },
  deleteGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroupPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroupPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteGroupPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  deleteInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  deleteLoginProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteLoginProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteLoginProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteLoginProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteLoginProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteLoginProfile', 'IAM', Promise.reject(result), true, mock)
  },
  deleteOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  deletePolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicyVersion', 'IAM', Promise.resolve(result), true, mock)
  },
  deletePolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicyVersion', 'IAM', Promise.resolve(result), false, mock)
  },
  deletePolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deletePolicyVersion', 'IAM', Promise.reject(result), true, mock)
  },
  deleteRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRole', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRole', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRole', 'IAM', Promise.reject(result), true, mock)
  },
  deleteRolePermissionsBoundary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePermissionsBoundary', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteRolePermissionsBoundaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePermissionsBoundary', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteRolePermissionsBoundaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePermissionsBoundary', 'IAM', Promise.reject(result), true, mock)
  },
  deleteRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  deleteSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  deleteSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSSHPublicKey', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSSHPublicKey', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSSHPublicKey', 'IAM', Promise.reject(result), true, mock)
  },
  deleteServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  deleteServiceLinkedRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceLinkedRole', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteServiceLinkedRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceLinkedRole', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteServiceLinkedRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceLinkedRole', 'IAM', Promise.reject(result), true, mock)
  },
  deleteServiceSpecificCredential: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceSpecificCredential', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteServiceSpecificCredentialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceSpecificCredential', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteServiceSpecificCredentialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteServiceSpecificCredential', 'IAM', Promise.reject(result), true, mock)
  },
  deleteSigningCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSigningCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteSigningCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSigningCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteSigningCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteSigningCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUser', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUser', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUser', 'IAM', Promise.reject(result), true, mock)
  },
  deleteUserPermissionsBoundary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPermissionsBoundary', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteUserPermissionsBoundaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPermissionsBoundary', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteUserPermissionsBoundaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPermissionsBoundary', 'IAM', Promise.reject(result), true, mock)
  },
  deleteUserPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteUserPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteUserPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteUserPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  deleteVirtualMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteVirtualMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  deleteVirtualMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteVirtualMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  deleteVirtualMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'deleteVirtualMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  detachGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachGroupPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  detachGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachGroupPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  detachGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachGroupPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  detachRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  detachRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  detachRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  detachUserPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachUserPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  detachUserPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachUserPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  detachUserPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'detachUserPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  enableMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'enableMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  enableMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'enableMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  enableMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'enableMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  generateCredentialReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateCredentialReport', 'IAM', Promise.resolve(result), true, mock)
  },
  generateCredentialReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateCredentialReport', 'IAM', Promise.resolve(result), false, mock)
  },
  generateCredentialReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateCredentialReport', 'IAM', Promise.reject(result), true, mock)
  },
  generateOrganizationsAccessReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateOrganizationsAccessReport', 'IAM', Promise.resolve(result), true, mock)
  },
  generateOrganizationsAccessReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateOrganizationsAccessReport', 'IAM', Promise.resolve(result), false, mock)
  },
  generateOrganizationsAccessReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateOrganizationsAccessReport', 'IAM', Promise.reject(result), true, mock)
  },
  generateServiceLastAccessedDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateServiceLastAccessedDetails', 'IAM', Promise.resolve(result), true, mock)
  },
  generateServiceLastAccessedDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateServiceLastAccessedDetails', 'IAM', Promise.resolve(result), false, mock)
  },
  generateServiceLastAccessedDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'generateServiceLastAccessedDetails', 'IAM', Promise.reject(result), true, mock)
  },
  getAccessKeyLastUsed: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccessKeyLastUsed', 'IAM', Promise.resolve(result), true, mock)
  },
  getAccessKeyLastUsedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccessKeyLastUsed', 'IAM', Promise.resolve(result), false, mock)
  },
  getAccessKeyLastUsedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccessKeyLastUsed', 'IAM', Promise.reject(result), true, mock)
  },
  getAccountAuthorizationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountAuthorizationDetails', 'IAM', Promise.resolve(result), true, mock)
  },
  getAccountAuthorizationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountAuthorizationDetails', 'IAM', Promise.resolve(result), false, mock)
  },
  getAccountAuthorizationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountAuthorizationDetails', 'IAM', Promise.reject(result), true, mock)
  },
  getAccountPasswordPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountPasswordPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getAccountPasswordPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountPasswordPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getAccountPasswordPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountPasswordPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getAccountSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountSummary', 'IAM', Promise.resolve(result), true, mock)
  },
  getAccountSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountSummary', 'IAM', Promise.resolve(result), false, mock)
  },
  getAccountSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getAccountSummary', 'IAM', Promise.reject(result), true, mock)
  },
  getContextKeysForCustomPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForCustomPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getContextKeysForCustomPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForCustomPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getContextKeysForCustomPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForCustomPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getContextKeysForPrincipalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForPrincipalPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getContextKeysForPrincipalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForPrincipalPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getContextKeysForPrincipalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getContextKeysForPrincipalPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getCredentialReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getCredentialReport', 'IAM', Promise.resolve(result), true, mock)
  },
  getCredentialReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getCredentialReport', 'IAM', Promise.resolve(result), false, mock)
  },
  getCredentialReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getCredentialReport', 'IAM', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroup', 'IAM', Promise.reject(result), true, mock)
  },
  getGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroupPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroupPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getGroupPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  getInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  getInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  getLoginProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getLoginProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  getLoginProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getLoginProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  getLoginProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getLoginProfile', 'IAM', Promise.reject(result), true, mock)
  },
  getMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  getMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  getMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  getOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  getOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  getOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  getOrganizationsAccessReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOrganizationsAccessReport', 'IAM', Promise.resolve(result), true, mock)
  },
  getOrganizationsAccessReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOrganizationsAccessReport', 'IAM', Promise.resolve(result), false, mock)
  },
  getOrganizationsAccessReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getOrganizationsAccessReport', 'IAM', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicyVersion', 'IAM', Promise.resolve(result), true, mock)
  },
  getPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicyVersion', 'IAM', Promise.resolve(result), false, mock)
  },
  getPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getPolicyVersion', 'IAM', Promise.reject(result), true, mock)
  },
  getRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRole', 'IAM', Promise.resolve(result), true, mock)
  },
  getRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRole', 'IAM', Promise.resolve(result), false, mock)
  },
  getRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRole', 'IAM', Promise.reject(result), true, mock)
  },
  getRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  getSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  getSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  getSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  getSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSSHPublicKey', 'IAM', Promise.resolve(result), true, mock)
  },
  getSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSSHPublicKey', 'IAM', Promise.resolve(result), false, mock)
  },
  getSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getSSHPublicKey', 'IAM', Promise.reject(result), true, mock)
  },
  getServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  getServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  getServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  getServiceLastAccessedDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetails', 'IAM', Promise.resolve(result), true, mock)
  },
  getServiceLastAccessedDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetails', 'IAM', Promise.resolve(result), false, mock)
  },
  getServiceLastAccessedDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetails', 'IAM', Promise.reject(result), true, mock)
  },
  getServiceLastAccessedDetailsWithEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetailsWithEntities', 'IAM', Promise.resolve(result), true, mock)
  },
  getServiceLastAccessedDetailsWithEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetailsWithEntities', 'IAM', Promise.resolve(result), false, mock)
  },
  getServiceLastAccessedDetailsWithEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLastAccessedDetailsWithEntities', 'IAM', Promise.reject(result), true, mock)
  },
  getServiceLinkedRoleDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLinkedRoleDeletionStatus', 'IAM', Promise.resolve(result), true, mock)
  },
  getServiceLinkedRoleDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLinkedRoleDeletionStatus', 'IAM', Promise.resolve(result), false, mock)
  },
  getServiceLinkedRoleDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getServiceLinkedRoleDeletionStatus', 'IAM', Promise.reject(result), true, mock)
  },
  getUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUser', 'IAM', Promise.resolve(result), true, mock)
  },
  getUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUser', 'IAM', Promise.resolve(result), false, mock)
  },
  getUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUser', 'IAM', Promise.reject(result), true, mock)
  },
  getUserPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUserPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  getUserPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUserPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  getUserPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'getUserPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  listAccessKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccessKeys', 'IAM', Promise.resolve(result), true, mock)
  },
  listAccessKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccessKeys', 'IAM', Promise.resolve(result), false, mock)
  },
  listAccessKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccessKeys', 'IAM', Promise.reject(result), true, mock)
  },
  listAccountAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccountAliases', 'IAM', Promise.resolve(result), true, mock)
  },
  listAccountAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccountAliases', 'IAM', Promise.resolve(result), false, mock)
  },
  listAccountAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAccountAliases', 'IAM', Promise.reject(result), true, mock)
  },
  listAttachedGroupPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedGroupPolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listAttachedGroupPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedGroupPolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listAttachedGroupPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedGroupPolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listAttachedRolePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedRolePolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listAttachedRolePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedRolePolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listAttachedRolePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedRolePolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listAttachedUserPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedUserPolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listAttachedUserPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedUserPolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listAttachedUserPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listAttachedUserPolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listEntitiesForPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listEntitiesForPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  listEntitiesForPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listEntitiesForPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  listEntitiesForPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listEntitiesForPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  listGroupPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupPolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listGroupPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupPolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listGroupPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupPolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroups', 'IAM', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroups', 'IAM', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroups', 'IAM', Promise.reject(result), true, mock)
  },
  listGroupsForUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupsForUser', 'IAM', Promise.resolve(result), true, mock)
  },
  listGroupsForUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupsForUser', 'IAM', Promise.resolve(result), false, mock)
  },
  listGroupsForUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listGroupsForUser', 'IAM', Promise.reject(result), true, mock)
  },
  listInstanceProfileTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfileTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listInstanceProfileTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfileTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listInstanceProfileTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfileTags', 'IAM', Promise.reject(result), true, mock)
  },
  listInstanceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfiles', 'IAM', Promise.resolve(result), true, mock)
  },
  listInstanceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfiles', 'IAM', Promise.resolve(result), false, mock)
  },
  listInstanceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfiles', 'IAM', Promise.reject(result), true, mock)
  },
  listInstanceProfilesForRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfilesForRole', 'IAM', Promise.resolve(result), true, mock)
  },
  listInstanceProfilesForRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfilesForRole', 'IAM', Promise.resolve(result), false, mock)
  },
  listInstanceProfilesForRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listInstanceProfilesForRole', 'IAM', Promise.reject(result), true, mock)
  },
  listMFADeviceTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADeviceTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listMFADeviceTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADeviceTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listMFADeviceTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADeviceTags', 'IAM', Promise.reject(result), true, mock)
  },
  listMFADevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADevices', 'IAM', Promise.resolve(result), true, mock)
  },
  listMFADevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADevices', 'IAM', Promise.resolve(result), false, mock)
  },
  listMFADevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listMFADevices', 'IAM', Promise.reject(result), true, mock)
  },
  listOpenIDConnectProviderTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviderTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listOpenIDConnectProviderTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviderTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listOpenIDConnectProviderTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviderTags', 'IAM', Promise.reject(result), true, mock)
  },
  listOpenIDConnectProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviders', 'IAM', Promise.resolve(result), true, mock)
  },
  listOpenIDConnectProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviders', 'IAM', Promise.resolve(result), false, mock)
  },
  listOpenIDConnectProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listOpenIDConnectProviders', 'IAM', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listPoliciesGrantingServiceAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPoliciesGrantingServiceAccess', 'IAM', Promise.resolve(result), true, mock)
  },
  listPoliciesGrantingServiceAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPoliciesGrantingServiceAccess', 'IAM', Promise.resolve(result), false, mock)
  },
  listPoliciesGrantingServiceAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPoliciesGrantingServiceAccess', 'IAM', Promise.reject(result), true, mock)
  },
  listPolicyTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listPolicyTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listPolicyTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyTags', 'IAM', Promise.reject(result), true, mock)
  },
  listPolicyVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyVersions', 'IAM', Promise.resolve(result), true, mock)
  },
  listPolicyVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyVersions', 'IAM', Promise.resolve(result), false, mock)
  },
  listPolicyVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listPolicyVersions', 'IAM', Promise.reject(result), true, mock)
  },
  listRolePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRolePolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listRolePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRolePolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listRolePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRolePolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listRoleTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoleTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listRoleTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoleTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listRoleTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoleTags', 'IAM', Promise.reject(result), true, mock)
  },
  listRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoles', 'IAM', Promise.resolve(result), true, mock)
  },
  listRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoles', 'IAM', Promise.resolve(result), false, mock)
  },
  listRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listRoles', 'IAM', Promise.reject(result), true, mock)
  },
  listSAMLProviderTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviderTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listSAMLProviderTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviderTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listSAMLProviderTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviderTags', 'IAM', Promise.reject(result), true, mock)
  },
  listSAMLProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviders', 'IAM', Promise.resolve(result), true, mock)
  },
  listSAMLProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviders', 'IAM', Promise.resolve(result), false, mock)
  },
  listSAMLProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSAMLProviders', 'IAM', Promise.reject(result), true, mock)
  },
  listSSHPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSSHPublicKeys', 'IAM', Promise.resolve(result), true, mock)
  },
  listSSHPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSSHPublicKeys', 'IAM', Promise.resolve(result), false, mock)
  },
  listSSHPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSSHPublicKeys', 'IAM', Promise.reject(result), true, mock)
  },
  listServerCertificateTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificateTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listServerCertificateTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificateTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listServerCertificateTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificateTags', 'IAM', Promise.reject(result), true, mock)
  },
  listServerCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificates', 'IAM', Promise.resolve(result), true, mock)
  },
  listServerCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificates', 'IAM', Promise.resolve(result), false, mock)
  },
  listServerCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServerCertificates', 'IAM', Promise.reject(result), true, mock)
  },
  listServiceSpecificCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServiceSpecificCredentials', 'IAM', Promise.resolve(result), true, mock)
  },
  listServiceSpecificCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServiceSpecificCredentials', 'IAM', Promise.resolve(result), false, mock)
  },
  listServiceSpecificCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listServiceSpecificCredentials', 'IAM', Promise.reject(result), true, mock)
  },
  listSigningCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSigningCertificates', 'IAM', Promise.resolve(result), true, mock)
  },
  listSigningCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSigningCertificates', 'IAM', Promise.resolve(result), false, mock)
  },
  listSigningCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listSigningCertificates', 'IAM', Promise.reject(result), true, mock)
  },
  listUserPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserPolicies', 'IAM', Promise.resolve(result), true, mock)
  },
  listUserPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserPolicies', 'IAM', Promise.resolve(result), false, mock)
  },
  listUserPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserPolicies', 'IAM', Promise.reject(result), true, mock)
  },
  listUserTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserTags', 'IAM', Promise.resolve(result), true, mock)
  },
  listUserTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserTags', 'IAM', Promise.resolve(result), false, mock)
  },
  listUserTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUserTags', 'IAM', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUsers', 'IAM', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUsers', 'IAM', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listUsers', 'IAM', Promise.reject(result), true, mock)
  },
  listVirtualMFADevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listVirtualMFADevices', 'IAM', Promise.resolve(result), true, mock)
  },
  listVirtualMFADevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listVirtualMFADevices', 'IAM', Promise.resolve(result), false, mock)
  },
  listVirtualMFADevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'listVirtualMFADevices', 'IAM', Promise.reject(result), true, mock)
  },
  putGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putGroupPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  putGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putGroupPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  putGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putGroupPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  putRolePermissionsBoundary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePermissionsBoundary', 'IAM', Promise.resolve(result), true, mock)
  },
  putRolePermissionsBoundaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePermissionsBoundary', 'IAM', Promise.resolve(result), false, mock)
  },
  putRolePermissionsBoundaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePermissionsBoundary', 'IAM', Promise.reject(result), true, mock)
  },
  putRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  putRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  putRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  putUserPermissionsBoundary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPermissionsBoundary', 'IAM', Promise.resolve(result), true, mock)
  },
  putUserPermissionsBoundaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPermissionsBoundary', 'IAM', Promise.resolve(result), false, mock)
  },
  putUserPermissionsBoundaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPermissionsBoundary', 'IAM', Promise.reject(result), true, mock)
  },
  putUserPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  putUserPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  putUserPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'putUserPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  removeClientIDFromOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeClientIDFromOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  removeClientIDFromOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeClientIDFromOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  removeClientIDFromOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeClientIDFromOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  removeRoleFromInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeRoleFromInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  removeRoleFromInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeRoleFromInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  removeRoleFromInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeRoleFromInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  removeUserFromGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeUserFromGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  removeUserFromGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeUserFromGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  removeUserFromGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'removeUserFromGroup', 'IAM', Promise.reject(result), true, mock)
  },
  resetServiceSpecificCredential: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resetServiceSpecificCredential', 'IAM', Promise.resolve(result), true, mock)
  },
  resetServiceSpecificCredentialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resetServiceSpecificCredential', 'IAM', Promise.resolve(result), false, mock)
  },
  resetServiceSpecificCredentialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resetServiceSpecificCredential', 'IAM', Promise.reject(result), true, mock)
  },
  resyncMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resyncMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  resyncMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resyncMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  resyncMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'resyncMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  setDefaultPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setDefaultPolicyVersion', 'IAM', Promise.resolve(result), true, mock)
  },
  setDefaultPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setDefaultPolicyVersion', 'IAM', Promise.resolve(result), false, mock)
  },
  setDefaultPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setDefaultPolicyVersion', 'IAM', Promise.reject(result), true, mock)
  },
  setSecurityTokenServicePreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setSecurityTokenServicePreferences', 'IAM', Promise.resolve(result), true, mock)
  },
  setSecurityTokenServicePreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setSecurityTokenServicePreferences', 'IAM', Promise.resolve(result), false, mock)
  },
  setSecurityTokenServicePreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'setSecurityTokenServicePreferences', 'IAM', Promise.reject(result), true, mock)
  },
  simulateCustomPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulateCustomPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  simulateCustomPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulateCustomPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  simulateCustomPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulateCustomPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  simulatePrincipalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulatePrincipalPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  simulatePrincipalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulatePrincipalPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  simulatePrincipalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'simulatePrincipalPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  tagInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  tagInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  tagInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  tagMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  tagMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  tagMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  tagOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  tagOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  tagOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  tagPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  tagPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  tagPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  tagRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagRole', 'IAM', Promise.resolve(result), true, mock)
  },
  tagRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagRole', 'IAM', Promise.resolve(result), false, mock)
  },
  tagRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagRole', 'IAM', Promise.reject(result), true, mock)
  },
  tagSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  tagSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  tagSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  tagServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  tagServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  tagServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  tagUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagUser', 'IAM', Promise.resolve(result), true, mock)
  },
  tagUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagUser', 'IAM', Promise.resolve(result), false, mock)
  },
  tagUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'tagUser', 'IAM', Promise.reject(result), true, mock)
  },
  untagInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagInstanceProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  untagInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagInstanceProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  untagInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagInstanceProfile', 'IAM', Promise.reject(result), true, mock)
  },
  untagMFADevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagMFADevice', 'IAM', Promise.resolve(result), true, mock)
  },
  untagMFADeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagMFADevice', 'IAM', Promise.resolve(result), false, mock)
  },
  untagMFADeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagMFADevice', 'IAM', Promise.reject(result), true, mock)
  },
  untagOpenIDConnectProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagOpenIDConnectProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  untagOpenIDConnectProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagOpenIDConnectProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  untagOpenIDConnectProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagOpenIDConnectProvider', 'IAM', Promise.reject(result), true, mock)
  },
  untagPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  untagPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  untagPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  untagRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagRole', 'IAM', Promise.resolve(result), true, mock)
  },
  untagRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagRole', 'IAM', Promise.resolve(result), false, mock)
  },
  untagRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagRole', 'IAM', Promise.reject(result), true, mock)
  },
  untagSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  untagSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  untagSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  untagServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  untagServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  untagServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  untagUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagUser', 'IAM', Promise.resolve(result), true, mock)
  },
  untagUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagUser', 'IAM', Promise.resolve(result), false, mock)
  },
  untagUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'untagUser', 'IAM', Promise.reject(result), true, mock)
  },
  updateAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccessKey', 'IAM', Promise.resolve(result), true, mock)
  },
  updateAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccessKey', 'IAM', Promise.resolve(result), false, mock)
  },
  updateAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccessKey', 'IAM', Promise.reject(result), true, mock)
  },
  updateAccountPasswordPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccountPasswordPolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  updateAccountPasswordPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccountPasswordPolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  updateAccountPasswordPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAccountPasswordPolicy', 'IAM', Promise.reject(result), true, mock)
  },
  updateAssumeRolePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAssumeRolePolicy', 'IAM', Promise.resolve(result), true, mock)
  },
  updateAssumeRolePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAssumeRolePolicy', 'IAM', Promise.resolve(result), false, mock)
  },
  updateAssumeRolePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateAssumeRolePolicy', 'IAM', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateGroup', 'IAM', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateGroup', 'IAM', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateGroup', 'IAM', Promise.reject(result), true, mock)
  },
  updateLoginProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateLoginProfile', 'IAM', Promise.resolve(result), true, mock)
  },
  updateLoginProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateLoginProfile', 'IAM', Promise.resolve(result), false, mock)
  },
  updateLoginProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateLoginProfile', 'IAM', Promise.reject(result), true, mock)
  },
  updateOpenIDConnectProviderThumbprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateOpenIDConnectProviderThumbprint', 'IAM', Promise.resolve(result), true, mock)
  },
  updateOpenIDConnectProviderThumbprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateOpenIDConnectProviderThumbprint', 'IAM', Promise.resolve(result), false, mock)
  },
  updateOpenIDConnectProviderThumbprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateOpenIDConnectProviderThumbprint', 'IAM', Promise.reject(result), true, mock)
  },
  updateRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRole', 'IAM', Promise.resolve(result), true, mock)
  },
  updateRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRole', 'IAM', Promise.resolve(result), false, mock)
  },
  updateRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRole', 'IAM', Promise.reject(result), true, mock)
  },
  updateRoleDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRoleDescription', 'IAM', Promise.resolve(result), true, mock)
  },
  updateRoleDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRoleDescription', 'IAM', Promise.resolve(result), false, mock)
  },
  updateRoleDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateRoleDescription', 'IAM', Promise.reject(result), true, mock)
  },
  updateSAMLProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSAMLProvider', 'IAM', Promise.resolve(result), true, mock)
  },
  updateSAMLProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSAMLProvider', 'IAM', Promise.resolve(result), false, mock)
  },
  updateSAMLProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSAMLProvider', 'IAM', Promise.reject(result), true, mock)
  },
  updateSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSSHPublicKey', 'IAM', Promise.resolve(result), true, mock)
  },
  updateSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSSHPublicKey', 'IAM', Promise.resolve(result), false, mock)
  },
  updateSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSSHPublicKey', 'IAM', Promise.reject(result), true, mock)
  },
  updateServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  updateServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  updateServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  updateServiceSpecificCredential: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServiceSpecificCredential', 'IAM', Promise.resolve(result), true, mock)
  },
  updateServiceSpecificCredentialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServiceSpecificCredential', 'IAM', Promise.resolve(result), false, mock)
  },
  updateServiceSpecificCredentialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateServiceSpecificCredential', 'IAM', Promise.reject(result), true, mock)
  },
  updateSigningCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSigningCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  updateSigningCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSigningCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  updateSigningCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateSigningCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateUser', 'IAM', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateUser', 'IAM', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'updateUser', 'IAM', Promise.reject(result), true, mock)
  },
  uploadSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSSHPublicKey', 'IAM', Promise.resolve(result), true, mock)
  },
  uploadSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSSHPublicKey', 'IAM', Promise.resolve(result), false, mock)
  },
  uploadSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSSHPublicKey', 'IAM', Promise.reject(result), true, mock)
  },
  uploadServerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadServerCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  uploadServerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadServerCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  uploadServerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadServerCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  uploadSigningCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSigningCertificate', 'IAM', Promise.resolve(result), true, mock)
  },
  uploadSigningCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSigningCertificate', 'IAM', Promise.resolve(result), false, mock)
  },
  uploadSigningCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'uploadSigningCertificate', 'IAM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'send', 'IAMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'send', 'IAMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iam', 'send', 'IAMClient', Promise.reject(result), true, mock)
  }
}
