
/**
* @description mocks_v3:mockSageMakerGeospatial module is mocks for AWS-SDK V3
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
export const mockSageMakerGeospatial = {
  deleteEarthObservationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  deleteEarthObservationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  deleteEarthObservationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteEarthObservationJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  deleteVectorEnrichmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  deleteVectorEnrichmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  deleteVectorEnrichmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'deleteVectorEnrichmentJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  exportEarthObservationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  exportEarthObservationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  exportEarthObservationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportEarthObservationJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  exportVectorEnrichmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  exportVectorEnrichmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  exportVectorEnrichmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'exportVectorEnrichmentJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  getEarthObservationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  getEarthObservationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  getEarthObservationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getEarthObservationJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  getRasterDataCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getRasterDataCollection', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  getRasterDataCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getRasterDataCollection', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  getRasterDataCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getRasterDataCollection', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  getTile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getTile', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  getTileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getTile', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  getTileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getTile', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  getVectorEnrichmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  getVectorEnrichmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  getVectorEnrichmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'getVectorEnrichmentJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  listEarthObservationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listEarthObservationJobs', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  listEarthObservationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listEarthObservationJobs', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  listEarthObservationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listEarthObservationJobs', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  listRasterDataCollections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listRasterDataCollections', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  listRasterDataCollectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listRasterDataCollections', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  listRasterDataCollectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listRasterDataCollections', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listTagsForResource', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listTagsForResource', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listTagsForResource', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  listVectorEnrichmentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listVectorEnrichmentJobs', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  listVectorEnrichmentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listVectorEnrichmentJobs', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  listVectorEnrichmentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'listVectorEnrichmentJobs', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  searchRasterDataCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'searchRasterDataCollection', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  searchRasterDataCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'searchRasterDataCollection', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  searchRasterDataCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'searchRasterDataCollection', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  startEarthObservationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  startEarthObservationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  startEarthObservationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startEarthObservationJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  startVectorEnrichmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  startVectorEnrichmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  startVectorEnrichmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'startVectorEnrichmentJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  stopEarthObservationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  stopEarthObservationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopEarthObservationJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  stopEarthObservationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopEarthObservationJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  stopVectorEnrichmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  stopVectorEnrichmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopVectorEnrichmentJob', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  stopVectorEnrichmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'stopVectorEnrichmentJob', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'tagResource', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'tagResource', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'tagResource', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'untagResource', 'SageMakerGeospatial', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'untagResource', 'SageMakerGeospatial', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'untagResource', 'SageMakerGeospatial', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'send', 'SageMakerGeospatialClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'send', 'SageMakerGeospatialClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-geospatial', 'send', 'SageMakerGeospatialClient', Promise.reject(result), true, mock)
  }
}
