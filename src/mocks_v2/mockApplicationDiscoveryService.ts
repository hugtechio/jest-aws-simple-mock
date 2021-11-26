
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
  export const mockApplicationDiscoveryService = {
  associateConfigurationItemsToApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  associateConfigurationItemsToApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  associateConfigurationItemsToApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConfigurationItemsToApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  batchDeleteImportData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImportData', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  batchDeleteImportDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImportData', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  batchDeleteImportDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteImportData', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  deleteApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplications', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  deleteApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplications', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  deleteApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplications', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgents', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgents', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgents', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeContinuousExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousExports', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeContinuousExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousExports', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeContinuousExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousExports', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeExportConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeExportConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeExportConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExportTasks', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeImportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeImportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImportTasks', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeImportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImportTasks', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  disassociateConfigurationItemsFromApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  disassociateConfigurationItemsFromApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  disassociateConfigurationItemsFromApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConfigurationItemsFromApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  exportConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  exportConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  exportConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  getDiscoverySummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoverySummary', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  getDiscoverySummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoverySummary', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  getDiscoverySummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoverySummary', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  listConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  listConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurations', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  listConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurations', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  listServerNeighbors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServerNeighbors', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  listServerNeighborsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServerNeighbors', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  listServerNeighborsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServerNeighbors', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startContinuousExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startContinuousExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startContinuousExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContinuousExport', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startDataCollectionByAgentIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startDataCollectionByAgentIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startDataCollectionByAgentIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  startImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportTask', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  startImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportTask', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  startImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportTask', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  stopContinuousExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  stopContinuousExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContinuousExport', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  stopContinuousExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContinuousExport', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  stopDataCollectionByAgentIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  stopDataCollectionByAgentIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  stopDataCollectionByAgentIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDataCollectionByAgentIds', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationDiscoveryService', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationDiscoveryService', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationDiscoveryService', Promise.reject(result), true, mock)
  },
}
