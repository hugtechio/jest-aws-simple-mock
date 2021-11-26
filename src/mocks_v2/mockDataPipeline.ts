
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
  export const mockDataPipeline = {
  activatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activatePipeline', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  activatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activatePipeline', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  activatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activatePipeline', 'DataPipeline', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'DataPipeline', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'DataPipeline', Promise.reject(result), true, mock)
  },
  deactivatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivatePipeline', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  deactivatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivatePipeline', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  deactivatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivatePipeline', 'DataPipeline', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'DataPipeline', Promise.reject(result), true, mock)
  },
  describeObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObjects', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  describeObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObjects', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  describeObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObjects', 'DataPipeline', Promise.reject(result), true, mock)
  },
  describePipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipelines', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  describePipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipelines', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  describePipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipelines', 'DataPipeline', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataPipeline', Promise.reject(result), true, mock)
  },
  evaluateExpression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateExpression', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  evaluateExpressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateExpression', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  evaluateExpressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateExpression', 'DataPipeline', Promise.reject(result), true, mock)
  },
  getPipelineDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineDefinition', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  getPipelineDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineDefinition', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  getPipelineDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineDefinition', 'DataPipeline', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'DataPipeline', Promise.reject(result), true, mock)
  },
  pollForTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForTask', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  pollForTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForTask', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  pollForTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForTask', 'DataPipeline', Promise.reject(result), true, mock)
  },
  putPipelineDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPipelineDefinition', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  putPipelineDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPipelineDefinition', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  putPipelineDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPipelineDefinition', 'DataPipeline', Promise.reject(result), true, mock)
  },
  queryObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryObjects', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  queryObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryObjects', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  queryObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryObjects', 'DataPipeline', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'DataPipeline', Promise.reject(result), true, mock)
  },
  reportTaskProgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskProgress', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  reportTaskProgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskProgress', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  reportTaskProgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskProgress', 'DataPipeline', Promise.reject(result), true, mock)
  },
  reportTaskRunnerHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskRunnerHeartbeat', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  reportTaskRunnerHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskRunnerHeartbeat', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  reportTaskRunnerHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reportTaskRunnerHeartbeat', 'DataPipeline', Promise.reject(result), true, mock)
  },
  setStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setStatus', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  setStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setStatus', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  setStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setStatus', 'DataPipeline', Promise.reject(result), true, mock)
  },
  setTaskStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTaskStatus', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  setTaskStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTaskStatus', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  setTaskStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTaskStatus', 'DataPipeline', Promise.reject(result), true, mock)
  },
  validatePipelineDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePipelineDefinition', 'DataPipeline', Promise.resolve(result), true, mock)
  },
  validatePipelineDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePipelineDefinition', 'DataPipeline', Promise.resolve(result), false, mock)
  },
  validatePipelineDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePipelineDefinition', 'DataPipeline', Promise.reject(result), true, mock)
  },
}
