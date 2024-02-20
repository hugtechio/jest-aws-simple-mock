
/**
* @description mocks_v3:mockKeyspaces module is mocks for AWS-SDK V3
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
export const mockKeyspaces = {
  createKeyspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createKeyspace', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  createKeyspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createKeyspace', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  createKeyspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createKeyspace', 'Keyspaces', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createTable', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createTable', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'createTable', 'Keyspaces', Promise.reject(result), true, mock)
  },
  deleteKeyspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteKeyspace', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  deleteKeyspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteKeyspace', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  deleteKeyspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteKeyspace', 'Keyspaces', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteTable', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteTable', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'deleteTable', 'Keyspaces', Promise.reject(result), true, mock)
  },
  getKeyspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getKeyspace', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  getKeyspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getKeyspace', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  getKeyspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getKeyspace', 'Keyspaces', Promise.reject(result), true, mock)
  },
  getTableAutoScalingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTableAutoScalingSettings', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  getTableAutoScalingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTableAutoScalingSettings', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  getTableAutoScalingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTableAutoScalingSettings', 'Keyspaces', Promise.reject(result), true, mock)
  },
  getTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTable', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  getTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTable', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  getTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'getTable', 'Keyspaces', Promise.reject(result), true, mock)
  },
  listKeyspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listKeyspaces', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  listKeyspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listKeyspaces', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  listKeyspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listKeyspaces', 'Keyspaces', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTables', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTables', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTables', 'Keyspaces', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTagsForResource', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTagsForResource', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'listTagsForResource', 'Keyspaces', Promise.reject(result), true, mock)
  },
  restoreTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'restoreTable', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  restoreTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'restoreTable', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  restoreTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'restoreTable', 'Keyspaces', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'tagResource', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'tagResource', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'tagResource', 'Keyspaces', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'untagResource', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'untagResource', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'untagResource', 'Keyspaces', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'updateTable', 'Keyspaces', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'updateTable', 'Keyspaces', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'updateTable', 'Keyspaces', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'send', 'KeyspacesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'send', 'KeyspacesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-keyspaces', 'send', 'KeyspacesClient', Promise.reject(result), true, mock)
  }
}
