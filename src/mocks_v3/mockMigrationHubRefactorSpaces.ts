
/**
* @description mocks_v3:mockMigrationHubRefactorSpaces module is mocks for AWS-SDK V3
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
export const mockMigrationHubRefactorSpaces = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createApplication', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createEnvironment', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  createRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  createRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  createRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createRoute', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createService', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createService', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'createService', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteApplication', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteEnvironment', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteResourcePolicy', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  deleteRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  deleteRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  deleteRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteRoute', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteService', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteService', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'deleteService', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getApplication', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getApplication', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getEnvironment', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getEnvironment', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getResourcePolicy', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  getRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  getRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  getRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getRoute', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  getService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getService', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  getServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getService', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  getServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'getService', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listApplications', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listApplications', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listApplications', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listEnvironmentVpcs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironmentVpcs', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listEnvironmentVpcsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironmentVpcs', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listEnvironmentVpcsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironmentVpcs', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironments', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironments', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listEnvironments', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listRoutes', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listRoutes', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listRoutes', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listServices', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listServices', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listServices', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listTagsForResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listTagsForResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'listTagsForResource', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'putResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'putResourcePolicy', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'putResourcePolicy', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'tagResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'tagResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'tagResource', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'untagResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'untagResource', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'untagResource', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  updateRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'updateRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), true, mock)
  },
  updateRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'updateRoute', 'MigrationHubRefactorSpaces', Promise.resolve(result), false, mock)
  },
  updateRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'updateRoute', 'MigrationHubRefactorSpaces', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'send', 'MigrationHubRefactorSpacesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'send', 'MigrationHubRefactorSpacesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub-refactor-spaces', 'send', 'MigrationHubRefactorSpacesClient', Promise.reject(result), true, mock)
  }
}
