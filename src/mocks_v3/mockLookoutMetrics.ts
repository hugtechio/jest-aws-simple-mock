
/**
* @description mocks_v3:mockLookoutMetrics module is mocks for AWS-SDK V3
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
export const mockLookoutMetrics = {
  activateAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'activateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  activateAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'activateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  activateAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'activateAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  backTestAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'backTestAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  backTestAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'backTestAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  backTestAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'backTestAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'createMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  deactivateAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deactivateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  deactivateAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deactivateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  deactivateAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deactivateAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  deleteAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  deleteAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  deleteAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  deleteAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  deleteAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  deleteAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'deleteAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAnomalyDetectionExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAnomalyDetectionExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAnomalyDetectionExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'describeMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  detectMetricSetConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'detectMetricSetConfig', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  detectMetricSetConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'detectMetricSetConfig', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  detectMetricSetConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'detectMetricSetConfig', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getAnomalyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getAnomalyGroup', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getAnomalyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getAnomalyGroup', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getAnomalyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getAnomalyGroup', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getDataQualityMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getDataQualityMetrics', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getDataQualityMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getDataQualityMetrics', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getDataQualityMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getDataQualityMetrics', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getFeedback', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getFeedback', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getFeedback', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getSampleData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getSampleData', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getSampleDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getSampleData', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getSampleDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'getSampleData', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAlerts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAlerts', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAlertsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAlerts', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAlertsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAlerts', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyDetectors', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyDetectors', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyDetectors', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyGroupRelatedMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupRelatedMetrics', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyGroupRelatedMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupRelatedMetrics', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyGroupRelatedMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupRelatedMetrics', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyGroupSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupSummaries', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyGroupSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupSummaries', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyGroupSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupSummaries', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyGroupTimeSeries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyGroupTimeSeriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyGroupTimeSeriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listMetricSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listMetricSets', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listMetricSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listMetricSets', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listMetricSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listMetricSets', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listTagsForResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listTagsForResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'listTagsForResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  putFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'putFeedback', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  putFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'putFeedback', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  putFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'putFeedback', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'tagResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'tagResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'tagResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'untagResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'untagResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'untagResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  updateAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  updateAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  updateAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  updateAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  updateAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  updateAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  updateMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  updateMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  updateMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'updateMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'send', 'LookoutMetricsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'send', 'LookoutMetricsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutmetrics', 'send', 'LookoutMetricsClient', Promise.reject(result), true, mock)
  }
}
