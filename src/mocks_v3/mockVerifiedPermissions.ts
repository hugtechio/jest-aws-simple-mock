
/**
* @description mocks_v3:mockVerifiedPermissions module is mocks for AWS-SDK V3
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
export const mockVerifiedPermissions = {
  batchIsAuthorized: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'batchIsAuthorized', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  batchIsAuthorizedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'batchIsAuthorized', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  batchIsAuthorizedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'batchIsAuthorized', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  createIdentitySource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createIdentitySource', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  createIdentitySourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createIdentitySource', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  createIdentitySourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createIdentitySource', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  createPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicy', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  createPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicy', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  createPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicy', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  createPolicyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyStore', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  createPolicyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyStore', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  createPolicyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyStore', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  createPolicyTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  createPolicyTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  createPolicyTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'createPolicyTemplate', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  deleteIdentitySource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deleteIdentitySource', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  deleteIdentitySourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deleteIdentitySource', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  deleteIdentitySourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deleteIdentitySource', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicy', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicy', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicy', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  deletePolicyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyStore', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  deletePolicyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyStore', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  deletePolicyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyStore', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  deletePolicyTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  deletePolicyTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  deletePolicyTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'deletePolicyTemplate', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  getIdentitySource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getIdentitySource', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  getIdentitySourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getIdentitySource', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  getIdentitySourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getIdentitySource', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicy', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicy', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicy', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  getPolicyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyStore', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  getPolicyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyStore', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  getPolicyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyStore', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  getPolicyTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  getPolicyTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  getPolicyTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getPolicyTemplate', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  getSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getSchema', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  getSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getSchema', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  getSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'getSchema', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  isAuthorized: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorized', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  isAuthorizedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorized', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  isAuthorizedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorized', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  isAuthorizedWithToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorizedWithToken', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  isAuthorizedWithTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorizedWithToken', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  isAuthorizedWithTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'isAuthorizedWithToken', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  listIdentitySources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listIdentitySources', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  listIdentitySourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listIdentitySources', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  listIdentitySourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listIdentitySources', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicies', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicies', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicies', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  listPolicyStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyStores', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  listPolicyStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyStores', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  listPolicyStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyStores', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  listPolicyTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyTemplates', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  listPolicyTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyTemplates', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  listPolicyTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'listPolicyTemplates', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  putSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'putSchema', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  putSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'putSchema', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  putSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'putSchema', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  updateIdentitySource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updateIdentitySource', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  updateIdentitySourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updateIdentitySource', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  updateIdentitySourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updateIdentitySource', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  updatePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicy', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  updatePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicy', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  updatePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicy', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  updatePolicyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyStore', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  updatePolicyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyStore', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  updatePolicyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyStore', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  updatePolicyTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), true, mock)
  },
  updatePolicyTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyTemplate', 'VerifiedPermissions', Promise.resolve(result), false, mock)
  },
  updatePolicyTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'updatePolicyTemplate', 'VerifiedPermissions', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'send', 'VerifiedPermissionsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'send', 'VerifiedPermissionsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-verifiedpermissions', 'send', 'VerifiedPermissionsClient', Promise.reject(result), true, mock)
  }
}
