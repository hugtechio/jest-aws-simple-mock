
/**
* @description mocks_v2:mockConnectContactLens.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockConnectContactLens = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectContactLens', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectContactLens', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectContactLens', result, true, false, mock)
  },
  listRealtimeContactAnalysisSegments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeContactAnalysisSegments', 'ConnectContactLens', result, true, true, mock)
  },
  listRealtimeContactAnalysisSegmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeContactAnalysisSegments', 'ConnectContactLens', result, false, true, mock)
  },
  listRealtimeContactAnalysisSegmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeContactAnalysisSegments', 'ConnectContactLens', result, true, false, mock)
  },
}
