
/**
* @description mocks_v3:mockApplicationDiscoveryService module is mocks for AWS-SDK V3
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
export const mockApplicationDiscoveryService = {
  associateConfigurationItemsToApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  associateConfigurationItemsToApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  associateConfigurationItemsToApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  batchDeleteAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteAgents', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  batchDeleteAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteAgents', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  batchDeleteAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteAgents', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  batchDeleteImportData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteImportData', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  batchDeleteImportDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteImportData', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  batchDeleteImportDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'batchDeleteImportData', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'createTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  deleteApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteApplications', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  deleteApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteApplications', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  deleteApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteApplications', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'deleteTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeAgents', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeAgents', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeAgents', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeBatchDeleteConfigurationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeBatchDeleteConfigurationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeBatchDeleteConfigurationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeContinuousExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeContinuousExports', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeContinuousExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeContinuousExports', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeContinuousExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeContinuousExports', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeExportConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeExportConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeExportConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeExportTasks', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeImportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeImportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeImportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeImportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeImportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeImportTasks', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'describeTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  disassociateConfigurationItemsFromApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  disassociateConfigurationItemsFromApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  disassociateConfigurationItemsFromApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  exportConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'exportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  exportConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'exportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  exportConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'exportConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  getDiscoverySummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'getDiscoverySummary', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  getDiscoverySummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'getDiscoverySummary', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  getDiscoverySummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'getDiscoverySummary', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  listConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  listConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  listConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  listServerNeighbors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listServerNeighbors', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  listServerNeighborsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listServerNeighbors', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  listServerNeighborsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'listServerNeighbors', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startBatchDeleteConfigurationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startBatchDeleteConfigurationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startBatchDeleteConfigurationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startBatchDeleteConfigurationTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startContinuousExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startContinuousExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startContinuousExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startContinuousExport', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startDataCollectionByAgentIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startDataCollectionByAgentIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startDataCollectionByAgentIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startExportTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startExportTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startExportTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startImportTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startImportTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'startImportTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  stopContinuousExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  stopContinuousExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  stopContinuousExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopContinuousExport', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  stopDataCollectionByAgentIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  stopDataCollectionByAgentIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  stopDataCollectionByAgentIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'updateApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'updateApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'updateApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'send', 'ApplicationDiscoveryServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'send', 'ApplicationDiscoveryServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-discovery-service', 'send', 'ApplicationDiscoveryServiceClient', Promise.reject(result), true, mock)
  }
}
