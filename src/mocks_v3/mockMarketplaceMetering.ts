
/**
* @description mocks_v3:mockMarketplaceMetering module is mocks for AWS-SDK V3
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
export const mockMarketplaceMetering = {
  batchMeterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'batchMeterUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  batchMeterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'batchMeterUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  batchMeterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'batchMeterUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  meterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'meterUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  meterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'meterUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  meterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'meterUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  registerUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'registerUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  registerUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'registerUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  registerUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'registerUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  resolveCustomer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'resolveCustomer', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  resolveCustomerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'resolveCustomer', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  resolveCustomerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'resolveCustomer', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'send', 'MarketplaceMeteringClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'send', 'MarketplaceMeteringClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-metering', 'send', 'MarketplaceMeteringClient', Promise.reject(result), true, mock)
  }
}
