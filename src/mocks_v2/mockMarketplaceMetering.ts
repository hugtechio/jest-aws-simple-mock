
/**
* @description mocks_v2:mockMarketplaceMetering.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMarketplaceMetering = {
  batchMeterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', result, true, true, mock)
  },
  batchMeterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', result, false, true, mock)
  },
  batchMeterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', result, true, false, mock)
  },
  meterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', result, true, true, mock)
  },
  meterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', result, false, true, mock)
  },
  meterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', result, true, false, mock)
  },
  registerUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', result, true, true, mock)
  },
  registerUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', result, false, true, mock)
  },
  registerUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', result, true, false, mock)
  },
  resolveCustomer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', result, true, true, mock)
  },
  resolveCustomerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', result, false, true, mock)
  },
  resolveCustomerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', result, true, false, mock)
  },
}
