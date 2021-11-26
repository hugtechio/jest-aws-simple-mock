
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
  export const mockRoute53Resolver = {
  associateFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverEndpointIpAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverEndpointIpAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverEndpointIpAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverEndpointIpAddress', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverEndpointIpAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverEndpointIpAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverEndpointIpAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroupAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverDnssecConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverDnssecConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverDnssecConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverDnssecConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfigAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfigPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRuleAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRuleAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRuleAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRuleAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRuleAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRuleAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResolverRulePolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  importFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  importFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  importFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallDomainLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomainLists', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallDomainListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomainLists', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallDomainListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomainLists', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRuleGroupAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRuleGroupAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRuleGroupAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroups', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroups', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRuleGroups', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRules', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRules', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFirewallRules', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverDnssecConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverDnssecConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverDnssecConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverDnssecConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverDnssecConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverDnssecConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverEndpointIpAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpointIpAddresses', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverEndpointIpAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpointIpAddresses', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverEndpointIpAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpointIpAddresses', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpoints', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpoints', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverEndpoints', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverQueryLogConfigAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverQueryLogConfigAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverQueryLogConfigAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverQueryLogConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverQueryLogConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverQueryLogConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverQueryLogConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverRuleAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRuleAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverRuleAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRuleAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverRuleAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRuleAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRules', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRules', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResolverRules', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putFirewallRuleGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putFirewallRuleGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putFirewallRuleGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putResolverQueryLogConfigPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putResolverQueryLogConfigPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putResolverQueryLogConfigPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putResolverRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putResolverRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putResolverRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResolverRulePolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallRuleGroupAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallRuleGroupAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallRuleGroupAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverDnssecConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverDnssecConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverDnssecConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverDnssecConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
}
