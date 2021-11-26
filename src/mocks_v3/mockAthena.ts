
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
  batchGetQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  batchGetQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  batchGetQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'batchGetQueryExecution', 'Athena', Promise.reject(result), true, mock)
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
  createPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.resolve(result), true, mock)
  },
  createPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.resolve(result), false, mock)
  },
  createPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'createPreparedStatement', 'Athena', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'destroy', 'Athena', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'destroy', 'Athena', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'destroy', 'Athena', Promise.reject(result), true, mock)
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
  listNamedQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.resolve(result), true, mock)
  },
  listNamedQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.resolve(result), false, mock)
  },
  listNamedQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'listNamedQueries', 'Athena', Promise.reject(result), true, mock)
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
  startQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.resolve(result), true, mock)
  },
  startQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.resolve(result), false, mock)
  },
  startQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'startQueryExecution', 'Athena', Promise.reject(result), true, mock)
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
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-athena', 'untagResource', 'Athena', Promise.reject(result), true, mock)
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