
/**
* @description mocks_v3:mockCodeCatalyst module is mocks for AWS-SDK V3
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
export const mockCodeCatalyst = {
  createAccessToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createAccessToken', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  createAccessTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createAccessToken', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  createAccessTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createAccessToken', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  createDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  createDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  createDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createProject', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createProject', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createProject', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  createSourceRepositoryBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepositoryBranch', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  createSourceRepositoryBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepositoryBranch', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  createSourceRepositoryBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepositoryBranch', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  createSourceRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepository', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  createSourceRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepository', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  createSourceRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'createSourceRepository', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  deleteAccessToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteAccessToken', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  deleteAccessTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteAccessToken', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  deleteAccessTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteAccessToken', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  deleteDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  deleteDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  deleteDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteProject', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteProject', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteProject', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  deleteSourceRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSourceRepository', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  deleteSourceRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSourceRepository', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  deleteSourceRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSourceRepository', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  deleteSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSpace', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  deleteSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSpace', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  deleteSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'deleteSpace', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getProject', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getProject', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getProject', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getSourceRepositoryCloneUrls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepositoryCloneUrls', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getSourceRepositoryCloneUrlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepositoryCloneUrls', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getSourceRepositoryCloneUrlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepositoryCloneUrls', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getSourceRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepository', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getSourceRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepository', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getSourceRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSourceRepository', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSpace', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSpace', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSpace', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSubscription', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSubscription', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getSubscription', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getUserDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getUserDetails', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getUserDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getUserDetails', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getUserDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getUserDetails', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflow', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflow', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflow', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  getWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflowRun', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  getWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflowRun', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  getWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'getWorkflowRun', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listAccessTokens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listAccessTokens', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listAccessTokensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listAccessTokens', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listAccessTokensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listAccessTokens', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listDevEnvironmentSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironmentSessions', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listDevEnvironmentSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironmentSessions', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listDevEnvironmentSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironmentSessions', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listDevEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironments', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listDevEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironments', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listDevEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listDevEnvironments', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listEventLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listEventLogs', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listEventLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listEventLogs', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listEventLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listEventLogs', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listProjects', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listProjects', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listProjects', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listSourceRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositories', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listSourceRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositories', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listSourceRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositories', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listSourceRepositoryBranches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositoryBranches', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listSourceRepositoryBranchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositoryBranches', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listSourceRepositoryBranchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSourceRepositoryBranches', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listSpaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSpaces', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listSpacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSpaces', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listSpacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listSpaces', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listWorkflowRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflowRuns', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listWorkflowRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflowRuns', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listWorkflowRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflowRuns', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflows', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflows', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'listWorkflows', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  startDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  startDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  startDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  startDevEnvironmentSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironmentSession', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  startDevEnvironmentSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironmentSession', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  startDevEnvironmentSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startDevEnvironmentSession', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  startWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startWorkflowRun', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  startWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startWorkflowRun', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  startWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'startWorkflowRun', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  stopDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  stopDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  stopDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  stopDevEnvironmentSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironmentSession', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  stopDevEnvironmentSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironmentSession', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  stopDevEnvironmentSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'stopDevEnvironmentSession', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  updateDevEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateDevEnvironment', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  updateDevEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateDevEnvironment', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  updateDevEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateDevEnvironment', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateProject', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateProject', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateProject', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  updateSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateSpace', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  updateSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateSpace', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  updateSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'updateSpace', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  verifySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'verifySession', 'CodeCatalyst', Promise.resolve(result), true, mock)
  },
  verifySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'verifySession', 'CodeCatalyst', Promise.resolve(result), false, mock)
  },
  verifySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'verifySession', 'CodeCatalyst', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'send', 'CodeCatalystClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'send', 'CodeCatalystClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codecatalyst', 'send', 'CodeCatalystClient', Promise.reject(result), true, mock)
  }
}
