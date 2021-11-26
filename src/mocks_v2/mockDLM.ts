
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
  export const mockDLM = {
  createLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLifecyclePolicy', 'DLM', Promise.resolve(result), true, mock)
  },
  createLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLifecyclePolicy', 'DLM', Promise.resolve(result), false, mock)
  },
  createLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLifecyclePolicy', 'DLM', Promise.reject(result), true, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'DLM', Promise.resolve(result), true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'DLM', Promise.resolve(result), false, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'DLM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DLM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DLM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DLM', Promise.reject(result), true, mock)
  },
  getLifecyclePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicies', 'DLM', Promise.resolve(result), true, mock)
  },
  getLifecyclePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicies', 'DLM', Promise.resolve(result), false, mock)
  },
  getLifecyclePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicies', 'DLM', Promise.reject(result), true, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'DLM', Promise.resolve(result), true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'DLM', Promise.resolve(result), false, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'DLM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DLM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DLM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DLM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DLM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DLM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DLM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DLM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DLM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DLM', Promise.reject(result), true, mock)
  },
  updateLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLifecyclePolicy', 'DLM', Promise.resolve(result), true, mock)
  },
  updateLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLifecyclePolicy', 'DLM', Promise.resolve(result), false, mock)
  },
  updateLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLifecyclePolicy', 'DLM', Promise.reject(result), true, mock)
  },
}
