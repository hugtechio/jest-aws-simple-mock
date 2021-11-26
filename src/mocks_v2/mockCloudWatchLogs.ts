
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
  export const mockCloudWatchLogs = {
  associateKmsKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateKmsKey', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  associateKmsKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateKmsKey', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  associateKmsKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateKmsKey', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  cancelExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelExportTask', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  cancelExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelExportTask', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  cancelExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelExportTask', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExportTask', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExportTask', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExportTask', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  createLogStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogStream', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  createLogStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogStream', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  createLogStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogStream', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteLogStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogStream', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteLogStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogStream', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteLogStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogStream', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteQueryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteQueryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteQueryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueryDefinition', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  deleteSubscriptionFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriptionFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDestinations', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDestinations', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDestinations', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeLogGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogGroups', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeLogGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogGroups', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeLogGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogGroups', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeLogStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogStreams', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeLogStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogStreams', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeLogStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogStreams', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeMetricFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricFilters', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeMetricFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricFilters', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeMetricFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricFilters', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueries', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueries', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueries', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeQueryDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueryDefinitions', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeQueryDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueryDefinitions', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeQueryDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueryDefinitions', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicies', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicies', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicies', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  describeSubscriptionFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscriptionFilters', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  describeSubscriptionFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscriptionFilters', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  describeSubscriptionFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscriptionFilters', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  disassociateKmsKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateKmsKey', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  disassociateKmsKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateKmsKey', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  disassociateKmsKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateKmsKey', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  filterLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('filterLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  filterLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('filterLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  filterLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('filterLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogGroupFields: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogGroupFields', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogGroupFieldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogGroupFields', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogGroupFieldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogGroupFields', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getLogRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogRecord', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getLogRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogRecord', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getLogRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogRecord', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  listTagsLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  listTagsLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  listTagsLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestination', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestination', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestination', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putDestinationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestinationPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putDestinationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestinationPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putDestinationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDestinationPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLogEvents', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLogEvents', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLogEvents', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putQueryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putQueryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putQueryDefinition', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putQueryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putQueryDefinition', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putRetentionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putRetentionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putRetentionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionPolicy', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  putSubscriptionFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  putSubscriptionFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSubscriptionFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  putSubscriptionFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSubscriptionFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  startQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQuery', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  startQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQuery', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  startQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQuery', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  stopQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQuery', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  stopQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQuery', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  stopQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQuery', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  tagLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  tagLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  tagLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  testMetricFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testMetricFilter', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  testMetricFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testMetricFilter', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  testMetricFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testMetricFilter', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
  untagLogGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagLogGroup', 'CloudWatchLogs', Promise.resolve(result), true, mock)
  },
  untagLogGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagLogGroup', 'CloudWatchLogs', Promise.resolve(result), false, mock)
  },
  untagLogGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagLogGroup', 'CloudWatchLogs', Promise.reject(result), true, mock)
  },
}
