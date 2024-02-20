
/**
* @description mocks_v3:mockTimestreamWrite module is mocks for AWS-SDK V3
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
export const mockTimestreamWrite = {
  createBatchLoadTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  createBatchLoadTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  createBatchLoadTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createBatchLoadTask', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'createTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'deleteTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeBatchLoadTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeBatchLoadTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeBatchLoadTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeBatchLoadTask', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeEndpoints', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeEndpoints', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeEndpoints', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'describeTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listBatchLoadTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listBatchLoadTasks', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listBatchLoadTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listBatchLoadTasks', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listBatchLoadTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listBatchLoadTasks', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listDatabases', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listDatabases', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listDatabases', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTables', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTables', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTables', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTagsForResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTagsForResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'listTagsForResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  resumeBatchLoadTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'resumeBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  resumeBatchLoadTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'resumeBatchLoadTask', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  resumeBatchLoadTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'resumeBatchLoadTask', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'tagResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'tagResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'tagResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'untagResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'untagResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'untagResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'updateTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  writeRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'writeRecords', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  writeRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'writeRecords', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  writeRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'writeRecords', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'send', 'TimestreamWriteClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'send', 'TimestreamWriteClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-write', 'send', 'TimestreamWriteClient', Promise.reject(result), true, mock)
  }
}
