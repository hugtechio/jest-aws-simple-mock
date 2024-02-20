
/**
* @description mocks_v3:mockPricing module is mocks for AWS-SDK V3
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
export const mockPricing = {
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'describeServices', 'Pricing', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'describeServices', 'Pricing', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'describeServices', 'Pricing', Promise.reject(result), true, mock)
  },
  getAttributeValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getAttributeValues', 'Pricing', Promise.resolve(result), true, mock)
  },
  getAttributeValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getAttributeValues', 'Pricing', Promise.resolve(result), false, mock)
  },
  getAttributeValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getAttributeValues', 'Pricing', Promise.reject(result), true, mock)
  },
  getPriceListFileUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getPriceListFileUrl', 'Pricing', Promise.resolve(result), true, mock)
  },
  getPriceListFileUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getPriceListFileUrl', 'Pricing', Promise.resolve(result), false, mock)
  },
  getPriceListFileUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getPriceListFileUrl', 'Pricing', Promise.reject(result), true, mock)
  },
  getProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getProducts', 'Pricing', Promise.resolve(result), true, mock)
  },
  getProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getProducts', 'Pricing', Promise.resolve(result), false, mock)
  },
  getProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'getProducts', 'Pricing', Promise.reject(result), true, mock)
  },
  listPriceLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'listPriceLists', 'Pricing', Promise.resolve(result), true, mock)
  },
  listPriceListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'listPriceLists', 'Pricing', Promise.resolve(result), false, mock)
  },
  listPriceListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'listPriceLists', 'Pricing', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'send', 'PricingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'send', 'PricingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pricing', 'send', 'PricingClient', Promise.reject(result), true, mock)
  }
}
