
/**
* @description mocks_v2:mockDynamoDocClient.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMockForDynamoDocClient} from './common'
export const mockDynamoDocClient = {
  batchGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchGet', result, true, true, mock)
  },
  batchGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchGet', result, false, true, mock)
  },
  batchGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchGet', result, true, false, mock)
  },
  batchWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchWrite', result, true, true, mock)
  },
  batchWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchWrite', result, false, true, mock)
  },
  batchWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('batchWrite', result, true, false, mock)
  },
  createSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('createSet', result, true, true, mock)
  },
  createSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('createSet', result, false, true, mock)
  },
  createSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('createSet', result, true, false, mock)
  },
  delete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('delete', result, true, true, mock)
  },
  deleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('delete', result, false, true, mock)
  },
  deleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('delete', result, true, false, mock)
  },
  get: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('get', result, true, true, mock)
  },
  getAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('get', result, false, true, mock)
  },
  getThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('get', result, true, false, mock)
  },
  put: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('put', result, true, true, mock)
  },
  putAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('put', result, false, true, mock)
  },
  putThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('put', result, true, false, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('query', result, true, true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('query', result, false, true, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('query', result, true, false, mock)
  },
  scan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('scan', result, true, true, mock)
  },
  scanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('scan', result, false, true, mock)
  },
  scanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('scan', result, true, false, mock)
  },
  transactGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactGet', result, true, true, mock)
  },
  transactGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactGet', result, false, true, mock)
  },
  transactGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactGet', result, true, false, mock)
  },
  transactWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactWrite', result, true, true, mock)
  },
  transactWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactWrite', result, false, true, mock)
  },
  transactWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('transactWrite', result, true, false, mock)
  },
  update: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('update', result, true, true, mock)
  },
  updateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('update', result, false, true, mock)
  },
  updateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMockForDynamoDocClient('update', result, true, false, mock)
  },
}
