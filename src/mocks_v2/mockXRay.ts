
/**
* @description mocks_v2:mockXRay.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockXRay = {
  batchGetTraces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTraces', 'XRay', result, true, true, mock)
  },
  batchGetTracesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTraces', 'XRay', result, false, true, mock)
  },
  batchGetTracesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTraces', 'XRay', result, true, false, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'XRay', result, true, true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'XRay', result, false, true, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'XRay', result, true, false, mock)
  },
  createSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSamplingRule', 'XRay', result, true, true, mock)
  },
  createSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSamplingRule', 'XRay', result, false, true, mock)
  },
  createSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSamplingRule', 'XRay', result, true, false, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'XRay', result, true, true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'XRay', result, false, true, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'XRay', result, true, false, mock)
  },
  deleteSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSamplingRule', 'XRay', result, true, true, mock)
  },
  deleteSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSamplingRule', 'XRay', result, false, true, mock)
  },
  deleteSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSamplingRule', 'XRay', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'XRay', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'XRay', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'XRay', result, true, false, mock)
  },
  getEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEncryptionConfig', 'XRay', result, true, true, mock)
  },
  getEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEncryptionConfig', 'XRay', result, false, true, mock)
  },
  getEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEncryptionConfig', 'XRay', result, true, false, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'XRay', result, true, true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'XRay', result, false, true, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'XRay', result, true, false, mock)
  },
  getGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroups', 'XRay', result, true, true, mock)
  },
  getGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroups', 'XRay', result, false, true, mock)
  },
  getGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroups', 'XRay', result, true, false, mock)
  },
  getInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsight', 'XRay', result, true, true, mock)
  },
  getInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsight', 'XRay', result, false, true, mock)
  },
  getInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsight', 'XRay', result, true, false, mock)
  },
  getInsightEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightEvents', 'XRay', result, true, true, mock)
  },
  getInsightEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightEvents', 'XRay', result, false, true, mock)
  },
  getInsightEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightEvents', 'XRay', result, true, false, mock)
  },
  getInsightImpactGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightImpactGraph', 'XRay', result, true, true, mock)
  },
  getInsightImpactGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightImpactGraph', 'XRay', result, false, true, mock)
  },
  getInsightImpactGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightImpactGraph', 'XRay', result, true, false, mock)
  },
  getInsightSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSummaries', 'XRay', result, true, true, mock)
  },
  getInsightSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSummaries', 'XRay', result, false, true, mock)
  },
  getInsightSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSummaries', 'XRay', result, true, false, mock)
  },
  getSamplingRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingRules', 'XRay', result, true, true, mock)
  },
  getSamplingRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingRules', 'XRay', result, false, true, mock)
  },
  getSamplingRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingRules', 'XRay', result, true, false, mock)
  },
  getSamplingStatisticSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingStatisticSummaries', 'XRay', result, true, true, mock)
  },
  getSamplingStatisticSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingStatisticSummaries', 'XRay', result, false, true, mock)
  },
  getSamplingStatisticSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingStatisticSummaries', 'XRay', result, true, false, mock)
  },
  getSamplingTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingTargets', 'XRay', result, true, true, mock)
  },
  getSamplingTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingTargets', 'XRay', result, false, true, mock)
  },
  getSamplingTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSamplingTargets', 'XRay', result, true, false, mock)
  },
  getServiceGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceGraph', 'XRay', result, true, true, mock)
  },
  getServiceGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceGraph', 'XRay', result, false, true, mock)
  },
  getServiceGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceGraph', 'XRay', result, true, false, mock)
  },
  getTimeSeriesServiceStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimeSeriesServiceStatistics', 'XRay', result, true, true, mock)
  },
  getTimeSeriesServiceStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimeSeriesServiceStatistics', 'XRay', result, false, true, mock)
  },
  getTimeSeriesServiceStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimeSeriesServiceStatistics', 'XRay', result, true, false, mock)
  },
  getTraceGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceGraph', 'XRay', result, true, true, mock)
  },
  getTraceGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceGraph', 'XRay', result, false, true, mock)
  },
  getTraceGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceGraph', 'XRay', result, true, false, mock)
  },
  getTraceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceSummaries', 'XRay', result, true, true, mock)
  },
  getTraceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceSummaries', 'XRay', result, false, true, mock)
  },
  getTraceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTraceSummaries', 'XRay', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'XRay', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'XRay', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'XRay', result, true, false, mock)
  },
  putEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEncryptionConfig', 'XRay', result, true, true, mock)
  },
  putEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEncryptionConfig', 'XRay', result, false, true, mock)
  },
  putEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEncryptionConfig', 'XRay', result, true, false, mock)
  },
  putTelemetryRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTelemetryRecords', 'XRay', result, true, true, mock)
  },
  putTelemetryRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTelemetryRecords', 'XRay', result, false, true, mock)
  },
  putTelemetryRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTelemetryRecords', 'XRay', result, true, false, mock)
  },
  putTraceSegments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTraceSegments', 'XRay', result, true, true, mock)
  },
  putTraceSegmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTraceSegments', 'XRay', result, false, true, mock)
  },
  putTraceSegmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putTraceSegments', 'XRay', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'XRay', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'XRay', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'XRay', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'XRay', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'XRay', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'XRay', result, true, false, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'XRay', result, true, true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'XRay', result, false, true, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'XRay', result, true, false, mock)
  },
  updateSamplingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSamplingRule', 'XRay', result, true, true, mock)
  },
  updateSamplingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSamplingRule', 'XRay', result, false, true, mock)
  },
  updateSamplingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSamplingRule', 'XRay', result, true, false, mock)
  },
}
