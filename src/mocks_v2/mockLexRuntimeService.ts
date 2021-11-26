
/**
* @description mocks_v2:mockLexRuntimeService.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockLexRuntimeService = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', result, true, true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', result, false, true, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', result, true, false, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', result, true, true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', result, false, true, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', result, true, false, mock)
  },
  postContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', result, true, true, mock)
  },
  postContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', result, false, true, mock)
  },
  postContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', result, true, false, mock)
  },
  postText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', result, true, true, mock)
  },
  postTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', result, false, true, mock)
  },
  postTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', result, true, false, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', result, true, true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', result, false, true, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', result, true, false, mock)
  },
}
