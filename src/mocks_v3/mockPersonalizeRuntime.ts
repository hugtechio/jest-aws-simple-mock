
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockPersonalizeRuntime = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'destroy', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'destroy', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'destroy', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
  getPersonalizedRanking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getPersonalizedRanking', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  getPersonalizedRankingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getPersonalizedRanking', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  getPersonalizedRankingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getPersonalizedRanking', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getRecommendations', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getRecommendations', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'getRecommendations', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'send', 'PersonalizeRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'send', 'PersonalizeRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-runtime', 'send', 'PersonalizeRuntimeClient', Promise.reject(result), true, mock)
  }
}