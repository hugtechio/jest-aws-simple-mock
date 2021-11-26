
/**
* @description mocks_v2:mockSageMakerRuntime.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSageMakerRuntime = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerRuntime', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerRuntime', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerRuntime', result, true, false, mock)
  },
  invokeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpoint', 'SageMakerRuntime', result, true, true, mock)
  },
  invokeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpoint', 'SageMakerRuntime', result, false, true, mock)
  },
  invokeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpoint', 'SageMakerRuntime', result, true, false, mock)
  },
  invokeEndpointAsync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpointAsync', 'SageMakerRuntime', result, true, true, mock)
  },
  invokeEndpointAsyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpointAsync', 'SageMakerRuntime', result, false, true, mock)
  },
  invokeEndpointAsyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeEndpointAsync', 'SageMakerRuntime', result, true, false, mock)
  },
}
