
/**
* @description mocks_v3:mockRoute53Resolver module is mocks for AWS-SDK V3
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
export const mockRoute53Resolver = {
  associateFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverEndpointIpAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverEndpointIpAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverEndpointIpAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverEndpointIpAddress', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  associateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  associateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  associateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'associateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createOutpostResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createOutpostResolver', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createOutpostResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createOutpostResolver', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createOutpostResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createOutpostResolver', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  createResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  createResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  createResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'createResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteOutpostResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteOutpostResolver', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteOutpostResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteOutpostResolver', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteOutpostResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteOutpostResolver', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  deleteResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  deleteResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  deleteResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'deleteResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverEndpointIpAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverEndpointIpAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverEndpointIpAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverEndpointIpAddress', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  disassociateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  disassociateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  disassociateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'disassociateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallDomainList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallDomainList', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallDomainListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallDomainList', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallDomainListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallDomainList', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroupAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroup', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroup', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getFirewallRuleGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getFirewallRuleGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getFirewallRuleGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getFirewallRuleGroupPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getOutpostResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getOutpostResolver', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getOutpostResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getOutpostResolver', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getOutpostResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getOutpostResolver', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverDnssecConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverDnssecConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverDnssecConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverDnssecConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfigAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverQueryLogConfigPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverQueryLogConfigPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverQueryLogConfigPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRuleAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRuleAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRuleAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRuleAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRuleAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRuleAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  getResolverRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  getResolverRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  getResolverRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'getResolverRulePolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  importFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'importFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  importFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'importFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  importFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'importFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallDomainLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomainLists', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallDomainListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomainLists', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallDomainListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomainLists', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRuleGroupAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRuleGroupAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRuleGroupAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroupAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroups', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroups', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRuleGroups', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listFirewallRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRules', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listFirewallRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRules', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listFirewallRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listFirewallRules', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listOutpostResolvers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listOutpostResolvers', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listOutpostResolversAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listOutpostResolvers', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listOutpostResolversThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listOutpostResolvers', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverDnssecConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverDnssecConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverDnssecConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverDnssecConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverDnssecConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverDnssecConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverEndpointIpAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpointIpAddresses', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverEndpointIpAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpointIpAddresses', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverEndpointIpAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpointIpAddresses', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpoints', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpoints', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverEndpoints', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverQueryLogConfigAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverQueryLogConfigAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverQueryLogConfigAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverQueryLogConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigs', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverQueryLogConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigs', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverQueryLogConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverQueryLogConfigs', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverRuleAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRuleAssociations', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverRuleAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRuleAssociations', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverRuleAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRuleAssociations', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listResolverRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRules', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listResolverRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRules', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listResolverRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listResolverRules', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listTagsForResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listTagsForResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'listTagsForResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putFirewallRuleGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putFirewallRuleGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putFirewallRuleGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putFirewallRuleGroupPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putResolverQueryLogConfigPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putResolverQueryLogConfigPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putResolverQueryLogConfigPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverQueryLogConfigPolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  putResolverRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  putResolverRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverRulePolicy', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  putResolverRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'putResolverRulePolicy', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'tagResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'tagResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'tagResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'untagResource', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'untagResource', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'untagResource', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallDomains', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallDomains', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallDomains', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateFirewallRuleGroupAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateFirewallRuleGroupAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateFirewallRuleGroupAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateFirewallRuleGroupAssociation', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateOutpostResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateOutpostResolver', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateOutpostResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateOutpostResolver', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateOutpostResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateOutpostResolver', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverDnssecConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverDnssecConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverDnssecConfig', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverDnssecConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverDnssecConfig', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverEndpoint', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverEndpoint', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverEndpoint', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  updateResolverRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverRule', 'Route53Resolver', Promise.resolve(result), true, mock)
  },
  updateResolverRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverRule', 'Route53Resolver', Promise.resolve(result), false, mock)
  },
  updateResolverRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'updateResolverRule', 'Route53Resolver', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'send', 'Route53ResolverClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'send', 'Route53ResolverClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53resolver', 'send', 'Route53ResolverClient', Promise.reject(result), true, mock)
  }
}
