
/**
* @description mocks_v2:mockSFN.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockStepFunctions = {
  createActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'StepFunctions', result, true, true, mock)
  },
  createActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'StepFunctions', result, false, true, mock)
  },
  createActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'StepFunctions', result, true, false, mock)
  },
  createStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'StepFunctions', result, true, true, mock)
  },
  createStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'StepFunctions', result, false, true, mock)
  },
  createStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'StepFunctions', result, true, false, mock)
  },
  deleteActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'StepFunctions', result, true, true, mock)
  },
  deleteActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'StepFunctions', result, false, true, mock)
  },
  deleteActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'StepFunctions', result, true, false, mock)
  },
  deleteStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'StepFunctions', result, true, true, mock)
  },
  deleteStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'StepFunctions', result, false, true, mock)
  },
  deleteStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'StepFunctions', result, true, false, mock)
  },
  describeActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'StepFunctions', result, true, true, mock)
  },
  describeActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'StepFunctions', result, false, true, mock)
  },
  describeActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'StepFunctions', result, true, false, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'StepFunctions', result, true, true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'StepFunctions', result, false, true, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'StepFunctions', result, true, false, mock)
  },
  describeStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'StepFunctions', result, true, true, mock)
  },
  describeStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'StepFunctions', result, false, true, mock)
  },
  describeStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'StepFunctions', result, true, false, mock)
  },
  describeStateMachineForExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'StepFunctions', result, true, true, mock)
  },
  describeStateMachineForExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'StepFunctions', result, false, true, mock)
  },
  describeStateMachineForExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'StepFunctions', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StepFunctions', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StepFunctions', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StepFunctions', result, true, false, mock)
  },
  getActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'StepFunctions', result, true, true, mock)
  },
  getActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'StepFunctions', result, false, true, mock)
  },
  getActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'StepFunctions', result, true, false, mock)
  },
  getExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'StepFunctions', result, true, true, mock)
  },
  getExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'StepFunctions', result, false, true, mock)
  },
  getExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'StepFunctions', result, true, false, mock)
  },
  listActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'StepFunctions', result, true, true, mock)
  },
  listActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'StepFunctions', result, false, true, mock)
  },
  listActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'StepFunctions', result, true, false, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'StepFunctions', result, true, true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'StepFunctions', result, false, true, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'StepFunctions', result, true, false, mock)
  },
  listStateMachines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'StepFunctions', result, true, true, mock)
  },
  listStateMachinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'StepFunctions', result, false, true, mock)
  },
  listStateMachinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'StepFunctions', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StepFunctions', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StepFunctions', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StepFunctions', result, true, false, mock)
  },
  sendTaskFailure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'StepFunctions', result, true, true, mock)
  },
  sendTaskFailureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'StepFunctions', result, false, true, mock)
  },
  sendTaskFailureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'StepFunctions', result, true, false, mock)
  },
  sendTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'StepFunctions', result, true, true, mock)
  },
  sendTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'StepFunctions', result, false, true, mock)
  },
  sendTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'StepFunctions', result, true, false, mock)
  },
  sendTaskSuccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'StepFunctions', result, true, true, mock)
  },
  sendTaskSuccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'StepFunctions', result, false, true, mock)
  },
  sendTaskSuccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'StepFunctions', result, true, false, mock)
  },
  startExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'StepFunctions', result, true, true, mock)
  },
  startExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'StepFunctions', result, false, true, mock)
  },
  startExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'StepFunctions', result, true, false, mock)
  },
  startSyncExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'StepFunctions', result, true, true, mock)
  },
  startSyncExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'StepFunctions', result, false, true, mock)
  },
  startSyncExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'StepFunctions', result, true, false, mock)
  },
  stopExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'StepFunctions', result, true, true, mock)
  },
  stopExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'StepFunctions', result, false, true, mock)
  },
  stopExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'StepFunctions', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'StepFunctions', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'StepFunctions', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'StepFunctions', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'StepFunctions', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'StepFunctions', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'StepFunctions', result, true, false, mock)
  },
  updateStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'StepFunctions', result, true, true, mock)
  },
  updateStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'StepFunctions', result, false, true, mock)
  },
  updateStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'StepFunctions', result, true, false, mock)
  },
}
