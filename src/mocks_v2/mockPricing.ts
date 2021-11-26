
/**
* @description mocks_v2:mockPricing.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockPricing = {
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', result, true, true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', result, false, true, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', result, true, false, mock)
  },
  getAttributeValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', result, true, true, mock)
  },
  getAttributeValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', result, false, true, mock)
  },
  getAttributeValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', result, true, false, mock)
  },
  getProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', result, true, true, mock)
  },
  getProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', result, false, true, mock)
  },
  getProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', result, true, false, mock)
  },
}
