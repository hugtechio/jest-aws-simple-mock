
/**
* @description mocks_v3:mockDatabaseMigrationService module is mocks for AWS-SDK V3
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
export const mockDatabaseMigrationService = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'addTagsToResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'addTagsToResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'addTagsToResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'applyPendingMaintenanceAction', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  batchStartRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'batchStartRecommendations', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  batchStartRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'batchStartRecommendations', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  batchStartRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'batchStartRecommendations', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  cancelReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  cancelReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  cancelReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'cancelReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createDataProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createDataProvider', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createDataProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createDataProvider', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createDataProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createDataProvider', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createFleetAdvisorCollector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createFleetAdvisorCollector', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createFleetAdvisorCollectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createFleetAdvisorCollector', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createFleetAdvisorCollectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createFleetAdvisorCollector', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createInstanceProfile', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createMigrationProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createMigrationProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createMigrationProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createMigrationProject', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationConfig', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  createReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  createReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  createReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'createReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteCertificate', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteCertificate', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteCertificate', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteConnection', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteConnection', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteConnection', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteDataProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteDataProvider', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteDataProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteDataProvider', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteDataProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteDataProvider', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteFleetAdvisorCollector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorCollector', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteFleetAdvisorCollectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorCollector', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteFleetAdvisorCollectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorCollector', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteFleetAdvisorDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteFleetAdvisorDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteFleetAdvisorDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteInstanceProfile', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteMigrationProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteMigrationProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteMigrationProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteMigrationProject', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationConfig', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  deleteReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  deleteReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  deleteReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'deleteReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeAccountAttributes', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeAccountAttributes', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeAccountAttributes', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeApplicableIndividualAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeApplicableIndividualAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeApplicableIndividualAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeApplicableIndividualAssessments', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeCertificates', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeCertificates', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeCertificates', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConnections', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConnections', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConnections', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeConversionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConversionConfiguration', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeConversionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConversionConfiguration', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeConversionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeConversionConfiguration', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeDataProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeDataProviders', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeDataProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeDataProviders', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeDataProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeDataProviders', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpointSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointSettings', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointSettings', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointSettings', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpointTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointTypes', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointTypes', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpointTypes', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpoints', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpoints', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEndpoints', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEngineVersions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEngineVersions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEngineVersions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventCategories', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventCategories', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventCategories', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventSubscriptions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventSubscriptions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEventSubscriptions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEvents', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEvents', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeEvents', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeExtensionPackAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeExtensionPackAssociations', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeExtensionPackAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeExtensionPackAssociations', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeExtensionPackAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeExtensionPackAssociations', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeFleetAdvisorCollectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorCollectors', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeFleetAdvisorCollectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorCollectors', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeFleetAdvisorCollectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorCollectors', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeFleetAdvisorDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeFleetAdvisorDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeFleetAdvisorDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorDatabases', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeFleetAdvisorLsaAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeFleetAdvisorLsaAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeFleetAdvisorLsaAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeFleetAdvisorSchemaObjectSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemaObjectSummary', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeFleetAdvisorSchemaObjectSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemaObjectSummary', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeFleetAdvisorSchemaObjectSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemaObjectSummary', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeFleetAdvisorSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemas', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeFleetAdvisorSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemas', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeFleetAdvisorSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeFleetAdvisorSchemas', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeInstanceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeInstanceProfiles', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeInstanceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeInstanceProfiles', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeInstanceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeInstanceProfiles', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMetadataModelAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelAssessments', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMetadataModelAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelAssessments', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMetadataModelAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelAssessments', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMetadataModelConversions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelConversions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMetadataModelConversionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelConversions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMetadataModelConversionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelConversions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMetadataModelExportsAsScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsAsScript', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMetadataModelExportsAsScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsAsScript', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMetadataModelExportsAsScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsAsScript', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMetadataModelExportsToTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsToTarget', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMetadataModelExportsToTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsToTarget', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMetadataModelExportsToTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelExportsToTarget', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMetadataModelImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelImports', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMetadataModelImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelImports', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMetadataModelImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMetadataModelImports', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeMigrationProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMigrationProjects', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeMigrationProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMigrationProjects', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeMigrationProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeMigrationProjects', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeOrderableReplicationInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeOrderableReplicationInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeOrderableReplicationInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeOrderableReplicationInstances', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describePendingMaintenanceActions', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeRecommendationLimitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendationLimitations', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeRecommendationLimitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendationLimitations', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeRecommendationLimitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendationLimitations', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendations', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendations', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRecommendations', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeRefreshSchemasStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeRefreshSchemasStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeRefreshSchemasStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeRefreshSchemasStatus', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationConfigs', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationConfigs', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationConfigs', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationInstanceTaskLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationInstanceTaskLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationInstanceTaskLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstanceTaskLogs', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstances', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationInstances', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationSubnetGroups', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTableStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTableStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTableStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTableStatistics', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskAssessmentResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskAssessmentResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskAssessmentResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentResults', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskAssessmentRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskAssessmentRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskAssessmentRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskAssessmentRuns', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTaskIndividualAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTaskIndividualAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTaskIndividualAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTaskIndividualAssessments', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplicationTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTasks', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTasks', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplicationTasks', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeReplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplications', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeReplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplications', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeReplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeReplications', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeSchemas', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeSchemas', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeSchemas', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  describeTableStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  describeTableStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeTableStatistics', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  describeTableStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'describeTableStatistics', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  exportMetadataModelAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'exportMetadataModelAssessment', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  exportMetadataModelAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'exportMetadataModelAssessment', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  exportMetadataModelAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'exportMetadataModelAssessment', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'importCertificate', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'importCertificate', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'importCertificate', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'listTagsForResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'listTagsForResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'listTagsForResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyConversionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyConversionConfiguration', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyConversionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyConversionConfiguration', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyConversionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyConversionConfiguration', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyDataProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyDataProvider', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyDataProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyDataProvider', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyDataProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyDataProvider', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEndpoint', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEndpoint', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEndpoint', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEventSubscription', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyEventSubscription', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyInstanceProfile', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyInstanceProfile', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyMigrationProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyMigrationProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyMigrationProject', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyMigrationProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyMigrationProject', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationConfig', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationConfig', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationSubnetGroup', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  modifyReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  modifyReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  modifyReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'modifyReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  moveReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'moveReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  moveReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'moveReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  moveReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'moveReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  rebootReplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'rebootReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  rebootReplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'rebootReplicationInstance', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  rebootReplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'rebootReplicationInstance', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  refreshSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'refreshSchemas', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  refreshSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'refreshSchemas', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  refreshSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'refreshSchemas', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  reloadReplicationTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadReplicationTables', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  reloadReplicationTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadReplicationTables', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  reloadReplicationTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadReplicationTables', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  reloadTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadTables', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  reloadTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadTables', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  reloadTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'reloadTables', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'removeTagsFromResource', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'removeTagsFromResource', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'removeTagsFromResource', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  runFleetAdvisorLsaAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'runFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  runFleetAdvisorLsaAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'runFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  runFleetAdvisorLsaAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'runFleetAdvisorLsaAnalysis', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startExtensionPackAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startExtensionPackAssociation', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startExtensionPackAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startExtensionPackAssociation', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startExtensionPackAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startExtensionPackAssociation', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startMetadataModelAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelAssessment', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startMetadataModelAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelAssessment', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startMetadataModelAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelAssessment', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startMetadataModelConversion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelConversion', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startMetadataModelConversionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelConversion', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startMetadataModelConversionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelConversion', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startMetadataModelExportAsScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportAsScript', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startMetadataModelExportAsScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportAsScript', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startMetadataModelExportAsScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportAsScript', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startMetadataModelExportToTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportToTarget', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startMetadataModelExportToTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportToTarget', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startMetadataModelExportToTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelExportToTarget', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startMetadataModelImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelImport', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startMetadataModelImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelImport', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startMetadataModelImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startMetadataModelImport', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startRecommendations', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startRecommendations', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startRecommendations', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplication', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplication', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplication', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTaskAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessment', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTaskAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTaskAssessmentRun', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  startReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  startReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  startReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'startReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  stopReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplication', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  stopReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplication', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  stopReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplication', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  stopReplicationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  stopReplicationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplicationTask', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  stopReplicationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'stopReplicationTask', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  testConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'testConnection', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  testConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'testConnection', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  testConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'testConnection', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  updateSubscriptionsToEventBridge: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'updateSubscriptionsToEventBridge', 'DatabaseMigrationService', Promise.resolve(result), true, mock)
  },
  updateSubscriptionsToEventBridgeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'updateSubscriptionsToEventBridge', 'DatabaseMigrationService', Promise.resolve(result), false, mock)
  },
  updateSubscriptionsToEventBridgeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'updateSubscriptionsToEventBridge', 'DatabaseMigrationService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'send', 'DatabaseMigrationServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'send', 'DatabaseMigrationServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-database-migration-service', 'send', 'DatabaseMigrationServiceClient', Promise.reject(result), true, mock)
  }
}
