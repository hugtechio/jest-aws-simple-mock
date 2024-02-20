
/**
* @description mocks_v3:mockEntityResolution module is mocks for AWS-SDK V3
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
export const mockEntityResolution = {
  createIdMappingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  createIdMappingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  createIdMappingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createIdMappingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  createMatchingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createMatchingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  createMatchingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createMatchingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  createMatchingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createMatchingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  createSchemaMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createSchemaMapping', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  createSchemaMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createSchemaMapping', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  createSchemaMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'createSchemaMapping', 'EntityResolution', Promise.reject(result), true, mock)
  },
  deleteIdMappingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  deleteIdMappingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  deleteIdMappingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteIdMappingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  deleteMatchingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteMatchingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  deleteMatchingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteMatchingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  deleteMatchingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteMatchingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  deleteSchemaMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteSchemaMapping', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  deleteSchemaMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteSchemaMapping', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  deleteSchemaMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'deleteSchemaMapping', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getIdMappingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingJob', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getIdMappingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingJob', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getIdMappingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingJob', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getIdMappingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getIdMappingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getIdMappingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getIdMappingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getMatchId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchId', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getMatchIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchId', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getMatchIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchId', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getMatchingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingJob', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getMatchingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingJob', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getMatchingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingJob', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getMatchingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getMatchingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getMatchingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getMatchingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getProviderService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getProviderService', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getProviderServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getProviderService', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getProviderServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getProviderService', 'EntityResolution', Promise.reject(result), true, mock)
  },
  getSchemaMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getSchemaMapping', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  getSchemaMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getSchemaMapping', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  getSchemaMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'getSchemaMapping', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listIdMappingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingJobs', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listIdMappingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingJobs', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listIdMappingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingJobs', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listIdMappingWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingWorkflows', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listIdMappingWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingWorkflows', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listIdMappingWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listIdMappingWorkflows', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listMatchingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingJobs', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listMatchingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingJobs', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listMatchingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingJobs', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listMatchingWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingWorkflows', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listMatchingWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingWorkflows', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listMatchingWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listMatchingWorkflows', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listProviderServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listProviderServices', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listProviderServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listProviderServices', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listProviderServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listProviderServices', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listSchemaMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listSchemaMappings', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listSchemaMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listSchemaMappings', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listSchemaMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listSchemaMappings', 'EntityResolution', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listTagsForResource', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listTagsForResource', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'listTagsForResource', 'EntityResolution', Promise.reject(result), true, mock)
  },
  startIdMappingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startIdMappingJob', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  startIdMappingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startIdMappingJob', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  startIdMappingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startIdMappingJob', 'EntityResolution', Promise.reject(result), true, mock)
  },
  startMatchingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startMatchingJob', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  startMatchingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startMatchingJob', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  startMatchingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'startMatchingJob', 'EntityResolution', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'tagResource', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'tagResource', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'tagResource', 'EntityResolution', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'untagResource', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'untagResource', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'untagResource', 'EntityResolution', Promise.reject(result), true, mock)
  },
  updateIdMappingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  updateIdMappingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateIdMappingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  updateIdMappingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateIdMappingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  updateMatchingWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateMatchingWorkflow', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  updateMatchingWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateMatchingWorkflow', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  updateMatchingWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateMatchingWorkflow', 'EntityResolution', Promise.reject(result), true, mock)
  },
  updateSchemaMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateSchemaMapping', 'EntityResolution', Promise.resolve(result), true, mock)
  },
  updateSchemaMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateSchemaMapping', 'EntityResolution', Promise.resolve(result), false, mock)
  },
  updateSchemaMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'updateSchemaMapping', 'EntityResolution', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'send', 'EntityResolutionClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'send', 'EntityResolutionClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-entityresolution', 'send', 'EntityResolutionClient', Promise.reject(result), true, mock)
  }
}
