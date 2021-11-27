
/**
* @description mocks_v2:mockDynamoDocClient.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockDynamoDocClient = {
  batchGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGet', 'DocumentClient', result, true, true, mock)
  },
  batchGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGet', 'DocumentClient', result, false, true, mock)
  },
  batchGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGet', 'DocumentClient', result, true, false, mock)
  },
  batchWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'DocumentClient', result, true, true, mock)
  },
  batchWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'DocumentClient', result, false, true, mock)
  },
  batchWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'DocumentClient', result, true, false, mock)
  },
  createSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSet', 'DocumentClient', result, true, true, mock)
  },
  createSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSet', 'DocumentClient', result, false, true, mock)
  },
  createSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSet', 'DocumentClient', result, true, false, mock)
  },
  delete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('delete', 'DocumentClient', result, true, true, mock)
  },
  deleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('delete', 'DocumentClient', result, false, true, mock)
  },
  deleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('delete', 'DocumentClient', result, true, false, mock)
  },
  get: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('get', 'DocumentClient', result, true, true, mock)
  },
  getAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('get', 'DocumentClient', result, false, true, mock)
  },
  getThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('get', 'DocumentClient', result, true, false, mock)
  },
  put: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('put', 'DocumentClient', result, true, true, mock)
  },
  putAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('put', 'DocumentClient', result, false, true, mock)
  },
  putThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('put', 'DocumentClient', result, true, false, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DocumentClient', result, true, true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DocumentClient', result, false, true, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DocumentClient', result, true, false, mock)
  },
  scan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DocumentClient', result, true, true, mock)
  },
  scanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DocumentClient', result, false, true, mock)
  },
  scanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DocumentClient', result, true, false, mock)
  },
  transactGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGet', 'DocumentClient', result, true, true, mock)
  },
  transactGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGet', 'DocumentClient', result, false, true, mock)
  },
  transactGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGet', 'DocumentClient', result, true, false, mock)
  },
  transactWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWrite', 'DocumentClient', result, true, true, mock)
  },
  transactWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWrite', 'DocumentClient', result, false, true, mock)
  },
  transactWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWrite', 'DocumentClient', result, true, false, mock)
  },
  update: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('update', 'DocumentClient', result, true, true, mock)
  },
  updateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('update', 'DocumentClient', result, false, true, mock)
  },
  updateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('update', 'DocumentClient', result, true, false, mock)
  },
}
