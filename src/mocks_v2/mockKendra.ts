
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
  export const mockKendra = {
  batchDeleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDocument', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchDeleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDocument', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchDeleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDocument', 'Kendra', Promise.reject(result), true, mock)
  },
  batchGetDocumentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDocumentStatus', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchGetDocumentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDocumentStatus', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchGetDocumentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDocumentStatus', 'Kendra', Promise.reject(result), true, mock)
  },
  batchPutDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutDocument', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchPutDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutDocument', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchPutDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutDocument', 'Kendra', Promise.reject(result), true, mock)
  },
  clearQuerySuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('clearQuerySuggestions', 'Kendra', Promise.resolve(result), true, mock)
  },
  clearQuerySuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('clearQuerySuggestions', 'Kendra', Promise.resolve(result), false, mock)
  },
  clearQuerySuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('clearQuerySuggestions', 'Kendra', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  createFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  createFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  createFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  createQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  createQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  createQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  createThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  createThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  createThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  deletePrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  deletePrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  deletePrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  describeDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  describeFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  describeIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  describePrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  describePrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  describePrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  describeQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  describeQuerySuggestionsConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeQuerySuggestionsConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeQuerySuggestionsConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuerySuggestionsConfig', 'Kendra', Promise.reject(result), true, mock)
  },
  describeThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kendra', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kendra', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kendra', Promise.reject(result), true, mock)
  },
  getQuerySuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuerySuggestions', 'Kendra', Promise.resolve(result), true, mock)
  },
  getQuerySuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuerySuggestions', 'Kendra', Promise.resolve(result), false, mock)
  },
  getQuerySuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuerySuggestions', 'Kendra', Promise.reject(result), true, mock)
  },
  listDataSourceSyncJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSourceSyncJobs', 'Kendra', Promise.resolve(result), true, mock)
  },
  listDataSourceSyncJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSourceSyncJobs', 'Kendra', Promise.resolve(result), false, mock)
  },
  listDataSourceSyncJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSourceSyncJobs', 'Kendra', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSources', 'Kendra', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSources', 'Kendra', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSources', 'Kendra', Promise.reject(result), true, mock)
  },
  listFaqs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaqs', 'Kendra', Promise.resolve(result), true, mock)
  },
  listFaqsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaqs', 'Kendra', Promise.resolve(result), false, mock)
  },
  listFaqsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaqs', 'Kendra', Promise.reject(result), true, mock)
  },
  listGroupsOlderThanOrderingId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupsOlderThanOrderingId', 'Kendra', Promise.resolve(result), true, mock)
  },
  listGroupsOlderThanOrderingIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupsOlderThanOrderingId', 'Kendra', Promise.resolve(result), false, mock)
  },
  listGroupsOlderThanOrderingIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupsOlderThanOrderingId', 'Kendra', Promise.reject(result), true, mock)
  },
  listIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndices', 'Kendra', Promise.resolve(result), true, mock)
  },
  listIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndices', 'Kendra', Promise.resolve(result), false, mock)
  },
  listIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndices', 'Kendra', Promise.reject(result), true, mock)
  },
  listQuerySuggestionsBlockLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuerySuggestionsBlockLists', 'Kendra', Promise.resolve(result), true, mock)
  },
  listQuerySuggestionsBlockListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuerySuggestionsBlockLists', 'Kendra', Promise.resolve(result), false, mock)
  },
  listQuerySuggestionsBlockListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuerySuggestionsBlockLists', 'Kendra', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Kendra', Promise.reject(result), true, mock)
  },
  listThesauri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThesauri', 'Kendra', Promise.resolve(result), true, mock)
  },
  listThesauriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThesauri', 'Kendra', Promise.resolve(result), false, mock)
  },
  listThesauriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThesauri', 'Kendra', Promise.reject(result), true, mock)
  },
  putPrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  putPrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  putPrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'Kendra', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'Kendra', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'Kendra', Promise.reject(result), true, mock)
  },
  startDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataSourceSyncJob', 'Kendra', Promise.resolve(result), true, mock)
  },
  startDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataSourceSyncJob', 'Kendra', Promise.resolve(result), false, mock)
  },
  startDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataSourceSyncJob', 'Kendra', Promise.reject(result), true, mock)
  },
  stopDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataSourceSyncJob', 'Kendra', Promise.resolve(result), true, mock)
  },
  stopDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataSourceSyncJob', 'Kendra', Promise.resolve(result), false, mock)
  },
  stopDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataSourceSyncJob', 'Kendra', Promise.reject(result), true, mock)
  },
  submitFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'Kendra', Promise.resolve(result), true, mock)
  },
  submitFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'Kendra', Promise.resolve(result), false, mock)
  },
  submitFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'Kendra', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Kendra', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Kendra', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  updateIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  updateQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  updateQuerySuggestionsConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateQuerySuggestionsConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateQuerySuggestionsConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuerySuggestionsConfig', 'Kendra', Promise.reject(result), true, mock)
  },
  updateThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
}
