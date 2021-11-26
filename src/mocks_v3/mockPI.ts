
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockPI = {
  describeDimensionKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.resolve(result), true, mock)
  },
  describeDimensionKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.resolve(result), false, mock)
  },
  describeDimensionKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'destroy', 'PI', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'destroy', 'PI', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'destroy', 'PI', Promise.reject(result), true, mock)
  },
  getDimensionKeyDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.resolve(result), true, mock)
  },
  getDimensionKeyDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.resolve(result), false, mock)
  },
  getDimensionKeyDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.reject(result), true, mock)
  },
  getResourceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.resolve(result), true, mock)
  },
  getResourceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.resolve(result), false, mock)
  },
  getResourceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.reject(result), true, mock)
  }
}