
/**
* @description mocks_v3:mockEvidently module is mocks for AWS-SDK V3
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
export const mockEvidently = {
  batchEvaluateFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'batchEvaluateFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  batchEvaluateFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'batchEvaluateFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  batchEvaluateFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'batchEvaluateFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  createExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  createExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  createExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  createFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  createFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  createFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  createLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  createLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  createLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createProject', 'Evidently', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createProject', 'Evidently', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createProject', 'Evidently', Promise.reject(result), true, mock)
  },
  createSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createSegment', 'Evidently', Promise.resolve(result), true, mock)
  },
  createSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createSegment', 'Evidently', Promise.resolve(result), false, mock)
  },
  createSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'createSegment', 'Evidently', Promise.reject(result), true, mock)
  },
  deleteExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  deleteExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  deleteExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  deleteFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  deleteFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  deleteFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  deleteLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  deleteLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  deleteLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteProject', 'Evidently', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteProject', 'Evidently', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteProject', 'Evidently', Promise.reject(result), true, mock)
  },
  deleteSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteSegment', 'Evidently', Promise.resolve(result), true, mock)
  },
  deleteSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteSegment', 'Evidently', Promise.resolve(result), false, mock)
  },
  deleteSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'deleteSegment', 'Evidently', Promise.reject(result), true, mock)
  },
  evaluateFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'evaluateFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  evaluateFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'evaluateFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  evaluateFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'evaluateFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  getExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  getExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  getExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  getExperimentResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperimentResults', 'Evidently', Promise.resolve(result), true, mock)
  },
  getExperimentResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperimentResults', 'Evidently', Promise.resolve(result), false, mock)
  },
  getExperimentResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getExperimentResults', 'Evidently', Promise.reject(result), true, mock)
  },
  getFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  getFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  getFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  getLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  getLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  getLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  getProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getProject', 'Evidently', Promise.resolve(result), true, mock)
  },
  getProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getProject', 'Evidently', Promise.resolve(result), false, mock)
  },
  getProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getProject', 'Evidently', Promise.reject(result), true, mock)
  },
  getSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getSegment', 'Evidently', Promise.resolve(result), true, mock)
  },
  getSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getSegment', 'Evidently', Promise.resolve(result), false, mock)
  },
  getSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'getSegment', 'Evidently', Promise.reject(result), true, mock)
  },
  listExperiments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listExperiments', 'Evidently', Promise.resolve(result), true, mock)
  },
  listExperimentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listExperiments', 'Evidently', Promise.resolve(result), false, mock)
  },
  listExperimentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listExperiments', 'Evidently', Promise.reject(result), true, mock)
  },
  listFeatures: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listFeatures', 'Evidently', Promise.resolve(result), true, mock)
  },
  listFeaturesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listFeatures', 'Evidently', Promise.resolve(result), false, mock)
  },
  listFeaturesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listFeatures', 'Evidently', Promise.reject(result), true, mock)
  },
  listLaunches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listLaunches', 'Evidently', Promise.resolve(result), true, mock)
  },
  listLaunchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listLaunches', 'Evidently', Promise.resolve(result), false, mock)
  },
  listLaunchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listLaunches', 'Evidently', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listProjects', 'Evidently', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listProjects', 'Evidently', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listProjects', 'Evidently', Promise.reject(result), true, mock)
  },
  listSegmentReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegmentReferences', 'Evidently', Promise.resolve(result), true, mock)
  },
  listSegmentReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegmentReferences', 'Evidently', Promise.resolve(result), false, mock)
  },
  listSegmentReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegmentReferences', 'Evidently', Promise.reject(result), true, mock)
  },
  listSegments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegments', 'Evidently', Promise.resolve(result), true, mock)
  },
  listSegmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegments', 'Evidently', Promise.resolve(result), false, mock)
  },
  listSegmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listSegments', 'Evidently', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listTagsForResource', 'Evidently', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listTagsForResource', 'Evidently', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'listTagsForResource', 'Evidently', Promise.reject(result), true, mock)
  },
  putProjectEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'putProjectEvents', 'Evidently', Promise.resolve(result), true, mock)
  },
  putProjectEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'putProjectEvents', 'Evidently', Promise.resolve(result), false, mock)
  },
  putProjectEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'putProjectEvents', 'Evidently', Promise.reject(result), true, mock)
  },
  startExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  startExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  startExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  startLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  startLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  startLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'startLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  stopExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  stopExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  stopExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  stopLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  stopLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  stopLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'stopLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'tagResource', 'Evidently', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'tagResource', 'Evidently', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'tagResource', 'Evidently', Promise.reject(result), true, mock)
  },
  testSegmentPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'testSegmentPattern', 'Evidently', Promise.resolve(result), true, mock)
  },
  testSegmentPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'testSegmentPattern', 'Evidently', Promise.resolve(result), false, mock)
  },
  testSegmentPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'testSegmentPattern', 'Evidently', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'untagResource', 'Evidently', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'untagResource', 'Evidently', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'untagResource', 'Evidently', Promise.reject(result), true, mock)
  },
  updateExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateExperiment', 'Evidently', Promise.resolve(result), true, mock)
  },
  updateExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateExperiment', 'Evidently', Promise.resolve(result), false, mock)
  },
  updateExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateExperiment', 'Evidently', Promise.reject(result), true, mock)
  },
  updateFeature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateFeature', 'Evidently', Promise.resolve(result), true, mock)
  },
  updateFeatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateFeature', 'Evidently', Promise.resolve(result), false, mock)
  },
  updateFeatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateFeature', 'Evidently', Promise.reject(result), true, mock)
  },
  updateLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateLaunch', 'Evidently', Promise.resolve(result), true, mock)
  },
  updateLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateLaunch', 'Evidently', Promise.resolve(result), false, mock)
  },
  updateLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateLaunch', 'Evidently', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProject', 'Evidently', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProject', 'Evidently', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProject', 'Evidently', Promise.reject(result), true, mock)
  },
  updateProjectDataDelivery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProjectDataDelivery', 'Evidently', Promise.resolve(result), true, mock)
  },
  updateProjectDataDeliveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProjectDataDelivery', 'Evidently', Promise.resolve(result), false, mock)
  },
  updateProjectDataDeliveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'updateProjectDataDelivery', 'Evidently', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'send', 'EvidentlyClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'send', 'EvidentlyClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-evidently', 'send', 'EvidentlyClient', Promise.reject(result), true, mock)
  }
}
