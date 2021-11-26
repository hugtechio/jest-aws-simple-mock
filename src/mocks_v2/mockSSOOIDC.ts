
/**
* @description mocks_v2:mockSSOOIDC.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSSOOIDC = {
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', result, true, true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', result, false, true, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', result, true, false, mock)
  },
  registerClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', result, true, true, mock)
  },
  registerClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', result, false, true, mock)
  },
  registerClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', result, true, false, mock)
  },
  startDeviceAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', result, true, true, mock)
  },
  startDeviceAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', result, false, true, mock)
  },
  startDeviceAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', result, true, false, mock)
  },
}
