
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
  export const mockSynthetics = {
  createCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  createCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  createCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
  deleteCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  deleteCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  deleteCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
  describeCanaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', Promise.resolve(result), true, mock)
  },
  describeCanariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', Promise.resolve(result), false, mock)
  },
  describeCanariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', Promise.reject(result), true, mock)
  },
  describeCanariesLastRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', Promise.resolve(result), true, mock)
  },
  describeCanariesLastRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', Promise.resolve(result), false, mock)
  },
  describeCanariesLastRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', Promise.reject(result), true, mock)
  },
  describeRuntimeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', Promise.resolve(result), true, mock)
  },
  describeRuntimeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', Promise.resolve(result), false, mock)
  },
  describeRuntimeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', Promise.reject(result), true, mock)
  },
  getCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  getCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  getCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
  getCanaryRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', Promise.resolve(result), true, mock)
  },
  getCanaryRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', Promise.resolve(result), false, mock)
  },
  getCanaryRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', Promise.reject(result), true, mock)
  },
  startCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  startCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  startCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
  stopCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  stopCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  stopCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', Promise.reject(result), true, mock)
  },
  updateCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', Promise.resolve(result), true, mock)
  },
  updateCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', Promise.resolve(result), false, mock)
  },
  updateCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', Promise.reject(result), true, mock)
  },
}
