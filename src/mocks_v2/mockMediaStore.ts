
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
  export const mockMediaStore = {
  createContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  createContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  createContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  describeContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  describeContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  describeContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  listContainers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', Promise.resolve(result), true, mock)
  },
  listContainersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', Promise.resolve(result), false, mock)
  },
  listContainersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', Promise.reject(result), true, mock)
  },
  putContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  startAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', Promise.resolve(result), true, mock)
  },
  startAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', Promise.resolve(result), false, mock)
  },
  startAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', Promise.reject(result), true, mock)
  },
  stopAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', Promise.resolve(result), true, mock)
  },
  stopAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', Promise.resolve(result), false, mock)
  },
  stopAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', Promise.reject(result), true, mock)
  },
}
