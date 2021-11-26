
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMediaStore = {
  createContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'createContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  createContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'createContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  createContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'createContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  deleteMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  deleteMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  deleteMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'deleteMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  describeContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'describeContainer', 'MediaStore', Promise.resolve(result), true, mock)
  },
  describeContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'describeContainer', 'MediaStore', Promise.resolve(result), false, mock)
  },
  describeContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'describeContainer', 'MediaStore', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'destroy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'destroy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'destroy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  getMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  getMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  getMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'getMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  listContainers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listContainers', 'MediaStore', Promise.resolve(result), true, mock)
  },
  listContainersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listContainers', 'MediaStore', Promise.resolve(result), false, mock)
  },
  listContainersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listContainers', 'MediaStore', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listTagsForResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listTagsForResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'listTagsForResource', 'MediaStore', Promise.reject(result), true, mock)
  },
  putContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putContainerPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putContainerPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putContainerPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putCorsPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putCorsPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putCorsPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putLifecyclePolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putLifecyclePolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putLifecyclePolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  putMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putMetricPolicy', 'MediaStore', Promise.resolve(result), true, mock)
  },
  putMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putMetricPolicy', 'MediaStore', Promise.resolve(result), false, mock)
  },
  putMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'putMetricPolicy', 'MediaStore', Promise.reject(result), true, mock)
  },
  startAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'startAccessLogging', 'MediaStore', Promise.resolve(result), true, mock)
  },
  startAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'startAccessLogging', 'MediaStore', Promise.resolve(result), false, mock)
  },
  startAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'startAccessLogging', 'MediaStore', Promise.reject(result), true, mock)
  },
  stopAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'stopAccessLogging', 'MediaStore', Promise.resolve(result), true, mock)
  },
  stopAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'stopAccessLogging', 'MediaStore', Promise.resolve(result), false, mock)
  },
  stopAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'stopAccessLogging', 'MediaStore', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'tagResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'tagResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'tagResource', 'MediaStore', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'untagResource', 'MediaStore', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'untagResource', 'MediaStore', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'untagResource', 'MediaStore', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'send', 'MediaStoreClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'send', 'MediaStoreClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore', 'send', 'MediaStoreClient', Promise.reject(result), true, mock)
  }
}