
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
  export const mockTranslate = {
  createParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  createParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  createParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  deleteParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  deleteParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  deleteParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  deleteTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  deleteTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  deleteTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  describeTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  describeTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  describeTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Translate', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Translate', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Translate', Promise.reject(result), true, mock)
  },
  getParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  getParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  getParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  getTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  getTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  getTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  importTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  importTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  importTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  listParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  listParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  listParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  listTerminologies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTerminologies', 'Translate', Promise.resolve(result), true, mock)
  },
  listTerminologiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTerminologies', 'Translate', Promise.resolve(result), false, mock)
  },
  listTerminologiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTerminologies', 'Translate', Promise.reject(result), true, mock)
  },
  listTextTranslationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTextTranslationJobs', 'Translate', Promise.resolve(result), true, mock)
  },
  listTextTranslationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTextTranslationJobs', 'Translate', Promise.resolve(result), false, mock)
  },
  listTextTranslationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTextTranslationJobs', 'Translate', Promise.reject(result), true, mock)
  },
  startTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  startTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  startTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  stopTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  stopTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  stopTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  translateText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('translateText', 'Translate', Promise.resolve(result), true, mock)
  },
  translateTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('translateText', 'Translate', Promise.resolve(result), false, mock)
  },
  translateTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('translateText', 'Translate', Promise.reject(result), true, mock)
  },
  updateParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  updateParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  updateParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParallelData', 'Translate', Promise.reject(result), true, mock)
  },
}
