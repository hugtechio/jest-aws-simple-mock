
/**
* @description mocks_v2:mockEC2InstanceConnect.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockEC2InstanceConnect = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', result, true, false, mock)
  },
  sendSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', result, true, true, mock)
  },
  sendSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', result, false, true, mock)
  },
  sendSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', result, true, false, mock)
  },
  sendSerialConsoleSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', result, true, true, mock)
  },
  sendSerialConsoleSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', result, false, true, mock)
  },
  sendSerialConsoleSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', result, true, false, mock)
  },
}
