
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
  export const mockBatch = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Batch', Promise.reject(result), true, mock)
  },
  createComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  createComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  createComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  createJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  createJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  createJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  createSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  createSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  createSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
  deleteComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  deleteJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  deleteSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  deleteSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  deleteSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
  deregisterJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', Promise.resolve(result), true, mock)
  },
  deregisterJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', Promise.resolve(result), false, mock)
  },
  deregisterJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterJobDefinition', 'Batch', Promise.reject(result), true, mock)
  },
  describeComputeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', Promise.resolve(result), true, mock)
  },
  describeComputeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', Promise.resolve(result), false, mock)
  },
  describeComputeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComputeEnvironments', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobDefinitions', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobQueues', 'Batch', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Batch', Promise.reject(result), true, mock)
  },
  describeSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', Promise.resolve(result), true, mock)
  },
  describeSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', Promise.resolve(result), false, mock)
  },
  describeSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedulingPolicies', 'Batch', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Batch', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Batch', Promise.reject(result), true, mock)
  },
  listSchedulingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', Promise.resolve(result), true, mock)
  },
  listSchedulingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', Promise.resolve(result), false, mock)
  },
  listSchedulingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedulingPolicies', 'Batch', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Batch', Promise.reject(result), true, mock)
  },
  registerJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', Promise.resolve(result), true, mock)
  },
  registerJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', Promise.resolve(result), false, mock)
  },
  registerJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerJobDefinition', 'Batch', Promise.reject(result), true, mock)
  },
  submitJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', Promise.resolve(result), true, mock)
  },
  submitJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', Promise.resolve(result), false, mock)
  },
  submitJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitJob', 'Batch', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Batch', Promise.reject(result), true, mock)
  },
  terminateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', Promise.resolve(result), true, mock)
  },
  terminateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', Promise.resolve(result), false, mock)
  },
  terminateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJob', 'Batch', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Batch', Promise.reject(result), true, mock)
  },
  updateComputeEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', Promise.resolve(result), true, mock)
  },
  updateComputeEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', Promise.resolve(result), false, mock)
  },
  updateComputeEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComputeEnvironment', 'Batch', Promise.reject(result), true, mock)
  },
  updateJobQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', Promise.resolve(result), true, mock)
  },
  updateJobQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', Promise.resolve(result), false, mock)
  },
  updateJobQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobQueue', 'Batch', Promise.reject(result), true, mock)
  },
  updateSchedulingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', Promise.resolve(result), true, mock)
  },
  updateSchedulingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', Promise.resolve(result), false, mock)
  },
  updateSchedulingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedulingPolicy', 'Batch', Promise.reject(result), true, mock)
  },
}
