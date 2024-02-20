
/**
* @description mocks_v3:mockBedrockAgent module is mocks for AWS-SDK V3
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
export const mockBedrockAgent = {
  associateAgentKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'associateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  associateAgentKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'associateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  associateAgentKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'associateAgentKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  createAgentActionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentActionGroup', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  createAgentActionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentActionGroup', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  createAgentActionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentActionGroup', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  createAgentAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentAlias', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  createAgentAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentAlias', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  createAgentAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgentAlias', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  createAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgent', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  createAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgent', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  createAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createAgent', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createDataSource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createDataSource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createDataSource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  createKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  createKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  createKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'createKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteAgentActionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentActionGroup', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteAgentActionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentActionGroup', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteAgentActionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentActionGroup', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteAgentAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentAlias', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteAgentAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentAlias', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteAgentAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentAlias', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgent', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgent', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgent', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteAgentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentVersion', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteAgentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentVersion', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteAgentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteAgentVersion', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteDataSource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteDataSource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteDataSource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  deleteKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  deleteKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  deleteKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'deleteKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  disassociateAgentKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'disassociateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  disassociateAgentKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'disassociateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  disassociateAgentKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'disassociateAgentKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getAgentActionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentActionGroup', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getAgentActionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentActionGroup', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getAgentActionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentActionGroup', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getAgentAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentAlias', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getAgentAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentAlias', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getAgentAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentAlias', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgent', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgent', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgent', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getAgentKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getAgentKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getAgentKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getAgentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentVersion', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getAgentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentVersion', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getAgentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getAgentVersion', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getDataSource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getDataSource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getDataSource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getIngestionJob', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getIngestionJob', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getIngestionJob', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  getKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  getKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  getKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'getKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listAgentActionGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentActionGroups', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listAgentActionGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentActionGroups', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listAgentActionGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentActionGroups', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listAgentAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentAliases', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listAgentAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentAliases', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listAgentAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentAliases', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listAgentKnowledgeBases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentKnowledgeBases', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listAgentKnowledgeBasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentKnowledgeBases', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listAgentKnowledgeBasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentKnowledgeBases', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listAgentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentVersions', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listAgentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentVersions', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listAgentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgentVersions', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgents', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgents', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listAgents', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listDataSources', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listDataSources', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listDataSources', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listIngestionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listIngestionJobs', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listIngestionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listIngestionJobs', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listIngestionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listIngestionJobs', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listKnowledgeBases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listKnowledgeBases', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listKnowledgeBasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listKnowledgeBases', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listKnowledgeBasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listKnowledgeBases', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listTagsForResource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listTagsForResource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'listTagsForResource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  prepareAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'prepareAgent', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  prepareAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'prepareAgent', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  prepareAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'prepareAgent', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  startIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'startIngestionJob', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  startIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'startIngestionJob', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  startIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'startIngestionJob', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'tagResource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'tagResource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'tagResource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'untagResource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'untagResource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'untagResource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateAgentActionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentActionGroup', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateAgentActionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentActionGroup', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateAgentActionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentActionGroup', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateAgentAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentAlias', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateAgentAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentAlias', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateAgentAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentAlias', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgent', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgent', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgent', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateAgentKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateAgentKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateAgentKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateAgentKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateDataSource', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateDataSource', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateDataSource', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  updateKnowledgeBase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateKnowledgeBase', 'BedrockAgent', Promise.resolve(result), true, mock)
  },
  updateKnowledgeBaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateKnowledgeBase', 'BedrockAgent', Promise.resolve(result), false, mock)
  },
  updateKnowledgeBaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'updateKnowledgeBase', 'BedrockAgent', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'send', 'BedrockAgentClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'send', 'BedrockAgentClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent', 'send', 'BedrockAgentClient', Promise.reject(result), true, mock)
  }
}
