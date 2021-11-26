
/**
* @description mocks_v2:mockSTS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSTS = {
  assumeRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', result, true, true, mock)
  },
  assumeRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', result, false, true, mock)
  },
  assumeRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', result, true, false, mock)
  },
  assumeRoleWithSAML: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', result, true, true, mock)
  },
  assumeRoleWithSAMLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', result, false, true, mock)
  },
  assumeRoleWithSAMLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', result, true, false, mock)
  },
  assumeRoleWithWebIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', result, true, true, mock)
  },
  assumeRoleWithWebIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', result, false, true, mock)
  },
  assumeRoleWithWebIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', result, true, false, mock)
  },
  decodeAuthorizationMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', result, true, true, mock)
  },
  decodeAuthorizationMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', result, false, true, mock)
  },
  decodeAuthorizationMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', result, true, false, mock)
  },
  getAccessKeyInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', result, true, true, mock)
  },
  getAccessKeyInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', result, false, true, mock)
  },
  getAccessKeyInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', result, true, false, mock)
  },
  getCallerIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', result, true, true, mock)
  },
  getCallerIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', result, false, true, mock)
  },
  getCallerIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', result, true, false, mock)
  },
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', result, true, true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', result, false, true, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', result, true, false, mock)
  },
  getSessionToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', result, true, true, mock)
  },
  getSessionTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', result, false, true, mock)
  },
  getSessionTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', result, true, false, mock)
  },
}
