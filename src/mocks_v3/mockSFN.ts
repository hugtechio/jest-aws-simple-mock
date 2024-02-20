
/**
* @description mocks_v3:mockSFN module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}
export const mockSFN = {
  createActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  createActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  createActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createActivity', 'SFN', Promise.reject(result), true, mock)
  },
  createStateMachineAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachineAlias', 'SFN', Promise.resolve(result), true, mock)
  },
  createStateMachineAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachineAlias', 'SFN', Promise.resolve(result), false, mock)
  },
  createStateMachineAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachineAlias', 'SFN', Promise.reject(result), true, mock)
  },
  createStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  createStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  createStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'createStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  deleteActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteActivity', 'SFN', Promise.reject(result), true, mock)
  },
  deleteStateMachineAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineAlias', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteStateMachineAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineAlias', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteStateMachineAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineAlias', 'SFN', Promise.reject(result), true, mock)
  },
  deleteStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  deleteStateMachineVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineVersion', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteStateMachineVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineVersion', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteStateMachineVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachineVersion', 'SFN', Promise.reject(result), true, mock)
  },
  describeActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  describeActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  describeActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeActivity', 'SFN', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeExecution', 'SFN', Promise.reject(result), true, mock)
  },
  describeMapRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeMapRun', 'SFN', Promise.resolve(result), true, mock)
  },
  describeMapRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeMapRun', 'SFN', Promise.resolve(result), false, mock)
  },
  describeMapRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeMapRun', 'SFN', Promise.reject(result), true, mock)
  },
  describeStateMachineAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineAlias', 'SFN', Promise.resolve(result), true, mock)
  },
  describeStateMachineAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineAlias', 'SFN', Promise.resolve(result), false, mock)
  },
  describeStateMachineAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineAlias', 'SFN', Promise.reject(result), true, mock)
  },
  describeStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  describeStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  describeStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  describeStateMachineForExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineForExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  describeStateMachineForExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineForExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  describeStateMachineForExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'describeStateMachineForExecution', 'SFN', Promise.reject(result), true, mock)
  },
  getActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getActivityTask', 'SFN', Promise.resolve(result), true, mock)
  },
  getActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getActivityTask', 'SFN', Promise.resolve(result), false, mock)
  },
  getActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getActivityTask', 'SFN', Promise.reject(result), true, mock)
  },
  getExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getExecutionHistory', 'SFN', Promise.resolve(result), true, mock)
  },
  getExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getExecutionHistory', 'SFN', Promise.resolve(result), false, mock)
  },
  getExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'getExecutionHistory', 'SFN', Promise.reject(result), true, mock)
  },
  listActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listActivities', 'SFN', Promise.resolve(result), true, mock)
  },
  listActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listActivities', 'SFN', Promise.resolve(result), false, mock)
  },
  listActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listActivities', 'SFN', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listExecutions', 'SFN', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listExecutions', 'SFN', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listExecutions', 'SFN', Promise.reject(result), true, mock)
  },
  listMapRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listMapRuns', 'SFN', Promise.resolve(result), true, mock)
  },
  listMapRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listMapRuns', 'SFN', Promise.resolve(result), false, mock)
  },
  listMapRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listMapRuns', 'SFN', Promise.reject(result), true, mock)
  },
  listStateMachineAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineAliases', 'SFN', Promise.resolve(result), true, mock)
  },
  listStateMachineAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineAliases', 'SFN', Promise.resolve(result), false, mock)
  },
  listStateMachineAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineAliases', 'SFN', Promise.reject(result), true, mock)
  },
  listStateMachineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineVersions', 'SFN', Promise.resolve(result), true, mock)
  },
  listStateMachineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineVersions', 'SFN', Promise.resolve(result), false, mock)
  },
  listStateMachineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachineVersions', 'SFN', Promise.reject(result), true, mock)
  },
  listStateMachines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachines', 'SFN', Promise.resolve(result), true, mock)
  },
  listStateMachinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachines', 'SFN', Promise.resolve(result), false, mock)
  },
  listStateMachinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listStateMachines', 'SFN', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listTagsForResource', 'SFN', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listTagsForResource', 'SFN', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'listTagsForResource', 'SFN', Promise.reject(result), true, mock)
  },
  publishStateMachineVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'publishStateMachineVersion', 'SFN', Promise.resolve(result), true, mock)
  },
  publishStateMachineVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'publishStateMachineVersion', 'SFN', Promise.resolve(result), false, mock)
  },
  publishStateMachineVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'publishStateMachineVersion', 'SFN', Promise.reject(result), true, mock)
  },
  redriveExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'redriveExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  redriveExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'redriveExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  redriveExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'redriveExecution', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskFailure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskFailure', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskFailureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskFailure', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskFailureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskFailure', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskHeartbeat', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskHeartbeat', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskHeartbeat', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskSuccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskSuccess', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskSuccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskSuccess', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskSuccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'sendTaskSuccess', 'SFN', Promise.reject(result), true, mock)
  },
  startExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  startExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  startExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startExecution', 'SFN', Promise.reject(result), true, mock)
  },
  startSyncExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startSyncExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  startSyncExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startSyncExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  startSyncExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'startSyncExecution', 'SFN', Promise.reject(result), true, mock)
  },
  stopExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'stopExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  stopExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'stopExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  stopExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'stopExecution', 'SFN', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'tagResource', 'SFN', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'tagResource', 'SFN', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'tagResource', 'SFN', Promise.reject(result), true, mock)
  },
  testState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'testState', 'SFN', Promise.resolve(result), true, mock)
  },
  testStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'testState', 'SFN', Promise.resolve(result), false, mock)
  },
  testStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'testState', 'SFN', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.reject(result), true, mock)
  },
  updateMapRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateMapRun', 'SFN', Promise.resolve(result), true, mock)
  },
  updateMapRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateMapRun', 'SFN', Promise.resolve(result), false, mock)
  },
  updateMapRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateMapRun', 'SFN', Promise.reject(result), true, mock)
  },
  updateStateMachineAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachineAlias', 'SFN', Promise.resolve(result), true, mock)
  },
  updateStateMachineAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachineAlias', 'SFN', Promise.resolve(result), false, mock)
  },
  updateStateMachineAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachineAlias', 'SFN', Promise.reject(result), true, mock)
  },
  updateStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  updateStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  updateStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'updateStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'send', 'SFNClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'send', 'SFNClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'send', 'SFNClient', Promise.reject(result), true, mock)
  }
}
