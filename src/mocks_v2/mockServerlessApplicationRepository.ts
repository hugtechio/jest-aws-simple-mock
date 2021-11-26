
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
  export const mockServerlessApplicationRepository = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationVersion', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationVersion', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationVersion', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createCloudFormationChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createCloudFormationChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createCloudFormationChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationChangeSet', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  createCloudFormationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  createCloudFormationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  createCloudFormationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getApplicationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getApplicationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getApplicationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationPolicy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  getCloudFormationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  getCloudFormationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  getCloudFormationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationTemplate', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplicationDependencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationDependencies', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationDependenciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationDependencies', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationDependenciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationDependencies', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  putApplicationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  putApplicationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApplicationPolicy', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  putApplicationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApplicationPolicy', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  unshareApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  unshareApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  unshareApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ServerlessApplicationRepository', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ServerlessApplicationRepository', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ServerlessApplicationRepository', Promise.reject(result), true, mock)
  },
}
