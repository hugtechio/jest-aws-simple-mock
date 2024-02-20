
/**
* @description mocks_v3:mockRDSData module is mocks for AWS-SDK V3
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
export const mockRDSData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'batchExecuteStatement', 'RDSData', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'batchExecuteStatement', 'RDSData', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'batchExecuteStatement', 'RDSData', Promise.reject(result), true, mock)
  },
  beginTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'beginTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  beginTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'beginTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  beginTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'beginTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
  commitTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'commitTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  commitTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'commitTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  commitTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'commitTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
  executeSql: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeSql', 'RDSData', Promise.resolve(result), true, mock)
  },
  executeSqlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeSql', 'RDSData', Promise.resolve(result), false, mock)
  },
  executeSqlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeSql', 'RDSData', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeStatement', 'RDSData', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeStatement', 'RDSData', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'executeStatement', 'RDSData', Promise.reject(result), true, mock)
  },
  rollbackTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'rollbackTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  rollbackTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'rollbackTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  rollbackTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'rollbackTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'send', 'RDSDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'send', 'RDSDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds-data', 'send', 'RDSDataClient', Promise.reject(result), true, mock)
  }
}
