
/**
* @description mocks_v2:mockIoTJobsDataPlane.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockIoTJobsDataPlane = {
  describeJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', result, true, true, mock)
  },
  describeJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', result, false, true, mock)
  },
  describeJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', result, true, false, mock)
  },
  getPendingJobExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', result, true, true, mock)
  },
  getPendingJobExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', result, false, true, mock)
  },
  getPendingJobExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', result, true, false, mock)
  },
  startNextPendingJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', result, true, true, mock)
  },
  startNextPendingJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', result, false, true, mock)
  },
  startNextPendingJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', result, true, false, mock)
  },
  updateJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', result, true, true, mock)
  },
  updateJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', result, false, true, mock)
  },
  updateJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', result, true, false, mock)
  },
}
