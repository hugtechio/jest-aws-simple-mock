
/**
* @description mocks_v2:mockCloudWatch.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCloudWatch = {
  deleteAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarms', 'CloudWatch', result, true, true, mock)
  },
  deleteAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarms', 'CloudWatch', result, false, true, mock)
  },
  deleteAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarms', 'CloudWatch', result, true, false, mock)
  },
  deleteAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'CloudWatch', result, true, true, mock)
  },
  deleteAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'CloudWatch', result, false, true, mock)
  },
  deleteAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyDetector', 'CloudWatch', result, true, false, mock)
  },
  deleteDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDashboards', 'CloudWatch', result, true, true, mock)
  },
  deleteDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDashboards', 'CloudWatch', result, false, true, mock)
  },
  deleteDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDashboards', 'CloudWatch', result, true, false, mock)
  },
  deleteInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsightRules', 'CloudWatch', result, true, true, mock)
  },
  deleteInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsightRules', 'CloudWatch', result, false, true, mock)
  },
  deleteInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsightRules', 'CloudWatch', result, true, false, mock)
  },
  deleteMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricStream', 'CloudWatch', result, true, true, mock)
  },
  deleteMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricStream', 'CloudWatch', result, false, true, mock)
  },
  deleteMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricStream', 'CloudWatch', result, true, false, mock)
  },
  describeAlarmHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmHistory', 'CloudWatch', result, true, true, mock)
  },
  describeAlarmHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmHistory', 'CloudWatch', result, false, true, mock)
  },
  describeAlarmHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmHistory', 'CloudWatch', result, true, false, mock)
  },
  describeAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarms', 'CloudWatch', result, true, true, mock)
  },
  describeAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarms', 'CloudWatch', result, false, true, mock)
  },
  describeAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarms', 'CloudWatch', result, true, false, mock)
  },
  describeAlarmsForMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmsForMetric', 'CloudWatch', result, true, true, mock)
  },
  describeAlarmsForMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmsForMetric', 'CloudWatch', result, false, true, mock)
  },
  describeAlarmsForMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarmsForMetric', 'CloudWatch', result, true, false, mock)
  },
  describeAnomalyDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectors', 'CloudWatch', result, true, true, mock)
  },
  describeAnomalyDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectors', 'CloudWatch', result, false, true, mock)
  },
  describeAnomalyDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAnomalyDetectors', 'CloudWatch', result, true, false, mock)
  },
  describeInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInsightRules', 'CloudWatch', result, true, true, mock)
  },
  describeInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInsightRules', 'CloudWatch', result, false, true, mock)
  },
  describeInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInsightRules', 'CloudWatch', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatch', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatch', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatch', result, true, false, mock)
  },
  disableAlarmActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAlarmActions', 'CloudWatch', result, true, true, mock)
  },
  disableAlarmActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAlarmActions', 'CloudWatch', result, false, true, mock)
  },
  disableAlarmActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAlarmActions', 'CloudWatch', result, true, false, mock)
  },
  disableInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableInsightRules', 'CloudWatch', result, true, true, mock)
  },
  disableInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableInsightRules', 'CloudWatch', result, false, true, mock)
  },
  disableInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableInsightRules', 'CloudWatch', result, true, false, mock)
  },
  enableAlarmActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAlarmActions', 'CloudWatch', result, true, true, mock)
  },
  enableAlarmActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAlarmActions', 'CloudWatch', result, false, true, mock)
  },
  enableAlarmActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAlarmActions', 'CloudWatch', result, true, false, mock)
  },
  enableInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableInsightRules', 'CloudWatch', result, true, true, mock)
  },
  enableInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableInsightRules', 'CloudWatch', result, false, true, mock)
  },
  enableInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableInsightRules', 'CloudWatch', result, true, false, mock)
  },
  getDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDashboard', 'CloudWatch', result, true, true, mock)
  },
  getDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDashboard', 'CloudWatch', result, false, true, mock)
  },
  getDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDashboard', 'CloudWatch', result, true, false, mock)
  },
  getInsightRuleReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightRuleReport', 'CloudWatch', result, true, true, mock)
  },
  getInsightRuleReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightRuleReport', 'CloudWatch', result, false, true, mock)
  },
  getInsightRuleReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightRuleReport', 'CloudWatch', result, true, false, mock)
  },
  getMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'CloudWatch', result, true, true, mock)
  },
  getMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'CloudWatch', result, false, true, mock)
  },
  getMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'CloudWatch', result, true, false, mock)
  },
  getMetricStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStatistics', 'CloudWatch', result, true, true, mock)
  },
  getMetricStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStatistics', 'CloudWatch', result, false, true, mock)
  },
  getMetricStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStatistics', 'CloudWatch', result, true, false, mock)
  },
  getMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStream', 'CloudWatch', result, true, true, mock)
  },
  getMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStream', 'CloudWatch', result, false, true, mock)
  },
  getMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricStream', 'CloudWatch', result, true, false, mock)
  },
  getMetricWidgetImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricWidgetImage', 'CloudWatch', result, true, true, mock)
  },
  getMetricWidgetImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricWidgetImage', 'CloudWatch', result, false, true, mock)
  },
  getMetricWidgetImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricWidgetImage', 'CloudWatch', result, true, false, mock)
  },
  listDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDashboards', 'CloudWatch', result, true, true, mock)
  },
  listDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDashboards', 'CloudWatch', result, false, true, mock)
  },
  listDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDashboards', 'CloudWatch', result, true, false, mock)
  },
  listMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricStreams', 'CloudWatch', result, true, true, mock)
  },
  listMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricStreams', 'CloudWatch', result, false, true, mock)
  },
  listMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetricStreams', 'CloudWatch', result, true, false, mock)
  },
  listMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetrics', 'CloudWatch', result, true, true, mock)
  },
  listMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetrics', 'CloudWatch', result, false, true, mock)
  },
  listMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMetrics', 'CloudWatch', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudWatch', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudWatch', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudWatch', result, true, false, mock)
  },
  putAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAnomalyDetector', 'CloudWatch', result, true, true, mock)
  },
  putAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAnomalyDetector', 'CloudWatch', result, false, true, mock)
  },
  putAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAnomalyDetector', 'CloudWatch', result, true, false, mock)
  },
  putCompositeAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCompositeAlarm', 'CloudWatch', result, true, true, mock)
  },
  putCompositeAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCompositeAlarm', 'CloudWatch', result, false, true, mock)
  },
  putCompositeAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCompositeAlarm', 'CloudWatch', result, true, false, mock)
  },
  putDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDashboard', 'CloudWatch', result, true, true, mock)
  },
  putDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDashboard', 'CloudWatch', result, false, true, mock)
  },
  putDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDashboard', 'CloudWatch', result, true, false, mock)
  },
  putInsightRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightRule', 'CloudWatch', result, true, true, mock)
  },
  putInsightRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightRule', 'CloudWatch', result, false, true, mock)
  },
  putInsightRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightRule', 'CloudWatch', result, true, false, mock)
  },
  putMetricAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricAlarm', 'CloudWatch', result, true, true, mock)
  },
  putMetricAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricAlarm', 'CloudWatch', result, false, true, mock)
  },
  putMetricAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricAlarm', 'CloudWatch', result, true, false, mock)
  },
  putMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricData', 'CloudWatch', result, true, true, mock)
  },
  putMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricData', 'CloudWatch', result, false, true, mock)
  },
  putMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricData', 'CloudWatch', result, true, false, mock)
  },
  putMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricStream', 'CloudWatch', result, true, true, mock)
  },
  putMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricStream', 'CloudWatch', result, false, true, mock)
  },
  putMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricStream', 'CloudWatch', result, true, false, mock)
  },
  setAlarmState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setAlarmState', 'CloudWatch', result, true, true, mock)
  },
  setAlarmStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setAlarmState', 'CloudWatch', result, false, true, mock)
  },
  setAlarmStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setAlarmState', 'CloudWatch', result, true, false, mock)
  },
  startMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMetricStreams', 'CloudWatch', result, true, true, mock)
  },
  startMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMetricStreams', 'CloudWatch', result, false, true, mock)
  },
  startMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMetricStreams', 'CloudWatch', result, true, false, mock)
  },
  stopMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMetricStreams', 'CloudWatch', result, true, true, mock)
  },
  stopMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMetricStreams', 'CloudWatch', result, false, true, mock)
  },
  stopMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMetricStreams', 'CloudWatch', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudWatch', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudWatch', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudWatch', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudWatch', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudWatch', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudWatch', result, true, false, mock)
  },
}
