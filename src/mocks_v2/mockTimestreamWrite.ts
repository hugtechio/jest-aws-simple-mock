
/**
* @description mocks_v2:mockTimestreamWrite.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockTimestreamWrite = {
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', result, true, true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', result, false, true, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', result, true, false, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', result, true, true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', result, false, true, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', result, true, false, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', result, true, true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', result, false, true, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', result, true, false, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', result, true, true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', result, false, true, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', result, true, false, mock)
  },
  describeDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', result, true, true, mock)
  },
  describeDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', result, false, true, mock)
  },
  describeDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', result, true, false, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', result, true, true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', result, false, true, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', result, true, false, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', result, true, true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', result, false, true, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', result, true, false, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', result, true, true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', result, false, true, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', result, true, false, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', result, true, true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', result, false, true, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', result, true, false, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', result, true, true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', result, false, true, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', result, true, false, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', result, true, true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', result, false, true, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', result, true, false, mock)
  },
  writeRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', result, true, true, mock)
  },
  writeRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', result, false, true, mock)
  },
  writeRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', result, true, false, mock)
  },
}
