
/**
* @description mocks_v3:mockVPCLattice module is mocks for AWS-SDK V3
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
export const mockVPCLattice = {
  batchUpdateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'batchUpdateRule', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  batchUpdateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'batchUpdateRule', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  batchUpdateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'batchUpdateRule', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createAccessLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createAccessLogSubscription', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createAccessLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createAccessLogSubscription', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createAccessLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createAccessLogSubscription', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createListener', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createListener', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createListener', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createRule', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createRule', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createRule', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createService', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createService', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createService', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createServiceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetwork', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createServiceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetwork', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createServiceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetwork', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createServiceNetworkServiceAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createServiceNetworkServiceAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createServiceNetworkServiceAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkServiceAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createServiceNetworkVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createServiceNetworkVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createServiceNetworkVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createServiceNetworkVpcAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  createTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createTargetGroup', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  createTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createTargetGroup', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  createTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'createTargetGroup', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteAccessLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAccessLogSubscription', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteAccessLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAccessLogSubscription', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteAccessLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAccessLogSubscription', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteAuthPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAuthPolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteAuthPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAuthPolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteAuthPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteAuthPolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteListener', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteListener', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteListener', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteResourcePolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteResourcePolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteResourcePolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteRule', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteRule', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteRule', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteService', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteService', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteService', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteServiceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetwork', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteServiceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetwork', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteServiceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetwork', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteServiceNetworkServiceAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteServiceNetworkServiceAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteServiceNetworkServiceAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkServiceAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteServiceNetworkVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteServiceNetworkVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteServiceNetworkVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteServiceNetworkVpcAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deleteTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteTargetGroup', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deleteTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteTargetGroup', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deleteTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deleteTargetGroup', 'VPCLattice', Promise.reject(result), true, mock)
  },
  deregisterTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deregisterTargets', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  deregisterTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deregisterTargets', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  deregisterTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'deregisterTargets', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getAccessLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAccessLogSubscription', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getAccessLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAccessLogSubscription', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getAccessLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAccessLogSubscription', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getAuthPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAuthPolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getAuthPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAuthPolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getAuthPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getAuthPolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getListener', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getListener', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getListener', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getResourcePolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getResourcePolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getResourcePolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getRule', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getRule', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getRule', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getService', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getService', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getService', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getServiceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetwork', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getServiceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetwork', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getServiceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetwork', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getServiceNetworkServiceAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getServiceNetworkServiceAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkServiceAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getServiceNetworkServiceAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkServiceAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getServiceNetworkVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getServiceNetworkVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getServiceNetworkVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getServiceNetworkVpcAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  getTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getTargetGroup', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  getTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getTargetGroup', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  getTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'getTargetGroup', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listAccessLogSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listAccessLogSubscriptions', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listAccessLogSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listAccessLogSubscriptions', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listAccessLogSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listAccessLogSubscriptions', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listListeners', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listListeners', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listListeners', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listRules', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listRules', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listRules', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listServiceNetworkServiceAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkServiceAssociations', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listServiceNetworkServiceAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkServiceAssociations', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listServiceNetworkServiceAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkServiceAssociations', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listServiceNetworkVpcAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkVpcAssociations', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listServiceNetworkVpcAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkVpcAssociations', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listServiceNetworkVpcAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworkVpcAssociations', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listServiceNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworks', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listServiceNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworks', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listServiceNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServiceNetworks', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServices', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServices', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listServices', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTagsForResource', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTagsForResource', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTagsForResource', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargetGroups', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargetGroups', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargetGroups', 'VPCLattice', Promise.reject(result), true, mock)
  },
  listTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargets', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  listTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargets', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  listTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'listTargets', 'VPCLattice', Promise.reject(result), true, mock)
  },
  putAuthPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putAuthPolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  putAuthPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putAuthPolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  putAuthPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putAuthPolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putResourcePolicy', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putResourcePolicy', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'putResourcePolicy', 'VPCLattice', Promise.reject(result), true, mock)
  },
  registerTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'registerTargets', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  registerTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'registerTargets', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  registerTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'registerTargets', 'VPCLattice', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'tagResource', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'tagResource', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'tagResource', 'VPCLattice', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'untagResource', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'untagResource', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'untagResource', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateAccessLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateAccessLogSubscription', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateAccessLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateAccessLogSubscription', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateAccessLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateAccessLogSubscription', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateListener', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateListener', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateListener', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateRule', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateRule', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateRule', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateService', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateService', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateService', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateServiceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetwork', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateServiceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetwork', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateServiceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetwork', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateServiceNetworkVpcAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateServiceNetworkVpcAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetworkVpcAssociation', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateServiceNetworkVpcAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateServiceNetworkVpcAssociation', 'VPCLattice', Promise.reject(result), true, mock)
  },
  updateTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateTargetGroup', 'VPCLattice', Promise.resolve(result), true, mock)
  },
  updateTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateTargetGroup', 'VPCLattice', Promise.resolve(result), false, mock)
  },
  updateTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'updateTargetGroup', 'VPCLattice', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'send', 'VPCLatticeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'send', 'VPCLatticeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-vpc-lattice', 'send', 'VPCLatticeClient', Promise.reject(result), true, mock)
  }
}
