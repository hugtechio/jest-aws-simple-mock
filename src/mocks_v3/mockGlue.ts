
/**
* @description mocks_v3:mockGlue module is mocks for AWS-SDK V3
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

  export const mockGlue = {
  batchCreatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchCreatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchCreatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchCreatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchCreatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchCreatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteConnection', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeletePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeletePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeletePartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTable', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTable', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTable', 'Glue', Promise.reject(result), true, mock)
  },
  batchDeleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  batchDeleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  batchDeleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchDeleteTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetBlueprints', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetBlueprints', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetBlueprints', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetJobs', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetPartition', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  batchGetWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetWorkflows', 'Glue', Promise.resolve(result), true, mock)
  },
  batchGetWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetWorkflows', 'Glue', Promise.resolve(result), false, mock)
  },
  batchGetWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchGetWorkflows', 'Glue', Promise.reject(result), true, mock)
  },
  batchStopJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchStopJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  batchStopJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchStopJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  batchStopJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchStopJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  batchUpdatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchUpdatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  batchUpdatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchUpdatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  batchUpdatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'batchUpdatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  cancelMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'cancelMLTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  cancelMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'cancelMLTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  cancelMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'cancelMLTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  checkSchemaVersionValidity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'checkSchemaVersionValidity', 'Glue', Promise.resolve(result), true, mock)
  },
  checkSchemaVersionValidityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'checkSchemaVersionValidity', 'Glue', Promise.resolve(result), false, mock)
  },
  checkSchemaVersionValidityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'checkSchemaVersionValidity', 'Glue', Promise.reject(result), true, mock)
  },
  createBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  createBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  createBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  createClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  createClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  createClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createConnection', 'Glue', Promise.reject(result), true, mock)
  },
  createCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  createCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  createCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  createDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  createDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  createDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createJob', 'Glue', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createJob', 'Glue', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createJob', 'Glue', Promise.reject(result), true, mock)
  },
  createMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  createMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  createMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  createPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  createPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  createPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartition', 'Glue', Promise.reject(result), true, mock)
  },
  createPartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartitionIndex', 'Glue', Promise.resolve(result), true, mock)
  },
  createPartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartitionIndex', 'Glue', Promise.resolve(result), false, mock)
  },
  createPartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createPartitionIndex', 'Glue', Promise.reject(result), true, mock)
  },
  createRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  createRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  createRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSchema', 'Glue', Promise.reject(result), true, mock)
  },
  createScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createScript', 'Glue', Promise.resolve(result), true, mock)
  },
  createScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createScript', 'Glue', Promise.resolve(result), false, mock)
  },
  createScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createScript', 'Glue', Promise.reject(result), true, mock)
  },
  createSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  createSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  createSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTable', 'Glue', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTable', 'Glue', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTable', 'Glue', Promise.reject(result), true, mock)
  },
  createTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  createTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  createTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  createUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  createUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  createUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'createWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  deleteBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  deleteClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  deleteColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  deleteColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteConnection', 'Glue', Promise.reject(result), true, mock)
  },
  deleteCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  deleteDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteJob', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteJob', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteJob', 'Glue', Promise.reject(result), true, mock)
  },
  deleteMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  deletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  deletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  deletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartition', 'Glue', Promise.reject(result), true, mock)
  },
  deletePartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartitionIndex', 'Glue', Promise.resolve(result), true, mock)
  },
  deletePartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartitionIndex', 'Glue', Promise.resolve(result), false, mock)
  },
  deletePartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deletePartitionIndex', 'Glue', Promise.reject(result), true, mock)
  },
  deleteRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchema', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchemaVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchemaVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSchemaVersions', 'Glue', Promise.reject(result), true, mock)
  },
  deleteSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTable', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTable', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTable', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  deleteTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  deleteUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'deleteWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'destroy', 'Glue', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'destroy', 'Glue', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'destroy', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRun', 'Glue', Promise.reject(result), true, mock)
  },
  getBlueprintRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getBlueprintRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getBlueprintRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getBlueprintRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getCatalogImportStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCatalogImportStatus', 'Glue', Promise.resolve(result), true, mock)
  },
  getCatalogImportStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCatalogImportStatus', 'Glue', Promise.resolve(result), false, mock)
  },
  getCatalogImportStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCatalogImportStatus', 'Glue', Promise.reject(result), true, mock)
  },
  getClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  getClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  getClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  getClassifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifiers', 'Glue', Promise.resolve(result), true, mock)
  },
  getClassifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifiers', 'Glue', Promise.resolve(result), false, mock)
  },
  getClassifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getClassifiers', 'Glue', Promise.reject(result), true, mock)
  },
  getColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  getColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  getColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  getColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  getColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  getColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnection', 'Glue', Promise.reject(result), true, mock)
  },
  getConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnections', 'Glue', Promise.resolve(result), true, mock)
  },
  getConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnections', 'Glue', Promise.resolve(result), false, mock)
  },
  getConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getConnections', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawlerMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlerMetrics', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlerMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlerMetrics', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlerMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlerMetrics', 'Glue', Promise.reject(result), true, mock)
  },
  getCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  getCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  getCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  getDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), true, mock)
  },
  getDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), false, mock)
  },
  getDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataCatalogEncryptionSettings', 'Glue', Promise.reject(result), true, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  getDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabases', 'Glue', Promise.resolve(result), true, mock)
  },
  getDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabases', 'Glue', Promise.resolve(result), false, mock)
  },
  getDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDatabases', 'Glue', Promise.reject(result), true, mock)
  },
  getDataflowGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataflowGraph', 'Glue', Promise.resolve(result), true, mock)
  },
  getDataflowGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataflowGraph', 'Glue', Promise.resolve(result), false, mock)
  },
  getDataflowGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDataflowGraph', 'Glue', Promise.reject(result), true, mock)
  },
  getDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  getDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  getDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  getDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  getDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  getDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJob', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJob', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJob', 'Glue', Promise.reject(result), true, mock)
  },
  getJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobBookmark', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobBookmark', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobBookmark', 'Glue', Promise.reject(result), true, mock)
  },
  getJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  getJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  getJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  getJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getJobs', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTaskRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTaskRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTaskRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTaskRuns', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  getMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransforms', 'Glue', Promise.resolve(result), true, mock)
  },
  getMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransforms', 'Glue', Promise.resolve(result), false, mock)
  },
  getMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMLTransforms', 'Glue', Promise.reject(result), true, mock)
  },
  getMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMapping', 'Glue', Promise.resolve(result), true, mock)
  },
  getMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMapping', 'Glue', Promise.resolve(result), false, mock)
  },
  getMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getMapping', 'Glue', Promise.reject(result), true, mock)
  },
  getPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartition', 'Glue', Promise.reject(result), true, mock)
  },
  getPartitionIndexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitionIndexes', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionIndexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitionIndexes', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionIndexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitionIndexes', 'Glue', Promise.reject(result), true, mock)
  },
  getPartitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitions', 'Glue', Promise.resolve(result), true, mock)
  },
  getPartitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitions', 'Glue', Promise.resolve(result), false, mock)
  },
  getPartitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPartitions', 'Glue', Promise.reject(result), true, mock)
  },
  getPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPlan', 'Glue', Promise.resolve(result), true, mock)
  },
  getPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPlan', 'Glue', Promise.resolve(result), false, mock)
  },
  getPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getPlan', 'Glue', Promise.reject(result), true, mock)
  },
  getRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  getRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  getRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicies', 'Glue', Promise.resolve(result), true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicies', 'Glue', Promise.resolve(result), false, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicies', 'Glue', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  getSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchema', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaByDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaByDefinition', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaByDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaByDefinition', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaByDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaByDefinition', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersion', 'Glue', Promise.reject(result), true, mock)
  },
  getSchemaVersionsDiff: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersionsDiff', 'Glue', Promise.resolve(result), true, mock)
  },
  getSchemaVersionsDiffAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersionsDiff', 'Glue', Promise.resolve(result), false, mock)
  },
  getSchemaVersionsDiffThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSchemaVersionsDiff', 'Glue', Promise.reject(result), true, mock)
  },
  getSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfiguration', 'Glue', Promise.resolve(result), true, mock)
  },
  getSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfiguration', 'Glue', Promise.resolve(result), false, mock)
  },
  getSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfiguration', 'Glue', Promise.reject(result), true, mock)
  },
  getSecurityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfigurations', 'Glue', Promise.resolve(result), true, mock)
  },
  getSecurityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfigurations', 'Glue', Promise.resolve(result), false, mock)
  },
  getSecurityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getSecurityConfigurations', 'Glue', Promise.reject(result), true, mock)
  },
  getTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTable', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTable', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTable', 'Glue', Promise.reject(result), true, mock)
  },
  getTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersion', 'Glue', Promise.reject(result), true, mock)
  },
  getTableVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  getTableVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  getTableVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTableVersions', 'Glue', Promise.reject(result), true, mock)
  },
  getTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTables', 'Glue', Promise.resolve(result), true, mock)
  },
  getTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTables', 'Glue', Promise.resolve(result), false, mock)
  },
  getTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTables', 'Glue', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTags', 'Glue', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTags', 'Glue', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTags', 'Glue', Promise.reject(result), true, mock)
  },
  getTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  getTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  getTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  getTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  getTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  getTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  getUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  getUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  getUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  getUserDefinedFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunctions', 'Glue', Promise.resolve(result), true, mock)
  },
  getUserDefinedFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunctions', 'Glue', Promise.resolve(result), false, mock)
  },
  getUserDefinedFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getUserDefinedFunctions', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRunProperties', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRunProperties', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRunProperties', 'Glue', Promise.reject(result), true, mock)
  },
  getWorkflowRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRuns', 'Glue', Promise.resolve(result), true, mock)
  },
  getWorkflowRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRuns', 'Glue', Promise.resolve(result), false, mock)
  },
  getWorkflowRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'getWorkflowRuns', 'Glue', Promise.reject(result), true, mock)
  },
  importCatalogToGlue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'importCatalogToGlue', 'Glue', Promise.resolve(result), true, mock)
  },
  importCatalogToGlueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'importCatalogToGlue', 'Glue', Promise.resolve(result), false, mock)
  },
  importCatalogToGlueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'importCatalogToGlue', 'Glue', Promise.reject(result), true, mock)
  },
  listBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listBlueprints', 'Glue', Promise.resolve(result), true, mock)
  },
  listBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listBlueprints', 'Glue', Promise.resolve(result), false, mock)
  },
  listBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listBlueprints', 'Glue', Promise.reject(result), true, mock)
  },
  listCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listCrawlers', 'Glue', Promise.resolve(result), true, mock)
  },
  listCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listCrawlers', 'Glue', Promise.resolve(result), false, mock)
  },
  listCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listCrawlers', 'Glue', Promise.reject(result), true, mock)
  },
  listDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listDevEndpoints', 'Glue', Promise.resolve(result), true, mock)
  },
  listDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listDevEndpoints', 'Glue', Promise.resolve(result), false, mock)
  },
  listDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listDevEndpoints', 'Glue', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listJobs', 'Glue', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listJobs', 'Glue', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listJobs', 'Glue', Promise.reject(result), true, mock)
  },
  listMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listMLTransforms', 'Glue', Promise.resolve(result), true, mock)
  },
  listMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listMLTransforms', 'Glue', Promise.resolve(result), false, mock)
  },
  listMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listMLTransforms', 'Glue', Promise.reject(result), true, mock)
  },
  listRegistries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listRegistries', 'Glue', Promise.resolve(result), true, mock)
  },
  listRegistriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listRegistries', 'Glue', Promise.resolve(result), false, mock)
  },
  listRegistriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listRegistries', 'Glue', Promise.reject(result), true, mock)
  },
  listSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemaVersions', 'Glue', Promise.resolve(result), true, mock)
  },
  listSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemaVersions', 'Glue', Promise.resolve(result), false, mock)
  },
  listSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemaVersions', 'Glue', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemas', 'Glue', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemas', 'Glue', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listSchemas', 'Glue', Promise.reject(result), true, mock)
  },
  listTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listTriggers', 'Glue', Promise.resolve(result), true, mock)
  },
  listTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listTriggers', 'Glue', Promise.resolve(result), false, mock)
  },
  listTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listTriggers', 'Glue', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listWorkflows', 'Glue', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listWorkflows', 'Glue', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'listWorkflows', 'Glue', Promise.reject(result), true, mock)
  },
  putDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), true, mock)
  },
  putDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putDataCatalogEncryptionSettings', 'Glue', Promise.resolve(result), false, mock)
  },
  putDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putDataCatalogEncryptionSettings', 'Glue', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putResourcePolicy', 'Glue', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putResourcePolicy', 'Glue', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putResourcePolicy', 'Glue', Promise.reject(result), true, mock)
  },
  putSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putSchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  putSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putSchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  putSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putSchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  putWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putWorkflowRunProperties', 'Glue', Promise.resolve(result), true, mock)
  },
  putWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putWorkflowRunProperties', 'Glue', Promise.resolve(result), false, mock)
  },
  putWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'putWorkflowRunProperties', 'Glue', Promise.reject(result), true, mock)
  },
  querySchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'querySchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  querySchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'querySchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  querySchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'querySchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  registerSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'registerSchemaVersion', 'Glue', Promise.resolve(result), true, mock)
  },
  registerSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'registerSchemaVersion', 'Glue', Promise.resolve(result), false, mock)
  },
  registerSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'registerSchemaVersion', 'Glue', Promise.reject(result), true, mock)
  },
  removeSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'removeSchemaVersionMetadata', 'Glue', Promise.resolve(result), true, mock)
  },
  removeSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'removeSchemaVersionMetadata', 'Glue', Promise.resolve(result), false, mock)
  },
  removeSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'removeSchemaVersionMetadata', 'Glue', Promise.reject(result), true, mock)
  },
  resetJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resetJobBookmark', 'Glue', Promise.resolve(result), true, mock)
  },
  resetJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resetJobBookmark', 'Glue', Promise.resolve(result), false, mock)
  },
  resetJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resetJobBookmark', 'Glue', Promise.reject(result), true, mock)
  },
  resumeWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resumeWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  resumeWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resumeWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  resumeWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'resumeWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  searchTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'searchTables', 'Glue', Promise.resolve(result), true, mock)
  },
  searchTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'searchTables', 'Glue', Promise.resolve(result), false, mock)
  },
  searchTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'searchTables', 'Glue', Promise.reject(result), true, mock)
  },
  startBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startBlueprintRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startBlueprintRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startBlueprintRun', 'Glue', Promise.reject(result), true, mock)
  },
  startCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  startCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  startCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  startCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  startCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  startCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  startExportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startExportLabelsTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startExportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startExportLabelsTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startExportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startExportLabelsTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startImportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startImportLabelsTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startImportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startImportLabelsTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startImportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startImportLabelsTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startJobRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startJobRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startJobRun', 'Glue', Promise.reject(result), true, mock)
  },
  startMLEvaluationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLEvaluationTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startMLEvaluationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLEvaluationTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startMLEvaluationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLEvaluationTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startMLLabelingSetGenerationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLLabelingSetGenerationTaskRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startMLLabelingSetGenerationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLLabelingSetGenerationTaskRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startMLLabelingSetGenerationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startMLLabelingSetGenerationTaskRun', 'Glue', Promise.reject(result), true, mock)
  },
  startTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  startTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  startTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  startWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  startWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  startWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'startWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  stopCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  stopCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  stopCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  stopCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  stopCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  stopCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  stopTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  stopTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  stopTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  stopWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopWorkflowRun', 'Glue', Promise.resolve(result), true, mock)
  },
  stopWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopWorkflowRun', 'Glue', Promise.resolve(result), false, mock)
  },
  stopWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'stopWorkflowRun', 'Glue', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'tagResource', 'Glue', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'tagResource', 'Glue', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'tagResource', 'Glue', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'untagResource', 'Glue', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'untagResource', 'Glue', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'untagResource', 'Glue', Promise.reject(result), true, mock)
  },
  updateBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateBlueprint', 'Glue', Promise.resolve(result), true, mock)
  },
  updateBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateBlueprint', 'Glue', Promise.resolve(result), false, mock)
  },
  updateBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateBlueprint', 'Glue', Promise.reject(result), true, mock)
  },
  updateClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateClassifier', 'Glue', Promise.resolve(result), true, mock)
  },
  updateClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateClassifier', 'Glue', Promise.resolve(result), false, mock)
  },
  updateClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateClassifier', 'Glue', Promise.reject(result), true, mock)
  },
  updateColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForPartition', 'Glue', Promise.resolve(result), true, mock)
  },
  updateColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForPartition', 'Glue', Promise.resolve(result), false, mock)
  },
  updateColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForPartition', 'Glue', Promise.reject(result), true, mock)
  },
  updateColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForTable', 'Glue', Promise.resolve(result), true, mock)
  },
  updateColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForTable', 'Glue', Promise.resolve(result), false, mock)
  },
  updateColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateColumnStatisticsForTable', 'Glue', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateConnection', 'Glue', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateConnection', 'Glue', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateConnection', 'Glue', Promise.reject(result), true, mock)
  },
  updateCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawler', 'Glue', Promise.resolve(result), true, mock)
  },
  updateCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawler', 'Glue', Promise.resolve(result), false, mock)
  },
  updateCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawler', 'Glue', Promise.reject(result), true, mock)
  },
  updateCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawlerSchedule', 'Glue', Promise.resolve(result), true, mock)
  },
  updateCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawlerSchedule', 'Glue', Promise.resolve(result), false, mock)
  },
  updateCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateCrawlerSchedule', 'Glue', Promise.reject(result), true, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDatabase', 'Glue', Promise.resolve(result), true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDatabase', 'Glue', Promise.resolve(result), false, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDatabase', 'Glue', Promise.reject(result), true, mock)
  },
  updateDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDevEndpoint', 'Glue', Promise.resolve(result), true, mock)
  },
  updateDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDevEndpoint', 'Glue', Promise.resolve(result), false, mock)
  },
  updateDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateDevEndpoint', 'Glue', Promise.reject(result), true, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateJob', 'Glue', Promise.resolve(result), true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateJob', 'Glue', Promise.resolve(result), false, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateJob', 'Glue', Promise.reject(result), true, mock)
  },
  updateMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateMLTransform', 'Glue', Promise.resolve(result), true, mock)
  },
  updateMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateMLTransform', 'Glue', Promise.resolve(result), false, mock)
  },
  updateMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateMLTransform', 'Glue', Promise.reject(result), true, mock)
  },
  updatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updatePartition', 'Glue', Promise.resolve(result), true, mock)
  },
  updatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updatePartition', 'Glue', Promise.resolve(result), false, mock)
  },
  updatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updatePartition', 'Glue', Promise.reject(result), true, mock)
  },
  updateRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateRegistry', 'Glue', Promise.resolve(result), true, mock)
  },
  updateRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateRegistry', 'Glue', Promise.resolve(result), false, mock)
  },
  updateRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateRegistry', 'Glue', Promise.reject(result), true, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateSchema', 'Glue', Promise.resolve(result), true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateSchema', 'Glue', Promise.resolve(result), false, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateSchema', 'Glue', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTable', 'Glue', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTable', 'Glue', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTable', 'Glue', Promise.reject(result), true, mock)
  },
  updateTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTrigger', 'Glue', Promise.resolve(result), true, mock)
  },
  updateTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTrigger', 'Glue', Promise.resolve(result), false, mock)
  },
  updateTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateTrigger', 'Glue', Promise.reject(result), true, mock)
  },
  updateUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateUserDefinedFunction', 'Glue', Promise.resolve(result), true, mock)
  },
  updateUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateUserDefinedFunction', 'Glue', Promise.resolve(result), false, mock)
  },
  updateUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateUserDefinedFunction', 'Glue', Promise.reject(result), true, mock)
  },
  updateWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateWorkflow', 'Glue', Promise.resolve(result), true, mock)
  },
  updateWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateWorkflow', 'Glue', Promise.resolve(result), false, mock)
  },
  updateWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'updateWorkflow', 'Glue', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'send', 'GlueClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'send', 'GlueClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glue', 'send', 'GlueClient', Promise.reject(result), true, mock)
  }
}