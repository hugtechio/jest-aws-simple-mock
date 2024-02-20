
/**
* @description mocks_v3:mockTranscribe module is mocks for AWS-SDK V3
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
export const mockTranscribe = {
  createCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  createLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  createMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  createVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  createVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'createVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteMedicalScribeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalScribeJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteMedicalScribeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalScribeJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteMedicalScribeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalScribeJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'deleteVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  describeLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'describeLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  describeLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'describeLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  describeLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'describeLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  getCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  getCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getMedicalScribeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalScribeJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getMedicalScribeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalScribeJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getMedicalScribeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalScribeJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  getTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  getVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'getVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  listCallAnalyticsCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsCategories', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listCallAnalyticsCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsCategories', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listCallAnalyticsCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsCategories', 'Transcribe', Promise.reject(result), true, mock)
  },
  listCallAnalyticsJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listCallAnalyticsJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listCallAnalyticsJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listCallAnalyticsJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listLanguageModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listLanguageModels', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listLanguageModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listLanguageModels', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listLanguageModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listLanguageModels', 'Transcribe', Promise.reject(result), true, mock)
  },
  listMedicalScribeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalScribeJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listMedicalScribeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalScribeJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listMedicalScribeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalScribeJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listMedicalTranscriptionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalTranscriptionJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listMedicalTranscriptionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalTranscriptionJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listMedicalTranscriptionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalTranscriptionJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listMedicalVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalVocabularies', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listMedicalVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalVocabularies', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listMedicalVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listMedicalVocabularies', 'Transcribe', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTagsForResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTagsForResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTagsForResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  listTranscriptionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTranscriptionJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listTranscriptionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTranscriptionJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listTranscriptionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listTranscriptionJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularies', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularies', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularies', 'Transcribe', Promise.reject(result), true, mock)
  },
  listVocabularyFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularyFilters', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listVocabularyFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularyFilters', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listVocabularyFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'listVocabularyFilters', 'Transcribe', Promise.reject(result), true, mock)
  },
  startCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  startMedicalScribeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalScribeJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startMedicalScribeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalScribeJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startMedicalScribeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalScribeJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  startMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  startTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'startTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'tagResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'tagResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'tagResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'untagResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'untagResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'untagResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'updateVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'send', 'TranscribeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'send', 'TranscribeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe', 'send', 'TranscribeClient', Promise.reject(result), true, mock)
  }
}
