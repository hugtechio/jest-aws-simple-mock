
/**
* @description mocks_v2:mockLexRuntimeV2.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockLexRuntimeV2 = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', result, true, true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', result, false, true, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', result, true, false, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', result, true, true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', result, false, true, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', result, true, false, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', result, true, true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', result, false, true, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', result, true, false, mock)
  },
  recognizeText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', result, true, true, mock)
  },
  recognizeTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', result, false, true, mock)
  },
  recognizeTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', result, true, false, mock)
  },
  recognizeUtterance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', result, true, true, mock)
  },
  recognizeUtteranceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', result, false, true, mock)
  },
  recognizeUtteranceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', result, true, false, mock)
  },
  startConversation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', result, true, true, mock)
  },
  startConversationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', result, false, true, mock)
  },
  startConversationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', result, true, false, mock)
  },
}
