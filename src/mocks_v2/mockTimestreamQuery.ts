
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
  export const mockTimestreamQuery = {
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
}
