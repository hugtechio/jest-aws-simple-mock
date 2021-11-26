
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockTimestreamQuery = {
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'destroy', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'destroy', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'destroy', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.reject(result), true, mock)
  }
}