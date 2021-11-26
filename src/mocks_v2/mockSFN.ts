
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockSFN = {
  createActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  createActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  createActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivity', 'SFN', Promise.reject(result), true, mock)
  },
  createStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  createStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  createStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  deleteActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivity', 'SFN', Promise.reject(result), true, mock)
  },
  deleteStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  deleteStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  deleteStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  describeActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'SFN', Promise.resolve(result), true, mock)
  },
  describeActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'SFN', Promise.resolve(result), false, mock)
  },
  describeActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivity', 'SFN', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SFN', Promise.reject(result), true, mock)
  },
  describeStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  describeStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  describeStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
  describeStateMachineForExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  describeStateMachineForExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  describeStateMachineForExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStateMachineForExecution', 'SFN', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SFN', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SFN', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SFN', Promise.reject(result), true, mock)
  },
  getActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'SFN', Promise.resolve(result), true, mock)
  },
  getActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'SFN', Promise.resolve(result), false, mock)
  },
  getActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActivityTask', 'SFN', Promise.reject(result), true, mock)
  },
  getExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'SFN', Promise.resolve(result), true, mock)
  },
  getExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'SFN', Promise.resolve(result), false, mock)
  },
  getExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExecutionHistory', 'SFN', Promise.reject(result), true, mock)
  },
  listActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'SFN', Promise.resolve(result), true, mock)
  },
  listActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'SFN', Promise.resolve(result), false, mock)
  },
  listActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivities', 'SFN', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SFN', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SFN', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SFN', Promise.reject(result), true, mock)
  },
  listStateMachines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'SFN', Promise.resolve(result), true, mock)
  },
  listStateMachinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'SFN', Promise.resolve(result), false, mock)
  },
  listStateMachinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStateMachines', 'SFN', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SFN', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SFN', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskFailure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskFailureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskFailureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskFailure', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskHeartbeat', 'SFN', Promise.reject(result), true, mock)
  },
  sendTaskSuccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'SFN', Promise.resolve(result), true, mock)
  },
  sendTaskSuccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'SFN', Promise.resolve(result), false, mock)
  },
  sendTaskSuccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTaskSuccess', 'SFN', Promise.reject(result), true, mock)
  },
  startExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  startExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  startExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExecution', 'SFN', Promise.reject(result), true, mock)
  },
  startSyncExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  startSyncExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  startSyncExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSyncExecution', 'SFN', Promise.reject(result), true, mock)
  },
  stopExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'SFN', Promise.resolve(result), true, mock)
  },
  stopExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'SFN', Promise.resolve(result), false, mock)
  },
  stopExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExecution', 'SFN', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SFN', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SFN', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SFN', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SFN', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SFN', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SFN', Promise.reject(result), true, mock)
  },
  updateStateMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'SFN', Promise.resolve(result), true, mock)
  },
  updateStateMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'SFN', Promise.resolve(result), false, mock)
  },
  updateStateMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStateMachine', 'SFN', Promise.reject(result), true, mock)
  },
}
