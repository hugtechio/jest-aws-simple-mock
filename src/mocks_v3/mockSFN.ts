
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
  deleteStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'deleteStateMachine', 'SFN', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'destroy', 'SFN', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'destroy', 'SFN', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'destroy', 'SFN', Promise.reject(result), true, mock)
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
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sfn', 'untagResource', 'SFN', Promise.reject(result), true, mock)
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