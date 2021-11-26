
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
  export const mockFis = {
  createExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  createExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  createExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  deleteExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  deleteExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  deleteExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Fis', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Fis', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Fis', Promise.reject(result), true, mock)
  },
  getAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAction', 'Fis', Promise.resolve(result), true, mock)
  },
  getActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAction', 'Fis', Promise.resolve(result), false, mock)
  },
  getActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAction', 'Fis', Promise.reject(result), true, mock)
  },
  getExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  getExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  getExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  getExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  getExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  getExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
  listActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActions', 'Fis', Promise.resolve(result), true, mock)
  },
  listActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActions', 'Fis', Promise.resolve(result), false, mock)
  },
  listActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActions', 'Fis', Promise.reject(result), true, mock)
  },
  listExperimentTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperimentTemplates', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperimentTemplates', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperimentTemplates', 'Fis', Promise.reject(result), true, mock)
  },
  listExperiments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperiments', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperiments', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExperiments', 'Fis', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Fis', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Fis', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Fis', Promise.reject(result), true, mock)
  },
  startExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  startExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  startExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  stopExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExperiment', 'Fis', Promise.resolve(result), true, mock)
  },
  stopExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExperiment', 'Fis', Promise.resolve(result), false, mock)
  },
  stopExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopExperiment', 'Fis', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Fis', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Fis', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Fis', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Fis', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Fis', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Fis', Promise.reject(result), true, mock)
  },
  updateExperimentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExperimentTemplate', 'Fis', Promise.resolve(result), true, mock)
  },
  updateExperimentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExperimentTemplate', 'Fis', Promise.resolve(result), false, mock)
  },
  updateExperimentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExperimentTemplate', 'Fis', Promise.reject(result), true, mock)
  },
}
