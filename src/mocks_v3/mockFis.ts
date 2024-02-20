
/**
* @description mocks_v3:mockFis module is mocks for AWS-SDK V3
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
  createTargetAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createTargetAccountConfiguration', 'Fis', Promise.resolve(result), true, mock)
  },
  createTargetAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createTargetAccountConfiguration', 'Fis', Promise.resolve(result), false, mock)
  },
  createTargetAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'createTargetAccountConfiguration', 'Fis', Promise.reject(result), true, mock)
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
  deleteTargetAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteTargetAccountConfiguration', 'Fis', Promise.resolve(result), true, mock)
  },
  deleteTargetAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteTargetAccountConfiguration', 'Fis', Promise.resolve(result), false, mock)
  },
  deleteTargetAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'deleteTargetAccountConfiguration', 'Fis', Promise.reject(result), true, mock)
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
  getExperimentTargetAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTargetAccountConfiguration', 'Fis', Promise.resolve(result), true, mock)
  },
  getExperimentTargetAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTargetAccountConfiguration', 'Fis', Promise.resolve(result), false, mock)
  },
  getExperimentTargetAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getExperimentTargetAccountConfiguration', 'Fis', Promise.reject(result), true, mock)
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
  getTargetAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetAccountConfiguration', 'Fis', Promise.resolve(result), true, mock)
  },
  getTargetAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetAccountConfiguration', 'Fis', Promise.resolve(result), false, mock)
  },
  getTargetAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetAccountConfiguration', 'Fis', Promise.reject(result), true, mock)
  },
  getTargetResourceType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetResourceType', 'Fis', Promise.resolve(result), true, mock)
  },
  getTargetResourceTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetResourceType', 'Fis', Promise.resolve(result), false, mock)
  },
  getTargetResourceTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'getTargetResourceType', 'Fis', Promise.reject(result), true, mock)
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
  listExperimentResolvedTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentResolvedTargets', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentResolvedTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentResolvedTargets', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentResolvedTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentResolvedTargets', 'Fis', Promise.reject(result), true, mock)
  },
  listExperimentTargetAccountConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTargetAccountConfigurations', 'Fis', Promise.resolve(result), true, mock)
  },
  listExperimentTargetAccountConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTargetAccountConfigurations', 'Fis', Promise.resolve(result), false, mock)
  },
  listExperimentTargetAccountConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listExperimentTargetAccountConfigurations', 'Fis', Promise.reject(result), true, mock)
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
  listTargetAccountConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetAccountConfigurations', 'Fis', Promise.resolve(result), true, mock)
  },
  listTargetAccountConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetAccountConfigurations', 'Fis', Promise.resolve(result), false, mock)
  },
  listTargetAccountConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetAccountConfigurations', 'Fis', Promise.reject(result), true, mock)
  },
  listTargetResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetResourceTypes', 'Fis', Promise.resolve(result), true, mock)
  },
  listTargetResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetResourceTypes', 'Fis', Promise.resolve(result), false, mock)
  },
  listTargetResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'listTargetResourceTypes', 'Fis', Promise.reject(result), true, mock)
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
  updateTargetAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateTargetAccountConfiguration', 'Fis', Promise.resolve(result), true, mock)
  },
  updateTargetAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateTargetAccountConfiguration', 'Fis', Promise.resolve(result), false, mock)
  },
  updateTargetAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fis', 'updateTargetAccountConfiguration', 'Fis', Promise.reject(result), true, mock)
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
