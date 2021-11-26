
/**
* @description mocks_v2:mockSagemakerEdge.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSagemakerEdge = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', result, true, false, mock)
  },
  getDeviceRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', result, true, true, mock)
  },
  getDeviceRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', result, false, true, mock)
  },
  getDeviceRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', result, true, false, mock)
  },
  sendHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', result, true, true, mock)
  },
  sendHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', result, false, true, mock)
  },
  sendHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', result, true, false, mock)
  },
}
