
/**
* @description mocks_v3:mockMigrationHubOrchestrator module is mocks for AWS-SDK V3
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
export const mockMigrationHubOrchestrator = {
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  createWorkflowStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  createWorkflowStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  createWorkflowStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  createWorkflowStepGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  createWorkflowStepGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  createWorkflowStepGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'createWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  deleteWorkflowStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  deleteWorkflowStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  deleteWorkflowStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  deleteWorkflowStepGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  deleteWorkflowStepGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  deleteWorkflowStepGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'deleteWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplate', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplate', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplate', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getTemplateStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getTemplateStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getTemplateStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getTemplateStepGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getTemplateStepGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getTemplateStepGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getTemplateStepGroup', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getWorkflowStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getWorkflowStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getWorkflowStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  getWorkflowStepGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  getWorkflowStepGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  getWorkflowStepGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'getWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listPlugins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listPlugins', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listPluginsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listPlugins', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listPluginsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listPlugins', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTagsForResource', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTagsForResource', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTagsForResource', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listTemplateStepGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateStepGroups', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listTemplateStepGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateStepGroups', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listTemplateStepGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateStepGroups', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listTemplateSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateSteps', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listTemplateStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateSteps', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listTemplateStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplateSteps', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplates', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplates', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listTemplates', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listWorkflowStepGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowStepGroups', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listWorkflowStepGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowStepGroups', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listWorkflowStepGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowStepGroups', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listWorkflowSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowSteps', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listWorkflowStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowSteps', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listWorkflowStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflowSteps', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflows', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflows', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'listWorkflows', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  retryWorkflowStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'retryWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  retryWorkflowStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'retryWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  retryWorkflowStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'retryWorkflowStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  startWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'startWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  startWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'startWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  startWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'startWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  stopWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'stopWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  stopWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'stopWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  stopWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'stopWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'tagResource', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'tagResource', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'tagResource', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'untagResource', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'untagResource', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'untagResource', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  updateWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  updateWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflow', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  updateWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflow', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  updateWorkflowStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  updateWorkflowStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStep', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  updateWorkflowStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStep', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  updateWorkflowStepGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), true, mock)
  },
  updateWorkflowStepGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.resolve(result), false, mock)
  },
  updateWorkflowStepGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'updateWorkflowStepGroup', 'MigrationHubOrchestrator', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'send', 'MigrationHubOrchestratorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'send', 'MigrationHubOrchestratorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhuborchestrator', 'send', 'MigrationHubOrchestratorClient', Promise.reject(result), true, mock)
  }
}
