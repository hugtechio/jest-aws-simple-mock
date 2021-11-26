
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
  export const mockTranscribe = {
  createCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  createLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  createMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  createVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  createVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  createVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  createVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  deleteVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  deleteVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  deleteVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  describeLanguageModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLanguageModel', 'Transcribe', Promise.resolve(result), true, mock)
  },
  describeLanguageModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLanguageModel', 'Transcribe', Promise.resolve(result), false, mock)
  },
  describeLanguageModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLanguageModel', 'Transcribe', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transcribe', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transcribe', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transcribe', Promise.reject(result), true, mock)
  },
  getCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  getCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  getTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  getVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  getVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  getVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  getVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
  listCallAnalyticsCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsCategories', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listCallAnalyticsCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsCategories', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listCallAnalyticsCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsCategories', 'Transcribe', Promise.reject(result), true, mock)
  },
  listCallAnalyticsJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listCallAnalyticsJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listCallAnalyticsJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCallAnalyticsJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listLanguageModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLanguageModels', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listLanguageModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLanguageModels', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listLanguageModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLanguageModels', 'Transcribe', Promise.reject(result), true, mock)
  },
  listMedicalTranscriptionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalTranscriptionJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listMedicalTranscriptionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalTranscriptionJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listMedicalTranscriptionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalTranscriptionJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listMedicalVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalVocabularies', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listMedicalVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalVocabularies', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listMedicalVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMedicalVocabularies', 'Transcribe', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  listTranscriptionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTranscriptionJobs', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listTranscriptionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTranscriptionJobs', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listTranscriptionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTranscriptionJobs', 'Transcribe', Promise.reject(result), true, mock)
  },
  listVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularies', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularies', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularies', 'Transcribe', Promise.reject(result), true, mock)
  },
  listVocabularyFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularyFilters', 'Transcribe', Promise.resolve(result), true, mock)
  },
  listVocabularyFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularyFilters', 'Transcribe', Promise.resolve(result), false, mock)
  },
  listVocabularyFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVocabularyFilters', 'Transcribe', Promise.reject(result), true, mock)
  },
  startCallAnalyticsJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCallAnalyticsJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startCallAnalyticsJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCallAnalyticsJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startCallAnalyticsJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCallAnalyticsJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  startMedicalTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startMedicalTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startMedicalTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  startTranscriptionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTranscriptionJob', 'Transcribe', Promise.resolve(result), true, mock)
  },
  startTranscriptionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTranscriptionJob', 'Transcribe', Promise.resolve(result), false, mock)
  },
  startTranscriptionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTranscriptionJob', 'Transcribe', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transcribe', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transcribe', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateCallAnalyticsCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateCallAnalyticsCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCallAnalyticsCategory', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateCallAnalyticsCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCallAnalyticsCategory', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateMedicalVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMedicalVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateMedicalVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMedicalVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateMedicalVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMedicalVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabulary', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabulary', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabulary', 'Transcribe', Promise.reject(result), true, mock)
  },
  updateVocabularyFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabularyFilter', 'Transcribe', Promise.resolve(result), true, mock)
  },
  updateVocabularyFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabularyFilter', 'Transcribe', Promise.resolve(result), false, mock)
  },
  updateVocabularyFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVocabularyFilter', 'Transcribe', Promise.reject(result), true, mock)
  },
}
