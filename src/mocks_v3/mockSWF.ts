
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSWF = {
  countClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countClosedWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  countClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countClosedWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  countClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countClosedWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  countOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countOpenWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  countOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countOpenWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  countOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countOpenWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  countPendingActivityTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingActivityTasks', 'SWF', Promise.resolve(result), true, mock)
  },
  countPendingActivityTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingActivityTasks', 'SWF', Promise.resolve(result), false, mock)
  },
  countPendingActivityTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingActivityTasks', 'SWF', Promise.reject(result), true, mock)
  },
  countPendingDecisionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingDecisionTasks', 'SWF', Promise.resolve(result), true, mock)
  },
  countPendingDecisionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingDecisionTasks', 'SWF', Promise.resolve(result), false, mock)
  },
  countPendingDecisionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'countPendingDecisionTasks', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateDomain', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'deprecateWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  describeActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  describeActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  describeActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeDomain', 'SWF', Promise.reject(result), true, mock)
  },
  describeWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  describeWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  describeWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  describeWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  describeWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  describeWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'describeWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'destroy', 'SWF', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'destroy', 'SWF', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'destroy', 'SWF', Promise.reject(result), true, mock)
  },
  getWorkflowExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'getWorkflowExecutionHistory', 'SWF', Promise.resolve(result), true, mock)
  },
  getWorkflowExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'getWorkflowExecutionHistory', 'SWF', Promise.resolve(result), false, mock)
  },
  getWorkflowExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'getWorkflowExecutionHistory', 'SWF', Promise.reject(result), true, mock)
  },
  listActivityTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listActivityTypes', 'SWF', Promise.resolve(result), true, mock)
  },
  listActivityTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listActivityTypes', 'SWF', Promise.resolve(result), false, mock)
  },
  listActivityTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listActivityTypes', 'SWF', Promise.reject(result), true, mock)
  },
  listClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listClosedWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  listClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listClosedWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  listClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listClosedWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listDomains', 'SWF', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listDomains', 'SWF', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listDomains', 'SWF', Promise.reject(result), true, mock)
  },
  listOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listOpenWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  listOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listOpenWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  listOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listOpenWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listTagsForResource', 'SWF', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listTagsForResource', 'SWF', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listTagsForResource', 'SWF', Promise.reject(result), true, mock)
  },
  listWorkflowTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listWorkflowTypes', 'SWF', Promise.resolve(result), true, mock)
  },
  listWorkflowTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listWorkflowTypes', 'SWF', Promise.resolve(result), false, mock)
  },
  listWorkflowTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'listWorkflowTypes', 'SWF', Promise.reject(result), true, mock)
  },
  pollForActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForActivityTask', 'SWF', Promise.resolve(result), true, mock)
  },
  pollForActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForActivityTask', 'SWF', Promise.resolve(result), false, mock)
  },
  pollForActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForActivityTask', 'SWF', Promise.reject(result), true, mock)
  },
  pollForDecisionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForDecisionTask', 'SWF', Promise.resolve(result), true, mock)
  },
  pollForDecisionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForDecisionTask', 'SWF', Promise.resolve(result), false, mock)
  },
  pollForDecisionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'pollForDecisionTask', 'SWF', Promise.reject(result), true, mock)
  },
  recordActivityTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'recordActivityTaskHeartbeat', 'SWF', Promise.resolve(result), true, mock)
  },
  recordActivityTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'recordActivityTaskHeartbeat', 'SWF', Promise.resolve(result), false, mock)
  },
  recordActivityTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'recordActivityTaskHeartbeat', 'SWF', Promise.reject(result), true, mock)
  },
  registerActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  registerActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  registerActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  registerDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  registerDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  registerDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerDomain', 'SWF', Promise.reject(result), true, mock)
  },
  registerWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  registerWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  registerWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'registerWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  requestCancelWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'requestCancelWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  requestCancelWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'requestCancelWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  requestCancelWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'requestCancelWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskCanceled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCanceled', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskCanceledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCanceled', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskCanceledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCanceled', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCompleted', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCompleted', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskCompleted', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskFailed: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskFailed', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskFailedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskFailed', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskFailedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondActivityTaskFailed', 'SWF', Promise.reject(result), true, mock)
  },
  respondDecisionTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondDecisionTaskCompleted', 'SWF', Promise.resolve(result), true, mock)
  },
  respondDecisionTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondDecisionTaskCompleted', 'SWF', Promise.resolve(result), false, mock)
  },
  respondDecisionTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'respondDecisionTaskCompleted', 'SWF', Promise.reject(result), true, mock)
  },
  signalWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'signalWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  signalWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'signalWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  signalWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'signalWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  startWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'startWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  startWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'startWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  startWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'startWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'tagResource', 'SWF', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'tagResource', 'SWF', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'tagResource', 'SWF', Promise.reject(result), true, mock)
  },
  terminateWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'terminateWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  terminateWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'terminateWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  terminateWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'terminateWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateDomain', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'undeprecateWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'untagResource', 'SWF', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'untagResource', 'SWF', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'untagResource', 'SWF', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'send', 'SWFClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'send', 'SWFClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-swf', 'send', 'SWFClient', Promise.reject(result), true, mock)
  }
}