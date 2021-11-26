
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAppConfigData = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'destroy', 'AppConfigData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'destroy', 'AppConfigData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'destroy', 'AppConfigData', Promise.reject(result), true, mock)
  },
  getLatestConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'getLatestConfiguration', 'AppConfigData', Promise.resolve(result), true, mock)
  },
  getLatestConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'getLatestConfiguration', 'AppConfigData', Promise.resolve(result), false, mock)
  },
  getLatestConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'getLatestConfiguration', 'AppConfigData', Promise.reject(result), true, mock)
  },
  startConfigurationSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'startConfigurationSession', 'AppConfigData', Promise.resolve(result), true, mock)
  },
  startConfigurationSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'startConfigurationSession', 'AppConfigData', Promise.resolve(result), false, mock)
  },
  startConfigurationSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'startConfigurationSession', 'AppConfigData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'send', 'AppConfigDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'send', 'AppConfigDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appconfigdata', 'send', 'AppConfigDataClient', Promise.reject(result), true, mock)
  }
}