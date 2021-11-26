
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
  export const mockDatabaseMigrationService = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  cancelReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  cancelReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  cancelReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeApplicableIndividualAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeApplicableIndividualAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeApplicableIndividualAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpointSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointSettings', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointSettings', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointSettings', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpointTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointTypes', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointTypes', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointTypes', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeOrderableReplicationInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeOrderableReplicationInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeOrderableReplicationInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeRefreshSchemasStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeRefreshSchemasStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeRefreshSchemasStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationInstanceTaskLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationInstanceTaskLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationInstanceTaskLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationInstances', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskAssessmentResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskAssessmentResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskAssessmentResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskAssessmentRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskAssessmentRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskAssessmentRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskIndividualAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskIndividualAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskIndividualAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTasks', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTasks', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationTasks', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchemas', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchemas', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchemas', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeTableStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeTableStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeTableStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableStatistics', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  moveReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  moveReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  moveReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('moveReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  rebootReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  rebootReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  rebootReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  refreshSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshSchemas', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  refreshSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshSchemas', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  refreshSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshSchemas', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  reloadTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reloadTables', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  reloadTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reloadTables', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  reloadTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reloadTables', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTaskAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  stopReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  stopReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  stopReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  testConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testConnection', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  testConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testConnection', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  testConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testConnection', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
}
