
/**
* @description mocks_v2:mockAccount.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockAccount = {
  deleteAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', result, true, true, mock)
  },
  deleteAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', result, false, true, mock)
  },
  deleteAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', result, true, false, mock)
  },
  getAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', result, true, true, mock)
  },
  getAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', result, false, true, mock)
  },
  getAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', result, true, false, mock)
  },
  putAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', result, true, true, mock)
  },
  putAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', result, false, true, mock)
  },
  putAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', result, true, false, mock)
  },
}
