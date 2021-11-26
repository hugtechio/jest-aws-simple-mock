
/**
* @description mocks_v2:mockGlue.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockGlue = {
  batchCreatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', result, true, true, mock)
  },
  batchCreatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', result, false, true, mock)
  },
  batchCreatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreatePartition', 'Glue', result, true, false, mock)
  },
  batchDeleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', result, true, true, mock)
  },
  batchDeleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', result, false, true, mock)
  },
  batchDeleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteConnection', 'Glue', result, true, false, mock)
  },
  batchDeletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', result, true, true, mock)
  },
  batchDeletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', result, false, true, mock)
  },
  batchDeletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeletePartition', 'Glue', result, true, false, mock)
  },
  batchDeleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', result, true, true, mock)
  },
  batchDeleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', result, false, true, mock)
  },
  batchDeleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTable', 'Glue', result, true, false, mock)
  },
  batchDeleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', result, true, true, mock)
  },
  batchDeleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', result, false, true, mock)
  },
  batchDeleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableVersion', 'Glue', result, true, false, mock)
  },
  batchGetBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', result, true, true, mock)
  },
  batchGetBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', result, false, true, mock)
  },
  batchGetBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBlueprints', 'Glue', result, true, false, mock)
  },
  batchGetCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', result, true, true, mock)
  },
  batchGetCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', result, false, true, mock)
  },
  batchGetCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCrawlers', 'Glue', result, true, false, mock)
  },
  batchGetDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', result, true, true, mock)
  },
  batchGetDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', result, false, true, mock)
  },
  batchGetDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevEndpoints', 'Glue', result, true, false, mock)
  },
  batchGetJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', result, true, true, mock)
  },
  batchGetJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', result, false, true, mock)
  },
  batchGetJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetJobs', 'Glue', result, true, false, mock)
  },
  batchGetPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', result, true, true, mock)
  },
  batchGetPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', result, false, true, mock)
  },
  batchGetPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetPartition', 'Glue', result, true, false, mock)
  },
  batchGetTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', result, true, true, mock)
  },
  batchGetTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', result, false, true, mock)
  },
  batchGetTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetTriggers', 'Glue', result, true, false, mock)
  },
  batchGetWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', result, true, true, mock)
  },
  batchGetWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', result, false, true, mock)
  },
  batchGetWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetWorkflows', 'Glue', result, true, false, mock)
  },
  batchStopJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', result, true, true, mock)
  },
  batchStopJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', result, false, true, mock)
  },
  batchStopJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStopJobRun', 'Glue', result, true, false, mock)
  },
  batchUpdatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', result, true, true, mock)
  },
  batchUpdatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', result, false, true, mock)
  },
  batchUpdatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdatePartition', 'Glue', result, true, false, mock)
  },
  cancelMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', result, true, true, mock)
  },
  cancelMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', result, false, true, mock)
  },
  cancelMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMLTaskRun', 'Glue', result, true, false, mock)
  },
  checkSchemaVersionValidity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', result, true, true, mock)
  },
  checkSchemaVersionValidityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', result, false, true, mock)
  },
  checkSchemaVersionValidityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkSchemaVersionValidity', 'Glue', result, true, false, mock)
  },
  createBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', result, true, true, mock)
  },
  createBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', result, false, true, mock)
  },
  createBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBlueprint', 'Glue', result, true, false, mock)
  },
  createClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', result, true, true, mock)
  },
  createClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', result, false, true, mock)
  },
  createClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassifier', 'Glue', result, true, false, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', result, true, true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', result, false, true, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'Glue', result, true, false, mock)
  },
  createCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', result, true, true, mock)
  },
  createCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', result, false, true, mock)
  },
  createCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrawler', 'Glue', result, true, false, mock)
  },
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', result, true, true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', result, false, true, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'Glue', result, true, false, mock)
  },
  createDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', result, true, true, mock)
  },
  createDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', result, false, true, mock)
  },
  createDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevEndpoint', 'Glue', result, true, false, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', result, true, true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', result, false, true, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Glue', result, true, false, mock)
  },
  createMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', result, true, true, mock)
  },
  createMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', result, false, true, mock)
  },
  createMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLTransform', 'Glue', result, true, false, mock)
  },
  createPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', result, true, true, mock)
  },
  createPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', result, false, true, mock)
  },
  createPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartition', 'Glue', result, true, false, mock)
  },
  createPartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', result, true, true, mock)
  },
  createPartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', result, false, true, mock)
  },
  createPartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartitionIndex', 'Glue', result, true, false, mock)
  },
  createRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', result, true, true, mock)
  },
  createRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', result, false, true, mock)
  },
  createRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegistry', 'Glue', result, true, false, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', result, true, true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', result, false, true, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'Glue', result, true, false, mock)
  },
  createScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', result, true, true, mock)
  },
  createScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', result, false, true, mock)
  },
  createScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'Glue', result, true, false, mock)
  },
  createSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', result, true, true, mock)
  },
  createSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', result, false, true, mock)
  },
  createSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'Glue', result, true, false, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', result, true, true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', result, false, true, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'Glue', result, true, false, mock)
  },
  createTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', result, true, true, mock)
  },
  createTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', result, false, true, mock)
  },
  createTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrigger', 'Glue', result, true, false, mock)
  },
  createUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', result, true, true, mock)
  },
  createUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', result, false, true, mock)
  },
  createUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserDefinedFunction', 'Glue', result, true, false, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', result, true, true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', result, false, true, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Glue', result, true, false, mock)
  },
  deleteBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', result, true, true, mock)
  },
  deleteBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', result, false, true, mock)
  },
  deleteBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBlueprint', 'Glue', result, true, false, mock)
  },
  deleteClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', result, true, true, mock)
  },
  deleteClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', result, false, true, mock)
  },
  deleteClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClassifier', 'Glue', result, true, false, mock)
  },
  deleteColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', result, true, true, mock)
  },
  deleteColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', result, false, true, mock)
  },
  deleteColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForPartition', 'Glue', result, true, false, mock)
  },
  deleteColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', result, true, true, mock)
  },
  deleteColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', result, false, true, mock)
  },
  deleteColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteColumnStatisticsForTable', 'Glue', result, true, false, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', result, true, true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', result, false, true, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'Glue', result, true, false, mock)
  },
  deleteCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', result, true, true, mock)
  },
  deleteCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', result, false, true, mock)
  },
  deleteCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrawler', 'Glue', result, true, false, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', result, true, true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', result, false, true, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'Glue', result, true, false, mock)
  },
  deleteDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', result, true, true, mock)
  },
  deleteDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', result, false, true, mock)
  },
  deleteDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevEndpoint', 'Glue', result, true, false, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', result, true, true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', result, false, true, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Glue', result, true, false, mock)
  },
  deleteMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', result, true, true, mock)
  },
  deleteMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', result, false, true, mock)
  },
  deleteMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLTransform', 'Glue', result, true, false, mock)
  },
  deletePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', result, true, true, mock)
  },
  deletePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', result, false, true, mock)
  },
  deletePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartition', 'Glue', result, true, false, mock)
  },
  deletePartitionIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', result, true, true, mock)
  },
  deletePartitionIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', result, false, true, mock)
  },
  deletePartitionIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartitionIndex', 'Glue', result, true, false, mock)
  },
  deleteRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', result, true, true, mock)
  },
  deleteRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', result, false, true, mock)
  },
  deleteRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegistry', 'Glue', result, true, false, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', result, true, true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', result, false, true, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'Glue', result, true, false, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', result, true, true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', result, false, true, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'Glue', result, true, false, mock)
  },
  deleteSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', result, true, true, mock)
  },
  deleteSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', result, false, true, mock)
  },
  deleteSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchemaVersions', 'Glue', result, true, false, mock)
  },
  deleteSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', result, true, true, mock)
  },
  deleteSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', result, false, true, mock)
  },
  deleteSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'Glue', result, true, false, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', result, true, true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', result, false, true, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'Glue', result, true, false, mock)
  },
  deleteTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', result, true, true, mock)
  },
  deleteTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', result, false, true, mock)
  },
  deleteTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTableVersion', 'Glue', result, true, false, mock)
  },
  deleteTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', result, true, true, mock)
  },
  deleteTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', result, false, true, mock)
  },
  deleteTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrigger', 'Glue', result, true, false, mock)
  },
  deleteUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', result, true, true, mock)
  },
  deleteUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', result, false, true, mock)
  },
  deleteUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserDefinedFunction', 'Glue', result, true, false, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', result, true, true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', result, false, true, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Glue', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glue', result, true, false, mock)
  },
  getBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', result, true, true, mock)
  },
  getBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', result, false, true, mock)
  },
  getBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprint', 'Glue', result, true, false, mock)
  },
  getBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', result, true, true, mock)
  },
  getBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', result, false, true, mock)
  },
  getBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRun', 'Glue', result, true, false, mock)
  },
  getBlueprintRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', result, true, true, mock)
  },
  getBlueprintRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', result, false, true, mock)
  },
  getBlueprintRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprintRuns', 'Glue', result, true, false, mock)
  },
  getCatalogImportStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', result, true, true, mock)
  },
  getCatalogImportStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', result, false, true, mock)
  },
  getCatalogImportStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCatalogImportStatus', 'Glue', result, true, false, mock)
  },
  getClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', result, true, true, mock)
  },
  getClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', result, false, true, mock)
  },
  getClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifier', 'Glue', result, true, false, mock)
  },
  getClassifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', result, true, true, mock)
  },
  getClassifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', result, false, true, mock)
  },
  getClassifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassifiers', 'Glue', result, true, false, mock)
  },
  getColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', result, true, true, mock)
  },
  getColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', result, false, true, mock)
  },
  getColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForPartition', 'Glue', result, true, false, mock)
  },
  getColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', result, true, true, mock)
  },
  getColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', result, false, true, mock)
  },
  getColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getColumnStatisticsForTable', 'Glue', result, true, false, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', result, true, true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', result, false, true, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'Glue', result, true, false, mock)
  },
  getConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', result, true, true, mock)
  },
  getConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', result, false, true, mock)
  },
  getConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnections', 'Glue', result, true, false, mock)
  },
  getCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', result, true, true, mock)
  },
  getCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', result, false, true, mock)
  },
  getCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawler', 'Glue', result, true, false, mock)
  },
  getCrawlerMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', result, true, true, mock)
  },
  getCrawlerMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', result, false, true, mock)
  },
  getCrawlerMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlerMetrics', 'Glue', result, true, false, mock)
  },
  getCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', result, true, true, mock)
  },
  getCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', result, false, true, mock)
  },
  getCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCrawlers', 'Glue', result, true, false, mock)
  },
  getDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', result, true, true, mock)
  },
  getDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', result, false, true, mock)
  },
  getDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalogEncryptionSettings', 'Glue', result, true, false, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', result, true, true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', result, false, true, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Glue', result, true, false, mock)
  },
  getDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', result, true, true, mock)
  },
  getDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', result, false, true, mock)
  },
  getDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabases', 'Glue', result, true, false, mock)
  },
  getDataflowGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', result, true, true, mock)
  },
  getDataflowGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', result, false, true, mock)
  },
  getDataflowGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowGraph', 'Glue', result, true, false, mock)
  },
  getDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', result, true, true, mock)
  },
  getDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', result, false, true, mock)
  },
  getDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoint', 'Glue', result, true, false, mock)
  },
  getDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', result, true, true, mock)
  },
  getDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', result, false, true, mock)
  },
  getDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevEndpoints', 'Glue', result, true, false, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', result, true, true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', result, false, true, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Glue', result, true, false, mock)
  },
  getJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', result, true, true, mock)
  },
  getJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', result, false, true, mock)
  },
  getJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobBookmark', 'Glue', result, true, false, mock)
  },
  getJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', result, true, true, mock)
  },
  getJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', result, false, true, mock)
  },
  getJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRun', 'Glue', result, true, false, mock)
  },
  getJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', result, true, true, mock)
  },
  getJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', result, false, true, mock)
  },
  getJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobRuns', 'Glue', result, true, false, mock)
  },
  getJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', result, true, true, mock)
  },
  getJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', result, false, true, mock)
  },
  getJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobs', 'Glue', result, true, false, mock)
  },
  getMLTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', result, true, true, mock)
  },
  getMLTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', result, false, true, mock)
  },
  getMLTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRun', 'Glue', result, true, false, mock)
  },
  getMLTaskRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', result, true, true, mock)
  },
  getMLTaskRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', result, false, true, mock)
  },
  getMLTaskRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTaskRuns', 'Glue', result, true, false, mock)
  },
  getMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', result, true, true, mock)
  },
  getMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', result, false, true, mock)
  },
  getMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransform', 'Glue', result, true, false, mock)
  },
  getMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', result, true, true, mock)
  },
  getMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', result, false, true, mock)
  },
  getMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLTransforms', 'Glue', result, true, false, mock)
  },
  getMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', result, true, true, mock)
  },
  getMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', result, false, true, mock)
  },
  getMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapping', 'Glue', result, true, false, mock)
  },
  getPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', result, true, true, mock)
  },
  getPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', result, false, true, mock)
  },
  getPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartition', 'Glue', result, true, false, mock)
  },
  getPartitionIndexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', result, true, true, mock)
  },
  getPartitionIndexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', result, false, true, mock)
  },
  getPartitionIndexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitionIndexes', 'Glue', result, true, false, mock)
  },
  getPartitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', result, true, true, mock)
  },
  getPartitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', result, false, true, mock)
  },
  getPartitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartitions', 'Glue', result, true, false, mock)
  },
  getPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', result, true, true, mock)
  },
  getPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', result, false, true, mock)
  },
  getPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlan', 'Glue', result, true, false, mock)
  },
  getRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', result, true, true, mock)
  },
  getRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', result, false, true, mock)
  },
  getRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegistry', 'Glue', result, true, false, mock)
  },
  getResourcePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', result, true, true, mock)
  },
  getResourcePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', result, false, true, mock)
  },
  getResourcePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicies', 'Glue', result, true, false, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', result, true, true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', result, false, true, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'Glue', result, true, false, mock)
  },
  getSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', result, true, true, mock)
  },
  getSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', result, false, true, mock)
  },
  getSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchema', 'Glue', result, true, false, mock)
  },
  getSchemaByDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', result, true, true, mock)
  },
  getSchemaByDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', result, false, true, mock)
  },
  getSchemaByDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaByDefinition', 'Glue', result, true, false, mock)
  },
  getSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', result, true, true, mock)
  },
  getSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', result, false, true, mock)
  },
  getSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersion', 'Glue', result, true, false, mock)
  },
  getSchemaVersionsDiff: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', result, true, true, mock)
  },
  getSchemaVersionsDiffAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', result, false, true, mock)
  },
  getSchemaVersionsDiffThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaVersionsDiff', 'Glue', result, true, false, mock)
  },
  getSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', result, true, true, mock)
  },
  getSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', result, false, true, mock)
  },
  getSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfiguration', 'Glue', result, true, false, mock)
  },
  getSecurityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', result, true, true, mock)
  },
  getSecurityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', result, false, true, mock)
  },
  getSecurityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecurityConfigurations', 'Glue', result, true, false, mock)
  },
  getTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', result, true, true, mock)
  },
  getTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', result, false, true, mock)
  },
  getTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTable', 'Glue', result, true, false, mock)
  },
  getTableVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', result, true, true, mock)
  },
  getTableVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', result, false, true, mock)
  },
  getTableVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersion', 'Glue', result, true, false, mock)
  },
  getTableVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', result, true, true, mock)
  },
  getTableVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', result, false, true, mock)
  },
  getTableVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableVersions', 'Glue', result, true, false, mock)
  },
  getTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', result, true, true, mock)
  },
  getTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', result, false, true, mock)
  },
  getTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTables', 'Glue', result, true, false, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', result, true, true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', result, false, true, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'Glue', result, true, false, mock)
  },
  getTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', result, true, true, mock)
  },
  getTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', result, false, true, mock)
  },
  getTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrigger', 'Glue', result, true, false, mock)
  },
  getTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', result, true, true, mock)
  },
  getTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', result, false, true, mock)
  },
  getTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTriggers', 'Glue', result, true, false, mock)
  },
  getUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', result, true, true, mock)
  },
  getUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', result, false, true, mock)
  },
  getUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunction', 'Glue', result, true, false, mock)
  },
  getUserDefinedFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', result, true, true, mock)
  },
  getUserDefinedFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', result, false, true, mock)
  },
  getUserDefinedFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserDefinedFunctions', 'Glue', result, true, false, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', result, true, true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', result, false, true, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflow', 'Glue', result, true, false, mock)
  },
  getWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', result, true, true, mock)
  },
  getWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', result, false, true, mock)
  },
  getWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRun', 'Glue', result, true, false, mock)
  },
  getWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', result, true, true, mock)
  },
  getWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', result, false, true, mock)
  },
  getWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRunProperties', 'Glue', result, true, false, mock)
  },
  getWorkflowRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', result, true, true, mock)
  },
  getWorkflowRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', result, false, true, mock)
  },
  getWorkflowRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkflowRuns', 'Glue', result, true, false, mock)
  },
  importCatalogToGlue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', result, true, true, mock)
  },
  importCatalogToGlueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', result, false, true, mock)
  },
  importCatalogToGlueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCatalogToGlue', 'Glue', result, true, false, mock)
  },
  listBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', result, true, true, mock)
  },
  listBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', result, false, true, mock)
  },
  listBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBlueprints', 'Glue', result, true, false, mock)
  },
  listCrawlers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', result, true, true, mock)
  },
  listCrawlersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', result, false, true, mock)
  },
  listCrawlersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrawlers', 'Glue', result, true, false, mock)
  },
  listDevEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', result, true, true, mock)
  },
  listDevEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', result, false, true, mock)
  },
  listDevEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevEndpoints', 'Glue', result, true, false, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', result, true, true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', result, false, true, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glue', result, true, false, mock)
  },
  listMLTransforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', result, true, true, mock)
  },
  listMLTransformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', result, false, true, mock)
  },
  listMLTransformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMLTransforms', 'Glue', result, true, false, mock)
  },
  listRegistries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', result, true, true, mock)
  },
  listRegistriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', result, false, true, mock)
  },
  listRegistriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegistries', 'Glue', result, true, false, mock)
  },
  listSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', result, true, true, mock)
  },
  listSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', result, false, true, mock)
  },
  listSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaVersions', 'Glue', result, true, false, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', result, true, true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', result, false, true, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'Glue', result, true, false, mock)
  },
  listTriggers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', result, true, true, mock)
  },
  listTriggersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', result, false, true, mock)
  },
  listTriggersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTriggers', 'Glue', result, true, false, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', result, true, true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', result, false, true, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Glue', result, true, false, mock)
  },
  putDataCatalogEncryptionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', result, true, true, mock)
  },
  putDataCatalogEncryptionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', result, false, true, mock)
  },
  putDataCatalogEncryptionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataCatalogEncryptionSettings', 'Glue', result, true, false, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', result, true, true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', result, false, true, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'Glue', result, true, false, mock)
  },
  putSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', result, true, true, mock)
  },
  putSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', result, false, true, mock)
  },
  putSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaVersionMetadata', 'Glue', result, true, false, mock)
  },
  putWorkflowRunProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', result, true, true, mock)
  },
  putWorkflowRunPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', result, false, true, mock)
  },
  putWorkflowRunPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWorkflowRunProperties', 'Glue', result, true, false, mock)
  },
  querySchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', result, true, true, mock)
  },
  querySchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', result, false, true, mock)
  },
  querySchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('querySchemaVersionMetadata', 'Glue', result, true, false, mock)
  },
  registerSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', result, true, true, mock)
  },
  registerSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', result, false, true, mock)
  },
  registerSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerSchemaVersion', 'Glue', result, true, false, mock)
  },
  removeSchemaVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', result, true, true, mock)
  },
  removeSchemaVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', result, false, true, mock)
  },
  removeSchemaVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSchemaVersionMetadata', 'Glue', result, true, false, mock)
  },
  resetJobBookmark: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', result, true, true, mock)
  },
  resetJobBookmarkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', result, false, true, mock)
  },
  resetJobBookmarkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetJobBookmark', 'Glue', result, true, false, mock)
  },
  resumeWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', result, true, true, mock)
  },
  resumeWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', result, false, true, mock)
  },
  resumeWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeWorkflowRun', 'Glue', result, true, false, mock)
  },
  searchTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', result, true, true, mock)
  },
  searchTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', result, false, true, mock)
  },
  searchTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTables', 'Glue', result, true, false, mock)
  },
  startBlueprintRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', result, true, true, mock)
  },
  startBlueprintRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', result, false, true, mock)
  },
  startBlueprintRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBlueprintRun', 'Glue', result, true, false, mock)
  },
  startCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', result, true, true, mock)
  },
  startCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', result, false, true, mock)
  },
  startCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawler', 'Glue', result, true, false, mock)
  },
  startCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', result, true, true, mock)
  },
  startCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', result, false, true, mock)
  },
  startCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCrawlerSchedule', 'Glue', result, true, false, mock)
  },
  startExportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', result, true, true, mock)
  },
  startExportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', result, false, true, mock)
  },
  startExportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExportLabelsTaskRun', 'Glue', result, true, false, mock)
  },
  startImportLabelsTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', result, true, true, mock)
  },
  startImportLabelsTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', result, false, true, mock)
  },
  startImportLabelsTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportLabelsTaskRun', 'Glue', result, true, false, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', result, true, true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', result, false, true, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'Glue', result, true, false, mock)
  },
  startMLEvaluationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', result, true, true, mock)
  },
  startMLEvaluationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', result, false, true, mock)
  },
  startMLEvaluationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLEvaluationTaskRun', 'Glue', result, true, false, mock)
  },
  startMLLabelingSetGenerationTaskRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', result, true, true, mock)
  },
  startMLLabelingSetGenerationTaskRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', result, false, true, mock)
  },
  startMLLabelingSetGenerationTaskRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMLLabelingSetGenerationTaskRun', 'Glue', result, true, false, mock)
  },
  startTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', result, true, true, mock)
  },
  startTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', result, false, true, mock)
  },
  startTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTrigger', 'Glue', result, true, false, mock)
  },
  startWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', result, true, true, mock)
  },
  startWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', result, false, true, mock)
  },
  startWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startWorkflowRun', 'Glue', result, true, false, mock)
  },
  stopCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', result, true, true, mock)
  },
  stopCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', result, false, true, mock)
  },
  stopCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawler', 'Glue', result, true, false, mock)
  },
  stopCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', result, true, true, mock)
  },
  stopCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', result, false, true, mock)
  },
  stopCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCrawlerSchedule', 'Glue', result, true, false, mock)
  },
  stopTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', result, true, true, mock)
  },
  stopTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', result, false, true, mock)
  },
  stopTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrigger', 'Glue', result, true, false, mock)
  },
  stopWorkflowRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', result, true, true, mock)
  },
  stopWorkflowRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', result, false, true, mock)
  },
  stopWorkflowRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopWorkflowRun', 'Glue', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Glue', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Glue', result, true, false, mock)
  },
  updateBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', result, true, true, mock)
  },
  updateBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', result, false, true, mock)
  },
  updateBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBlueprint', 'Glue', result, true, false, mock)
  },
  updateClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', result, true, true, mock)
  },
  updateClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', result, false, true, mock)
  },
  updateClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassifier', 'Glue', result, true, false, mock)
  },
  updateColumnStatisticsForPartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', result, true, true, mock)
  },
  updateColumnStatisticsForPartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', result, false, true, mock)
  },
  updateColumnStatisticsForPartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForPartition', 'Glue', result, true, false, mock)
  },
  updateColumnStatisticsForTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', result, true, true, mock)
  },
  updateColumnStatisticsForTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', result, false, true, mock)
  },
  updateColumnStatisticsForTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateColumnStatisticsForTable', 'Glue', result, true, false, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', result, true, true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', result, false, true, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'Glue', result, true, false, mock)
  },
  updateCrawler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', result, true, true, mock)
  },
  updateCrawlerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', result, false, true, mock)
  },
  updateCrawlerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawler', 'Glue', result, true, false, mock)
  },
  updateCrawlerSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', result, true, true, mock)
  },
  updateCrawlerScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', result, false, true, mock)
  },
  updateCrawlerScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCrawlerSchedule', 'Glue', result, true, false, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', result, true, true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', result, false, true, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'Glue', result, true, false, mock)
  },
  updateDevEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', result, true, true, mock)
  },
  updateDevEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', result, false, true, mock)
  },
  updateDevEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevEndpoint', 'Glue', result, true, false, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', result, true, true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', result, false, true, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Glue', result, true, false, mock)
  },
  updateMLTransform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', result, true, true, mock)
  },
  updateMLTransformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', result, false, true, mock)
  },
  updateMLTransformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLTransform', 'Glue', result, true, false, mock)
  },
  updatePartition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', result, true, true, mock)
  },
  updatePartitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', result, false, true, mock)
  },
  updatePartitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartition', 'Glue', result, true, false, mock)
  },
  updateRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', result, true, true, mock)
  },
  updateRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', result, false, true, mock)
  },
  updateRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegistry', 'Glue', result, true, false, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', result, true, true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', result, false, true, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'Glue', result, true, false, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', result, true, true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', result, false, true, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'Glue', result, true, false, mock)
  },
  updateTrigger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', result, true, true, mock)
  },
  updateTriggerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', result, false, true, mock)
  },
  updateTriggerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrigger', 'Glue', result, true, false, mock)
  },
  updateUserDefinedFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', result, true, true, mock)
  },
  updateUserDefinedFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', result, false, true, mock)
  },
  updateUserDefinedFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserDefinedFunction', 'Glue', result, true, false, mock)
  },
  updateWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', result, true, true, mock)
  },
  updateWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', result, false, true, mock)
  },
  updateWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkflow', 'Glue', result, true, false, mock)
  },
}
