
/**
* @description mocks_v3:mockBatch module is mocks for AWS-SDK V3
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
export const mockBatch = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'cancelJob', 'Batch', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'cancelJob', 'Batch', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'cancelJob', 'Batch', Promise.reject(result), true, mock)
  },
  createComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  createComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  createComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  createJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  createJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  createJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  createSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  createSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  createSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'createSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
  deleteComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  deleteJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  deleteSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deleteSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
  deregisterJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deregisterJobDefinition', 'Batch', Promise.resolve(result), true, mock)
  },
  deregisterJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deregisterJobDefinition', 'Batch', Promise.resolve(result), false, mock)
  },
  deregisterJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'deregisterJobDefinition', 'Batch', Promise.reject(result), true, mock)
  },
  describeComputeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeComputeEnvironments', 'Batch', Promise.resolve(result), true, mock)
  },
  describeComputeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeComputeEnvironments', 'Batch', Promise.resolve(result), false, mock)
  },
  describeComputeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeComputeEnvironments', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobDefinitions', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobDefinitions', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobDefinitions', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobQueues', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobQueues', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobQueues', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobs', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobs', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeJobs', 'Batch', Promise.reject(result), true, mock)
  },
  describeSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeSchedulingPolicies', 'Batch', Promise.resolve(result), true, mock)
  },
  describeSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeSchedulingPolicies', 'Batch', Promise.resolve(result), false, mock)
  },
  describeSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'describeSchedulingPolicies', 'Batch', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listJobs', 'Batch', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listJobs', 'Batch', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listJobs', 'Batch', Promise.reject(result), true, mock)
  },
  listSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listSchedulingPolicies', 'Batch', Promise.resolve(result), true, mock)
  },
  listSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listSchedulingPolicies', 'Batch', Promise.resolve(result), false, mock)
  },
  listSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listSchedulingPolicies', 'Batch', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listTagsForResource', 'Batch', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listTagsForResource', 'Batch', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'listTagsForResource', 'Batch', Promise.reject(result), true, mock)
  },
  registerJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'registerJobDefinition', 'Batch', Promise.resolve(result), true, mock)
  },
  registerJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'registerJobDefinition', 'Batch', Promise.resolve(result), false, mock)
  },
  registerJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'registerJobDefinition', 'Batch', Promise.reject(result), true, mock)
  },
  submitJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'submitJob', 'Batch', Promise.resolve(result), true, mock)
  },
  submitJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'submitJob', 'Batch', Promise.resolve(result), false, mock)
  },
  submitJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'submitJob', 'Batch', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'tagResource', 'Batch', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'tagResource', 'Batch', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'tagResource', 'Batch', Promise.reject(result), true, mock)
  },
  terminateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'terminateJob', 'Batch', Promise.resolve(result), true, mock)
  },
  terminateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'terminateJob', 'Batch', Promise.resolve(result), false, mock)
  },
  terminateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'terminateJob', 'Batch', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'untagResource', 'Batch', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'untagResource', 'Batch', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'untagResource', 'Batch', Promise.reject(result), true, mock)
  },
  updateComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  updateComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  updateComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  updateJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  updateJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  updateJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  updateSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  updateSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  updateSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'updateSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'send', 'BatchClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'send', 'BatchClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-batch', 'send', 'BatchClient', Promise.reject(result), true, mock)
  }
}
