
/**
* @description mocks_v2:mockBatch.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockBatch = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', result, true, true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', result, false, true, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', result, true, false, mock)
  },
  createComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', result, true, true, mock)
  },
  createComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', result, false, true, mock)
  },
  createComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', result, true, false, mock)
  },
  createJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', result, true, true, mock)
  },
  createJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', result, false, true, mock)
  },
  createJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', result, true, false, mock)
  },
  createSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', result, true, true, mock)
  },
  createSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', result, false, true, mock)
  },
  createSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', result, true, false, mock)
  },
  deleteComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', result, true, true, mock)
  },
  deleteComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', result, false, true, mock)
  },
  deleteComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', result, true, false, mock)
  },
  deleteJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', result, true, true, mock)
  },
  deleteJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', result, false, true, mock)
  },
  deleteJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', result, true, false, mock)
  },
  deleteSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', result, true, true, mock)
  },
  deleteSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', result, false, true, mock)
  },
  deleteSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', result, true, false, mock)
  },
  deregisterJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', result, true, true, mock)
  },
  deregisterJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', result, false, true, mock)
  },
  deregisterJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', result, true, false, mock)
  },
  describeComputeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', result, true, true, mock)
  },
  describeComputeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', result, false, true, mock)
  },
  describeComputeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', result, true, false, mock)
  },
  describeJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', result, true, true, mock)
  },
  describeJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', result, false, true, mock)
  },
  describeJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', result, true, false, mock)
  },
  describeJobQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', result, true, true, mock)
  },
  describeJobQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', result, false, true, mock)
  },
  describeJobQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', result, true, false, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', result, true, true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', result, false, true, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', result, true, false, mock)
  },
  describeSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', result, true, true, mock)
  },
  describeSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', result, false, true, mock)
  },
  describeSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', result, true, false, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', result, true, true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', result, false, true, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', result, true, false, mock)
  },
  listSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', result, true, true, mock)
  },
  listSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', result, false, true, mock)
  },
  listSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', result, true, false, mock)
  },
  registerJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', result, true, true, mock)
  },
  registerJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', result, false, true, mock)
  },
  registerJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', result, true, false, mock)
  },
  submitJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', result, true, true, mock)
  },
  submitJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', result, false, true, mock)
  },
  submitJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', result, true, false, mock)
  },
  terminateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', result, true, true, mock)
  },
  terminateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', result, false, true, mock)
  },
  terminateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', result, true, false, mock)
  },
  updateComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', result, true, true, mock)
  },
  updateComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', result, false, true, mock)
  },
  updateComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', result, true, false, mock)
  },
  updateJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', result, true, true, mock)
  },
  updateJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', result, false, true, mock)
  },
  updateJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', result, true, false, mock)
  },
  updateSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', result, true, true, mock)
  },
  updateSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', result, false, true, mock)
  },
  updateSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', result, true, false, mock)
  },
}
