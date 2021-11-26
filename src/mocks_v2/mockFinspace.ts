
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
  export const mockFinspace = {
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Finspace', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Finspace', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Finspace', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Finspace', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Finspace', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Finspace', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Finspace', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Finspace', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Finspace', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
}
