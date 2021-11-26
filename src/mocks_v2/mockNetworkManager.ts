
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
  export const mockNetworkManager = {
  associateCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCustomerGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCustomerGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCustomerGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  associateTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  associateTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  associateTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTransitGatewayConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  createSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  createSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  createSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
  deregisterTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTransitGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  deregisterTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTransitGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  deregisterTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTransitGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  describeGlobalNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalNetworks', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  describeGlobalNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalNetworks', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  describeGlobalNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalNetworks', 'NetworkManager', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateCustomerGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCustomerGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateCustomerGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCustomerGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateCustomerGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCustomerGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  disassociateTransitGatewayConnectPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  disassociateTransitGatewayConnectPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  disassociateTransitGatewayConnectPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTransitGatewayConnectPeer', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getCustomerGatewayAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomerGatewayAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getCustomerGatewayAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomerGatewayAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getCustomerGatewayAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomerGatewayAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevices', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevices', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevices', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getLinkAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getLinkAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getLinkAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinks', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinks', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinks', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceCounts', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceCounts', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceCounts', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResourceRelationships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceRelationships', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourceRelationshipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceRelationships', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourceRelationshipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResourceRelationships', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResources', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResources', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkResources', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkRoutes', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkRoutes', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkRoutes', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getNetworkTelemetry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkTelemetry', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getNetworkTelemetryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkTelemetry', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getNetworkTelemetryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkTelemetry', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getRouteAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRouteAnalysis', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getRouteAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRouteAnalysis', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getRouteAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRouteAnalysis', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSites', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSites', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSites', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayConnectPeerAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayConnectPeerAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayConnectPeerAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayConnectPeerAssociations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  getTransitGatewayRegistrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayRegistrations', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  getTransitGatewayRegistrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayRegistrations', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  getTransitGatewayRegistrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTransitGatewayRegistrations', 'NetworkManager', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  registerTransitGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTransitGateway', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  registerTransitGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTransitGateway', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  registerTransitGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTransitGateway', 'NetworkManager', Promise.reject(result), true, mock)
  },
  startRouteAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRouteAnalysis', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  startRouteAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRouteAnalysis', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  startRouteAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRouteAnalysis', 'NetworkManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateGlobalNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalNetwork', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateGlobalNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalNetwork', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateGlobalNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalNetwork', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLink', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLink', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLink', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateNetworkResourceMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkResourceMetadata', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateNetworkResourceMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkResourceMetadata', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateNetworkResourceMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkResourceMetadata', 'NetworkManager', Promise.reject(result), true, mock)
  },
  updateSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSite', 'NetworkManager', Promise.resolve(result), true, mock)
  },
  updateSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSite', 'NetworkManager', Promise.resolve(result), false, mock)
  },
  updateSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSite', 'NetworkManager', Promise.reject(result), true, mock)
  },
}
