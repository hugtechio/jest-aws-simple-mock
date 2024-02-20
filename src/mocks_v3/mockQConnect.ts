
/**
* @description mocks_v3:mockQConnect module is mocks for AWS-SDK V3
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
export const mockQConnect = {
  createAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistantAssociation', 'QConnect', Promise.resolve(result), true, mock)
  },
  createAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistantAssociation', 'QConnect', Promise.resolve(result), false, mock)
  },
  createAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistantAssociation', 'QConnect', Promise.reject(result), true, mock)
  },
  createAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistant', 'QConnect', Promise.resolve(result), true, mock)
  },
  createAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistant', 'QConnect', Promise.resolve(result), false, mock)
  },
  createAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createAssistant', 'QConnect', Promise.reject(result), true, mock)
  },
  createContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createContent', 'QConnect', Promise.resolve(result), true, mock)
  },
  createContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createContent', 'QConnect', Promise.resolve(result), false, mock)
  },
  createContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createContent', 'QConnect', Promise.reject(result), true, mock)
  },
  createKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createKnowledgeBase', 'QConnect', Promise.resolve(result), true, mock)
  },
  createKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createKnowledgeBase', 'QConnect', Promise.resolve(result), false, mock)
  },
  createKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createKnowledgeBase', 'QConnect', Promise.reject(result), true, mock)
  },
  createQuickResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createQuickResponse', 'QConnect', Promise.resolve(result), true, mock)
  },
  createQuickResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createQuickResponse', 'QConnect', Promise.resolve(result), false, mock)
  },
  createQuickResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createQuickResponse', 'QConnect', Promise.reject(result), true, mock)
  },
  createSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createSession', 'QConnect', Promise.resolve(result), true, mock)
  },
  createSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createSession', 'QConnect', Promise.resolve(result), false, mock)
  },
  createSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'createSession', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistantAssociation', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistantAssociation', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistantAssociation', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistant', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistant', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteAssistant', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteContent', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteContent', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteContent', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteImportJob', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteImportJob', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteImportJob', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteKnowledgeBase', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteKnowledgeBase', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteKnowledgeBase', 'QConnect', Promise.reject(result), true, mock)
  },
  deleteQuickResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteQuickResponse', 'QConnect', Promise.resolve(result), true, mock)
  },
  deleteQuickResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteQuickResponse', 'QConnect', Promise.resolve(result), false, mock)
  },
  deleteQuickResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'deleteQuickResponse', 'QConnect', Promise.reject(result), true, mock)
  },
  getAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistantAssociation', 'QConnect', Promise.resolve(result), true, mock)
  },
  getAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistantAssociation', 'QConnect', Promise.resolve(result), false, mock)
  },
  getAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistantAssociation', 'QConnect', Promise.reject(result), true, mock)
  },
  getAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistant', 'QConnect', Promise.resolve(result), true, mock)
  },
  getAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistant', 'QConnect', Promise.resolve(result), false, mock)
  },
  getAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getAssistant', 'QConnect', Promise.reject(result), true, mock)
  },
  getContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContent', 'QConnect', Promise.resolve(result), true, mock)
  },
  getContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContent', 'QConnect', Promise.resolve(result), false, mock)
  },
  getContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContent', 'QConnect', Promise.reject(result), true, mock)
  },
  getContentSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContentSummary', 'QConnect', Promise.resolve(result), true, mock)
  },
  getContentSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContentSummary', 'QConnect', Promise.resolve(result), false, mock)
  },
  getContentSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getContentSummary', 'QConnect', Promise.reject(result), true, mock)
  },
  getImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getImportJob', 'QConnect', Promise.resolve(result), true, mock)
  },
  getImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getImportJob', 'QConnect', Promise.resolve(result), false, mock)
  },
  getImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getImportJob', 'QConnect', Promise.reject(result), true, mock)
  },
  getKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getKnowledgeBase', 'QConnect', Promise.resolve(result), true, mock)
  },
  getKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getKnowledgeBase', 'QConnect', Promise.resolve(result), false, mock)
  },
  getKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getKnowledgeBase', 'QConnect', Promise.reject(result), true, mock)
  },
  getQuickResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getQuickResponse', 'QConnect', Promise.resolve(result), true, mock)
  },
  getQuickResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getQuickResponse', 'QConnect', Promise.resolve(result), false, mock)
  },
  getQuickResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getQuickResponse', 'QConnect', Promise.reject(result), true, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getRecommendations', 'QConnect', Promise.resolve(result), true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getRecommendations', 'QConnect', Promise.resolve(result), false, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getRecommendations', 'QConnect', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getSession', 'QConnect', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getSession', 'QConnect', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'getSession', 'QConnect', Promise.reject(result), true, mock)
  },
  listAssistantAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistantAssociations', 'QConnect', Promise.resolve(result), true, mock)
  },
  listAssistantAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistantAssociations', 'QConnect', Promise.resolve(result), false, mock)
  },
  listAssistantAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistantAssociations', 'QConnect', Promise.reject(result), true, mock)
  },
  listAssistants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistants', 'QConnect', Promise.resolve(result), true, mock)
  },
  listAssistantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistants', 'QConnect', Promise.resolve(result), false, mock)
  },
  listAssistantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listAssistants', 'QConnect', Promise.reject(result), true, mock)
  },
  listContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listContents', 'QConnect', Promise.resolve(result), true, mock)
  },
  listContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listContents', 'QConnect', Promise.resolve(result), false, mock)
  },
  listContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listContents', 'QConnect', Promise.reject(result), true, mock)
  },
  listImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listImportJobs', 'QConnect', Promise.resolve(result), true, mock)
  },
  listImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listImportJobs', 'QConnect', Promise.resolve(result), false, mock)
  },
  listImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listImportJobs', 'QConnect', Promise.reject(result), true, mock)
  },
  listKnowledgeBases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listKnowledgeBases', 'QConnect', Promise.resolve(result), true, mock)
  },
  listKnowledgeBasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listKnowledgeBases', 'QConnect', Promise.resolve(result), false, mock)
  },
  listKnowledgeBasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listKnowledgeBases', 'QConnect', Promise.reject(result), true, mock)
  },
  listQuickResponses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listQuickResponses', 'QConnect', Promise.resolve(result), true, mock)
  },
  listQuickResponsesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listQuickResponses', 'QConnect', Promise.resolve(result), false, mock)
  },
  listQuickResponsesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listQuickResponses', 'QConnect', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listTagsForResource', 'QConnect', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listTagsForResource', 'QConnect', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'listTagsForResource', 'QConnect', Promise.reject(result), true, mock)
  },
  notifyRecommendationsReceived: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'notifyRecommendationsReceived', 'QConnect', Promise.resolve(result), true, mock)
  },
  notifyRecommendationsReceivedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'notifyRecommendationsReceived', 'QConnect', Promise.resolve(result), false, mock)
  },
  notifyRecommendationsReceivedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'notifyRecommendationsReceived', 'QConnect', Promise.reject(result), true, mock)
  },
  putFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'putFeedback', 'QConnect', Promise.resolve(result), true, mock)
  },
  putFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'putFeedback', 'QConnect', Promise.resolve(result), false, mock)
  },
  putFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'putFeedback', 'QConnect', Promise.reject(result), true, mock)
  },
  queryAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'queryAssistant', 'QConnect', Promise.resolve(result), true, mock)
  },
  queryAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'queryAssistant', 'QConnect', Promise.resolve(result), false, mock)
  },
  queryAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'queryAssistant', 'QConnect', Promise.reject(result), true, mock)
  },
  removeKnowledgeBaseTemplateUri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'removeKnowledgeBaseTemplateUri', 'QConnect', Promise.resolve(result), true, mock)
  },
  removeKnowledgeBaseTemplateUriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'removeKnowledgeBaseTemplateUri', 'QConnect', Promise.resolve(result), false, mock)
  },
  removeKnowledgeBaseTemplateUriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'removeKnowledgeBaseTemplateUri', 'QConnect', Promise.reject(result), true, mock)
  },
  searchContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchContent', 'QConnect', Promise.resolve(result), true, mock)
  },
  searchContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchContent', 'QConnect', Promise.resolve(result), false, mock)
  },
  searchContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchContent', 'QConnect', Promise.reject(result), true, mock)
  },
  searchQuickResponses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchQuickResponses', 'QConnect', Promise.resolve(result), true, mock)
  },
  searchQuickResponsesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchQuickResponses', 'QConnect', Promise.resolve(result), false, mock)
  },
  searchQuickResponsesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchQuickResponses', 'QConnect', Promise.reject(result), true, mock)
  },
  searchSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchSessions', 'QConnect', Promise.resolve(result), true, mock)
  },
  searchSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchSessions', 'QConnect', Promise.resolve(result), false, mock)
  },
  searchSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'searchSessions', 'QConnect', Promise.reject(result), true, mock)
  },
  startContentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startContentUpload', 'QConnect', Promise.resolve(result), true, mock)
  },
  startContentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startContentUpload', 'QConnect', Promise.resolve(result), false, mock)
  },
  startContentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startContentUpload', 'QConnect', Promise.reject(result), true, mock)
  },
  startImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startImportJob', 'QConnect', Promise.resolve(result), true, mock)
  },
  startImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startImportJob', 'QConnect', Promise.resolve(result), false, mock)
  },
  startImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'startImportJob', 'QConnect', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'tagResource', 'QConnect', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'tagResource', 'QConnect', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'tagResource', 'QConnect', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'untagResource', 'QConnect', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'untagResource', 'QConnect', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'untagResource', 'QConnect', Promise.reject(result), true, mock)
  },
  updateContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateContent', 'QConnect', Promise.resolve(result), true, mock)
  },
  updateContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateContent', 'QConnect', Promise.resolve(result), false, mock)
  },
  updateContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateContent', 'QConnect', Promise.reject(result), true, mock)
  },
  updateKnowledgeBaseTemplateUri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateKnowledgeBaseTemplateUri', 'QConnect', Promise.resolve(result), true, mock)
  },
  updateKnowledgeBaseTemplateUriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateKnowledgeBaseTemplateUri', 'QConnect', Promise.resolve(result), false, mock)
  },
  updateKnowledgeBaseTemplateUriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateKnowledgeBaseTemplateUri', 'QConnect', Promise.reject(result), true, mock)
  },
  updateQuickResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateQuickResponse', 'QConnect', Promise.resolve(result), true, mock)
  },
  updateQuickResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateQuickResponse', 'QConnect', Promise.resolve(result), false, mock)
  },
  updateQuickResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'updateQuickResponse', 'QConnect', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'send', 'QConnectClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'send', 'QConnectClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qconnect', 'send', 'QConnectClient', Promise.reject(result), true, mock)
  }
}
