
/**
* @description mocks_v3:mockAthena module is mocks for AWS-SDK V3
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
export const mockAthena = {
  batchGetNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetNamedQuery', 'Athena', Promise.resolve(result), true, mock)
  },
  batchGetNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetNamedQuery', 'Athena', Promise.resolve(result), false, mock)
  },
  batchGetNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetNamedQuery', 'Athena', Promise.reject(result), true, mock)
  },
  batchGetPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetPreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  batchGetPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetPreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  batchGetPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetPreparedStatement', 'Athena', Promise.reject(result), true, mock)
  },
  batchGetQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  batchGetQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  batchGetQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.reject(result), true, mock)
  },
  cancelCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'cancelCapacityReservation', 'Athena', Promise.resolve(result), true, mock)
  },
  cancelCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'cancelCapacityReservation', 'Athena', Promise.resolve(result), false, mock)
  },
  cancelCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'cancelCapacityReservation', 'Athena', Promise.reject(result), true, mock)
  },
  createCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createCapacityReservation', 'Athena', Promise.resolve(result), true, mock)
  },
  createCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createCapacityReservation', 'Athena', Promise.resolve(result), false, mock)
  },
  createCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createCapacityReservation', 'Athena', Promise.reject(result), true, mock)
  },
  createDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createDataCatalog', 'Athena', Promise.resolve(result), true, mock)
  },
  createDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createDataCatalog', 'Athena', Promise.resolve(result), false, mock)
  },
  createDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createDataCatalog', 'Athena', Promise.reject(result), true, mock)
  },
  createNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNamedQuery', 'Athena', Promise.resolve(result), true, mock)
  },
  createNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNamedQuery', 'Athena', Promise.resolve(result), false, mock)
  },
  createNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNamedQuery', 'Athena', Promise.reject(result), true, mock)
  },
  createNotebook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNotebook', 'Athena', Promise.resolve(result), true, mock)
  },
  createNotebookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNotebook', 'Athena', Promise.resolve(result), false, mock)
  },
  createNotebookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createNotebook', 'Athena', Promise.reject(result), true, mock)
  },
  createPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  createPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  createPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.reject(result), true, mock)
  },
  createPresignedNotebookUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPresignedNotebookUrl', 'Athena', Promise.resolve(result), true, mock)
  },
  createPresignedNotebookUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPresignedNotebookUrl', 'Athena', Promise.resolve(result), false, mock)
  },
  createPresignedNotebookUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPresignedNotebookUrl', 'Athena', Promise.reject(result), true, mock)
  },
  createWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createWorkGroup', 'Athena', Promise.resolve(result), true, mock)
  },
  createWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createWorkGroup', 'Athena', Promise.resolve(result), false, mock)
  },
  createWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createWorkGroup', 'Athena', Promise.reject(result), true, mock)
  },
  deleteCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteCapacityReservation', 'Athena', Promise.resolve(result), true, mock)
  },
  deleteCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteCapacityReservation', 'Athena', Promise.resolve(result), false, mock)
  },
  deleteCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteCapacityReservation', 'Athena', Promise.reject(result), true, mock)
  },
  deleteDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteDataCatalog', 'Athena', Promise.resolve(result), true, mock)
  },
  deleteDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteDataCatalog', 'Athena', Promise.resolve(result), false, mock)
  },
  deleteDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteDataCatalog', 'Athena', Promise.reject(result), true, mock)
  },
  deleteNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNamedQuery', 'Athena', Promise.resolve(result), true, mock)
  },
  deleteNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNamedQuery', 'Athena', Promise.resolve(result), false, mock)
  },
  deleteNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNamedQuery', 'Athena', Promise.reject(result), true, mock)
  },
  deleteNotebook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNotebook', 'Athena', Promise.resolve(result), true, mock)
  },
  deleteNotebookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNotebook', 'Athena', Promise.resolve(result), false, mock)
  },
  deleteNotebookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteNotebook', 'Athena', Promise.reject(result), true, mock)
  },
  deletePreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deletePreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  deletePreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deletePreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  deletePreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deletePreparedStatement', 'Athena', Promise.reject(result), true, mock)
  },
  deleteWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteWorkGroup', 'Athena', Promise.resolve(result), true, mock)
  },
  deleteWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteWorkGroup', 'Athena', Promise.resolve(result), false, mock)
  },
  deleteWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'deleteWorkGroup', 'Athena', Promise.reject(result), true, mock)
  },
  exportNotebook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'exportNotebook', 'Athena', Promise.resolve(result), true, mock)
  },
  exportNotebookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'exportNotebook', 'Athena', Promise.resolve(result), false, mock)
  },
  exportNotebookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'exportNotebook', 'Athena', Promise.reject(result), true, mock)
  },
  getCalculationExecutionCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionCode', 'Athena', Promise.resolve(result), true, mock)
  },
  getCalculationExecutionCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionCode', 'Athena', Promise.resolve(result), false, mock)
  },
  getCalculationExecutionCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionCode', 'Athena', Promise.reject(result), true, mock)
  },
  getCalculationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  getCalculationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  getCalculationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecution', 'Athena', Promise.reject(result), true, mock)
  },
  getCalculationExecutionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionStatus', 'Athena', Promise.resolve(result), true, mock)
  },
  getCalculationExecutionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionStatus', 'Athena', Promise.resolve(result), false, mock)
  },
  getCalculationExecutionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCalculationExecutionStatus', 'Athena', Promise.reject(result), true, mock)
  },
  getCapacityAssignmentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityAssignmentConfiguration', 'Athena', Promise.resolve(result), true, mock)
  },
  getCapacityAssignmentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityAssignmentConfiguration', 'Athena', Promise.resolve(result), false, mock)
  },
  getCapacityAssignmentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityAssignmentConfiguration', 'Athena', Promise.reject(result), true, mock)
  },
  getCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityReservation', 'Athena', Promise.resolve(result), true, mock)
  },
  getCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityReservation', 'Athena', Promise.resolve(result), false, mock)
  },
  getCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getCapacityReservation', 'Athena', Promise.reject(result), true, mock)
  },
  getDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDataCatalog', 'Athena', Promise.resolve(result), true, mock)
  },
  getDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDataCatalog', 'Athena', Promise.resolve(result), false, mock)
  },
  getDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDataCatalog', 'Athena', Promise.reject(result), true, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDatabase', 'Athena', Promise.resolve(result), true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDatabase', 'Athena', Promise.resolve(result), false, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getDatabase', 'Athena', Promise.reject(result), true, mock)
  },
  getNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNamedQuery', 'Athena', Promise.resolve(result), true, mock)
  },
  getNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNamedQuery', 'Athena', Promise.resolve(result), false, mock)
  },
  getNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNamedQuery', 'Athena', Promise.reject(result), true, mock)
  },
  getNotebookMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNotebookMetadata', 'Athena', Promise.resolve(result), true, mock)
  },
  getNotebookMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNotebookMetadata', 'Athena', Promise.resolve(result), false, mock)
  },
  getNotebookMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getNotebookMetadata', 'Athena', Promise.reject(result), true, mock)
  },
  getPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getPreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  getPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getPreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  getPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getPreparedStatement', 'Athena', Promise.reject(result), true, mock)
  },
  getQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  getQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  getQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryExecution', 'Athena', Promise.reject(result), true, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryResults', 'Athena', Promise.resolve(result), true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryResults', 'Athena', Promise.resolve(result), false, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryResults', 'Athena', Promise.reject(result), true, mock)
  },
  getQueryRuntimeStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryRuntimeStatistics', 'Athena', Promise.resolve(result), true, mock)
  },
  getQueryRuntimeStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryRuntimeStatistics', 'Athena', Promise.resolve(result), false, mock)
  },
  getQueryRuntimeStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getQueryRuntimeStatistics', 'Athena', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSession', 'Athena', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSession', 'Athena', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSession', 'Athena', Promise.reject(result), true, mock)
  },
  getSessionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSessionStatus', 'Athena', Promise.resolve(result), true, mock)
  },
  getSessionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSessionStatus', 'Athena', Promise.resolve(result), false, mock)
  },
  getSessionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getSessionStatus', 'Athena', Promise.reject(result), true, mock)
  },
  getTableMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getTableMetadata', 'Athena', Promise.resolve(result), true, mock)
  },
  getTableMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getTableMetadata', 'Athena', Promise.resolve(result), false, mock)
  },
  getTableMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getTableMetadata', 'Athena', Promise.reject(result), true, mock)
  },
  getWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getWorkGroup', 'Athena', Promise.resolve(result), true, mock)
  },
  getWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getWorkGroup', 'Athena', Promise.resolve(result), false, mock)
  },
  getWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'getWorkGroup', 'Athena', Promise.reject(result), true, mock)
  },
  importNotebook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'importNotebook', 'Athena', Promise.resolve(result), true, mock)
  },
  importNotebookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'importNotebook', 'Athena', Promise.resolve(result), false, mock)
  },
  importNotebookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'importNotebook', 'Athena', Promise.reject(result), true, mock)
  },
  listApplicationDPUSizes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listApplicationDPUSizes', 'Athena', Promise.resolve(result), true, mock)
  },
  listApplicationDPUSizesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listApplicationDPUSizes', 'Athena', Promise.resolve(result), false, mock)
  },
  listApplicationDPUSizesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listApplicationDPUSizes', 'Athena', Promise.reject(result), true, mock)
  },
  listCalculationExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCalculationExecutions', 'Athena', Promise.resolve(result), true, mock)
  },
  listCalculationExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCalculationExecutions', 'Athena', Promise.resolve(result), false, mock)
  },
  listCalculationExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCalculationExecutions', 'Athena', Promise.reject(result), true, mock)
  },
  listCapacityReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCapacityReservations', 'Athena', Promise.resolve(result), true, mock)
  },
  listCapacityReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCapacityReservations', 'Athena', Promise.resolve(result), false, mock)
  },
  listCapacityReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listCapacityReservations', 'Athena', Promise.reject(result), true, mock)
  },
  listDataCatalogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDataCatalogs', 'Athena', Promise.resolve(result), true, mock)
  },
  listDataCatalogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDataCatalogs', 'Athena', Promise.resolve(result), false, mock)
  },
  listDataCatalogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDataCatalogs', 'Athena', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDatabases', 'Athena', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDatabases', 'Athena', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listDatabases', 'Athena', Promise.reject(result), true, mock)
  },
  listEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listEngineVersions', 'Athena', Promise.resolve(result), true, mock)
  },
  listEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listEngineVersions', 'Athena', Promise.resolve(result), false, mock)
  },
  listEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listEngineVersions', 'Athena', Promise.reject(result), true, mock)
  },
  listExecutors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listExecutors', 'Athena', Promise.resolve(result), true, mock)
  },
  listExecutorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listExecutors', 'Athena', Promise.resolve(result), false, mock)
  },
  listExecutorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listExecutors', 'Athena', Promise.reject(result), true, mock)
  },
  listNamedQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.resolve(result), true, mock)
  },
  listNamedQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.resolve(result), false, mock)
  },
  listNamedQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.reject(result), true, mock)
  },
  listNotebookMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookMetadata', 'Athena', Promise.resolve(result), true, mock)
  },
  listNotebookMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookMetadata', 'Athena', Promise.resolve(result), false, mock)
  },
  listNotebookMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookMetadata', 'Athena', Promise.reject(result), true, mock)
  },
  listNotebookSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookSessions', 'Athena', Promise.resolve(result), true, mock)
  },
  listNotebookSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookSessions', 'Athena', Promise.resolve(result), false, mock)
  },
  listNotebookSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNotebookSessions', 'Athena', Promise.reject(result), true, mock)
  },
  listPreparedStatements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listPreparedStatements', 'Athena', Promise.resolve(result), true, mock)
  },
  listPreparedStatementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listPreparedStatements', 'Athena', Promise.resolve(result), false, mock)
  },
  listPreparedStatementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listPreparedStatements', 'Athena', Promise.reject(result), true, mock)
  },
  listQueryExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listQueryExecutions', 'Athena', Promise.resolve(result), true, mock)
  },
  listQueryExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listQueryExecutions', 'Athena', Promise.resolve(result), false, mock)
  },
  listQueryExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listQueryExecutions', 'Athena', Promise.reject(result), true, mock)
  },
  listSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listSessions', 'Athena', Promise.resolve(result), true, mock)
  },
  listSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listSessions', 'Athena', Promise.resolve(result), false, mock)
  },
  listSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listSessions', 'Athena', Promise.reject(result), true, mock)
  },
  listTableMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTableMetadata', 'Athena', Promise.resolve(result), true, mock)
  },
  listTableMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTableMetadata', 'Athena', Promise.resolve(result), false, mock)
  },
  listTableMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTableMetadata', 'Athena', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTagsForResource', 'Athena', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTagsForResource', 'Athena', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listTagsForResource', 'Athena', Promise.reject(result), true, mock)
  },
  listWorkGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listWorkGroups', 'Athena', Promise.resolve(result), true, mock)
  },
  listWorkGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listWorkGroups', 'Athena', Promise.resolve(result), false, mock)
  },
  listWorkGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listWorkGroups', 'Athena', Promise.reject(result), true, mock)
  },
  putCapacityAssignmentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'putCapacityAssignmentConfiguration', 'Athena', Promise.resolve(result), true, mock)
  },
  putCapacityAssignmentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'putCapacityAssignmentConfiguration', 'Athena', Promise.resolve(result), false, mock)
  },
  putCapacityAssignmentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'putCapacityAssignmentConfiguration', 'Athena', Promise.reject(result), true, mock)
  },
  startCalculationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startCalculationExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  startCalculationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startCalculationExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  startCalculationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startCalculationExecution', 'Athena', Promise.reject(result), true, mock)
  },
  startQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  startQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  startQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.reject(result), true, mock)
  },
  startSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startSession', 'Athena', Promise.resolve(result), true, mock)
  },
  startSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startSession', 'Athena', Promise.resolve(result), false, mock)
  },
  startSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startSession', 'Athena', Promise.reject(result), true, mock)
  },
  stopCalculationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopCalculationExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  stopCalculationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopCalculationExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  stopCalculationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopCalculationExecution', 'Athena', Promise.reject(result), true, mock)
  },
  stopQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  stopQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  stopQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'stopQueryExecution', 'Athena', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'tagResource', 'Athena', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'tagResource', 'Athena', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'tagResource', 'Athena', Promise.reject(result), true, mock)
  },
  terminateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'terminateSession', 'Athena', Promise.resolve(result), true, mock)
  },
  terminateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'terminateSession', 'Athena', Promise.resolve(result), false, mock)
  },
  terminateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'terminateSession', 'Athena', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.reject(result), true, mock)
  },
  updateCapacityReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateCapacityReservation', 'Athena', Promise.resolve(result), true, mock)
  },
  updateCapacityReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateCapacityReservation', 'Athena', Promise.resolve(result), false, mock)
  },
  updateCapacityReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateCapacityReservation', 'Athena', Promise.reject(result), true, mock)
  },
  updateDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateDataCatalog', 'Athena', Promise.resolve(result), true, mock)
  },
  updateDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateDataCatalog', 'Athena', Promise.resolve(result), false, mock)
  },
  updateDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateDataCatalog', 'Athena', Promise.reject(result), true, mock)
  },
  updateNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNamedQuery', 'Athena', Promise.resolve(result), true, mock)
  },
  updateNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNamedQuery', 'Athena', Promise.resolve(result), false, mock)
  },
  updateNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNamedQuery', 'Athena', Promise.reject(result), true, mock)
  },
  updateNotebook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebook', 'Athena', Promise.resolve(result), true, mock)
  },
  updateNotebookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebook', 'Athena', Promise.resolve(result), false, mock)
  },
  updateNotebookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebook', 'Athena', Promise.reject(result), true, mock)
  },
  updateNotebookMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebookMetadata', 'Athena', Promise.resolve(result), true, mock)
  },
  updateNotebookMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebookMetadata', 'Athena', Promise.resolve(result), false, mock)
  },
  updateNotebookMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateNotebookMetadata', 'Athena', Promise.reject(result), true, mock)
  },
  updatePreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updatePreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  updatePreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updatePreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  updatePreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updatePreparedStatement', 'Athena', Promise.reject(result), true, mock)
  },
  updateWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateWorkGroup', 'Athena', Promise.resolve(result), true, mock)
  },
  updateWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateWorkGroup', 'Athena', Promise.resolve(result), false, mock)
  },
  updateWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'updateWorkGroup', 'Athena', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'send', 'AthenaClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'send', 'AthenaClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'send', 'AthenaClient', Promise.reject(result), true, mock)
  }
}
