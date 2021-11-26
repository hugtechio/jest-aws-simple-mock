
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMarketplaceCommerceAnalytics = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'destroy', 'MarketplaceCommerceAnalytics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'destroy', 'MarketplaceCommerceAnalytics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'destroy', 'MarketplaceCommerceAnalytics', Promise.reject(result), true, mock)
  },
  generateDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'generateDataSet', 'MarketplaceCommerceAnalytics', Promise.resolve(result), true, mock)
  },
  generateDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'generateDataSet', 'MarketplaceCommerceAnalytics', Promise.resolve(result), false, mock)
  },
  generateDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'generateDataSet', 'MarketplaceCommerceAnalytics', Promise.reject(result), true, mock)
  },
  startSupportDataExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'startSupportDataExport', 'MarketplaceCommerceAnalytics', Promise.resolve(result), true, mock)
  },
  startSupportDataExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'startSupportDataExport', 'MarketplaceCommerceAnalytics', Promise.resolve(result), false, mock)
  },
  startSupportDataExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'startSupportDataExport', 'MarketplaceCommerceAnalytics', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'send', 'MarketplaceCommerceAnalyticsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'send', 'MarketplaceCommerceAnalyticsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-commerce-analytics', 'send', 'MarketplaceCommerceAnalyticsClient', Promise.reject(result), true, mock)
  }
}