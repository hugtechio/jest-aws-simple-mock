
/**
* @description mocks_v3:mockCloudWatchLogs module is mocks for AWS-SDK V3
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

  export const mockCloudWatchLogs = {
  associateKmsKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'associateKmsKey', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  associateKmsKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'associateKmsKey', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  associateKmsKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'associateKmsKey', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  cancelExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'cancelExportTask', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  cancelExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'cancelExportTask', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  cancelExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'cancelExportTask', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createExportTask', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createExportTask', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createExportTask', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createLogStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogStream', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createLogStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogStream', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createLogStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'createLogStream', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteDestination', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteDestination', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteDestination', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteLogStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogStream', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteLogStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogStream', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteLogStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteLogStream', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteQueryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteQueryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteQueryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteQueryDefinition', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteResourcePolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteRetentionPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteSubscriptionFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'deleteSubscriptionFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeDestinations', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeDestinations', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeDestinations', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeExportTasks', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeExportTasks', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeExportTasks', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeLogGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogGroups', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeLogGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogGroups', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeLogGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogGroups', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeLogStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogStreams', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeLogStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogStreams', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeLogStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeLogStreams', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeMetricFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeMetricFilters', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeMetricFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeMetricFilters', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeMetricFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeMetricFilters', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueries', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueries', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueries', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeQueryDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueryDefinitions', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeQueryDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueryDefinitions', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeQueryDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeQueryDefinitions', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeResourcePolicies', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeResourcePolicies', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeResourcePolicies', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeSubscriptionFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeSubscriptionFilters', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeSubscriptionFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeSubscriptionFilters', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeSubscriptionFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'describeSubscriptionFilters', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'destroy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'destroy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'destroy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  disassociateKmsKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'disassociateKmsKey', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  disassociateKmsKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'disassociateKmsKey', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  disassociateKmsKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'disassociateKmsKey', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  filterLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'filterLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  filterLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'filterLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  filterLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'filterLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogGroupFields: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogGroupFields', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogGroupFieldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogGroupFields', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogGroupFieldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogGroupFields', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogRecord', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogRecord', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getLogRecord', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getQueryResults', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getQueryResults', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'getQueryResults', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  listTagsLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'listTagsLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  listTagsLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'listTagsLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  listTagsLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'listTagsLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestination', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestination', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestination', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putDestinationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestinationPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putDestinationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestinationPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putDestinationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putDestinationPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putQueryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putQueryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putQueryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putQueryDefinition', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putResourcePolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putRetentionPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putSubscriptionFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putSubscriptionFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putSubscriptionFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'putSubscriptionFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  startQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'startQuery', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  startQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'startQuery', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  startQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'startQuery', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  stopQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'stopQuery', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  stopQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'stopQuery', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  stopQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'stopQuery', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  tagLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'tagLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  tagLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'tagLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  tagLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'tagLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  testMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'testMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  testMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'testMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  testMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'testMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  untagLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'untagLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  untagLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'untagLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  untagLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'untagLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'send', 'CloudWatchLogsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'send', 'CloudWatchLogsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-logs', 'send', 'CloudWatchLogsClient', Promise.reject(result), true, mock)
  }
}