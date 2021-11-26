
/**
* @description mocks_v2:mockQLDBSession.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockQLDBSession = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', result, true, false, mock)
  },
  sendCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', result, true, true, mock)
  },
  sendCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', result, false, true, mock)
  },
  sendCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', result, true, false, mock)
  },
}
