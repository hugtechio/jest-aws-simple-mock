
/**
* @description mocks_v2:mockForecastquery.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockForecastquery = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecastquery', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecastquery', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecastquery', result, true, false, mock)
  },
  queryForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryForecast', 'Forecastquery', result, true, true, mock)
  },
  queryForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryForecast', 'Forecastquery', result, false, true, mock)
  },
  queryForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryForecast', 'Forecastquery', result, true, false, mock)
  },
}
