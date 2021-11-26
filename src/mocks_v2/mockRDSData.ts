
/**
* @description mocks_v2:mockRDSData.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockRDSData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', result, true, true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', result, false, true, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', result, true, false, mock)
  },
  beginTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', result, true, true, mock)
  },
  beginTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', result, false, true, mock)
  },
  beginTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', result, true, false, mock)
  },
  commitTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', result, true, true, mock)
  },
  commitTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', result, false, true, mock)
  },
  commitTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', result, true, false, mock)
  },
  executeSql: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', result, true, true, mock)
  },
  executeSqlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', result, false, true, mock)
  },
  executeSqlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', result, true, false, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', result, true, true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', result, false, true, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', result, true, false, mock)
  },
  rollbackTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', result, true, true, mock)
  },
  rollbackTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', result, false, true, mock)
  },
  rollbackTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', result, true, false, mock)
  },
}
