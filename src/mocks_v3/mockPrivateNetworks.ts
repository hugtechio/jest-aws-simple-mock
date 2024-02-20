
/**
* @description mocks_v3:mockPrivateNetworks module is mocks for AWS-SDK V3
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
export const mockPrivateNetworks = {
  acknowledgeOrderReceipt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'acknowledgeOrderReceipt', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  acknowledgeOrderReceiptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'acknowledgeOrderReceipt', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  acknowledgeOrderReceiptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'acknowledgeOrderReceipt', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  activateDeviceIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  activateDeviceIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  activateDeviceIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateDeviceIdentifier', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  activateNetworkSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateNetworkSite', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  activateNetworkSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateNetworkSite', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  activateNetworkSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'activateNetworkSite', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  configureAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'configureAccessPoint', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  configureAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'configureAccessPoint', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  configureAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'configureAccessPoint', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  createNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetwork', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  createNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetwork', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  createNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetwork', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  createNetworkSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetworkSite', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  createNetworkSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetworkSite', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  createNetworkSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'createNetworkSite', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  deactivateDeviceIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deactivateDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  deactivateDeviceIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deactivateDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  deactivateDeviceIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deactivateDeviceIdentifier', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  deleteNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetwork', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  deleteNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetwork', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  deleteNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetwork', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  deleteNetworkSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetworkSite', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  deleteNetworkSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetworkSite', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  deleteNetworkSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'deleteNetworkSite', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  getDeviceIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  getDeviceIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getDeviceIdentifier', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  getDeviceIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getDeviceIdentifier', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  getNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetwork', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  getNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetwork', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  getNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetwork', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  getNetworkResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkResource', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  getNetworkResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkResource', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  getNetworkResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkResource', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  getNetworkSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkSite', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  getNetworkSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkSite', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  getNetworkSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getNetworkSite', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  getOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getOrder', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  getOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getOrder', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  getOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'getOrder', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listDeviceIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listDeviceIdentifiers', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listDeviceIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listDeviceIdentifiers', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listDeviceIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listDeviceIdentifiers', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listNetworkResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkResources', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listNetworkResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkResources', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listNetworkResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkResources', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listNetworkSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkSites', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listNetworkSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkSites', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listNetworkSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworkSites', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworks', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworks', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listNetworks', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listOrders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listOrders', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listOrdersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listOrders', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listOrdersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listOrders', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listTagsForResource', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listTagsForResource', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'listTagsForResource', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  ping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'ping', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  pingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'ping', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  pingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'ping', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  startNetworkResourceUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'startNetworkResourceUpdate', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  startNetworkResourceUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'startNetworkResourceUpdate', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  startNetworkResourceUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'startNetworkResourceUpdate', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'tagResource', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'tagResource', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'tagResource', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'untagResource', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'untagResource', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'untagResource', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  updateNetworkSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSite', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  updateNetworkSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSite', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  updateNetworkSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSite', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  updateNetworkSitePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSitePlan', 'PrivateNetworks', Promise.resolve(result), true, mock)
  },
  updateNetworkSitePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSitePlan', 'PrivateNetworks', Promise.resolve(result), false, mock)
  },
  updateNetworkSitePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'updateNetworkSitePlan', 'PrivateNetworks', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'send', 'PrivateNetworksClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'send', 'PrivateNetworksClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-privatenetworks', 'send', 'PrivateNetworksClient', Promise.reject(result), true, mock)
  }
}
