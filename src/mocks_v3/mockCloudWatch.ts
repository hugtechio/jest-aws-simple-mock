
/**
* @description mocks_v3:mockCloudWatch module is mocks for AWS-SDK V3
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
export const mockCloudWatch = {
  deleteAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAlarms', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  deleteAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAlarms', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  deleteAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAlarms', 'CloudWatch', Promise.reject(result), true, mock)
  },
  deleteAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAnomalyDetector', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  deleteAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAnomalyDetector', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  deleteAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteAnomalyDetector', 'CloudWatch', Promise.reject(result), true, mock)
  },
  deleteDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteDashboards', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  deleteDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteDashboards', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  deleteDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteDashboards', 'CloudWatch', Promise.reject(result), true, mock)
  },
  deleteInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  deleteInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  deleteInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  deleteMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteMetricStream', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  deleteMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteMetricStream', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  deleteMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'deleteMetricStream', 'CloudWatch', Promise.reject(result), true, mock)
  },
  describeAlarmHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmHistory', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  describeAlarmHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmHistory', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  describeAlarmHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmHistory', 'CloudWatch', Promise.reject(result), true, mock)
  },
  describeAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarms', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  describeAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarms', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  describeAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarms', 'CloudWatch', Promise.reject(result), true, mock)
  },
  describeAlarmsForMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmsForMetric', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  describeAlarmsForMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmsForMetric', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  describeAlarmsForMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAlarmsForMetric', 'CloudWatch', Promise.reject(result), true, mock)
  },
  describeAnomalyDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAnomalyDetectors', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  describeAnomalyDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAnomalyDetectors', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  describeAnomalyDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeAnomalyDetectors', 'CloudWatch', Promise.reject(result), true, mock)
  },
  describeInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  describeInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  describeInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'describeInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  disableAlarmActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableAlarmActions', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  disableAlarmActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableAlarmActions', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  disableAlarmActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableAlarmActions', 'CloudWatch', Promise.reject(result), true, mock)
  },
  disableInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  disableInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  disableInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'disableInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  enableAlarmActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableAlarmActions', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  enableAlarmActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableAlarmActions', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  enableAlarmActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableAlarmActions', 'CloudWatch', Promise.reject(result), true, mock)
  },
  enableInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  enableInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  enableInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'enableInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getDashboard', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getDashboard', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getDashboard', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getInsightRuleReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getInsightRuleReport', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getInsightRuleReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getInsightRuleReport', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getInsightRuleReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getInsightRuleReport', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricData', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricData', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricData', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getMetricStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStatistics', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getMetricStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStatistics', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getMetricStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStatistics', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStream', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStream', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricStream', 'CloudWatch', Promise.reject(result), true, mock)
  },
  getMetricWidgetImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricWidgetImage', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  getMetricWidgetImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricWidgetImage', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  getMetricWidgetImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'getMetricWidgetImage', 'CloudWatch', Promise.reject(result), true, mock)
  },
  listDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listDashboards', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  listDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listDashboards', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  listDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listDashboards', 'CloudWatch', Promise.reject(result), true, mock)
  },
  listManagedInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listManagedInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  listManagedInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listManagedInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  listManagedInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listManagedInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  listMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetricStreams', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  listMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetricStreams', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  listMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetricStreams', 'CloudWatch', Promise.reject(result), true, mock)
  },
  listMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetrics', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  listMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetrics', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  listMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listMetrics', 'CloudWatch', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listTagsForResource', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listTagsForResource', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'listTagsForResource', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putAnomalyDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putAnomalyDetector', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putAnomalyDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putAnomalyDetector', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putAnomalyDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putAnomalyDetector', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putCompositeAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putCompositeAlarm', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putCompositeAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putCompositeAlarm', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putCompositeAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putCompositeAlarm', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putDashboard', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putDashboard', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putDashboard', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putInsightRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putInsightRule', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putInsightRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putInsightRule', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putInsightRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putInsightRule', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putManagedInsightRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putManagedInsightRules', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putManagedInsightRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putManagedInsightRules', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putManagedInsightRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putManagedInsightRules', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putMetricAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricAlarm', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putMetricAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricAlarm', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putMetricAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricAlarm', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricData', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricData', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricData', 'CloudWatch', Promise.reject(result), true, mock)
  },
  putMetricStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricStream', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  putMetricStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricStream', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  putMetricStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'putMetricStream', 'CloudWatch', Promise.reject(result), true, mock)
  },
  setAlarmState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'setAlarmState', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  setAlarmStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'setAlarmState', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  setAlarmStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'setAlarmState', 'CloudWatch', Promise.reject(result), true, mock)
  },
  startMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'startMetricStreams', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  startMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'startMetricStreams', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  startMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'startMetricStreams', 'CloudWatch', Promise.reject(result), true, mock)
  },
  stopMetricStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'stopMetricStreams', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  stopMetricStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'stopMetricStreams', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  stopMetricStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'stopMetricStreams', 'CloudWatch', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'tagResource', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'tagResource', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'tagResource', 'CloudWatch', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'untagResource', 'CloudWatch', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'untagResource', 'CloudWatch', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'untagResource', 'CloudWatch', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'send', 'CloudWatchClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'send', 'CloudWatchClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch', 'send', 'CloudWatchClient', Promise.reject(result), true, mock)
  }
}
