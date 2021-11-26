
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockElasticLoadBalancing = {
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'addTags', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'addTags', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'addTags', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  applySecurityGroupsToLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'applySecurityGroupsToLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  applySecurityGroupsToLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'applySecurityGroupsToLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  applySecurityGroupsToLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'applySecurityGroupsToLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  attachLoadBalancerToSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'attachLoadBalancerToSubnets', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  attachLoadBalancerToSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'attachLoadBalancerToSubnets', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  attachLoadBalancerToSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'attachLoadBalancerToSubnets', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  configureHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'configureHealthCheck', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  configureHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'configureHealthCheck', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  configureHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'configureHealthCheck', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  createAppCookieStickinessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createAppCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  createAppCookieStickinessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createAppCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  createAppCookieStickinessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createAppCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  createLBCookieStickinessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLBCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  createLBCookieStickinessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLBCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  createLBCookieStickinessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLBCookieStickinessPolicy', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  createLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  createLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  createLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  createLoadBalancerListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerListeners', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  createLoadBalancerListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerListeners', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  createLoadBalancerListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerListeners', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  createLoadBalancerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  createLoadBalancerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  createLoadBalancerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'createLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  deleteLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  deleteLoadBalancerListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerListeners', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerListeners', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerListeners', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  deleteLoadBalancerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deleteLoadBalancerPolicy', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  deregisterInstancesFromLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deregisterInstancesFromLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  deregisterInstancesFromLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deregisterInstancesFromLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  deregisterInstancesFromLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'deregisterInstancesFromLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeAccountLimits', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeAccountLimits', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeAccountLimits', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeInstanceHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeInstanceHealth', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeInstanceHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeInstanceHealth', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeInstanceHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeInstanceHealth', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeLoadBalancerAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeLoadBalancerAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeLoadBalancerAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeLoadBalancerPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicies', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeLoadBalancerPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicies', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeLoadBalancerPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicies', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeLoadBalancerPolicyTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicyTypes', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeLoadBalancerPolicyTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicyTypes', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeLoadBalancerPolicyTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancerPolicyTypes', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancers', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancers', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeLoadBalancers', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeTags', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeTags', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'describeTags', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'destroy', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'destroy', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'destroy', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  detachLoadBalancerFromSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'detachLoadBalancerFromSubnets', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  detachLoadBalancerFromSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'detachLoadBalancerFromSubnets', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  detachLoadBalancerFromSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'detachLoadBalancerFromSubnets', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  disableAvailabilityZonesForLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'disableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  disableAvailabilityZonesForLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'disableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  disableAvailabilityZonesForLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'disableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  enableAvailabilityZonesForLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'enableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  enableAvailabilityZonesForLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'enableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  enableAvailabilityZonesForLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'enableAvailabilityZonesForLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  modifyLoadBalancerAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  modifyLoadBalancerAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  modifyLoadBalancerAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'modifyLoadBalancerAttributes', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  registerInstancesWithLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'registerInstancesWithLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  registerInstancesWithLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'registerInstancesWithLoadBalancer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  registerInstancesWithLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'registerInstancesWithLoadBalancer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'removeTags', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'removeTags', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'removeTags', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  setLoadBalancerListenerSSLCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerListenerSSLCertificate', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  setLoadBalancerListenerSSLCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerListenerSSLCertificate', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  setLoadBalancerListenerSSLCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerListenerSSLCertificate', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  setLoadBalancerPoliciesForBackendServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesForBackendServer', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  setLoadBalancerPoliciesForBackendServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesForBackendServer', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  setLoadBalancerPoliciesForBackendServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesForBackendServer', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  setLoadBalancerPoliciesOfListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesOfListener', 'ElasticLoadBalancing', Promise.resolve(result), true, mock)
  },
  setLoadBalancerPoliciesOfListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesOfListener', 'ElasticLoadBalancing', Promise.resolve(result), false, mock)
  },
  setLoadBalancerPoliciesOfListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'setLoadBalancerPoliciesOfListener', 'ElasticLoadBalancing', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'send', 'ElasticLoadBalancingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'send', 'ElasticLoadBalancingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-load-balancing', 'send', 'ElasticLoadBalancingClient', Promise.reject(result), true, mock)
  }
}