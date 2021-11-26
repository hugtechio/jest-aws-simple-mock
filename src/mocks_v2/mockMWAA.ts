
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
  export const mockMWAA = {
  createCliToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCliToken', 'MWAA', Promise.resolve(result), true, mock)
  },
  createCliTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCliToken', 'MWAA', Promise.resolve(result), false, mock)
  },
  createCliTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCliToken', 'MWAA', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'MWAA', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'MWAA', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironment', 'MWAA', Promise.reject(result), true, mock)
  },
  createWebLoginToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebLoginToken', 'MWAA', Promise.resolve(result), true, mock)
  },
  createWebLoginTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebLoginToken', 'MWAA', Promise.resolve(result), false, mock)
  },
  createWebLoginTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebLoginToken', 'MWAA', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'MWAA', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'MWAA', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'MWAA', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MWAA', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MWAA', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MWAA', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'MWAA', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'MWAA', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnvironment', 'MWAA', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'MWAA', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'MWAA', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'MWAA', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MWAA', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MWAA', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MWAA', Promise.reject(result), true, mock)
  },
  publishMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishMetrics', 'MWAA', Promise.resolve(result), true, mock)
  },
  publishMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishMetrics', 'MWAA', Promise.resolve(result), false, mock)
  },
  publishMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishMetrics', 'MWAA', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MWAA', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MWAA', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MWAA', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MWAA', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MWAA', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MWAA', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'MWAA', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'MWAA', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'MWAA', Promise.reject(result), true, mock)
  },
}
