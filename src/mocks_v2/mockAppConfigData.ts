
/**
* @description mocks_v2:mockAppConfigData.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockAppConfigData = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppConfigData', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppConfigData', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppConfigData', result, true, false, mock)
  },
  getLatestConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLatestConfiguration', 'AppConfigData', result, true, true, mock)
  },
  getLatestConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLatestConfiguration', 'AppConfigData', result, false, true, mock)
  },
  getLatestConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLatestConfiguration', 'AppConfigData', result, true, false, mock)
  },
  startConfigurationSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationSession', 'AppConfigData', result, true, true, mock)
  },
  startConfigurationSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationSession', 'AppConfigData', result, false, true, mock)
  },
  startConfigurationSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationSession', 'AppConfigData', result, true, false, mock)
  },
}
