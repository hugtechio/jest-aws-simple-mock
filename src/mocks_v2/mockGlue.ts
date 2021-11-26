
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
  export const mockGlue = {
  batchCreatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchCreatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchCreatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', Promise.reject(result), true, mock)
  },
  batchStopJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  batchStopJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  batchStopJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  batchUpdatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchUpdatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchUpdatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  cancelMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  cancelMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  cancelMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  checkSchemaVersionValidity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', Promise.resolve(result), true, mock)
  },
  checkSchemaVersionValidityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', Promise.resolve(result), false, mock)
  },
  checkSchemaVersionValidityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', Promise.reject(result), true, mock)
  },
  createBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  createBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  createBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  createClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  createClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  createClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', Promise.reject(result), true, mock)
  },
  createCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  createCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  createCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  createDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  createDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  createDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', Promise.reject(result), true, mock)
  },
  createMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  createMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  createMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  createPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  createPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  createPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', Promise.reject(result), true, mock)
  },
  createPartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', Promise.resolve(result), true, mock)
  },
  createPartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', Promise.resolve(result), false, mock)
  },
  createPartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', Promise.reject(result), true, mock)
  },
  createRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  createRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  createRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', Promise.reject(result), true, mock)
  },
  createScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', Promise.resolve(result), true, mock)
  },
  createScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', Promise.resolve(result), false, mock)
  },
  createScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', Promise.reject(result), true, mock)
  },
  createSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  createSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  createSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', Promise.reject(result), true, mock)
  },
  createTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  createTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  createTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  createUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  createUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  createUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  deleteBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  deleteClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  deleteColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  deleteColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', Promise.reject(result), true, mock)
  },
  deleteCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  deleteDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', Promise.reject(result), true, mock)
  },
  deleteMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  deletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  deletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  deletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', Promise.reject(result), true, mock)
  },
  deletePartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', Promise.resolve(result), true, mock)
  },
  deletePartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', Promise.resolve(result), false, mock)
  },
  deletePartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', Promise.reject(result), true, mock)
  },
  deleteRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  deleteUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprintRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getCatalogImportStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', Promise.resolve(result), true, mock)
  },
  getCatalogImportStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', Promise.resolve(result), false, mock)
  },
  getCatalogImportStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', Promise.reject(result), true, mock)
  },
  getClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  getClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  getClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  getClassifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', Promise.resolve(result), true, mock)
  },
  getClassifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', Promise.resolve(result), false, mock)
  },
  getClassifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', Promise.reject(result), true, mock)
  },
  getColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  getColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  getColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  getColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  getColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  getColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', Promise.reject(result), true, mock)
  },
  getConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', Promise.resolve(result), true, mock)
  },
  getConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', Promise.resolve(result), false, mock)
  },
  getConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawlerMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlerMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlerMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  getDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), true, mock)
  },
  getDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), false, mock)
  },
  getDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', Promise.reject(result), true, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  getDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', Promise.resolve(result), true, mock)
  },
  getDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', Promise.resolve(result), false, mock)
  },
  getDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', Promise.reject(result), true, mock)
  },
  getDataflowGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', Promise.resolve(result), true, mock)
  },
  getDataflowGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', Promise.resolve(result), false, mock)
  },
  getDataflowGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', Promise.reject(result), true, mock)
  },
  getDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  getDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  getDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  getDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  getDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  getDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', Promise.reject(result), true, mock)
  },
  getJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', Promise.reject(result), true, mock)
  },
  getJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  getJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTaskRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTaskRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTaskRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', Promise.reject(result), true, mock)
  },
  getMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', Promise.resolve(result), true, mock)
  },
  getMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', Promise.resolve(result), false, mock)
  },
  getMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', Promise.reject(result), true, mock)
  },
  getPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', Promise.reject(result), true, mock)
  },
  getPartitionIndexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionIndexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionIndexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', Promise.reject(result), true, mock)
  },
  getPartitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', Promise.reject(result), true, mock)
  },
  getPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', Promise.resolve(result), true, mock)
  },
  getPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', Promise.resolve(result), false, mock)
  },
  getPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', Promise.reject(result), true, mock)
  },
  getRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  getRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  getRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', Promise.resolve(result), true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', Promise.resolve(result), false, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  getSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaByDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaByDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaByDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaVersionsDiff: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaVersionsDiffAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaVersionsDiffThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', Promise.reject(result), true, mock)
  },
  getSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  getSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  getSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  getSecurityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', Promise.resolve(result), true, mock)
  },
  getSecurityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', Promise.resolve(result), false, mock)
  },
  getSecurityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', Promise.reject(result), true, mock)
  },
  getTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', Promise.reject(result), true, mock)
  },
  getTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  getTableVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', Promise.reject(result), true, mock)
  },
  getTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', Promise.resolve(result), true, mock)
  },
  getTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', Promise.resolve(result), false, mock)
  },
  getTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', Promise.reject(result), true, mock)
  },
  getTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  getTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  getTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  getTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  getTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  getTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  getUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  getUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  getUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  getUserDefinedFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', Promise.resolve(result), true, mock)
  },
  getUserDefinedFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', Promise.resolve(result), false, mock)
  },
  getUserDefinedFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', Promise.reject(result), true, mock)
  },
  importCatalogToGlue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', Promise.resolve(result), true, mock)
  },
  importCatalogToGlueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', Promise.resolve(result), false, mock)
  },
  importCatalogToGlueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', Promise.reject(result), true, mock)
  },
  listBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', Promise.resolve(result), true, mock)
  },
  listBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', Promise.resolve(result), false, mock)
  },
  listBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', Promise.reject(result), true, mock)
  },
  listCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  listCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  listCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  listDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  listDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  listDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', Promise.reject(result), true, mock)
  },
  listMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', Promise.resolve(result), true, mock)
  },
  listMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', Promise.resolve(result), false, mock)
  },
  listMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', Promise.reject(result), true, mock)
  },
  listRegistries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', Promise.resolve(result), true, mock)
  },
  listRegistriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', Promise.resolve(result), false, mock)
  },
  listRegistriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', Promise.reject(result), true, mock)
  },
  listSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  listSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  listSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', Promise.reject(result), true, mock)
  },
  listTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  listTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  listTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', Promise.reject(result), true, mock)
  },
  putDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), true, mock)
  },
  putDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), false, mock)
  },
  putDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  putSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  putSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  putSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  putWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', Promise.resolve(result), true, mock)
  },
  putWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', Promise.resolve(result), false, mock)
  },
  putWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', Promise.reject(result), true, mock)
  },
  querySchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  querySchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  querySchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  registerSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  registerSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  registerSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', Promise.reject(result), true, mock)
  },
  removeSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  removeSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  removeSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  resetJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', Promise.resolve(result), true, mock)
  },
  resetJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', Promise.resolve(result), false, mock)
  },
  resetJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', Promise.reject(result), true, mock)
  },
  resumeWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  resumeWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  resumeWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  searchTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', Promise.resolve(result), true, mock)
  },
  searchTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', Promise.resolve(result), false, mock)
  },
  searchTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', Promise.reject(result), true, mock)
  },
  startBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', Promise.reject(result), true, mock)
  },
  startCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  startCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  startCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  startCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  startCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  startCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  startExportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startExportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startExportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startImportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startImportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startImportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  startMLEvaluationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startMLEvaluationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startMLEvaluationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startMLLabelingSetGenerationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startMLLabelingSetGenerationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startMLLabelingSetGenerationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  startTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  startTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  startWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  stopCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  stopCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  stopCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  stopCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  stopCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  stopCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  stopTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  stopTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  stopTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  stopWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  stopWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  stopWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', Promise.reject(result), true, mock)
  },
  updateBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  updateBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  updateBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  updateClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  updateClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  updateClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  updateColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  updateColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  updateColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  updateColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  updateColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  updateColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', Promise.reject(result), true, mock)
  },
  updateCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  updateCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  updateCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  updateCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  updateCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  updateCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  updateDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  updateDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  updateDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', Promise.resolve(result), true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', Promise.resolve(result), false, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', Promise.reject(result), true, mock)
  },
  updateMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  updateMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  updateMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  updatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  updatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  updatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  updateRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  updateRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  updateRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', Promise.reject(result), true, mock)
  },
  updateTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  updateTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  updateTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  updateUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  updateUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  updateUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  updateWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  updateWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  updateWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
}
