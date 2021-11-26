
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
  export const mockSageMakerFeatureStoreRuntime = {
  batchGetRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  batchGetRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  batchGetRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  deleteRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  deleteRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  deleteRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  getRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  getRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  getRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
}
