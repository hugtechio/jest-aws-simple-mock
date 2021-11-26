
/**
* @description mocks_v2:mockSageMakerA2IRuntime.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSageMakerA2IRuntime = {
  deleteHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  deleteHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  deleteHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', result, true, false, mock)
  },
  describeHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  describeHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  describeHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', result, true, false, mock)
  },
  listHumanLoops: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  listHumanLoopsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  listHumanLoopsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', result, true, false, mock)
  },
  startHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  startHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  startHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', result, true, false, mock)
  },
  stopHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', result, true, true, mock)
  },
  stopHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', result, false, true, mock)
  },
  stopHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', result, true, false, mock)
  },
}
