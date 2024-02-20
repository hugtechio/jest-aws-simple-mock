
/**
* @description mocks_v3:mockNetworkManager module is mocks for AWS-SDK V3
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
export const mockNetworkManager = {
  acceptAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'acceptAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  acceptAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'acceptAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  acceptAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'acceptAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateCustomerGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateCustomerGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateCustomerGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'associateTransitGatewayConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createConnectAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createConnectAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createConnectAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createCoreNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createCoreNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createCoreNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createCoreNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createCoreNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createCoreNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createSiteToSiteVpnAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSiteToSiteVpnAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createSiteToSiteVpnAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSiteToSiteVpnAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createSiteToSiteVpnAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createSiteToSiteVpnAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createTransitGatewayPeering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayPeering', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createTransitGatewayPeeringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayPeering', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createTransitGatewayPeeringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayPeering', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createTransitGatewayRouteTableAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createTransitGatewayRouteTableAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createTransitGatewayRouteTableAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createVpcAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createVpcAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'createVpcAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteCoreNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteCoreNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteCoreNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteCoreNetworkPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetworkPolicyVersion', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteCoreNetworkPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetworkPolicyVersion', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteCoreNetworkPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteCoreNetworkPolicyVersion', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deletePeering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deletePeering', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deletePeeringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deletePeering', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deletePeeringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deletePeering', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteResourcePolicy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteResourcePolicy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteResourcePolicy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deleteSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deregisterTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deregisterTransitGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deregisterTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deregisterTransitGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deregisterTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'deregisterTransitGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  describeGlobalNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'describeGlobalNetworks', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  describeGlobalNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'describeGlobalNetworks', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  describeGlobalNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'describeGlobalNetworks', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateCustomerGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateCustomerGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateCustomerGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  executeCoreNetworkChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'executeCoreNetworkChangeSet', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  executeCoreNetworkChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'executeCoreNetworkChangeSet', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  executeCoreNetworkChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'executeCoreNetworkChangeSet', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getConnectAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getConnectAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getConnectAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getConnectPeerAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getConnectPeerAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getConnectPeerAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeerAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnections', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnections', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getConnections', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCoreNetworkChangeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeEvents', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCoreNetworkChangeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeEvents', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCoreNetworkChangeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeEvents', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCoreNetworkChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeSet', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCoreNetworkChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeSet', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCoreNetworkChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkChangeSet', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCoreNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCoreNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCoreNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCoreNetworkPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkPolicy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCoreNetworkPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkPolicy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCoreNetworkPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCoreNetworkPolicy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCustomerGatewayAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCustomerGatewayAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCustomerGatewayAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCustomerGatewayAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCustomerGatewayAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getCustomerGatewayAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getDevices', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getDevices', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getDevices', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getLinkAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinkAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getLinkAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinkAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getLinkAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinkAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinks', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinks', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getLinks', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceCounts', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceCounts', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceCounts', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResourceRelationships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceRelationships', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourceRelationshipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceRelationships', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourceRelationshipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResourceRelationships', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResources', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResources', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkResources', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkRoutes', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkRoutes', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkRoutes', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkTelemetry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkTelemetry', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkTelemetryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkTelemetry', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkTelemetryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getNetworkTelemetry', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getResourcePolicy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getResourcePolicy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getResourcePolicy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getRouteAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getRouteAnalysis', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getRouteAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getRouteAnalysis', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getRouteAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getRouteAnalysis', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getSiteToSiteVpnAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSiteToSiteVpnAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getSiteToSiteVpnAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSiteToSiteVpnAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getSiteToSiteVpnAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSiteToSiteVpnAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSites', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSites', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getSites', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayConnectPeerAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayConnectPeerAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayConnectPeerAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayPeering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayPeering', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayPeeringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayPeering', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayPeeringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayPeering', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayRegistrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRegistrations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayRegistrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRegistrations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayRegistrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRegistrations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayRouteTableAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayRouteTableAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayRouteTableAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getTransitGatewayRouteTableAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getVpcAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getVpcAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'getVpcAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listAttachments', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listAttachments', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listAttachments', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listConnectPeers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listConnectPeers', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listConnectPeersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listConnectPeers', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listConnectPeersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listConnectPeers', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listCoreNetworkPolicyVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworkPolicyVersions', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listCoreNetworkPolicyVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworkPolicyVersions', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listCoreNetworkPolicyVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworkPolicyVersions', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listCoreNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworks', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listCoreNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworks', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listCoreNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listCoreNetworks', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listOrganizationServiceAccessStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listOrganizationServiceAccessStatus', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listOrganizationServiceAccessStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listOrganizationServiceAccessStatus', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listOrganizationServiceAccessStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listOrganizationServiceAccessStatus', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listPeerings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listPeerings', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listPeeringsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listPeerings', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listPeeringsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listPeerings', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listTagsForResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listTagsForResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'listTagsForResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  putCoreNetworkPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putCoreNetworkPolicy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  putCoreNetworkPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putCoreNetworkPolicy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  putCoreNetworkPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putCoreNetworkPolicy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putResourcePolicy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putResourcePolicy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'putResourcePolicy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  registerTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'registerTransitGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  registerTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'registerTransitGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  registerTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'registerTransitGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  rejectAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'rejectAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  rejectAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'rejectAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  rejectAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'rejectAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  restoreCoreNetworkPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'restoreCoreNetworkPolicyVersion', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  restoreCoreNetworkPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'restoreCoreNetworkPolicyVersion', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  restoreCoreNetworkPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'restoreCoreNetworkPolicyVersion', 'NetworkManager', Promise.reject(result), true, mock)
  },
  startOrganizationServiceAccessUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startOrganizationServiceAccessUpdate', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  startOrganizationServiceAccessUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startOrganizationServiceAccessUpdate', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  startOrganizationServiceAccessUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startOrganizationServiceAccessUpdate', 'NetworkManager', Promise.reject(result), true, mock)
  },
  startRouteAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startRouteAnalysis', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  startRouteAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startRouteAnalysis', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  startRouteAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'startRouteAnalysis', 'NetworkManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'tagResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'tagResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'tagResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'untagResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'untagResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'untagResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateCoreNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateCoreNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateCoreNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateCoreNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateCoreNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateCoreNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateNetworkResourceMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateNetworkResourceMetadata', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateNetworkResourceMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateNetworkResourceMetadata', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateNetworkResourceMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateNetworkResourceMetadata', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateVpcAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateVpcAttachment', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateVpcAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateVpcAttachment', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateVpcAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'updateVpcAttachment', 'NetworkManager', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'send', 'NetworkManagerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'send', 'NetworkManagerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmanager', 'send', 'NetworkManagerClient', Promise.reject(result), true, mock)
  }
}
