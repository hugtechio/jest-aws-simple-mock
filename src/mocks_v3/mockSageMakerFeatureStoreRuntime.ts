
/**
* @description mocks_v3:mockSageMakerFeatureStoreRuntime module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSageMakerFeatureStoreRuntime = {
  batchGetRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  batchGetRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  batchGetRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'batchGetRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  deleteRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  deleteRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  deleteRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'deleteRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'destroy', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'destroy', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'destroy', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  getRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'getRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  getRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'getRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  getRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'getRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'putRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'putRecord', 'SageMakerFeatureStoreRuntime', Promise.resolve(result), false, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'putRecord', 'SageMakerFeatureStoreRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'send', 'SageMakerFeatureStoreRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'send', 'SageMakerFeatureStoreRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-featurestore-runtime', 'send', 'SageMakerFeatureStoreRuntimeClient', Promise.reject(result), true, mock)
  }
}