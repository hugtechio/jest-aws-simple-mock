
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
  export const mockSSMIncidents = {
  createReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  createResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  createTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  createTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  createTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  deleteTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  deleteTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  deleteTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  getTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  getTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  getTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listIncidentRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncidentRecords', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listIncidentRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncidentRecords', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listIncidentRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncidentRecords', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRelatedItems', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRelatedItems', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRelatedItems', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listReplicationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReplicationSets', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listReplicationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReplicationSets', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listReplicationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReplicationSets', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listResponsePlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponsePlans', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listResponsePlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponsePlans', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listResponsePlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponsePlans', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  listTimelineEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTimelineEvents', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  listTimelineEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTimelineEvents', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  listTimelineEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTimelineEvents', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  startIncident: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startIncident', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  startIncidentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startIncident', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  startIncidentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startIncident', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateDeletionProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeletionProtection', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateDeletionProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeletionProtection', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateDeletionProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeletionProtection', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateIncidentRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIncidentRecord', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateIncidentRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIncidentRecord', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateIncidentRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIncidentRecord', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelatedItems', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelatedItems', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelatedItems', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateReplicationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationSet', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateReplicationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationSet', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateReplicationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationSet', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateResponsePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponsePlan', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateResponsePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponsePlan', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateResponsePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponsePlan', 'SSMIncidents', Promise.reject(result), true, mock)
  },
  updateTimelineEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimelineEvent', 'SSMIncidents', Promise.resolve(result), true, mock)
  },
  updateTimelineEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimelineEvent', 'SSMIncidents', Promise.resolve(result), false, mock)
  },
  updateTimelineEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimelineEvent', 'SSMIncidents', Promise.reject(result), true, mock)
  },
}
