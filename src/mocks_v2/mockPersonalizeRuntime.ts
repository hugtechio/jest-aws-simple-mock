
/**
* @description mocks_v2:mockPersonalizeRuntime.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockPersonalizeRuntime = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeRuntime', result, true, false, mock)
  },
  getPersonalizedRanking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', result, true, true, mock)
  },
  getPersonalizedRankingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', result, false, true, mock)
  },
  getPersonalizedRankingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonalizedRanking', 'PersonalizeRuntime', result, true, false, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', result, true, true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', result, false, true, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'PersonalizeRuntime', result, true, false, mock)
  },
}
