
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
  export const mockPricing = {
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Pricing', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Pricing', Promise.reject(result), true, mock)
  },
  getAttributeValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', Promise.resolve(result), true, mock)
  },
  getAttributeValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', Promise.resolve(result), false, mock)
  },
  getAttributeValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttributeValues', 'Pricing', Promise.reject(result), true, mock)
  },
  getProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', Promise.resolve(result), true, mock)
  },
  getProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', Promise.resolve(result), false, mock)
  },
  getProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProducts', 'Pricing', Promise.reject(result), true, mock)
  },
}
