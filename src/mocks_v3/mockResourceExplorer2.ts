
/**
* @description mocks_v3:mockResourceExplorer2 module is mocks for AWS-SDK V3
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
export const mockResourceExplorer2 = {
  associateDefaultView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'associateDefaultView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  associateDefaultViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'associateDefaultView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  associateDefaultViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'associateDefaultView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  batchGetView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'batchGetView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  batchGetViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'batchGetView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  batchGetViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'batchGetView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createIndex', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createIndex', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createIndex', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  createView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  createViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  createViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'createView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  deleteIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteIndex', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  deleteIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteIndex', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  deleteIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteIndex', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  deleteView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  deleteViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  deleteViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'deleteView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  disassociateDefaultView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'disassociateDefaultView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  disassociateDefaultViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'disassociateDefaultView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  disassociateDefaultViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'disassociateDefaultView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  getAccountLevelServiceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getAccountLevelServiceConfiguration', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  getAccountLevelServiceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getAccountLevelServiceConfiguration', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  getAccountLevelServiceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getAccountLevelServiceConfiguration', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  getDefaultView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getDefaultView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  getDefaultViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getDefaultView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  getDefaultViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getDefaultView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  getIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getIndex', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  getIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getIndex', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  getIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getIndex', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  getView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  getViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  getViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'getView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  listIndexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexes', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  listIndexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexes', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  listIndexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexes', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  listIndexesForMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexesForMembers', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  listIndexesForMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexesForMembers', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  listIndexesForMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listIndexesForMembers', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  listSupportedResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listSupportedResourceTypes', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  listSupportedResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listSupportedResourceTypes', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  listSupportedResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listSupportedResourceTypes', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listTagsForResource', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listTagsForResource', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listTagsForResource', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  listViews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listViews', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  listViewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listViews', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  listViewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'listViews', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'search', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'search', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'search', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'tagResource', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'tagResource', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'tagResource', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'untagResource', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'untagResource', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'untagResource', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  updateIndexType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateIndexType', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  updateIndexTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateIndexType', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  updateIndexTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateIndexType', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  updateView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateView', 'ResourceExplorer2', Promise.resolve(result), true, mock)
  },
  updateViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateView', 'ResourceExplorer2', Promise.resolve(result), false, mock)
  },
  updateViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'updateView', 'ResourceExplorer2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'send', 'ResourceExplorer2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'send', 'ResourceExplorer2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-explorer-2', 'send', 'ResourceExplorer2Client', Promise.reject(result), true, mock)
  }
}
