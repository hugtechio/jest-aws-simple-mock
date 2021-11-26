
/**
* @description mocks_v3:mockKendra module is mocks for AWS-SDK V3
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

  export const mockKendra = {
  batchDeleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchDeleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchDeleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.reject(result), true, mock)
  },
  batchGetDocumentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchGetDocumentStatus', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchGetDocumentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchGetDocumentStatus', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchGetDocumentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchGetDocumentStatus', 'Kendra', Promise.reject(result), true, mock)
  },
  batchPutDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchPutDocument', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchPutDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchPutDocument', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchPutDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchPutDocument', 'Kendra', Promise.reject(result), true, mock)
  },
  clearQuerySuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'clearQuerySuggestions', 'Kendra', Promise.resolve(result), true, mock)
  },
  clearQuerySuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'clearQuerySuggestions', 'Kendra', Promise.resolve(result), false, mock)
  },
  clearQuerySuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'clearQuerySuggestions', 'Kendra', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  createFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  createFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  createFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  createQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  createQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  createQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  createThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  createThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  createThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  deletePrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deletePrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  deletePrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deletePrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  deletePrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deletePrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  deleteThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  describeDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  describeFaq: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFaq', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeFaqAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFaq', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeFaqThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFaq', 'Kendra', Promise.reject(result), true, mock)
  },
  describeIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  describePrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describePrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  describePrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describePrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  describePrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describePrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  describeQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  describeQuerySuggestionsConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeQuerySuggestionsConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeQuerySuggestionsConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeQuerySuggestionsConfig', 'Kendra', Promise.reject(result), true, mock)
  },
  describeThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'destroy', 'Kendra', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'destroy', 'Kendra', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'destroy', 'Kendra', Promise.reject(result), true, mock)
  },
  getQuerySuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getQuerySuggestions', 'Kendra', Promise.resolve(result), true, mock)
  },
  getQuerySuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getQuerySuggestions', 'Kendra', Promise.resolve(result), false, mock)
  },
  getQuerySuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getQuerySuggestions', 'Kendra', Promise.reject(result), true, mock)
  },
  listDataSourceSyncJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSourceSyncJobs', 'Kendra', Promise.resolve(result), true, mock)
  },
  listDataSourceSyncJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSourceSyncJobs', 'Kendra', Promise.resolve(result), false, mock)
  },
  listDataSourceSyncJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSourceSyncJobs', 'Kendra', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSources', 'Kendra', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSources', 'Kendra', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listDataSources', 'Kendra', Promise.reject(result), true, mock)
  },
  listFaqs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFaqs', 'Kendra', Promise.resolve(result), true, mock)
  },
  listFaqsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFaqs', 'Kendra', Promise.resolve(result), false, mock)
  },
  listFaqsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFaqs', 'Kendra', Promise.reject(result), true, mock)
  },
  listGroupsOlderThanOrderingId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listGroupsOlderThanOrderingId', 'Kendra', Promise.resolve(result), true, mock)
  },
  listGroupsOlderThanOrderingIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listGroupsOlderThanOrderingId', 'Kendra', Promise.resolve(result), false, mock)
  },
  listGroupsOlderThanOrderingIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listGroupsOlderThanOrderingId', 'Kendra', Promise.reject(result), true, mock)
  },
  listIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listIndices', 'Kendra', Promise.resolve(result), true, mock)
  },
  listIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listIndices', 'Kendra', Promise.resolve(result), false, mock)
  },
  listIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listIndices', 'Kendra', Promise.reject(result), true, mock)
  },
  listQuerySuggestionsBlockLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listQuerySuggestionsBlockLists', 'Kendra', Promise.resolve(result), true, mock)
  },
  listQuerySuggestionsBlockListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listQuerySuggestionsBlockLists', 'Kendra', Promise.resolve(result), false, mock)
  },
  listQuerySuggestionsBlockListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listQuerySuggestionsBlockLists', 'Kendra', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listTagsForResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listTagsForResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listTagsForResource', 'Kendra', Promise.reject(result), true, mock)
  },
  listThesauri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listThesauri', 'Kendra', Promise.resolve(result), true, mock)
  },
  listThesauriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listThesauri', 'Kendra', Promise.resolve(result), false, mock)
  },
  listThesauriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listThesauri', 'Kendra', Promise.reject(result), true, mock)
  },
  putPrincipalMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'putPrincipalMapping', 'Kendra', Promise.resolve(result), true, mock)
  },
  putPrincipalMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'putPrincipalMapping', 'Kendra', Promise.resolve(result), false, mock)
  },
  putPrincipalMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'putPrincipalMapping', 'Kendra', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'query', 'Kendra', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'query', 'Kendra', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'query', 'Kendra', Promise.reject(result), true, mock)
  },
  startDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'startDataSourceSyncJob', 'Kendra', Promise.resolve(result), true, mock)
  },
  startDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'startDataSourceSyncJob', 'Kendra', Promise.resolve(result), false, mock)
  },
  startDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'startDataSourceSyncJob', 'Kendra', Promise.reject(result), true, mock)
  },
  stopDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'stopDataSourceSyncJob', 'Kendra', Promise.resolve(result), true, mock)
  },
  stopDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'stopDataSourceSyncJob', 'Kendra', Promise.resolve(result), false, mock)
  },
  stopDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'stopDataSourceSyncJob', 'Kendra', Promise.reject(result), true, mock)
  },
  submitFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'submitFeedback', 'Kendra', Promise.resolve(result), true, mock)
  },
  submitFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'submitFeedback', 'Kendra', Promise.resolve(result), false, mock)
  },
  submitFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'submitFeedback', 'Kendra', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'tagResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'tagResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'tagResource', 'Kendra', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'untagResource', 'Kendra', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'untagResource', 'Kendra', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'untagResource', 'Kendra', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateDataSource', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateDataSource', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateDataSource', 'Kendra', Promise.reject(result), true, mock)
  },
  updateIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateIndex', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateIndex', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateIndex', 'Kendra', Promise.reject(result), true, mock)
  },
  updateQuerySuggestionsBlockList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateQuerySuggestionsBlockListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsBlockList', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateQuerySuggestionsBlockListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsBlockList', 'Kendra', Promise.reject(result), true, mock)
  },
  updateQuerySuggestionsConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateQuerySuggestionsConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsConfig', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateQuerySuggestionsConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateQuerySuggestionsConfig', 'Kendra', Promise.reject(result), true, mock)
  },
  updateThesaurus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateThesaurus', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateThesaurusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateThesaurus', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateThesaurusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateThesaurus', 'Kendra', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'send', 'KendraClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'send', 'KendraClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'send', 'KendraClient', Promise.reject(result), true, mock)
  }
}