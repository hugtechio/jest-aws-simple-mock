
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
  export const mockPersonalizeRuntime = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
  getPersonalizedRanking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  getPersonalizedRankingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  getPersonalizedRankingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', Promise.resolve(result), true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', Promise.resolve(result), false, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', Promise.reject(result), true, mock)
  },
}
