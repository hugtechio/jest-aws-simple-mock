
/**
* @description mocks_v3:mockMediaConvert module is mocks for AWS-SDK V3
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
export const mockMediaConvert = {
  associateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'associateCertificate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  associateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'associateCertificate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  associateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'associateCertificate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'cancelJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'cancelJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'cancelJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createPreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createPreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createPreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'createQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deleteJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deleteJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deleteJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deletePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deletePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deletePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deletePreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'deleteQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'describeEndpoints', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'describeEndpoints', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'describeEndpoints', 'MediaConvert', Promise.reject(result), true, mock)
  },
  disassociateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'disassociateCertificate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  disassociateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'disassociateCertificate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  disassociateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'disassociateCertificate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJob', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJob', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJob', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getPreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  getQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  getQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  getQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'getQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listJobTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobTemplates', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listJobTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobTemplates', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listJobTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobTemplates', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobs', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobs', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listJobs', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listPresets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listPresets', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listPresetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listPresets', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listPresetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listPresets', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listQueues', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listQueues', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listQueues', 'MediaConvert', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listTagsForResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listTagsForResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'listTagsForResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  putPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'putPolicy', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  putPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'putPolicy', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  putPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'putPolicy', 'MediaConvert', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'tagResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'tagResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'tagResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'untagResource', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'untagResource', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'untagResource', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updateJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateJobTemplate', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updateJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateJobTemplate', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updateJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateJobTemplate', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updatePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updatePreset', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updatePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updatePreset', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updatePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updatePreset', 'MediaConvert', Promise.reject(result), true, mock)
  },
  updateQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateQueue', 'MediaConvert', Promise.resolve(result), true, mock)
  },
  updateQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateQueue', 'MediaConvert', Promise.resolve(result), false, mock)
  },
  updateQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'updateQueue', 'MediaConvert', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'send', 'MediaConvertClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'send', 'MediaConvertClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconvert', 'send', 'MediaConvertClient', Promise.reject(result), true, mock)
  }
}
