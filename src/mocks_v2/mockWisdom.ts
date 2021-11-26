
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
  export const mockWisdom = {
  createAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistant', 'Wisdom', Promise.resolve(result), true, mock)
  },
  createAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistant', 'Wisdom', Promise.resolve(result), false, mock)
  },
  createAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistant', 'Wisdom', Promise.reject(result), true, mock)
  },
  createAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistantAssociation', 'Wisdom', Promise.resolve(result), true, mock)
  },
  createAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistantAssociation', 'Wisdom', Promise.resolve(result), false, mock)
  },
  createAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssistantAssociation', 'Wisdom', Promise.reject(result), true, mock)
  },
  createContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContent', 'Wisdom', Promise.resolve(result), true, mock)
  },
  createContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContent', 'Wisdom', Promise.resolve(result), false, mock)
  },
  createContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContent', 'Wisdom', Promise.reject(result), true, mock)
  },
  createKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKnowledgeBase', 'Wisdom', Promise.resolve(result), true, mock)
  },
  createKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKnowledgeBase', 'Wisdom', Promise.resolve(result), false, mock)
  },
  createKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKnowledgeBase', 'Wisdom', Promise.reject(result), true, mock)
  },
  createSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSession', 'Wisdom', Promise.resolve(result), true, mock)
  },
  createSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSession', 'Wisdom', Promise.resolve(result), false, mock)
  },
  createSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSession', 'Wisdom', Promise.reject(result), true, mock)
  },
  deleteAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistant', 'Wisdom', Promise.resolve(result), true, mock)
  },
  deleteAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistant', 'Wisdom', Promise.resolve(result), false, mock)
  },
  deleteAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistant', 'Wisdom', Promise.reject(result), true, mock)
  },
  deleteAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistantAssociation', 'Wisdom', Promise.resolve(result), true, mock)
  },
  deleteAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistantAssociation', 'Wisdom', Promise.resolve(result), false, mock)
  },
  deleteAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssistantAssociation', 'Wisdom', Promise.reject(result), true, mock)
  },
  deleteContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContent', 'Wisdom', Promise.resolve(result), true, mock)
  },
  deleteContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContent', 'Wisdom', Promise.resolve(result), false, mock)
  },
  deleteContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContent', 'Wisdom', Promise.reject(result), true, mock)
  },
  deleteKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnowledgeBase', 'Wisdom', Promise.resolve(result), true, mock)
  },
  deleteKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnowledgeBase', 'Wisdom', Promise.resolve(result), false, mock)
  },
  deleteKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnowledgeBase', 'Wisdom', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Wisdom', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Wisdom', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Wisdom', Promise.reject(result), true, mock)
  },
  getAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistant', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistant', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistant', 'Wisdom', Promise.reject(result), true, mock)
  },
  getAssistantAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistantAssociation', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getAssistantAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistantAssociation', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getAssistantAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssistantAssociation', 'Wisdom', Promise.reject(result), true, mock)
  },
  getContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContent', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContent', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContent', 'Wisdom', Promise.reject(result), true, mock)
  },
  getContentSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentSummary', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getContentSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentSummary', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getContentSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentSummary', 'Wisdom', Promise.reject(result), true, mock)
  },
  getKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKnowledgeBase', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKnowledgeBase', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKnowledgeBase', 'Wisdom', Promise.reject(result), true, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'Wisdom', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'Wisdom', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'Wisdom', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'Wisdom', Promise.reject(result), true, mock)
  },
  listAssistantAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistantAssociations', 'Wisdom', Promise.resolve(result), true, mock)
  },
  listAssistantAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistantAssociations', 'Wisdom', Promise.resolve(result), false, mock)
  },
  listAssistantAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistantAssociations', 'Wisdom', Promise.reject(result), true, mock)
  },
  listAssistants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistants', 'Wisdom', Promise.resolve(result), true, mock)
  },
  listAssistantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistants', 'Wisdom', Promise.resolve(result), false, mock)
  },
  listAssistantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssistants', 'Wisdom', Promise.reject(result), true, mock)
  },
  listContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContents', 'Wisdom', Promise.resolve(result), true, mock)
  },
  listContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContents', 'Wisdom', Promise.resolve(result), false, mock)
  },
  listContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContents', 'Wisdom', Promise.reject(result), true, mock)
  },
  listKnowledgeBases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKnowledgeBases', 'Wisdom', Promise.resolve(result), true, mock)
  },
  listKnowledgeBasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKnowledgeBases', 'Wisdom', Promise.resolve(result), false, mock)
  },
  listKnowledgeBasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKnowledgeBases', 'Wisdom', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Wisdom', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Wisdom', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Wisdom', Promise.reject(result), true, mock)
  },
  notifyRecommendationsReceived: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyRecommendationsReceived', 'Wisdom', Promise.resolve(result), true, mock)
  },
  notifyRecommendationsReceivedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyRecommendationsReceived', 'Wisdom', Promise.resolve(result), false, mock)
  },
  notifyRecommendationsReceivedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyRecommendationsReceived', 'Wisdom', Promise.reject(result), true, mock)
  },
  queryAssistant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryAssistant', 'Wisdom', Promise.resolve(result), true, mock)
  },
  queryAssistantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryAssistant', 'Wisdom', Promise.resolve(result), false, mock)
  },
  queryAssistantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryAssistant', 'Wisdom', Promise.reject(result), true, mock)
  },
  removeKnowledgeBaseTemplateUri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeKnowledgeBaseTemplateUri', 'Wisdom', Promise.resolve(result), true, mock)
  },
  removeKnowledgeBaseTemplateUriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeKnowledgeBaseTemplateUri', 'Wisdom', Promise.resolve(result), false, mock)
  },
  removeKnowledgeBaseTemplateUriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeKnowledgeBaseTemplateUri', 'Wisdom', Promise.reject(result), true, mock)
  },
  searchContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContent', 'Wisdom', Promise.resolve(result), true, mock)
  },
  searchContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContent', 'Wisdom', Promise.resolve(result), false, mock)
  },
  searchContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContent', 'Wisdom', Promise.reject(result), true, mock)
  },
  searchSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSessions', 'Wisdom', Promise.resolve(result), true, mock)
  },
  searchSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSessions', 'Wisdom', Promise.resolve(result), false, mock)
  },
  searchSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSessions', 'Wisdom', Promise.reject(result), true, mock)
  },
  startContentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentUpload', 'Wisdom', Promise.resolve(result), true, mock)
  },
  startContentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentUpload', 'Wisdom', Promise.resolve(result), false, mock)
  },
  startContentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentUpload', 'Wisdom', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Wisdom', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Wisdom', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Wisdom', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Wisdom', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Wisdom', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Wisdom', Promise.reject(result), true, mock)
  },
  updateContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContent', 'Wisdom', Promise.resolve(result), true, mock)
  },
  updateContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContent', 'Wisdom', Promise.resolve(result), false, mock)
  },
  updateContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContent', 'Wisdom', Promise.reject(result), true, mock)
  },
  updateKnowledgeBaseTemplateUri: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKnowledgeBaseTemplateUri', 'Wisdom', Promise.resolve(result), true, mock)
  },
  updateKnowledgeBaseTemplateUriAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKnowledgeBaseTemplateUri', 'Wisdom', Promise.resolve(result), false, mock)
  },
  updateKnowledgeBaseTemplateUriThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKnowledgeBaseTemplateUri', 'Wisdom', Promise.reject(result), true, mock)
  },
}
