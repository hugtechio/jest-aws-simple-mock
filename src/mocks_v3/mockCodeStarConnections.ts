
/**
* @description mocks_v3:mockCodeStarConnections module is mocks for AWS-SDK V3
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
export const mockCodeStarConnections = {
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  createHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  createRepositoryLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createRepositoryLink', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createRepositoryLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createRepositoryLink', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createRepositoryLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createRepositoryLink', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  createSyncConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createSyncConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createSyncConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'createSyncConfiguration', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteRepositoryLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteRepositoryLink', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteRepositoryLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteRepositoryLink', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteRepositoryLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteRepositoryLink', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteSyncConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteSyncConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteSyncConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'deleteSyncConfiguration', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getRepositoryLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositoryLink', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getRepositoryLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositoryLink', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getRepositoryLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositoryLink', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getRepositorySyncStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositorySyncStatus', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getRepositorySyncStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositorySyncStatus', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getRepositorySyncStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getRepositorySyncStatus', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getResourceSyncStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getResourceSyncStatus', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getResourceSyncStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getResourceSyncStatus', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getResourceSyncStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getResourceSyncStatus', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getSyncBlockerSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncBlockerSummary', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getSyncBlockerSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncBlockerSummary', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getSyncBlockerSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncBlockerSummary', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getSyncConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getSyncConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getSyncConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'getSyncConfiguration', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listConnections', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listConnections', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listConnections', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listHosts', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listHosts', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listHosts', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listRepositoryLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositoryLinks', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listRepositoryLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositoryLinks', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listRepositoryLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositoryLinks', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listRepositorySyncDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositorySyncDefinitions', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listRepositorySyncDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositorySyncDefinitions', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listRepositorySyncDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listRepositorySyncDefinitions', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listSyncConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listSyncConfigurations', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listSyncConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listSyncConfigurations', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listSyncConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listSyncConfigurations', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listTagsForResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listTagsForResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'listTagsForResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'tagResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'tagResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'tagResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'untagResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'untagResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'untagResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  updateHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  updateHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  updateHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  updateRepositoryLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateRepositoryLink', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  updateRepositoryLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateRepositoryLink', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  updateRepositoryLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateRepositoryLink', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  updateSyncBlocker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncBlocker', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  updateSyncBlockerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncBlocker', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  updateSyncBlockerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncBlocker', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  updateSyncConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  updateSyncConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncConfiguration', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  updateSyncConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'updateSyncConfiguration', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'send', 'CodeStarConnectionsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'send', 'CodeStarConnectionsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-connections', 'send', 'CodeStarConnectionsClient', Promise.reject(result), true, mock)
  }
}
