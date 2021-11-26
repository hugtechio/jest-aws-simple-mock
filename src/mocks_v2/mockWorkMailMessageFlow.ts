
/**
* @description mocks_v2:mockWorkMailMessageFlow.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockWorkMailMessageFlow = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', result, true, false, mock)
  },
  getRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', result, true, true, mock)
  },
  getRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', result, false, true, mock)
  },
  getRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', result, true, false, mock)
  },
  putRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', result, true, true, mock)
  },
  putRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', result, false, true, mock)
  },
  putRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', result, true, false, mock)
  },
}
