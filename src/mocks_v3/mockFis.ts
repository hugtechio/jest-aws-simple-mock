
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockFis = {
  createExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  createExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  createExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  deleteExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  deleteExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  deleteExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'destroy', 'Fis', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'destroy', 'Fis', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'destroy', 'Fis', Promise.reject(result), true, mock)
  },
  getAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getAction', 'Fis', Promise.resolve(result), true, mock)
  },
  getActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getAction', 'Fis', Promise.resolve(result), false, mock)
  },
  getActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getAction', 'Fis', Promise.reject(result), true, mock)
  },
  getExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  getExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  getExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  getExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  getExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  getExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  listActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listActions', 'Fis', Promise.resolve(result), true, mock)
  },
  listActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listActions', 'Fis', Promise.resolve(result), false, mock)
  },
  listActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listActions', 'Fis', Promise.reject(result), true, mock)
  },
  listExperimentTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTemplates', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTemplates', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTemplates', 'Fis', Promise.reject(result), true, mock)
  },
  listExperiments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperiments', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperiments', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperiments', 'Fis', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTagsForResource', 'Fis', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTagsForResource', 'Fis', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTagsForResource', 'Fis', Promise.reject(result), true, mock)
  },
  startExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'startExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  startExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'startExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  startExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'startExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  stopExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'stopExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  stopExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'stopExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  stopExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'stopExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'tagResource', 'Fis', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'tagResource', 'Fis', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'tagResource', 'Fis', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'untagResource', 'Fis', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'untagResource', 'Fis', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'untagResource', 'Fis', Promise.reject(result), true, mock)
  },
  updateExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  updateExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  updateExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'send', 'FisClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'send', 'FisClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'send', 'FisClient', Promise.reject(result), true, mock)
  }
}