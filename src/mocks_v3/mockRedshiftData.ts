
/**
* @description mocks_v3:mockRedshiftData module is mocks for AWS-SDK V3
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
export const mockRedshiftData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'batchExecuteStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'batchExecuteStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'batchExecuteStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  cancelStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'cancelStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  cancelStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'cancelStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  cancelStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'cancelStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  describeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  describeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  describeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeTable', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeTable', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'describeTable', 'RedshiftData', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'executeStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'executeStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'executeStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  getStatementResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'getStatementResult', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  getStatementResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'getStatementResult', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  getStatementResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'getStatementResult', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listDatabases', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listDatabases', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listDatabases', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listSchemas', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listSchemas', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listSchemas', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listStatements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listStatements', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listStatementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listStatements', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listStatementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listStatements', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listTables', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listTables', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'listTables', 'RedshiftData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'send', 'RedshiftDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'send', 'RedshiftDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-data', 'send', 'RedshiftDataClient', Promise.reject(result), true, mock)
  }
}
