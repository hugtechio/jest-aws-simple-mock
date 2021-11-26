
/**
* @description mocks_v2:mockFinspaceData.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockFinspaceData = {
  createChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', result, true, true, mock)
  },
  createChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', result, false, true, mock)
  },
  createChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', result, true, false, mock)
  },
  getProgrammaticAccessCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', result, true, true, mock)
  },
  getProgrammaticAccessCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', result, false, true, mock)
  },
  getProgrammaticAccessCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', result, true, false, mock)
  },
  getWorkingLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', result, true, true, mock)
  },
  getWorkingLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', result, false, true, mock)
  },
  getWorkingLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', result, true, false, mock)
  },
}
