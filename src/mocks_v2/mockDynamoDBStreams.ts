
/**
* @description mocks_v2:mockDynamoDBStreams.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockDynamoDBStreams = {
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', result, true, true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', result, false, true, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', result, true, false, mock)
  },
  getRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', result, true, true, mock)
  },
  getRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', result, false, true, mock)
  },
  getRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', result, true, false, mock)
  },
  getShardIterator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', result, true, true, mock)
  },
  getShardIteratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', result, false, true, mock)
  },
  getShardIteratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', result, true, false, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', result, true, true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', result, false, true, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', result, true, false, mock)
  },
}
