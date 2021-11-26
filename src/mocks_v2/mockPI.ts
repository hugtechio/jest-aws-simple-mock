
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
  export const mockPI = {
  describeDimensionKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', Promise.resolve(result), true, mock)
  },
  describeDimensionKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', Promise.resolve(result), false, mock)
  },
  describeDimensionKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', Promise.reject(result), true, mock)
  },
  getDimensionKeyDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', Promise.resolve(result), true, mock)
  },
  getDimensionKeyDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', Promise.resolve(result), false, mock)
  },
  getDimensionKeyDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', Promise.reject(result), true, mock)
  },
  getResourceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', Promise.resolve(result), true, mock)
  },
  getResourceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', Promise.resolve(result), false, mock)
  },
  getResourceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', Promise.reject(result), true, mock)
  },
}
