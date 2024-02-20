
/**
* @description mocks_v3:mockOutposts module is mocks for AWS-SDK V3
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
export const mockOutposts = {
  cancelOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'cancelOrder', 'Outposts', Promise.resolve(result), true, mock)
  },
  cancelOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'cancelOrder', 'Outposts', Promise.resolve(result), false, mock)
  },
  cancelOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'cancelOrder', 'Outposts', Promise.reject(result), true, mock)
  },
  createOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.reject(result), true, mock)
  },
  createOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  createSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  createSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  createSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createSite', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.reject(result), true, mock)
  },
  getCatalogItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getCatalogItem', 'Outposts', Promise.resolve(result), true, mock)
  },
  getCatalogItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getCatalogItem', 'Outposts', Promise.resolve(result), false, mock)
  },
  getCatalogItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getCatalogItem', 'Outposts', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getConnection', 'Outposts', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getConnection', 'Outposts', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getConnection', 'Outposts', Promise.reject(result), true, mock)
  },
  getOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOrder', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOrder', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOrder', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpostInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.reject(result), true, mock)
  },
  getSiteAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSiteAddress', 'Outposts', Promise.resolve(result), true, mock)
  },
  getSiteAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSiteAddress', 'Outposts', Promise.resolve(result), false, mock)
  },
  getSiteAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSiteAddress', 'Outposts', Promise.reject(result), true, mock)
  },
  getSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  getSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  getSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getSite', 'Outposts', Promise.reject(result), true, mock)
  },
  listAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listAssets', 'Outposts', Promise.resolve(result), true, mock)
  },
  listAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listAssets', 'Outposts', Promise.resolve(result), false, mock)
  },
  listAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listAssets', 'Outposts', Promise.reject(result), true, mock)
  },
  listCatalogItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listCatalogItems', 'Outposts', Promise.resolve(result), true, mock)
  },
  listCatalogItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listCatalogItems', 'Outposts', Promise.resolve(result), false, mock)
  },
  listCatalogItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listCatalogItems', 'Outposts', Promise.reject(result), true, mock)
  },
  listOrders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOrders', 'Outposts', Promise.resolve(result), true, mock)
  },
  listOrdersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOrders', 'Outposts', Promise.resolve(result), false, mock)
  },
  listOrdersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOrders', 'Outposts', Promise.reject(result), true, mock)
  },
  listOutposts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.resolve(result), true, mock)
  },
  listOutpostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.resolve(result), false, mock)
  },
  listOutpostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.reject(result), true, mock)
  },
  listSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.resolve(result), true, mock)
  },
  listSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.resolve(result), false, mock)
  },
  listSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.reject(result), true, mock)
  },
  startConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'startConnection', 'Outposts', Promise.resolve(result), true, mock)
  },
  startConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'startConnection', 'Outposts', Promise.resolve(result), false, mock)
  },
  startConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'startConnection', 'Outposts', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.reject(result), true, mock)
  },
  updateOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  updateOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  updateOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  updateSiteAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteAddress', 'Outposts', Promise.resolve(result), true, mock)
  },
  updateSiteAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteAddress', 'Outposts', Promise.resolve(result), false, mock)
  },
  updateSiteAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteAddress', 'Outposts', Promise.reject(result), true, mock)
  },
  updateSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  updateSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  updateSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSite', 'Outposts', Promise.reject(result), true, mock)
  },
  updateSiteRackPhysicalProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteRackPhysicalProperties', 'Outposts', Promise.resolve(result), true, mock)
  },
  updateSiteRackPhysicalPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteRackPhysicalProperties', 'Outposts', Promise.resolve(result), false, mock)
  },
  updateSiteRackPhysicalPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'updateSiteRackPhysicalProperties', 'Outposts', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.reject(result), true, mock)
  }
}
