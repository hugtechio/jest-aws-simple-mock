
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
  associateEntitiesToExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associateEntitiesToExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  associateEntitiesToExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associateEntitiesToExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  associateEntitiesToExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associateEntitiesToExperience', 'Kendra', Promise.reject(result), true, mock)
  },
  associatePersonasToEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associatePersonasToEntities', 'Kendra', Promise.resolve(result), true, mock)
  },
  associatePersonasToEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associatePersonasToEntities', 'Kendra', Promise.resolve(result), false, mock)
  },
  associatePersonasToEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'associatePersonasToEntities', 'Kendra', Promise.reject(result), true, mock)
  },
  batchDeleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchDeleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchDeleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteDocument', 'Kendra', Promise.reject(result), true, mock)
  },
  batchDeleteFeaturedResultsSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteFeaturedResultsSet', 'Kendra', Promise.resolve(result), true, mock)
  },
  batchDeleteFeaturedResultsSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteFeaturedResultsSet', 'Kendra', Promise.resolve(result), false, mock)
  },
  batchDeleteFeaturedResultsSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'batchDeleteFeaturedResultsSet', 'Kendra', Promise.reject(result), true, mock)
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
  createAccessControlConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createAccessControlConfiguration', 'Kendra', Promise.resolve(result), true, mock)
  },
  createAccessControlConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createAccessControlConfiguration', 'Kendra', Promise.resolve(result), false, mock)
  },
  createAccessControlConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createAccessControlConfiguration', 'Kendra', Promise.reject(result), true, mock)
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
  createExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  createExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  createExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createExperience', 'Kendra', Promise.reject(result), true, mock)
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
  createFeaturedResultsSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFeaturedResultsSet', 'Kendra', Promise.resolve(result), true, mock)
  },
  createFeaturedResultsSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFeaturedResultsSet', 'Kendra', Promise.resolve(result), false, mock)
  },
  createFeaturedResultsSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'createFeaturedResultsSet', 'Kendra', Promise.reject(result), true, mock)
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
  deleteAccessControlConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteAccessControlConfiguration', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteAccessControlConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteAccessControlConfiguration', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteAccessControlConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteAccessControlConfiguration', 'Kendra', Promise.reject(result), true, mock)
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
  deleteExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  deleteExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  deleteExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'deleteExperience', 'Kendra', Promise.reject(result), true, mock)
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
  describeAccessControlConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeAccessControlConfiguration', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeAccessControlConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeAccessControlConfiguration', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeAccessControlConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeAccessControlConfiguration', 'Kendra', Promise.reject(result), true, mock)
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
  describeExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeExperience', 'Kendra', Promise.reject(result), true, mock)
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
  describeFeaturedResultsSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFeaturedResultsSet', 'Kendra', Promise.resolve(result), true, mock)
  },
  describeFeaturedResultsSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFeaturedResultsSet', 'Kendra', Promise.resolve(result), false, mock)
  },
  describeFeaturedResultsSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'describeFeaturedResultsSet', 'Kendra', Promise.reject(result), true, mock)
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
  disassociateEntitiesFromExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociateEntitiesFromExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  disassociateEntitiesFromExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociateEntitiesFromExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  disassociateEntitiesFromExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociateEntitiesFromExperience', 'Kendra', Promise.reject(result), true, mock)
  },
  disassociatePersonasFromEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociatePersonasFromEntities', 'Kendra', Promise.resolve(result), true, mock)
  },
  disassociatePersonasFromEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociatePersonasFromEntities', 'Kendra', Promise.resolve(result), false, mock)
  },
  disassociatePersonasFromEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'disassociatePersonasFromEntities', 'Kendra', Promise.reject(result), true, mock)
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
  getSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getSnapshots', 'Kendra', Promise.resolve(result), true, mock)
  },
  getSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getSnapshots', 'Kendra', Promise.resolve(result), false, mock)
  },
  getSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'getSnapshots', 'Kendra', Promise.reject(result), true, mock)
  },
  listAccessControlConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listAccessControlConfigurations', 'Kendra', Promise.resolve(result), true, mock)
  },
  listAccessControlConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listAccessControlConfigurations', 'Kendra', Promise.resolve(result), false, mock)
  },
  listAccessControlConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listAccessControlConfigurations', 'Kendra', Promise.reject(result), true, mock)
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
  listEntityPersonas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listEntityPersonas', 'Kendra', Promise.resolve(result), true, mock)
  },
  listEntityPersonasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listEntityPersonas', 'Kendra', Promise.resolve(result), false, mock)
  },
  listEntityPersonasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listEntityPersonas', 'Kendra', Promise.reject(result), true, mock)
  },
  listExperienceEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperienceEntities', 'Kendra', Promise.resolve(result), true, mock)
  },
  listExperienceEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperienceEntities', 'Kendra', Promise.resolve(result), false, mock)
  },
  listExperienceEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperienceEntities', 'Kendra', Promise.reject(result), true, mock)
  },
  listExperiences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperiences', 'Kendra', Promise.resolve(result), true, mock)
  },
  listExperiencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperiences', 'Kendra', Promise.resolve(result), false, mock)
  },
  listExperiencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listExperiences', 'Kendra', Promise.reject(result), true, mock)
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
  listFeaturedResultsSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFeaturedResultsSets', 'Kendra', Promise.resolve(result), true, mock)
  },
  listFeaturedResultsSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFeaturedResultsSets', 'Kendra', Promise.resolve(result), false, mock)
  },
  listFeaturedResultsSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'listFeaturedResultsSets', 'Kendra', Promise.reject(result), true, mock)
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
  retrieve: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'retrieve', 'Kendra', Promise.resolve(result), true, mock)
  },
  retrieveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'retrieve', 'Kendra', Promise.resolve(result), false, mock)
  },
  retrieveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'retrieve', 'Kendra', Promise.reject(result), true, mock)
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
  updateAccessControlConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateAccessControlConfiguration', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateAccessControlConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateAccessControlConfiguration', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateAccessControlConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateAccessControlConfiguration', 'Kendra', Promise.reject(result), true, mock)
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
  updateExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateExperience', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateExperience', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateExperience', 'Kendra', Promise.reject(result), true, mock)
  },
  updateFeaturedResultsSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateFeaturedResultsSet', 'Kendra', Promise.resolve(result), true, mock)
  },
  updateFeaturedResultsSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateFeaturedResultsSet', 'Kendra', Promise.resolve(result), false, mock)
  },
  updateFeaturedResultsSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra', 'updateFeaturedResultsSet', 'Kendra', Promise.reject(result), true, mock)
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
