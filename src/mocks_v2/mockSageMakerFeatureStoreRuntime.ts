
/**
* @description mocks_v2:mockSageMakerFeatureStoreRuntime.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSageMakerFeatureStoreRuntime = {
  batchGetRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', result, true, true, mock)
  },
  batchGetRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', result, false, true, mock)
  },
  batchGetRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetRecord', 'SageMakerFeatureStoreRuntime', result, true, false, mock)
  },
  deleteRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', result, true, true, mock)
  },
  deleteRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', result, false, true, mock)
  },
  deleteRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecord', 'SageMakerFeatureStoreRuntime', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerFeatureStoreRuntime', result, true, false, mock)
  },
  getRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', result, true, true, mock)
  },
  getRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', result, false, true, mock)
  },
  getRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecord', 'SageMakerFeatureStoreRuntime', result, true, false, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', result, true, true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', result, false, true, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'SageMakerFeatureStoreRuntime', result, true, false, mock)
  },
}
