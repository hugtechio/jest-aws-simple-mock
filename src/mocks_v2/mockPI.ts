
/**
* @description mocks_v2:mockPI.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockPI = {
  describeDimensionKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', result, true, true, mock)
  },
  describeDimensionKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', result, false, true, mock)
  },
  describeDimensionKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDimensionKeys', 'PI', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PI', result, true, false, mock)
  },
  getDimensionKeyDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', result, true, true, mock)
  },
  getDimensionKeyDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', result, false, true, mock)
  },
  getDimensionKeyDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionKeyDetails', 'PI', result, true, false, mock)
  },
  getResourceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', result, true, true, mock)
  },
  getResourceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', result, false, true, mock)
  },
  getResourceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceMetrics', 'PI', result, true, false, mock)
  },
}
