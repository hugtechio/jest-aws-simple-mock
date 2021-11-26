
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockServerlessApplicationRepository = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplicationVersion', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplicationVersion', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createApplicationVersion', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createCloudFormationChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createCloudFormationChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createCloudFormationChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createCloudFormationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createCloudFormationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createCloudFormationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'deleteApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'deleteApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'deleteApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'destroy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'destroy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'destroy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getApplicationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getApplicationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getApplicationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getApplicationPolicy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getCloudFormationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getCloudFormationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getCloudFormationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplicationDependencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationDependencies', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationDependenciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationDependencies', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationDependenciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationDependencies', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationVersions', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationVersions', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplicationVersions', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplications', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplications', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'listApplications', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  putApplicationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'putApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  putApplicationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'putApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  putApplicationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'putApplicationPolicy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  unshareApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'unshareApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  unshareApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'unshareApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  unshareApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'unshareApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'updateApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'updateApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'updateApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'send', 'ServerlessApplicationRepositoryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'send', 'ServerlessApplicationRepositoryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-serverlessapplicationrepository', 'send', 'ServerlessApplicationRepositoryClient', Promise.reject(result), true, mock)
  }
}