
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAccount = {
  deleteAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  deleteAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  deleteAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'destroy', 'Account', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'destroy', 'Account', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'destroy', 'Account', Promise.reject(result), true, mock)
  },
  getAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  getAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  getAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  putAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  putAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  putAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.reject(result), true, mock)
  }
}