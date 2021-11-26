
/**
* @description mocks_v2:mockIoTSecureTunneling.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockIoTSecureTunneling = {
  closeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', result, true, true, mock)
  },
  closeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', result, false, true, mock)
  },
  closeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', result, true, false, mock)
  },
  describeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', result, true, true, mock)
  },
  describeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', result, false, true, mock)
  },
  describeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', result, true, false, mock)
  },
  listTunnels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', result, true, true, mock)
  },
  listTunnelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', result, false, true, mock)
  },
  listTunnelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', result, true, false, mock)
  },
  openTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', result, true, true, mock)
  },
  openTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', result, false, true, mock)
  },
  openTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', result, true, false, mock)
  },
}
