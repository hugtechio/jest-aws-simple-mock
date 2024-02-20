
/**
* @description mocks_v3:mockTranslate module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}
export const mockTranslate = {
  createParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'createParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  createParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'createParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  createParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'createParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  deleteParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  deleteParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  deleteParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  deleteTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  deleteTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  deleteTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'deleteTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  describeTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'describeTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  describeTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'describeTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  describeTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'describeTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  getParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  getParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  getParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  getTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  getTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  getTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'getTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  importTerminology: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'importTerminology', 'Translate', Promise.resolve(result), true, mock)
  },
  importTerminologyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'importTerminology', 'Translate', Promise.resolve(result), false, mock)
  },
  importTerminologyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'importTerminology', 'Translate', Promise.reject(result), true, mock)
  },
  listLanguages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listLanguages', 'Translate', Promise.resolve(result), true, mock)
  },
  listLanguagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listLanguages', 'Translate', Promise.resolve(result), false, mock)
  },
  listLanguagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listLanguages', 'Translate', Promise.reject(result), true, mock)
  },
  listParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  listParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  listParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTagsForResource', 'Translate', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTagsForResource', 'Translate', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTagsForResource', 'Translate', Promise.reject(result), true, mock)
  },
  listTerminologies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTerminologies', 'Translate', Promise.resolve(result), true, mock)
  },
  listTerminologiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTerminologies', 'Translate', Promise.resolve(result), false, mock)
  },
  listTerminologiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTerminologies', 'Translate', Promise.reject(result), true, mock)
  },
  listTextTranslationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTextTranslationJobs', 'Translate', Promise.resolve(result), true, mock)
  },
  listTextTranslationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTextTranslationJobs', 'Translate', Promise.resolve(result), false, mock)
  },
  listTextTranslationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'listTextTranslationJobs', 'Translate', Promise.reject(result), true, mock)
  },
  startTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'startTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  startTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'startTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  startTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'startTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  stopTextTranslationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'stopTextTranslationJob', 'Translate', Promise.resolve(result), true, mock)
  },
  stopTextTranslationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'stopTextTranslationJob', 'Translate', Promise.resolve(result), false, mock)
  },
  stopTextTranslationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'stopTextTranslationJob', 'Translate', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'tagResource', 'Translate', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'tagResource', 'Translate', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'tagResource', 'Translate', Promise.reject(result), true, mock)
  },
  translateDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateDocument', 'Translate', Promise.resolve(result), true, mock)
  },
  translateDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateDocument', 'Translate', Promise.resolve(result), false, mock)
  },
  translateDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateDocument', 'Translate', Promise.reject(result), true, mock)
  },
  translateText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateText', 'Translate', Promise.resolve(result), true, mock)
  },
  translateTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateText', 'Translate', Promise.resolve(result), false, mock)
  },
  translateTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'translateText', 'Translate', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'untagResource', 'Translate', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'untagResource', 'Translate', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'untagResource', 'Translate', Promise.reject(result), true, mock)
  },
  updateParallelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'updateParallelData', 'Translate', Promise.resolve(result), true, mock)
  },
  updateParallelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'updateParallelData', 'Translate', Promise.resolve(result), false, mock)
  },
  updateParallelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'updateParallelData', 'Translate', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'send', 'TranslateClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'send', 'TranslateClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-translate', 'send', 'TranslateClient', Promise.reject(result), true, mock)
  }
}
