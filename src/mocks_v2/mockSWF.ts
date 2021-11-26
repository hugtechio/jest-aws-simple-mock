
/**
* @description mocks_v2:mockSWF.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSWF = {
  countClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', result, true, true, mock)
  },
  countClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', result, false, true, mock)
  },
  countClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countClosedWorkflowExecutions', 'SWF', result, true, false, mock)
  },
  countOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', result, true, true, mock)
  },
  countOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', result, false, true, mock)
  },
  countOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countOpenWorkflowExecutions', 'SWF', result, true, false, mock)
  },
  countPendingActivityTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', result, true, true, mock)
  },
  countPendingActivityTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', result, false, true, mock)
  },
  countPendingActivityTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingActivityTasks', 'SWF', result, true, false, mock)
  },
  countPendingDecisionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', result, true, true, mock)
  },
  countPendingDecisionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', result, false, true, mock)
  },
  countPendingDecisionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('countPendingDecisionTasks', 'SWF', result, true, false, mock)
  },
  deprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', result, true, true, mock)
  },
  deprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', result, false, true, mock)
  },
  deprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateActivityType', 'SWF', result, true, false, mock)
  },
  deprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', result, true, true, mock)
  },
  deprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', result, false, true, mock)
  },
  deprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateDomain', 'SWF', result, true, false, mock)
  },
  deprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', result, true, true, mock)
  },
  deprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', result, false, true, mock)
  },
  deprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateWorkflowType', 'SWF', result, true, false, mock)
  },
  describeActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', result, true, true, mock)
  },
  describeActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', result, false, true, mock)
  },
  describeActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivityType', 'SWF', result, true, false, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', result, true, true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', result, false, true, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'SWF', result, true, false, mock)
  },
  describeWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', result, true, true, mock)
  },
  describeWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', result, false, true, mock)
  },
  describeWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowExecution', 'SWF', result, true, false, mock)
  },
  describeWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', result, true, true, mock)
  },
  describeWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', result, false, true, mock)
  },
  describeWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflowType', 'SWF', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SWF', result, true, false, mock)
  },
  getWorkflowExecutionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', result, true, true, mock)
  },
  getWorkflowExecutionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', result, false, true, mock)
  },
  getWorkflowExecutionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowExecutionHistory', 'SWF', result, true, false, mock)
  },
  listActivityTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', result, true, true, mock)
  },
  listActivityTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', result, false, true, mock)
  },
  listActivityTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivityTypes', 'SWF', result, true, false, mock)
  },
  listClosedWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', result, true, true, mock)
  },
  listClosedWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', result, false, true, mock)
  },
  listClosedWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClosedWorkflowExecutions', 'SWF', result, true, false, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', result, true, true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', result, false, true, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'SWF', result, true, false, mock)
  },
  listOpenWorkflowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', result, true, true, mock)
  },
  listOpenWorkflowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', result, false, true, mock)
  },
  listOpenWorkflowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpenWorkflowExecutions', 'SWF', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SWF', result, true, false, mock)
  },
  listWorkflowTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', result, true, true, mock)
  },
  listWorkflowTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', result, false, true, mock)
  },
  listWorkflowTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflowTypes', 'SWF', result, true, false, mock)
  },
  pollForActivityTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', result, true, true, mock)
  },
  pollForActivityTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', result, false, true, mock)
  },
  pollForActivityTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForActivityTask', 'SWF', result, true, false, mock)
  },
  pollForDecisionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', result, true, true, mock)
  },
  pollForDecisionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', result, false, true, mock)
  },
  pollForDecisionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForDecisionTask', 'SWF', result, true, false, mock)
  },
  recordActivityTaskHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', result, true, true, mock)
  },
  recordActivityTaskHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', result, false, true, mock)
  },
  recordActivityTaskHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordActivityTaskHeartbeat', 'SWF', result, true, false, mock)
  },
  registerActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', result, true, true, mock)
  },
  registerActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', result, false, true, mock)
  },
  registerActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerActivityType', 'SWF', result, true, false, mock)
  },
  registerDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', result, true, true, mock)
  },
  registerDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', result, false, true, mock)
  },
  registerDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDomain', 'SWF', result, true, false, mock)
  },
  registerWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', result, true, true, mock)
  },
  registerWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', result, false, true, mock)
  },
  registerWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWorkflowType', 'SWF', result, true, false, mock)
  },
  requestCancelWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', result, true, true, mock)
  },
  requestCancelWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', result, false, true, mock)
  },
  requestCancelWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCancelWorkflowExecution', 'SWF', result, true, false, mock)
  },
  respondActivityTaskCanceled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', result, true, true, mock)
  },
  respondActivityTaskCanceledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', result, false, true, mock)
  },
  respondActivityTaskCanceledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCanceled', 'SWF', result, true, false, mock)
  },
  respondActivityTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', result, true, true, mock)
  },
  respondActivityTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', result, false, true, mock)
  },
  respondActivityTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskCompleted', 'SWF', result, true, false, mock)
  },
  respondActivityTaskFailed: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', result, true, true, mock)
  },
  respondActivityTaskFailedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', result, false, true, mock)
  },
  respondActivityTaskFailedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondActivityTaskFailed', 'SWF', result, true, false, mock)
  },
  respondDecisionTaskCompleted: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', result, true, true, mock)
  },
  respondDecisionTaskCompletedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', result, false, true, mock)
  },
  respondDecisionTaskCompletedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondDecisionTaskCompleted', 'SWF', result, true, false, mock)
  },
  signalWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', result, true, true, mock)
  },
  signalWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', result, false, true, mock)
  },
  signalWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signalWorkflowExecution', 'SWF', result, true, false, mock)
  },
  startWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', result, true, true, mock)
  },
  startWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', result, false, true, mock)
  },
  startWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowExecution', 'SWF', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SWF', result, true, false, mock)
  },
  terminateWorkflowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', result, true, true, mock)
  },
  terminateWorkflowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', result, false, true, mock)
  },
  terminateWorkflowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateWorkflowExecution', 'SWF', result, true, false, mock)
  },
  undeprecateActivityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', result, true, true, mock)
  },
  undeprecateActivityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', result, false, true, mock)
  },
  undeprecateActivityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateActivityType', 'SWF', result, true, false, mock)
  },
  undeprecateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', result, true, true, mock)
  },
  undeprecateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', result, false, true, mock)
  },
  undeprecateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateDomain', 'SWF', result, true, false, mock)
  },
  undeprecateWorkflowType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', result, true, true, mock)
  },
  undeprecateWorkflowTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', result, false, true, mock)
  },
  undeprecateWorkflowTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeprecateWorkflowType', 'SWF', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SWF', result, true, false, mock)
  },
}
