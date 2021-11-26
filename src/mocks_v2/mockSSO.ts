
/**
* @description mocks_v2:mockSSO.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSSO = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', result, true, false, mock)
  },
  getRoleCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', result, true, true, mock)
  },
  getRoleCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', result, false, true, mock)
  },
  getRoleCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', result, true, false, mock)
  },
  listAccountRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', result, true, true, mock)
  },
  listAccountRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', result, false, true, mock)
  },
  listAccountRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', result, true, false, mock)
  },
  listAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', result, true, true, mock)
  },
  listAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', result, false, true, mock)
  },
  listAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', result, true, false, mock)
  },
  logout: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', result, true, true, mock)
  },
  logoutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', result, false, true, mock)
  },
  logoutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', result, true, false, mock)
  },
}
