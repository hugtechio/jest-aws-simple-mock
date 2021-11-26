
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
  export const mockSWF = {
  countClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  countClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  countClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  countOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  countOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  countOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  countPendingActivityTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', Promise.resolve(result), true, mock)
  },
  countPendingActivityTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', Promise.resolve(result), false, mock)
  },
  countPendingActivityTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', Promise.reject(result), true, mock)
  },
  countPendingDecisionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', Promise.resolve(result), true, mock)
  },
  countPendingDecisionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', Promise.resolve(result), false, mock)
  },
  countPendingDecisionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', Promise.reject(result), true, mock)
  },
  deprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  deprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  deprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  describeActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  describeActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  describeActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', Promise.reject(result), true, mock)
  },
  describeWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  describeWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  describeWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  describeWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  describeWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  describeWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', Promise.reject(result), true, mock)
  },
  getWorkflowExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', Promise.resolve(result), true, mock)
  },
  getWorkflowExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', Promise.resolve(result), false, mock)
  },
  getWorkflowExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', Promise.reject(result), true, mock)
  },
  listActivityTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', Promise.resolve(result), true, mock)
  },
  listActivityTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', Promise.resolve(result), false, mock)
  },
  listActivityTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', Promise.reject(result), true, mock)
  },
  listClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  listClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  listClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', Promise.reject(result), true, mock)
  },
  listOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', Promise.resolve(result), true, mock)
  },
  listOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', Promise.resolve(result), false, mock)
  },
  listOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', Promise.reject(result), true, mock)
  },
  listWorkflowTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', Promise.resolve(result), true, mock)
  },
  listWorkflowTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', Promise.resolve(result), false, mock)
  },
  listWorkflowTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', Promise.reject(result), true, mock)
  },
  pollForActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', Promise.resolve(result), true, mock)
  },
  pollForActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', Promise.resolve(result), false, mock)
  },
  pollForActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', Promise.reject(result), true, mock)
  },
  pollForDecisionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', Promise.resolve(result), true, mock)
  },
  pollForDecisionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', Promise.resolve(result), false, mock)
  },
  pollForDecisionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', Promise.reject(result), true, mock)
  },
  recordActivityTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', Promise.resolve(result), true, mock)
  },
  recordActivityTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', Promise.resolve(result), false, mock)
  },
  recordActivityTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', Promise.reject(result), true, mock)
  },
  registerActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  registerActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  registerActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  registerDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  registerDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  registerDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', Promise.reject(result), true, mock)
  },
  registerWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  registerWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  registerWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  requestCancelWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  requestCancelWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  requestCancelWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskCanceled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskCanceledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskCanceledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', Promise.reject(result), true, mock)
  },
  respondActivityTaskFailed: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', Promise.resolve(result), true, mock)
  },
  respondActivityTaskFailedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', Promise.resolve(result), false, mock)
  },
  respondActivityTaskFailedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', Promise.reject(result), true, mock)
  },
  respondDecisionTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', Promise.resolve(result), true, mock)
  },
  respondDecisionTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', Promise.resolve(result), false, mock)
  },
  respondDecisionTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', Promise.reject(result), true, mock)
  },
  signalWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  signalWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  signalWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  startWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  startWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  startWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', Promise.reject(result), true, mock)
  },
  terminateWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', Promise.resolve(result), true, mock)
  },
  terminateWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', Promise.resolve(result), false, mock)
  },
  terminateWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', Promise.reject(result), true, mock)
  },
  undeprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', Promise.resolve(result), true, mock)
  },
  undeprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', Promise.resolve(result), false, mock)
  },
  undeprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', Promise.reject(result), true, mock)
  },
}
