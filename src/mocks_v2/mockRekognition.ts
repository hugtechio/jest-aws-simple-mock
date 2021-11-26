
/**
* @description mocks_v2:mockRekognition.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockRekognition = {
  compareFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('compareFaces', 'Rekognition', result, true, true, mock)
  },
  compareFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('compareFaces', 'Rekognition', result, false, true, mock)
  },
  compareFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('compareFaces', 'Rekognition', result, true, false, mock)
  },
  createCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCollection', 'Rekognition', result, true, true, mock)
  },
  createCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCollection', 'Rekognition', result, false, true, mock)
  },
  createCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCollection', 'Rekognition', result, true, false, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Rekognition', result, true, true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Rekognition', result, false, true, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Rekognition', result, true, false, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Rekognition', result, true, true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Rekognition', result, false, true, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'Rekognition', result, true, false, mock)
  },
  createProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProjectVersion', 'Rekognition', result, true, true, mock)
  },
  createProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProjectVersion', 'Rekognition', result, false, true, mock)
  },
  createProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProjectVersion', 'Rekognition', result, true, false, mock)
  },
  createStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamProcessor', 'Rekognition', result, true, true, mock)
  },
  createStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamProcessor', 'Rekognition', result, false, true, mock)
  },
  createStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamProcessor', 'Rekognition', result, true, false, mock)
  },
  deleteCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCollection', 'Rekognition', result, true, true, mock)
  },
  deleteCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCollection', 'Rekognition', result, false, true, mock)
  },
  deleteCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCollection', 'Rekognition', result, true, false, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Rekognition', result, true, true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Rekognition', result, false, true, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Rekognition', result, true, false, mock)
  },
  deleteFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaces', 'Rekognition', result, true, true, mock)
  },
  deleteFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaces', 'Rekognition', result, false, true, mock)
  },
  deleteFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFaces', 'Rekognition', result, true, false, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Rekognition', result, true, true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Rekognition', result, false, true, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'Rekognition', result, true, false, mock)
  },
  deleteProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProjectVersion', 'Rekognition', result, true, true, mock)
  },
  deleteProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProjectVersion', 'Rekognition', result, false, true, mock)
  },
  deleteProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProjectVersion', 'Rekognition', result, true, false, mock)
  },
  deleteStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamProcessor', 'Rekognition', result, true, true, mock)
  },
  deleteStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamProcessor', 'Rekognition', result, false, true, mock)
  },
  deleteStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamProcessor', 'Rekognition', result, true, false, mock)
  },
  describeCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCollection', 'Rekognition', result, true, true, mock)
  },
  describeCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCollection', 'Rekognition', result, false, true, mock)
  },
  describeCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCollection', 'Rekognition', result, true, false, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Rekognition', result, true, true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Rekognition', result, false, true, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Rekognition', result, true, false, mock)
  },
  describeProjectVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjectVersions', 'Rekognition', result, true, true, mock)
  },
  describeProjectVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjectVersions', 'Rekognition', result, false, true, mock)
  },
  describeProjectVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjectVersions', 'Rekognition', result, true, false, mock)
  },
  describeProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjects', 'Rekognition', result, true, true, mock)
  },
  describeProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjects', 'Rekognition', result, false, true, mock)
  },
  describeProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProjects', 'Rekognition', result, true, false, mock)
  },
  describeStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamProcessor', 'Rekognition', result, true, true, mock)
  },
  describeStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamProcessor', 'Rekognition', result, false, true, mock)
  },
  describeStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamProcessor', 'Rekognition', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Rekognition', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Rekognition', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Rekognition', result, true, false, mock)
  },
  detectCustomLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectCustomLabels', 'Rekognition', result, true, true, mock)
  },
  detectCustomLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectCustomLabels', 'Rekognition', result, false, true, mock)
  },
  detectCustomLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectCustomLabels', 'Rekognition', result, true, false, mock)
  },
  detectFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectFaces', 'Rekognition', result, true, true, mock)
  },
  detectFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectFaces', 'Rekognition', result, false, true, mock)
  },
  detectFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectFaces', 'Rekognition', result, true, false, mock)
  },
  detectLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectLabels', 'Rekognition', result, true, true, mock)
  },
  detectLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectLabels', 'Rekognition', result, false, true, mock)
  },
  detectLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectLabels', 'Rekognition', result, true, false, mock)
  },
  detectModerationLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectModerationLabels', 'Rekognition', result, true, true, mock)
  },
  detectModerationLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectModerationLabels', 'Rekognition', result, false, true, mock)
  },
  detectModerationLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectModerationLabels', 'Rekognition', result, true, false, mock)
  },
  detectProtectiveEquipment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectProtectiveEquipment', 'Rekognition', result, true, true, mock)
  },
  detectProtectiveEquipmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectProtectiveEquipment', 'Rekognition', result, false, true, mock)
  },
  detectProtectiveEquipmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectProtectiveEquipment', 'Rekognition', result, true, false, mock)
  },
  detectText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectText', 'Rekognition', result, true, true, mock)
  },
  detectTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectText', 'Rekognition', result, false, true, mock)
  },
  detectTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectText', 'Rekognition', result, true, false, mock)
  },
  distributeDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('distributeDatasetEntries', 'Rekognition', result, true, true, mock)
  },
  distributeDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('distributeDatasetEntries', 'Rekognition', result, false, true, mock)
  },
  distributeDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('distributeDatasetEntries', 'Rekognition', result, true, false, mock)
  },
  getCelebrityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityInfo', 'Rekognition', result, true, true, mock)
  },
  getCelebrityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityInfo', 'Rekognition', result, false, true, mock)
  },
  getCelebrityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityInfo', 'Rekognition', result, true, false, mock)
  },
  getCelebrityRecognition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityRecognition', 'Rekognition', result, true, true, mock)
  },
  getCelebrityRecognitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityRecognition', 'Rekognition', result, false, true, mock)
  },
  getCelebrityRecognitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCelebrityRecognition', 'Rekognition', result, true, false, mock)
  },
  getContentModeration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentModeration', 'Rekognition', result, true, true, mock)
  },
  getContentModerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentModeration', 'Rekognition', result, false, true, mock)
  },
  getContentModerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContentModeration', 'Rekognition', result, true, false, mock)
  },
  getFaceDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceDetection', 'Rekognition', result, true, true, mock)
  },
  getFaceDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceDetection', 'Rekognition', result, false, true, mock)
  },
  getFaceDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceDetection', 'Rekognition', result, true, false, mock)
  },
  getFaceSearch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceSearch', 'Rekognition', result, true, true, mock)
  },
  getFaceSearchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceSearch', 'Rekognition', result, false, true, mock)
  },
  getFaceSearchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFaceSearch', 'Rekognition', result, true, false, mock)
  },
  getLabelDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLabelDetection', 'Rekognition', result, true, true, mock)
  },
  getLabelDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLabelDetection', 'Rekognition', result, false, true, mock)
  },
  getLabelDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLabelDetection', 'Rekognition', result, true, false, mock)
  },
  getPersonTracking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonTracking', 'Rekognition', result, true, true, mock)
  },
  getPersonTrackingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonTracking', 'Rekognition', result, false, true, mock)
  },
  getPersonTrackingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPersonTracking', 'Rekognition', result, true, false, mock)
  },
  getSegmentDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSegmentDetection', 'Rekognition', result, true, true, mock)
  },
  getSegmentDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSegmentDetection', 'Rekognition', result, false, true, mock)
  },
  getSegmentDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSegmentDetection', 'Rekognition', result, true, false, mock)
  },
  getTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTextDetection', 'Rekognition', result, true, true, mock)
  },
  getTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTextDetection', 'Rekognition', result, false, true, mock)
  },
  getTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTextDetection', 'Rekognition', result, true, false, mock)
  },
  indexFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('indexFaces', 'Rekognition', result, true, true, mock)
  },
  indexFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('indexFaces', 'Rekognition', result, false, true, mock)
  },
  indexFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('indexFaces', 'Rekognition', result, true, false, mock)
  },
  listCollections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollections', 'Rekognition', result, true, true, mock)
  },
  listCollectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollections', 'Rekognition', result, false, true, mock)
  },
  listCollectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollections', 'Rekognition', result, true, false, mock)
  },
  listDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'Rekognition', result, true, true, mock)
  },
  listDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'Rekognition', result, false, true, mock)
  },
  listDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'Rekognition', result, true, false, mock)
  },
  listDatasetLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetLabels', 'Rekognition', result, true, true, mock)
  },
  listDatasetLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetLabels', 'Rekognition', result, false, true, mock)
  },
  listDatasetLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetLabels', 'Rekognition', result, true, false, mock)
  },
  listFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaces', 'Rekognition', result, true, true, mock)
  },
  listFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaces', 'Rekognition', result, false, true, mock)
  },
  listFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFaces', 'Rekognition', result, true, false, mock)
  },
  listStreamProcessors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamProcessors', 'Rekognition', result, true, true, mock)
  },
  listStreamProcessorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamProcessors', 'Rekognition', result, false, true, mock)
  },
  listStreamProcessorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamProcessors', 'Rekognition', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Rekognition', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Rekognition', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Rekognition', result, true, false, mock)
  },
  recognizeCelebrities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeCelebrities', 'Rekognition', result, true, true, mock)
  },
  recognizeCelebritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeCelebrities', 'Rekognition', result, false, true, mock)
  },
  recognizeCelebritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeCelebrities', 'Rekognition', result, true, false, mock)
  },
  searchFaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFaces', 'Rekognition', result, true, true, mock)
  },
  searchFacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFaces', 'Rekognition', result, false, true, mock)
  },
  searchFacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFaces', 'Rekognition', result, true, false, mock)
  },
  searchFacesByImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFacesByImage', 'Rekognition', result, true, true, mock)
  },
  searchFacesByImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFacesByImage', 'Rekognition', result, false, true, mock)
  },
  searchFacesByImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFacesByImage', 'Rekognition', result, true, false, mock)
  },
  startCelebrityRecognition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCelebrityRecognition', 'Rekognition', result, true, true, mock)
  },
  startCelebrityRecognitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCelebrityRecognition', 'Rekognition', result, false, true, mock)
  },
  startCelebrityRecognitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCelebrityRecognition', 'Rekognition', result, true, false, mock)
  },
  startContentModeration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentModeration', 'Rekognition', result, true, true, mock)
  },
  startContentModerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentModeration', 'Rekognition', result, false, true, mock)
  },
  startContentModerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContentModeration', 'Rekognition', result, true, false, mock)
  },
  startFaceDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceDetection', 'Rekognition', result, true, true, mock)
  },
  startFaceDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceDetection', 'Rekognition', result, false, true, mock)
  },
  startFaceDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceDetection', 'Rekognition', result, true, false, mock)
  },
  startFaceSearch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceSearch', 'Rekognition', result, true, true, mock)
  },
  startFaceSearchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceSearch', 'Rekognition', result, false, true, mock)
  },
  startFaceSearchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFaceSearch', 'Rekognition', result, true, false, mock)
  },
  startLabelDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLabelDetection', 'Rekognition', result, true, true, mock)
  },
  startLabelDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLabelDetection', 'Rekognition', result, false, true, mock)
  },
  startLabelDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLabelDetection', 'Rekognition', result, true, false, mock)
  },
  startPersonTracking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPersonTracking', 'Rekognition', result, true, true, mock)
  },
  startPersonTrackingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPersonTracking', 'Rekognition', result, false, true, mock)
  },
  startPersonTrackingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPersonTracking', 'Rekognition', result, true, false, mock)
  },
  startProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectVersion', 'Rekognition', result, true, true, mock)
  },
  startProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectVersion', 'Rekognition', result, false, true, mock)
  },
  startProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectVersion', 'Rekognition', result, true, false, mock)
  },
  startSegmentDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSegmentDetection', 'Rekognition', result, true, true, mock)
  },
  startSegmentDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSegmentDetection', 'Rekognition', result, false, true, mock)
  },
  startSegmentDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSegmentDetection', 'Rekognition', result, true, false, mock)
  },
  startStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamProcessor', 'Rekognition', result, true, true, mock)
  },
  startStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamProcessor', 'Rekognition', result, false, true, mock)
  },
  startStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamProcessor', 'Rekognition', result, true, false, mock)
  },
  startTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextDetection', 'Rekognition', result, true, true, mock)
  },
  startTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextDetection', 'Rekognition', result, false, true, mock)
  },
  startTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTextDetection', 'Rekognition', result, true, false, mock)
  },
  stopProjectVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopProjectVersion', 'Rekognition', result, true, true, mock)
  },
  stopProjectVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopProjectVersion', 'Rekognition', result, false, true, mock)
  },
  stopProjectVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopProjectVersion', 'Rekognition', result, true, false, mock)
  },
  stopStreamProcessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamProcessor', 'Rekognition', result, true, true, mock)
  },
  stopStreamProcessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamProcessor', 'Rekognition', result, false, true, mock)
  },
  stopStreamProcessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamProcessor', 'Rekognition', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Rekognition', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Rekognition', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Rekognition', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Rekognition', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Rekognition', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Rekognition', result, true, false, mock)
  },
  updateDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'Rekognition', result, true, true, mock)
  },
  updateDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'Rekognition', result, false, true, mock)
  },
  updateDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'Rekognition', result, true, false, mock)
  },
}
