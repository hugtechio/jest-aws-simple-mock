
/**
* @description mocks_v2:mockMarketplaceCommerceAnalytics.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMarketplaceCommerceAnalytics = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCommerceAnalytics', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCommerceAnalytics', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCommerceAnalytics', result, true, false, mock)
  },
  generateDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataSet', 'MarketplaceCommerceAnalytics', result, true, true, mock)
  },
  generateDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataSet', 'MarketplaceCommerceAnalytics', result, false, true, mock)
  },
  generateDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataSet', 'MarketplaceCommerceAnalytics', result, true, false, mock)
  },
  startSupportDataExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSupportDataExport', 'MarketplaceCommerceAnalytics', result, true, true, mock)
  },
  startSupportDataExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSupportDataExport', 'MarketplaceCommerceAnalytics', result, false, true, mock)
  },
  startSupportDataExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSupportDataExport', 'MarketplaceCommerceAnalytics', result, true, false, mock)
  },
}
