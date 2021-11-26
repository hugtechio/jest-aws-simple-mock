
/**
* @description mocks_v2:mockMarketplaceEntitlementService.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMarketplaceEntitlementService = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceEntitlementService', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceEntitlementService', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceEntitlementService', result, true, false, mock)
  },
  getEntitlements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntitlements', 'MarketplaceEntitlementService', result, true, true, mock)
  },
  getEntitlementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntitlements', 'MarketplaceEntitlementService', result, false, true, mock)
  },
  getEntitlementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntitlements', 'MarketplaceEntitlementService', result, true, false, mock)
  },
}
