
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSSMIncidents = {
  createReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  createResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  createTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'createTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResourcePolicy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResourcePolicy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResourcePolicy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'deleteTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'destroy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'destroy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'destroy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResourcePolicies', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResourcePolicies', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResourcePolicies', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'getTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listIncidentRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listIncidentRecords', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listIncidentRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listIncidentRecords', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listIncidentRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listIncidentRecords', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listRelatedItems', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listRelatedItems', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listRelatedItems', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listReplicationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listReplicationSets', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listReplicationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listReplicationSets', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listReplicationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listReplicationSets', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listResponsePlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listResponsePlans', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listResponsePlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listResponsePlans', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listResponsePlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listResponsePlans', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTagsForResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTagsForResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTagsForResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listTimelineEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTimelineEvents', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listTimelineEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTimelineEvents', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listTimelineEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'listTimelineEvents', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'putResourcePolicy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'putResourcePolicy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'putResourcePolicy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  startIncident: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'startIncident', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  startIncidentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'startIncident', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  startIncidentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'startIncident', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'tagResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'tagResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'tagResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'untagResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'untagResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'untagResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateDeletionProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateDeletionProtection', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateDeletionProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateDeletionProtection', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateDeletionProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateDeletionProtection', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateRelatedItems', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateRelatedItems', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateRelatedItems', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'updateTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'send', 'SSMIncidentsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'send', 'SSMIncidentsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-incidents', 'send', 'SSMIncidentsClient', Promise.reject(result), true, mock)
  }
}