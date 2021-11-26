
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
  export const mockMediaConvert = {
  associateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCertificate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  associateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCertificate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  associateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCertificate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deleteJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deleteJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deleteJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deletePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deletePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deletePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'MediaConvert', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  disassociateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCertificate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  disassociateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCertificate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  disassociateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCertificate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listJobTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobTemplates', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listJobTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobTemplates', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listJobTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobTemplates', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listPresets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listPresetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listPresetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  putPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  putPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  putPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updateJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updateJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updateJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updatePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updatePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updatePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updateQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updateQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updateQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
}
