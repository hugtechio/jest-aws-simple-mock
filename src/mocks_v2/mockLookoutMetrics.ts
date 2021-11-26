
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
  export const mockLookoutMetrics = {
  activateAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  activateAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  activateAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  backTestAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('backTestAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  backTestAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('backTestAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  backTestAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('backTestAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  createMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  createMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  createMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  deleteAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  deleteAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  deleteAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  deleteAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  deleteAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  deleteAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAlert: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlert', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAlertAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlert', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAlertThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlert', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAnomalyDetectionExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAnomalyDetectionExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAnomalyDetectionExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectionExecutions', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  describeMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  describeMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  describeMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getAnomalyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyGroup', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getAnomalyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyGroup', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getAnomalyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyGroup', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFeedback', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFeedback', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFeedback', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  getSampleData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampleData', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  getSampleDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampleData', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  getSampleDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampleData', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAlerts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlerts', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAlertsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlerts', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAlertsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlerts', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyDetectors', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyDetectors', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyDetectors', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyGroupSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupSummaries', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyGroupSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupSummaries', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyGroupSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupSummaries', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listAnomalyGroupTimeSeries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listAnomalyGroupTimeSeriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listAnomalyGroupTimeSeriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnomalyGroupTimeSeries', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listMetricSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricSets', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listMetricSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricSets', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listMetricSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricSets', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  putFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFeedback', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  putFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFeedback', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  putFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFeedback', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  updateAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  updateAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyDetector', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  updateAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyDetector', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
  updateMetricSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMetricSet', 'LookoutMetrics', Promise.resolve(result), true, mock)
  },
  updateMetricSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMetricSet', 'LookoutMetrics', Promise.resolve(result), false, mock)
  },
  updateMetricSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMetricSet', 'LookoutMetrics', Promise.reject(result), true, mock)
  },
}
