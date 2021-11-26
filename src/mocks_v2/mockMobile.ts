
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
  export const mockMobile = {
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Mobile', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Mobile', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Mobile', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Mobile', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Mobile', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Mobile', Promise.reject(result), true, mock)
  },
  describeBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBundle', 'Mobile', Promise.resolve(result), true, mock)
  },
  describeBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBundle', 'Mobile', Promise.resolve(result), false, mock)
  },
  describeBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBundle', 'Mobile', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'Mobile', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'Mobile', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'Mobile', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mobile', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mobile', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mobile', Promise.reject(result), true, mock)
  },
  exportBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBundle', 'Mobile', Promise.resolve(result), true, mock)
  },
  exportBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBundle', 'Mobile', Promise.resolve(result), false, mock)
  },
  exportBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBundle', 'Mobile', Promise.reject(result), true, mock)
  },
  exportProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportProject', 'Mobile', Promise.resolve(result), true, mock)
  },
  exportProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportProject', 'Mobile', Promise.resolve(result), false, mock)
  },
  exportProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportProject', 'Mobile', Promise.reject(result), true, mock)
  },
  listBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBundles', 'Mobile', Promise.resolve(result), true, mock)
  },
  listBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBundles', 'Mobile', Promise.resolve(result), false, mock)
  },
  listBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBundles', 'Mobile', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'Mobile', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'Mobile', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'Mobile', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'Mobile', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'Mobile', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'Mobile', Promise.reject(result), true, mock)
  },
}
