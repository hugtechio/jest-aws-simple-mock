
/**
* @description mocks_v3:mockCloudWatchEvents module is mocks for AWS-SDK V3
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

  export const mockCloudWatchEvents = {
  activateEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'activateEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  activateEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'activateEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  activateEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'activateEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  cancelReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'cancelReplay', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  cancelReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'cancelReplay', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  cancelReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'cancelReplay', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  createApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createApiDestination', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  createApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createApiDestination', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  createApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createApiDestination', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  createArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createArchive', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  createArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createArchive', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  createArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createArchive', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createConnection', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createConnection', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createConnection', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  createEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createEventBus', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  createEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createEventBus', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  createEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createEventBus', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  createPartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createPartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  createPartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createPartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  createPartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'createPartnerEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deactivateEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deactivateEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deactivateEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deactivateEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deactivateEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deactivateEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deauthorizeConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deauthorizeConnection', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deauthorizeConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deauthorizeConnection', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deauthorizeConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deauthorizeConnection', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deleteApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteApiDestination', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deleteApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteApiDestination', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deleteApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteApiDestination', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deleteArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteArchive', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deleteArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteArchive', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deleteArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteArchive', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteConnection', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteConnection', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteConnection', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deleteEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteEventBus', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deleteEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteEventBus', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deleteEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteEventBus', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deletePartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deletePartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deletePartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deletePartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deletePartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deletePartnerEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'deleteRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeApiDestination', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeApiDestination', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeApiDestination', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeArchive', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeArchive', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeArchive', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeConnection', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeConnection', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeConnection', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventBus', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventBus', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventBus', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describePartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describePartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describePartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describePartnerEventSource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describePartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describePartnerEventSource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeReplay', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeReplay', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeReplay', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  describeRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  describeRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  describeRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'describeRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'destroy', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'destroy', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'destroy', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  disableRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'disableRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  disableRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'disableRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  disableRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'disableRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  enableRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'enableRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  enableRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'enableRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  enableRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'enableRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listApiDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listApiDestinations', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listApiDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listApiDestinations', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listApiDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listApiDestinations', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listArchives: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listArchives', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listArchivesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listArchives', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listArchivesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listArchives', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listConnections', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listConnections', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listConnections', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listEventBuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventBuses', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listEventBusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventBuses', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listEventBusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventBuses', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listEventSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventSources', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listEventSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventSources', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listEventSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listEventSources', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listPartnerEventSourceAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSourceAccounts', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listPartnerEventSourceAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSourceAccounts', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listPartnerEventSourceAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSourceAccounts', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listPartnerEventSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSources', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listPartnerEventSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSources', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listPartnerEventSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listPartnerEventSources', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listReplays: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listReplays', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listReplaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listReplays', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listReplaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listReplays', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listRuleNamesByTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRuleNamesByTarget', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listRuleNamesByTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRuleNamesByTarget', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listRuleNamesByTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRuleNamesByTarget', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRules', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRules', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listRules', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTagsForResource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTagsForResource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTagsForResource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  listTargetsByRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTargetsByRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  listTargetsByRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTargetsByRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  listTargetsByRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'listTargetsByRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putEvents', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putEvents', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putEvents', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  putPartnerEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPartnerEvents', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  putPartnerEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPartnerEvents', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  putPartnerEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPartnerEvents', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  putPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPermission', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  putPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPermission', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  putPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putPermission', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  putRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putRule', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  putRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putRule', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  putRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putRule', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  putTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putTargets', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  putTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putTargets', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  putTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'putTargets', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removePermission', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removePermission', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removePermission', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  removeTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removeTargets', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  removeTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removeTargets', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  removeTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'removeTargets', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  startReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'startReplay', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  startReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'startReplay', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  startReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'startReplay', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'tagResource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'tagResource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'tagResource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  testEventPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'testEventPattern', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  testEventPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'testEventPattern', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  testEventPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'testEventPattern', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'untagResource', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'untagResource', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'untagResource', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  updateApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateApiDestination', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  updateApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateApiDestination', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  updateApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateApiDestination', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  updateArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateArchive', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  updateArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateArchive', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  updateArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateArchive', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateConnection', 'CloudWatchEvents', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateConnection', 'CloudWatchEvents', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'updateConnection', 'CloudWatchEvents', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'send', 'CloudWatchEventsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'send', 'CloudWatchEventsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudwatch-events', 'send', 'CloudWatchEventsClient', Promise.reject(result), true, mock)
  }
}