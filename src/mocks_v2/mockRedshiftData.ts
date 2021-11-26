
/**
* @description mocks_v2:mockRedshiftData.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockRedshiftData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', result, true, true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', result, false, true, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', result, true, false, mock)
  },
  cancelStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', result, true, true, mock)
  },
  cancelStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', result, false, true, mock)
  },
  cancelStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', result, true, false, mock)
  },
  describeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', result, true, true, mock)
  },
  describeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', result, false, true, mock)
  },
  describeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', result, true, false, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', result, true, true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', result, false, true, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', result, true, false, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', result, true, true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', result, false, true, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', result, true, false, mock)
  },
  getStatementResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', result, true, true, mock)
  },
  getStatementResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', result, false, true, mock)
  },
  getStatementResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', result, true, false, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', result, true, true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', result, false, true, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', result, true, false, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', result, true, true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', result, false, true, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', result, true, false, mock)
  },
  listStatements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', result, true, true, mock)
  },
  listStatementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', result, false, true, mock)
  },
  listStatementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', result, true, false, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', result, true, true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', result, false, true, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', result, true, false, mock)
  },
}
