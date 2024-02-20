
/**
* @description mocks_v3:mockEventBridge module is mocks for AWS-SDK V3
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
export const mockEventBridge = {
  activateEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'activateEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  activateEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'activateEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  activateEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'activateEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  cancelReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'cancelReplay', 'EventBridge', Promise.resolve(result), true, mock)
  },
  cancelReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'cancelReplay', 'EventBridge', Promise.resolve(result), false, mock)
  },
  cancelReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'cancelReplay', 'EventBridge', Promise.reject(result), true, mock)
  },
  createApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createApiDestination', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createApiDestination', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createApiDestination', 'EventBridge', Promise.reject(result), true, mock)
  },
  createArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createArchive', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createArchive', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createArchive', 'EventBridge', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createConnection', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createConnection', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createConnection', 'EventBridge', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEndpoint', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEndpoint', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEndpoint', 'EventBridge', Promise.reject(result), true, mock)
  },
  createEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEventBus', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEventBus', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createEventBus', 'EventBridge', Promise.reject(result), true, mock)
  },
  createPartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createPartnerEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  createPartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createPartnerEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  createPartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'createPartnerEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  deactivateEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deactivateEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deactivateEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deactivateEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deactivateEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deactivateEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  deauthorizeConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deauthorizeConnection', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deauthorizeConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deauthorizeConnection', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deauthorizeConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deauthorizeConnection', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteApiDestination', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteApiDestination', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteApiDestination', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteArchive', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteArchive', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteArchive', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteConnection', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteConnection', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteConnection', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEndpoint', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEndpoint', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEndpoint', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEventBus', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEventBus', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteEventBus', 'EventBridge', Promise.reject(result), true, mock)
  },
  deletePartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deletePartnerEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deletePartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deletePartnerEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deletePartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deletePartnerEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'deleteRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeApiDestination', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeApiDestination', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeApiDestination', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeArchive', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeArchive', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeArchive', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeConnection', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeConnection', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeConnection', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEndpoint', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEndpoint', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEndpoint', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeEventBus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventBus', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeEventBusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventBus', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeEventBusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventBus', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  describePartnerEventSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describePartnerEventSource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describePartnerEventSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describePartnerEventSource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describePartnerEventSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describePartnerEventSource', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeReplay', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeReplay', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeReplay', 'EventBridge', Promise.reject(result), true, mock)
  },
  describeRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  describeRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  describeRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'describeRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  disableRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'disableRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  disableRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'disableRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  disableRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'disableRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  enableRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'enableRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  enableRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'enableRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  enableRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'enableRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  listApiDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listApiDestinations', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listApiDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listApiDestinations', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listApiDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listApiDestinations', 'EventBridge', Promise.reject(result), true, mock)
  },
  listArchives: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listArchives', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listArchivesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listArchives', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listArchivesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listArchives', 'EventBridge', Promise.reject(result), true, mock)
  },
  listConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listConnections', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listConnections', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listConnections', 'EventBridge', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEndpoints', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEndpoints', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEndpoints', 'EventBridge', Promise.reject(result), true, mock)
  },
  listEventBuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventBuses', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listEventBusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventBuses', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listEventBusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventBuses', 'EventBridge', Promise.reject(result), true, mock)
  },
  listEventSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventSources', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listEventSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventSources', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listEventSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listEventSources', 'EventBridge', Promise.reject(result), true, mock)
  },
  listPartnerEventSourceAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSourceAccounts', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listPartnerEventSourceAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSourceAccounts', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listPartnerEventSourceAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSourceAccounts', 'EventBridge', Promise.reject(result), true, mock)
  },
  listPartnerEventSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSources', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listPartnerEventSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSources', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listPartnerEventSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listPartnerEventSources', 'EventBridge', Promise.reject(result), true, mock)
  },
  listReplays: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listReplays', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listReplaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listReplays', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listReplaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listReplays', 'EventBridge', Promise.reject(result), true, mock)
  },
  listRuleNamesByTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRuleNamesByTarget', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listRuleNamesByTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRuleNamesByTarget', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listRuleNamesByTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRuleNamesByTarget', 'EventBridge', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRules', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRules', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listRules', 'EventBridge', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTagsForResource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTagsForResource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTagsForResource', 'EventBridge', Promise.reject(result), true, mock)
  },
  listTargetsByRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTargetsByRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  listTargetsByRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTargetsByRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  listTargetsByRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'listTargetsByRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putEvents', 'EventBridge', Promise.resolve(result), true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putEvents', 'EventBridge', Promise.resolve(result), false, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putEvents', 'EventBridge', Promise.reject(result), true, mock)
  },
  putPartnerEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPartnerEvents', 'EventBridge', Promise.resolve(result), true, mock)
  },
  putPartnerEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPartnerEvents', 'EventBridge', Promise.resolve(result), false, mock)
  },
  putPartnerEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPartnerEvents', 'EventBridge', Promise.reject(result), true, mock)
  },
  putPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPermission', 'EventBridge', Promise.resolve(result), true, mock)
  },
  putPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPermission', 'EventBridge', Promise.resolve(result), false, mock)
  },
  putPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putPermission', 'EventBridge', Promise.reject(result), true, mock)
  },
  putRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putRule', 'EventBridge', Promise.resolve(result), true, mock)
  },
  putRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putRule', 'EventBridge', Promise.resolve(result), false, mock)
  },
  putRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putRule', 'EventBridge', Promise.reject(result), true, mock)
  },
  putTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putTargets', 'EventBridge', Promise.resolve(result), true, mock)
  },
  putTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putTargets', 'EventBridge', Promise.resolve(result), false, mock)
  },
  putTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'putTargets', 'EventBridge', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removePermission', 'EventBridge', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removePermission', 'EventBridge', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removePermission', 'EventBridge', Promise.reject(result), true, mock)
  },
  removeTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removeTargets', 'EventBridge', Promise.resolve(result), true, mock)
  },
  removeTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removeTargets', 'EventBridge', Promise.resolve(result), false, mock)
  },
  removeTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'removeTargets', 'EventBridge', Promise.reject(result), true, mock)
  },
  startReplay: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'startReplay', 'EventBridge', Promise.resolve(result), true, mock)
  },
  startReplayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'startReplay', 'EventBridge', Promise.resolve(result), false, mock)
  },
  startReplayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'startReplay', 'EventBridge', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'tagResource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'tagResource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'tagResource', 'EventBridge', Promise.reject(result), true, mock)
  },
  testEventPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'testEventPattern', 'EventBridge', Promise.resolve(result), true, mock)
  },
  testEventPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'testEventPattern', 'EventBridge', Promise.resolve(result), false, mock)
  },
  testEventPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'testEventPattern', 'EventBridge', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'untagResource', 'EventBridge', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'untagResource', 'EventBridge', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'untagResource', 'EventBridge', Promise.reject(result), true, mock)
  },
  updateApiDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateApiDestination', 'EventBridge', Promise.resolve(result), true, mock)
  },
  updateApiDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateApiDestination', 'EventBridge', Promise.resolve(result), false, mock)
  },
  updateApiDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateApiDestination', 'EventBridge', Promise.reject(result), true, mock)
  },
  updateArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateArchive', 'EventBridge', Promise.resolve(result), true, mock)
  },
  updateArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateArchive', 'EventBridge', Promise.resolve(result), false, mock)
  },
  updateArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateArchive', 'EventBridge', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateConnection', 'EventBridge', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateConnection', 'EventBridge', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateConnection', 'EventBridge', Promise.reject(result), true, mock)
  },
  updateEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateEndpoint', 'EventBridge', Promise.resolve(result), true, mock)
  },
  updateEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateEndpoint', 'EventBridge', Promise.resolve(result), false, mock)
  },
  updateEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'updateEndpoint', 'EventBridge', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'send', 'EventBridgeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'send', 'EventBridgeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eventbridge', 'send', 'EventBridgeClient', Promise.reject(result), true, mock)
  }
}
