
/**
* @description mocks_v2:mockRoute53RecoveryCluster.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockRoute53RecoveryCluster = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', result, true, false, mock)
  },
  getRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', result, true, true, mock)
  },
  getRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', result, false, true, mock)
  },
  getRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', result, true, false, mock)
  },
  updateRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', result, true, true, mock)
  },
  updateRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', result, false, true, mock)
  },
  updateRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', result, true, false, mock)
  },
  updateRoutingControlStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', result, true, true, mock)
  },
  updateRoutingControlStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', result, false, true, mock)
  },
  updateRoutingControlStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', result, true, false, mock)
  },
}
