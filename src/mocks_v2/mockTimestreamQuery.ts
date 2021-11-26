
/**
* @description mocks_v2:mockTimestreamQuery.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockTimestreamQuery = {
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', result, true, true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', result, false, true, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuery', 'TimestreamQuery', result, true, false, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', result, true, true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', result, false, true, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamQuery', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamQuery', result, true, false, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', result, true, true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', result, false, true, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'TimestreamQuery', result, true, false, mock)
  },
}
