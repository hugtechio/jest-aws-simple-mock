
/**
* @description mocks_v2:mockMigrationHubConfig.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMigrationHubConfig = {
  createHomeRegionControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', result, true, true, mock)
  },
  createHomeRegionControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', result, false, true, mock)
  },
  createHomeRegionControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', result, true, false, mock)
  },
  describeHomeRegionControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', result, true, true, mock)
  },
  describeHomeRegionControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', result, false, true, mock)
  },
  describeHomeRegionControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', result, true, false, mock)
  },
  getHomeRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', result, true, true, mock)
  },
  getHomeRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', result, false, true, mock)
  },
  getHomeRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', result, true, false, mock)
  },
}
