
/**
* @description mocks_v3:mockNeptunedata module is mocks for AWS-SDK V3
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
export const mockNeptunedata = {
  cancelGremlinQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelGremlinQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelGremlinQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelGremlinQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelGremlinQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelGremlinQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  cancelLoaderJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelLoaderJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelLoaderJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelLoaderJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelLoaderJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelLoaderJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  cancelMLDataProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelMLDataProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelMLDataProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLDataProcessingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  cancelMLModelTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelMLModelTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelMLModelTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTrainingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  cancelMLModelTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTransformJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelMLModelTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTransformJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelMLModelTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelMLModelTransformJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  cancelOpenCypherQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelOpenCypherQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  cancelOpenCypherQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelOpenCypherQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  cancelOpenCypherQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'cancelOpenCypherQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  createMLEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'createMLEndpoint', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  createMLEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'createMLEndpoint', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  createMLEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'createMLEndpoint', 'Neptunedata', Promise.reject(result), true, mock)
  },
  deleteMLEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteMLEndpoint', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  deleteMLEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteMLEndpoint', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  deleteMLEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteMLEndpoint', 'Neptunedata', Promise.reject(result), true, mock)
  },
  deletePropertygraphStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deletePropertygraphStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  deletePropertygraphStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deletePropertygraphStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  deletePropertygraphStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deletePropertygraphStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  deleteSparqlStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteSparqlStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  deleteSparqlStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteSparqlStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  deleteSparqlStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'deleteSparqlStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeFastReset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeFastReset', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeFastResetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeFastReset', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeFastResetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeFastReset', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeGremlinExplainQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinExplainQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeGremlinExplainQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinExplainQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeGremlinExplainQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinExplainQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeGremlinProfileQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinProfileQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeGremlinProfileQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinProfileQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeGremlinProfileQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinProfileQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeGremlinQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeGremlinQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeGremlinQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeGremlinQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeOpenCypherExplainQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherExplainQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeOpenCypherExplainQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherExplainQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeOpenCypherExplainQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherExplainQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  executeOpenCypherQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherQuery', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  executeOpenCypherQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherQuery', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  executeOpenCypherQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'executeOpenCypherQuery', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getEngineStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getEngineStatus', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getEngineStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getEngineStatus', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getEngineStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getEngineStatus', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getGremlinQueryStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getGremlinQueryStatus', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getGremlinQueryStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getGremlinQueryStatus', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getGremlinQueryStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getGremlinQueryStatus', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getLoaderJobStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getLoaderJobStatus', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getLoaderJobStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getLoaderJobStatus', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getLoaderJobStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getLoaderJobStatus', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getMLDataProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getMLDataProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getMLDataProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLDataProcessingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getMLEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLEndpoint', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getMLEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLEndpoint', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getMLEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLEndpoint', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getMLModelTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getMLModelTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getMLModelTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTrainingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getMLModelTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTransformJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getMLModelTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTransformJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getMLModelTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getMLModelTransformJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getOpenCypherQueryStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getOpenCypherQueryStatus', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getOpenCypherQueryStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getOpenCypherQueryStatus', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getOpenCypherQueryStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getOpenCypherQueryStatus', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getPropertygraphStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getPropertygraphStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getPropertygraphStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getPropertygraphStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStream', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getPropertygraphStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStream', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getPropertygraphStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphStream', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getPropertygraphSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphSummary', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getPropertygraphSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphSummary', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getPropertygraphSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getPropertygraphSummary', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getRDFGraphSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getRDFGraphSummary', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getRDFGraphSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getRDFGraphSummary', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getRDFGraphSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getRDFGraphSummary', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getSparqlStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getSparqlStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getSparqlStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  getSparqlStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStream', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  getSparqlStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStream', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  getSparqlStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'getSparqlStream', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listGremlinQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listGremlinQueries', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listGremlinQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listGremlinQueries', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listGremlinQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listGremlinQueries', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listLoaderJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listLoaderJobs', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listLoaderJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listLoaderJobs', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listLoaderJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listLoaderJobs', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listMLDataProcessingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLDataProcessingJobs', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listMLDataProcessingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLDataProcessingJobs', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listMLDataProcessingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLDataProcessingJobs', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listMLEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLEndpoints', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listMLEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLEndpoints', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listMLEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLEndpoints', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listMLModelTrainingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTrainingJobs', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listMLModelTrainingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTrainingJobs', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listMLModelTrainingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTrainingJobs', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listMLModelTransformJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTransformJobs', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listMLModelTransformJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTransformJobs', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listMLModelTransformJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listMLModelTransformJobs', 'Neptunedata', Promise.reject(result), true, mock)
  },
  listOpenCypherQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listOpenCypherQueries', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  listOpenCypherQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listOpenCypherQueries', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  listOpenCypherQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'listOpenCypherQueries', 'Neptunedata', Promise.reject(result), true, mock)
  },
  managePropertygraphStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'managePropertygraphStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  managePropertygraphStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'managePropertygraphStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  managePropertygraphStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'managePropertygraphStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  manageSparqlStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'manageSparqlStatistics', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  manageSparqlStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'manageSparqlStatistics', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  manageSparqlStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'manageSparqlStatistics', 'Neptunedata', Promise.reject(result), true, mock)
  },
  startLoaderJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startLoaderJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  startLoaderJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startLoaderJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  startLoaderJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startLoaderJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  startMLDataProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  startMLDataProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLDataProcessingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  startMLDataProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLDataProcessingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  startMLModelTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  startMLModelTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTrainingJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  startMLModelTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTrainingJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  startMLModelTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTransformJob', 'Neptunedata', Promise.resolve(result), true, mock)
  },
  startMLModelTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTransformJob', 'Neptunedata', Promise.resolve(result), false, mock)
  },
  startMLModelTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'startMLModelTransformJob', 'Neptunedata', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'send', 'NeptunedataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'send', 'NeptunedataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptunedata', 'send', 'NeptunedataClient', Promise.reject(result), true, mock)
  }
}
