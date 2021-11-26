
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
  export const mockElasticTranscoder = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  deletePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  deletePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  deletePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listJobsByPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listJobsByPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listJobsByPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listJobsByStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listJobsByStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listJobsByStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listPresets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listPresetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listPresetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  testRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  testRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  testRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipelineNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipelineStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
}
