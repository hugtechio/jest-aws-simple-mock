
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
  export const mockMarketplaceMetering = {
  batchMeterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  batchMeterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  batchMeterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchMeterUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  meterUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  meterUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  meterUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('meterUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  registerUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  registerUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  registerUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerUsage', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
  resolveCustomer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', Promise.resolve(result), true, mock)
  },
  resolveCustomerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', Promise.resolve(result), false, mock)
  },
  resolveCustomerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCustomer', 'MarketplaceMetering', Promise.reject(result), true, mock)
  },
}
