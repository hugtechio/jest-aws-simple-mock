
/**
* @description mocks_v3:mockXRay module is mocks for AWS-SDK V3
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

  export const mockXRay = {
  batchGetTraces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'batchGetTraces', 'XRay', Promise.resolve(result), true, mock)
  },
  batchGetTracesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'batchGetTraces', 'XRay', Promise.resolve(result), false, mock)
  },
  batchGetTracesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'batchGetTraces', 'XRay', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createGroup', 'XRay', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createGroup', 'XRay', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createGroup', 'XRay', Promise.reject(result), true, mock)
  },
  createSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createSamplingRule', 'XRay', Promise.resolve(result), true, mock)
  },
  createSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createSamplingRule', 'XRay', Promise.resolve(result), false, mock)
  },
  createSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'createSamplingRule', 'XRay', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteGroup', 'XRay', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteGroup', 'XRay', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteGroup', 'XRay', Promise.reject(result), true, mock)
  },
  deleteSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteSamplingRule', 'XRay', Promise.resolve(result), true, mock)
  },
  deleteSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteSamplingRule', 'XRay', Promise.resolve(result), false, mock)
  },
  deleteSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'deleteSamplingRule', 'XRay', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'destroy', 'XRay', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'destroy', 'XRay', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'destroy', 'XRay', Promise.reject(result), true, mock)
  },
  getEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getEncryptionConfig', 'XRay', Promise.resolve(result), true, mock)
  },
  getEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getEncryptionConfig', 'XRay', Promise.resolve(result), false, mock)
  },
  getEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getEncryptionConfig', 'XRay', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroup', 'XRay', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroup', 'XRay', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroup', 'XRay', Promise.reject(result), true, mock)
  },
  getGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroups', 'XRay', Promise.resolve(result), true, mock)
  },
  getGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroups', 'XRay', Promise.resolve(result), false, mock)
  },
  getGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getGroups', 'XRay', Promise.reject(result), true, mock)
  },
  getInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsight', 'XRay', Promise.resolve(result), true, mock)
  },
  getInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsight', 'XRay', Promise.resolve(result), false, mock)
  },
  getInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsight', 'XRay', Promise.reject(result), true, mock)
  },
  getInsightEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightEvents', 'XRay', Promise.resolve(result), true, mock)
  },
  getInsightEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightEvents', 'XRay', Promise.resolve(result), false, mock)
  },
  getInsightEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightEvents', 'XRay', Promise.reject(result), true, mock)
  },
  getInsightImpactGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightImpactGraph', 'XRay', Promise.resolve(result), true, mock)
  },
  getInsightImpactGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightImpactGraph', 'XRay', Promise.resolve(result), false, mock)
  },
  getInsightImpactGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightImpactGraph', 'XRay', Promise.reject(result), true, mock)
  },
  getInsightSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightSummaries', 'XRay', Promise.resolve(result), true, mock)
  },
  getInsightSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightSummaries', 'XRay', Promise.resolve(result), false, mock)
  },
  getInsightSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getInsightSummaries', 'XRay', Promise.reject(result), true, mock)
  },
  getSamplingRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingRules', 'XRay', Promise.resolve(result), true, mock)
  },
  getSamplingRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingRules', 'XRay', Promise.resolve(result), false, mock)
  },
  getSamplingRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingRules', 'XRay', Promise.reject(result), true, mock)
  },
  getSamplingStatisticSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingStatisticSummaries', 'XRay', Promise.resolve(result), true, mock)
  },
  getSamplingStatisticSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingStatisticSummaries', 'XRay', Promise.resolve(result), false, mock)
  },
  getSamplingStatisticSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingStatisticSummaries', 'XRay', Promise.reject(result), true, mock)
  },
  getSamplingTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingTargets', 'XRay', Promise.resolve(result), true, mock)
  },
  getSamplingTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingTargets', 'XRay', Promise.resolve(result), false, mock)
  },
  getSamplingTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getSamplingTargets', 'XRay', Promise.reject(result), true, mock)
  },
  getServiceGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getServiceGraph', 'XRay', Promise.resolve(result), true, mock)
  },
  getServiceGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getServiceGraph', 'XRay', Promise.resolve(result), false, mock)
  },
  getServiceGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getServiceGraph', 'XRay', Promise.reject(result), true, mock)
  },
  getTimeSeriesServiceStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTimeSeriesServiceStatistics', 'XRay', Promise.resolve(result), true, mock)
  },
  getTimeSeriesServiceStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTimeSeriesServiceStatistics', 'XRay', Promise.resolve(result), false, mock)
  },
  getTimeSeriesServiceStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTimeSeriesServiceStatistics', 'XRay', Promise.reject(result), true, mock)
  },
  getTraceGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceGraph', 'XRay', Promise.resolve(result), true, mock)
  },
  getTraceGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceGraph', 'XRay', Promise.resolve(result), false, mock)
  },
  getTraceGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceGraph', 'XRay', Promise.reject(result), true, mock)
  },
  getTraceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceSummaries', 'XRay', Promise.resolve(result), true, mock)
  },
  getTraceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceSummaries', 'XRay', Promise.resolve(result), false, mock)
  },
  getTraceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'getTraceSummaries', 'XRay', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'listTagsForResource', 'XRay', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'listTagsForResource', 'XRay', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'listTagsForResource', 'XRay', Promise.reject(result), true, mock)
  },
  putEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putEncryptionConfig', 'XRay', Promise.resolve(result), true, mock)
  },
  putEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putEncryptionConfig', 'XRay', Promise.resolve(result), false, mock)
  },
  putEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putEncryptionConfig', 'XRay', Promise.reject(result), true, mock)
  },
  putTelemetryRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTelemetryRecords', 'XRay', Promise.resolve(result), true, mock)
  },
  putTelemetryRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTelemetryRecords', 'XRay', Promise.resolve(result), false, mock)
  },
  putTelemetryRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTelemetryRecords', 'XRay', Promise.reject(result), true, mock)
  },
  putTraceSegments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTraceSegments', 'XRay', Promise.resolve(result), true, mock)
  },
  putTraceSegmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTraceSegments', 'XRay', Promise.resolve(result), false, mock)
  },
  putTraceSegmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'putTraceSegments', 'XRay', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'tagResource', 'XRay', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'tagResource', 'XRay', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'tagResource', 'XRay', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'untagResource', 'XRay', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'untagResource', 'XRay', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'untagResource', 'XRay', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateGroup', 'XRay', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateGroup', 'XRay', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateGroup', 'XRay', Promise.reject(result), true, mock)
  },
  updateSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateSamplingRule', 'XRay', Promise.resolve(result), true, mock)
  },
  updateSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateSamplingRule', 'XRay', Promise.resolve(result), false, mock)
  },
  updateSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'updateSamplingRule', 'XRay', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'send', 'XRayClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'send', 'XRayClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-xray', 'send', 'XRayClient', Promise.reject(result), true, mock)
  }
}