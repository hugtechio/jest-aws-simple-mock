
/**
* @description mocks_v3:mockQBusiness module is mocks for AWS-SDK V3
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
export const mockQBusiness = {
  batchDeleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchDeleteDocument', 'QBusiness', Promise.resolve(result), true, mock)
  },
  batchDeleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchDeleteDocument', 'QBusiness', Promise.resolve(result), false, mock)
  },
  batchDeleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchDeleteDocument', 'QBusiness', Promise.reject(result), true, mock)
  },
  batchPutDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchPutDocument', 'QBusiness', Promise.resolve(result), true, mock)
  },
  batchPutDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchPutDocument', 'QBusiness', Promise.resolve(result), false, mock)
  },
  batchPutDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'batchPutDocument', 'QBusiness', Promise.reject(result), true, mock)
  },
  chatSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'chatSync', 'QBusiness', Promise.resolve(result), true, mock)
  },
  chatSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'chatSync', 'QBusiness', Promise.resolve(result), false, mock)
  },
  chatSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'chatSync', 'QBusiness', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createApplication', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createApplication', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createApplication', 'QBusiness', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createDataSource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createDataSource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createDataSource', 'QBusiness', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createIndex', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createIndex', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createIndex', 'QBusiness', Promise.reject(result), true, mock)
  },
  createPlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createPlugin', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createPluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createPlugin', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createPluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createPlugin', 'QBusiness', Promise.reject(result), true, mock)
  },
  createRetriever: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createRetriever', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createRetrieverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createRetriever', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createRetrieverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createRetriever', 'QBusiness', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createUser', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createUser', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createUser', 'QBusiness', Promise.reject(result), true, mock)
  },
  createWebExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createWebExperience', 'QBusiness', Promise.resolve(result), true, mock)
  },
  createWebExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createWebExperience', 'QBusiness', Promise.resolve(result), false, mock)
  },
  createWebExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'createWebExperience', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteApplication', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteApplication', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteApplication', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteChatControlsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteChatControlsConfiguration', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteChatControlsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteChatControlsConfiguration', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteChatControlsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteChatControlsConfiguration', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteConversation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteConversation', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteConversationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteConversation', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteConversationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteConversation', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteDataSource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteDataSource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteDataSource', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteGroup', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteGroup', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteGroup', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteIndex', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteIndex', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteIndex', 'QBusiness', Promise.reject(result), true, mock)
  },
  deletePlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deletePlugin', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deletePluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deletePlugin', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deletePluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deletePlugin', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteRetriever: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteRetriever', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteRetrieverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteRetriever', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteRetrieverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteRetriever', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteUser', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteUser', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteUser', 'QBusiness', Promise.reject(result), true, mock)
  },
  deleteWebExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteWebExperience', 'QBusiness', Promise.resolve(result), true, mock)
  },
  deleteWebExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteWebExperience', 'QBusiness', Promise.resolve(result), false, mock)
  },
  deleteWebExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'deleteWebExperience', 'QBusiness', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getApplication', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getApplication', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getApplication', 'QBusiness', Promise.reject(result), true, mock)
  },
  getChatControlsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getChatControlsConfiguration', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getChatControlsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getChatControlsConfiguration', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getChatControlsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getChatControlsConfiguration', 'QBusiness', Promise.reject(result), true, mock)
  },
  getDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getDataSource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getDataSource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getDataSource', 'QBusiness', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getGroup', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getGroup', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getGroup', 'QBusiness', Promise.reject(result), true, mock)
  },
  getIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getIndex', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getIndex', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getIndex', 'QBusiness', Promise.reject(result), true, mock)
  },
  getPlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getPlugin', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getPluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getPlugin', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getPluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getPlugin', 'QBusiness', Promise.reject(result), true, mock)
  },
  getRetriever: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getRetriever', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getRetrieverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getRetriever', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getRetrieverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getRetriever', 'QBusiness', Promise.reject(result), true, mock)
  },
  getUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getUser', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getUser', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getUser', 'QBusiness', Promise.reject(result), true, mock)
  },
  getWebExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getWebExperience', 'QBusiness', Promise.resolve(result), true, mock)
  },
  getWebExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getWebExperience', 'QBusiness', Promise.resolve(result), false, mock)
  },
  getWebExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'getWebExperience', 'QBusiness', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listApplications', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listApplications', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listApplications', 'QBusiness', Promise.reject(result), true, mock)
  },
  listConversations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listConversations', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listConversationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listConversations', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listConversationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listConversations', 'QBusiness', Promise.reject(result), true, mock)
  },
  listDataSourceSyncJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSourceSyncJobs', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listDataSourceSyncJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSourceSyncJobs', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listDataSourceSyncJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSourceSyncJobs', 'QBusiness', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSources', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSources', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDataSources', 'QBusiness', Promise.reject(result), true, mock)
  },
  listDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDocuments', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDocuments', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listDocuments', 'QBusiness', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listGroups', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listGroups', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listGroups', 'QBusiness', Promise.reject(result), true, mock)
  },
  listIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listIndices', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listIndices', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listIndices', 'QBusiness', Promise.reject(result), true, mock)
  },
  listMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listMessages', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listMessages', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listMessages', 'QBusiness', Promise.reject(result), true, mock)
  },
  listPlugins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listPlugins', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listPluginsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listPlugins', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listPluginsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listPlugins', 'QBusiness', Promise.reject(result), true, mock)
  },
  listRetrievers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listRetrievers', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listRetrieversAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listRetrievers', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listRetrieversThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listRetrievers', 'QBusiness', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listTagsForResource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listTagsForResource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listTagsForResource', 'QBusiness', Promise.reject(result), true, mock)
  },
  listWebExperiences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listWebExperiences', 'QBusiness', Promise.resolve(result), true, mock)
  },
  listWebExperiencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listWebExperiences', 'QBusiness', Promise.resolve(result), false, mock)
  },
  listWebExperiencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'listWebExperiences', 'QBusiness', Promise.reject(result), true, mock)
  },
  putFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putFeedback', 'QBusiness', Promise.resolve(result), true, mock)
  },
  putFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putFeedback', 'QBusiness', Promise.resolve(result), false, mock)
  },
  putFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putFeedback', 'QBusiness', Promise.reject(result), true, mock)
  },
  putGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putGroup', 'QBusiness', Promise.resolve(result), true, mock)
  },
  putGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putGroup', 'QBusiness', Promise.resolve(result), false, mock)
  },
  putGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'putGroup', 'QBusiness', Promise.reject(result), true, mock)
  },
  startDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'startDataSourceSyncJob', 'QBusiness', Promise.resolve(result), true, mock)
  },
  startDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'startDataSourceSyncJob', 'QBusiness', Promise.resolve(result), false, mock)
  },
  startDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'startDataSourceSyncJob', 'QBusiness', Promise.reject(result), true, mock)
  },
  stopDataSourceSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'stopDataSourceSyncJob', 'QBusiness', Promise.resolve(result), true, mock)
  },
  stopDataSourceSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'stopDataSourceSyncJob', 'QBusiness', Promise.resolve(result), false, mock)
  },
  stopDataSourceSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'stopDataSourceSyncJob', 'QBusiness', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'tagResource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'tagResource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'tagResource', 'QBusiness', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'untagResource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'untagResource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'untagResource', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateApplication', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateApplication', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateApplication', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateChatControlsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateChatControlsConfiguration', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateChatControlsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateChatControlsConfiguration', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateChatControlsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateChatControlsConfiguration', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateDataSource', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateDataSource', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateDataSource', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateIndex', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateIndex', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateIndex', 'QBusiness', Promise.reject(result), true, mock)
  },
  updatePlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updatePlugin', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updatePluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updatePlugin', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updatePluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updatePlugin', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateRetriever: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateRetriever', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateRetrieverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateRetriever', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateRetrieverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateRetriever', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateUser', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateUser', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateUser', 'QBusiness', Promise.reject(result), true, mock)
  },
  updateWebExperience: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateWebExperience', 'QBusiness', Promise.resolve(result), true, mock)
  },
  updateWebExperienceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateWebExperience', 'QBusiness', Promise.resolve(result), false, mock)
  },
  updateWebExperienceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'updateWebExperience', 'QBusiness', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'send', 'QBusinessClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'send', 'QBusinessClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qbusiness', 'send', 'QBusinessClient', Promise.reject(result), true, mock)
  }
}
