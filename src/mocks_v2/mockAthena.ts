
/**
* @description mocks_v2:mockAthena.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockAthena = {
  batchGetNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetNamedQuery', 'Athena', result, true, true, mock)
  },
  batchGetNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetNamedQuery', 'Athena', result, false, true, mock)
  },
  batchGetNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetNamedQuery', 'Athena', result, true, false, mock)
  },
  batchGetQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetQueryExecution', 'Athena', result, true, true, mock)
  },
  batchGetQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetQueryExecution', 'Athena', result, false, true, mock)
  },
  batchGetQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetQueryExecution', 'Athena', result, true, false, mock)
  },
  createDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataCatalog', 'Athena', result, true, true, mock)
  },
  createDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataCatalog', 'Athena', result, false, true, mock)
  },
  createDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataCatalog', 'Athena', result, true, false, mock)
  },
  createNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNamedQuery', 'Athena', result, true, true, mock)
  },
  createNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNamedQuery', 'Athena', result, false, true, mock)
  },
  createNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNamedQuery', 'Athena', result, true, false, mock)
  },
  createPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreparedStatement', 'Athena', result, true, true, mock)
  },
  createPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreparedStatement', 'Athena', result, false, true, mock)
  },
  createPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreparedStatement', 'Athena', result, true, false, mock)
  },
  createWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkGroup', 'Athena', result, true, true, mock)
  },
  createWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkGroup', 'Athena', result, false, true, mock)
  },
  createWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkGroup', 'Athena', result, true, false, mock)
  },
  deleteDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataCatalog', 'Athena', result, true, true, mock)
  },
  deleteDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataCatalog', 'Athena', result, false, true, mock)
  },
  deleteDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataCatalog', 'Athena', result, true, false, mock)
  },
  deleteNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamedQuery', 'Athena', result, true, true, mock)
  },
  deleteNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamedQuery', 'Athena', result, false, true, mock)
  },
  deleteNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamedQuery', 'Athena', result, true, false, mock)
  },
  deletePreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreparedStatement', 'Athena', result, true, true, mock)
  },
  deletePreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreparedStatement', 'Athena', result, false, true, mock)
  },
  deletePreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreparedStatement', 'Athena', result, true, false, mock)
  },
  deleteWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkGroup', 'Athena', result, true, true, mock)
  },
  deleteWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkGroup', 'Athena', result, false, true, mock)
  },
  deleteWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkGroup', 'Athena', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Athena', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Athena', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Athena', result, true, false, mock)
  },
  getDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalog', 'Athena', result, true, true, mock)
  },
  getDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalog', 'Athena', result, false, true, mock)
  },
  getDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataCatalog', 'Athena', result, true, false, mock)
  },
  getDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Athena', result, true, true, mock)
  },
  getDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Athena', result, false, true, mock)
  },
  getDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatabase', 'Athena', result, true, false, mock)
  },
  getNamedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamedQuery', 'Athena', result, true, true, mock)
  },
  getNamedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamedQuery', 'Athena', result, false, true, mock)
  },
  getNamedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamedQuery', 'Athena', result, true, false, mock)
  },
  getPreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreparedStatement', 'Athena', result, true, true, mock)
  },
  getPreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreparedStatement', 'Athena', result, false, true, mock)
  },
  getPreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPreparedStatement', 'Athena', result, true, false, mock)
  },
  getQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryExecution', 'Athena', result, true, true, mock)
  },
  getQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryExecution', 'Athena', result, false, true, mock)
  },
  getQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryExecution', 'Athena', result, true, false, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'Athena', result, true, true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'Athena', result, false, true, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueryResults', 'Athena', result, true, false, mock)
  },
  getTableMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableMetadata', 'Athena', result, true, true, mock)
  },
  getTableMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableMetadata', 'Athena', result, false, true, mock)
  },
  getTableMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTableMetadata', 'Athena', result, true, false, mock)
  },
  getWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkGroup', 'Athena', result, true, true, mock)
  },
  getWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkGroup', 'Athena', result, false, true, mock)
  },
  getWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkGroup', 'Athena', result, true, false, mock)
  },
  listDataCatalogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataCatalogs', 'Athena', result, true, true, mock)
  },
  listDataCatalogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataCatalogs', 'Athena', result, false, true, mock)
  },
  listDataCatalogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataCatalogs', 'Athena', result, true, false, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'Athena', result, true, true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'Athena', result, false, true, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'Athena', result, true, false, mock)
  },
  listEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngineVersions', 'Athena', result, true, true, mock)
  },
  listEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngineVersions', 'Athena', result, false, true, mock)
  },
  listEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngineVersions', 'Athena', result, true, false, mock)
  },
  listNamedQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedQueries', 'Athena', result, true, true, mock)
  },
  listNamedQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedQueries', 'Athena', result, false, true, mock)
  },
  listNamedQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedQueries', 'Athena', result, true, false, mock)
  },
  listPreparedStatements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPreparedStatements', 'Athena', result, true, true, mock)
  },
  listPreparedStatementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPreparedStatements', 'Athena', result, false, true, mock)
  },
  listPreparedStatementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPreparedStatements', 'Athena', result, true, false, mock)
  },
  listQueryExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueryExecutions', 'Athena', result, true, true, mock)
  },
  listQueryExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueryExecutions', 'Athena', result, false, true, mock)
  },
  listQueryExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueryExecutions', 'Athena', result, true, false, mock)
  },
  listTableMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableMetadata', 'Athena', result, true, true, mock)
  },
  listTableMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableMetadata', 'Athena', result, false, true, mock)
  },
  listTableMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableMetadata', 'Athena', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Athena', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Athena', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Athena', result, true, false, mock)
  },
  listWorkGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkGroups', 'Athena', result, true, true, mock)
  },
  listWorkGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkGroups', 'Athena', result, false, true, mock)
  },
  listWorkGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkGroups', 'Athena', result, true, false, mock)
  },
  startQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQueryExecution', 'Athena', result, true, true, mock)
  },
  startQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQueryExecution', 'Athena', result, false, true, mock)
  },
  startQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startQueryExecution', 'Athena', result, true, false, mock)
  },
  stopQueryExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQueryExecution', 'Athena', result, true, true, mock)
  },
  stopQueryExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQueryExecution', 'Athena', result, false, true, mock)
  },
  stopQueryExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopQueryExecution', 'Athena', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Athena', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Athena', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Athena', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Athena', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Athena', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Athena', result, true, false, mock)
  },
  updateDataCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataCatalog', 'Athena', result, true, true, mock)
  },
  updateDataCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataCatalog', 'Athena', result, false, true, mock)
  },
  updateDataCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataCatalog', 'Athena', result, true, false, mock)
  },
  updatePreparedStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreparedStatement', 'Athena', result, true, true, mock)
  },
  updatePreparedStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreparedStatement', 'Athena', result, false, true, mock)
  },
  updatePreparedStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePreparedStatement', 'Athena', result, true, false, mock)
  },
  updateWorkGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkGroup', 'Athena', result, true, true, mock)
  },
  updateWorkGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkGroup', 'Athena', result, false, true, mock)
  },
  updateWorkGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkGroup', 'Athena', result, true, false, mock)
  },
}
