
/**
* @description mocks_v3:mockOpenSearchServerless module is mocks for AWS-SDK V3
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
export const mockOpenSearchServerless = {
  batchGetCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetCollection', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  batchGetCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetCollection', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  batchGetCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetCollection', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  batchGetEffectiveLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetEffectiveLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  batchGetEffectiveLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetEffectiveLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  batchGetEffectiveLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetEffectiveLifecyclePolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  batchGetLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  batchGetLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  batchGetLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetLifecyclePolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  batchGetVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  batchGetVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  batchGetVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'batchGetVpcEndpoint', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createAccessPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createCollection', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createCollection', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createCollection', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createLifecyclePolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createSecurityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createSecurityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createSecurityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityConfig', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createSecurityPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  createVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  createVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  createVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'createVpcEndpoint', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteAccessPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteCollection', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteCollection', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteCollection', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteLifecyclePolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteSecurityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteSecurityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteSecurityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityConfig', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteSecurityPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  deleteVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  deleteVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  deleteVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'deleteVpcEndpoint', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  getAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  getAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  getAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccessPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccountSettings', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccountSettings', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getAccountSettings', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  getPoliciesStats: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getPoliciesStats', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  getPoliciesStatsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getPoliciesStats', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  getPoliciesStatsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getPoliciesStats', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  getSecurityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  getSecurityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  getSecurityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityConfig', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  getSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  getSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  getSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'getSecurityPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listAccessPolicies', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listAccessPolicies', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listAccessPolicies', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listCollections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listCollections', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listCollectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listCollections', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listCollectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listCollections', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listLifecyclePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listLifecyclePolicies', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listLifecyclePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listLifecyclePolicies', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listLifecyclePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listLifecyclePolicies', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listSecurityConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityConfigs', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listSecurityConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityConfigs', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listSecurityConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityConfigs', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listSecurityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityPolicies', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listSecurityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityPolicies', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listSecurityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listSecurityPolicies', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listTagsForResource', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listTagsForResource', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listTagsForResource', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  listVpcEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listVpcEndpoints', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  listVpcEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listVpcEndpoints', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  listVpcEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'listVpcEndpoints', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'tagResource', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'tagResource', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'tagResource', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'untagResource', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'untagResource', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'untagResource', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccessPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccessPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccountSettings', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccountSettings', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateAccountSettings', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateCollection', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateCollection', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateCollection', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateLifecyclePolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateLifecyclePolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateSecurityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateSecurityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityConfig', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateSecurityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityConfig', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityPolicy', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateSecurityPolicy', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  updateVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), true, mock)
  },
  updateVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateVpcEndpoint', 'OpenSearchServerless', Promise.resolve(result), false, mock)
  },
  updateVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'updateVpcEndpoint', 'OpenSearchServerless', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'send', 'OpenSearchServerlessClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'send', 'OpenSearchServerlessClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearchserverless', 'send', 'OpenSearchServerlessClient', Promise.reject(result), true, mock)
  }
}
