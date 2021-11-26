
/**
* @description mocks_v3:mockRekognition module is mocks for AWS-SDK V3
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

  export const mockRekognition = {
  compareFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'compareFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  compareFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'compareFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  compareFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'compareFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  createCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createCollection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  createCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createCollection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  createCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createCollection', 'Rekognition', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createDataset', 'Rekognition', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createDataset', 'Rekognition', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createDataset', 'Rekognition', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProject', 'Rekognition', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProject', 'Rekognition', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProject', 'Rekognition', Promise.reject(result), true, mock)
  },
  createProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProjectVersion', 'Rekognition', Promise.resolve(result), true, mock)
  },
  createProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProjectVersion', 'Rekognition', Promise.resolve(result), false, mock)
  },
  createProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createProjectVersion', 'Rekognition', Promise.reject(result), true, mock)
  },
  createStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createStreamProcessor', 'Rekognition', Promise.resolve(result), true, mock)
  },
  createStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createStreamProcessor', 'Rekognition', Promise.resolve(result), false, mock)
  },
  createStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'createStreamProcessor', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteCollection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteCollection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteCollection', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteDataset', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteDataset', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteDataset', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProject', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProject', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProject', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProjectVersion', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProjectVersion', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteProjectVersion', 'Rekognition', Promise.reject(result), true, mock)
  },
  deleteStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteStreamProcessor', 'Rekognition', Promise.resolve(result), true, mock)
  },
  deleteStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteStreamProcessor', 'Rekognition', Promise.resolve(result), false, mock)
  },
  deleteStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'deleteStreamProcessor', 'Rekognition', Promise.reject(result), true, mock)
  },
  describeCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeCollection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  describeCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeCollection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  describeCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeCollection', 'Rekognition', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeDataset', 'Rekognition', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeDataset', 'Rekognition', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeDataset', 'Rekognition', Promise.reject(result), true, mock)
  },
  describeProjectVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjectVersions', 'Rekognition', Promise.resolve(result), true, mock)
  },
  describeProjectVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjectVersions', 'Rekognition', Promise.resolve(result), false, mock)
  },
  describeProjectVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjectVersions', 'Rekognition', Promise.reject(result), true, mock)
  },
  describeProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjects', 'Rekognition', Promise.resolve(result), true, mock)
  },
  describeProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjects', 'Rekognition', Promise.resolve(result), false, mock)
  },
  describeProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeProjects', 'Rekognition', Promise.reject(result), true, mock)
  },
  describeStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeStreamProcessor', 'Rekognition', Promise.resolve(result), true, mock)
  },
  describeStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeStreamProcessor', 'Rekognition', Promise.resolve(result), false, mock)
  },
  describeStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'describeStreamProcessor', 'Rekognition', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'destroy', 'Rekognition', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'destroy', 'Rekognition', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'destroy', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectCustomLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectCustomLabels', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectCustomLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectCustomLabels', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectCustomLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectCustomLabels', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectLabels', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectLabels', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectLabels', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectModerationLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectModerationLabels', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectModerationLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectModerationLabels', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectModerationLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectModerationLabels', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectProtectiveEquipment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectProtectiveEquipment', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectProtectiveEquipmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectProtectiveEquipment', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectProtectiveEquipmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectProtectiveEquipment', 'Rekognition', Promise.reject(result), true, mock)
  },
  detectText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectText', 'Rekognition', Promise.resolve(result), true, mock)
  },
  detectTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectText', 'Rekognition', Promise.resolve(result), false, mock)
  },
  detectTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'detectText', 'Rekognition', Promise.reject(result), true, mock)
  },
  distributeDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'distributeDatasetEntries', 'Rekognition', Promise.resolve(result), true, mock)
  },
  distributeDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'distributeDatasetEntries', 'Rekognition', Promise.resolve(result), false, mock)
  },
  distributeDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'distributeDatasetEntries', 'Rekognition', Promise.reject(result), true, mock)
  },
  getCelebrityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityInfo', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getCelebrityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityInfo', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getCelebrityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityInfo', 'Rekognition', Promise.reject(result), true, mock)
  },
  getCelebrityRecognition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityRecognition', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getCelebrityRecognitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityRecognition', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getCelebrityRecognitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getCelebrityRecognition', 'Rekognition', Promise.reject(result), true, mock)
  },
  getContentModeration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getContentModeration', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getContentModerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getContentModeration', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getContentModerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getContentModeration', 'Rekognition', Promise.reject(result), true, mock)
  },
  getFaceDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getFaceDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getFaceDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  getFaceSearch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceSearch', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getFaceSearchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceSearch', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getFaceSearchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getFaceSearch', 'Rekognition', Promise.reject(result), true, mock)
  },
  getLabelDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getLabelDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getLabelDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getLabelDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getLabelDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getLabelDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  getPersonTracking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getPersonTracking', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getPersonTrackingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getPersonTracking', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getPersonTrackingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getPersonTracking', 'Rekognition', Promise.reject(result), true, mock)
  },
  getSegmentDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getSegmentDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getSegmentDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getSegmentDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getSegmentDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getSegmentDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  getTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getTextDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  getTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getTextDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  getTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'getTextDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  indexFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'indexFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  indexFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'indexFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  indexFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'indexFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  listCollections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listCollections', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listCollectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listCollections', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listCollectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listCollections', 'Rekognition', Promise.reject(result), true, mock)
  },
  listDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetEntries', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetEntries', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetEntries', 'Rekognition', Promise.reject(result), true, mock)
  },
  listDatasetLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetLabels', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listDatasetLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetLabels', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listDatasetLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listDatasetLabels', 'Rekognition', Promise.reject(result), true, mock)
  },
  listFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  listStreamProcessors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listStreamProcessors', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listStreamProcessorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listStreamProcessors', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listStreamProcessorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listStreamProcessors', 'Rekognition', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listTagsForResource', 'Rekognition', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listTagsForResource', 'Rekognition', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'listTagsForResource', 'Rekognition', Promise.reject(result), true, mock)
  },
  recognizeCelebrities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'recognizeCelebrities', 'Rekognition', Promise.resolve(result), true, mock)
  },
  recognizeCelebritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'recognizeCelebrities', 'Rekognition', Promise.resolve(result), false, mock)
  },
  recognizeCelebritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'recognizeCelebrities', 'Rekognition', Promise.reject(result), true, mock)
  },
  searchFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFaces', 'Rekognition', Promise.resolve(result), true, mock)
  },
  searchFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFaces', 'Rekognition', Promise.resolve(result), false, mock)
  },
  searchFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFaces', 'Rekognition', Promise.reject(result), true, mock)
  },
  searchFacesByImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFacesByImage', 'Rekognition', Promise.resolve(result), true, mock)
  },
  searchFacesByImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFacesByImage', 'Rekognition', Promise.resolve(result), false, mock)
  },
  searchFacesByImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'searchFacesByImage', 'Rekognition', Promise.reject(result), true, mock)
  },
  startCelebrityRecognition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startCelebrityRecognition', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startCelebrityRecognitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startCelebrityRecognition', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startCelebrityRecognitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startCelebrityRecognition', 'Rekognition', Promise.reject(result), true, mock)
  },
  startContentModeration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startContentModeration', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startContentModerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startContentModeration', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startContentModerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startContentModeration', 'Rekognition', Promise.reject(result), true, mock)
  },
  startFaceDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startFaceDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startFaceDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  startFaceSearch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceSearch', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startFaceSearchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceSearch', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startFaceSearchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startFaceSearch', 'Rekognition', Promise.reject(result), true, mock)
  },
  startLabelDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startLabelDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startLabelDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startLabelDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startLabelDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startLabelDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  startPersonTracking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startPersonTracking', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startPersonTrackingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startPersonTracking', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startPersonTrackingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startPersonTracking', 'Rekognition', Promise.reject(result), true, mock)
  },
  startProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startProjectVersion', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startProjectVersion', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startProjectVersion', 'Rekognition', Promise.reject(result), true, mock)
  },
  startSegmentDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startSegmentDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startSegmentDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startSegmentDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startSegmentDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startSegmentDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  startStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startStreamProcessor', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startStreamProcessor', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startStreamProcessor', 'Rekognition', Promise.reject(result), true, mock)
  },
  startTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startTextDetection', 'Rekognition', Promise.resolve(result), true, mock)
  },
  startTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startTextDetection', 'Rekognition', Promise.resolve(result), false, mock)
  },
  startTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'startTextDetection', 'Rekognition', Promise.reject(result), true, mock)
  },
  stopProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopProjectVersion', 'Rekognition', Promise.resolve(result), true, mock)
  },
  stopProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopProjectVersion', 'Rekognition', Promise.resolve(result), false, mock)
  },
  stopProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopProjectVersion', 'Rekognition', Promise.reject(result), true, mock)
  },
  stopStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopStreamProcessor', 'Rekognition', Promise.resolve(result), true, mock)
  },
  stopStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopStreamProcessor', 'Rekognition', Promise.resolve(result), false, mock)
  },
  stopStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'stopStreamProcessor', 'Rekognition', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'tagResource', 'Rekognition', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'tagResource', 'Rekognition', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'tagResource', 'Rekognition', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'untagResource', 'Rekognition', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'untagResource', 'Rekognition', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'untagResource', 'Rekognition', Promise.reject(result), true, mock)
  },
  updateDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'updateDatasetEntries', 'Rekognition', Promise.resolve(result), true, mock)
  },
  updateDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'updateDatasetEntries', 'Rekognition', Promise.resolve(result), false, mock)
  },
  updateDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'updateDatasetEntries', 'Rekognition', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'send', 'RekognitionClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'send', 'RekognitionClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognition', 'send', 'RekognitionClient', Promise.reject(result), true, mock)
  }
}