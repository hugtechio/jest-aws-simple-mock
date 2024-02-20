
/**
* @description mocks_v3:mockDynamoDB module is mocks for AWS-SDK V3
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
export const mockDynamoDB = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchExecuteStatement', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchExecuteStatement', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchExecuteStatement', 'DynamoDB', Promise.reject(result), true, mock)
  },
  batchGetItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchGetItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  batchGetItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchGetItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  batchGetItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchGetItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  batchWriteItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchWriteItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  batchWriteItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchWriteItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  batchWriteItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'batchWriteItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  createBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createBackup', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  createBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createBackup', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  createBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createBackup', 'DynamoDB', Promise.reject(result), true, mock)
  },
  createGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createGlobalTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  createGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createGlobalTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  createGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createGlobalTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'createTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteBackup', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteBackup', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteBackup', 'DynamoDB', Promise.reject(result), true, mock)
  },
  deleteItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  deleteItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  deleteItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'deleteTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeBackup', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeBackup', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeBackup', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeContinuousBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContinuousBackups', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeContinuousBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContinuousBackups', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeContinuousBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContinuousBackups', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContributorInsights', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContributorInsights', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeContributorInsights', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeEndpoints', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeEndpoints', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeEndpoints', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeExport', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeExport', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeExport', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeGlobalTableSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTableSettings', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeGlobalTableSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTableSettings', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeGlobalTableSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeGlobalTableSettings', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeImport', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeImport', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeImport', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeKinesisStreamingDestination', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeLimits', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeLimits', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeLimits', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeTableReplicaAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTableReplicaAutoScaling', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeTableReplicaAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTableReplicaAutoScaling', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeTableReplicaAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTableReplicaAutoScaling', 'DynamoDB', Promise.reject(result), true, mock)
  },
  describeTimeToLive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTimeToLive', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  describeTimeToLiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTimeToLive', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  describeTimeToLiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'describeTimeToLive', 'DynamoDB', Promise.reject(result), true, mock)
  },
  disableKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'disableKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  disableKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'disableKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  disableKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'disableKinesisStreamingDestination', 'DynamoDB', Promise.reject(result), true, mock)
  },
  enableKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'enableKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  enableKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'enableKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  enableKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'enableKinesisStreamingDestination', 'DynamoDB', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeStatement', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeStatement', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeStatement', 'DynamoDB', Promise.reject(result), true, mock)
  },
  executeTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeTransaction', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  executeTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeTransaction', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  executeTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'executeTransaction', 'DynamoDB', Promise.reject(result), true, mock)
  },
  exportTableToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'exportTableToPointInTime', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  exportTableToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'exportTableToPointInTime', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  exportTableToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'exportTableToPointInTime', 'DynamoDB', Promise.reject(result), true, mock)
  },
  getItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'getItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  getItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'getItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  getItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'getItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  importTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'importTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  importTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'importTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  importTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'importTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listBackups', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listBackups', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listBackups', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listContributorInsights', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listContributorInsights', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listContributorInsights', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listExports', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listExports', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listExports', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listGlobalTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listGlobalTables', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listGlobalTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listGlobalTables', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listGlobalTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listGlobalTables', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listImports', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listImports', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listImports', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTables', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTables', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTables', 'DynamoDB', Promise.reject(result), true, mock)
  },
  listTagsOfResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTagsOfResource', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  listTagsOfResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTagsOfResource', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  listTagsOfResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'listTagsOfResource', 'DynamoDB', Promise.reject(result), true, mock)
  },
  putItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'putItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  putItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'putItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  putItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'putItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'query', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'query', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'query', 'DynamoDB', Promise.reject(result), true, mock)
  },
  restoreTableFromBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableFromBackup', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  restoreTableFromBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableFromBackup', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  restoreTableFromBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableFromBackup', 'DynamoDB', Promise.reject(result), true, mock)
  },
  restoreTableToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableToPointInTime', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  restoreTableToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableToPointInTime', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  restoreTableToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'restoreTableToPointInTime', 'DynamoDB', Promise.reject(result), true, mock)
  },
  scan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'scan', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  scanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'scan', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  scanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'scan', 'DynamoDB', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'tagResource', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'tagResource', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'tagResource', 'DynamoDB', Promise.reject(result), true, mock)
  },
  transactGetItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactGetItems', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  transactGetItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactGetItems', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  transactGetItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactGetItems', 'DynamoDB', Promise.reject(result), true, mock)
  },
  transactWriteItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactWriteItems', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  transactWriteItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactWriteItems', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  transactWriteItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'transactWriteItems', 'DynamoDB', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'untagResource', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'untagResource', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'untagResource', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateContinuousBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContinuousBackups', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateContinuousBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContinuousBackups', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateContinuousBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContinuousBackups', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContributorInsights', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContributorInsights', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateContributorInsights', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateGlobalTableSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTableSettings', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateGlobalTableSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTableSettings', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateGlobalTableSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateGlobalTableSettings', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateItem', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateItem', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateItem', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateKinesisStreamingDestination', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateKinesisStreamingDestination', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTable', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTable', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTable', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateTableReplicaAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTableReplicaAutoScaling', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateTableReplicaAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTableReplicaAutoScaling', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateTableReplicaAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTableReplicaAutoScaling', 'DynamoDB', Promise.reject(result), true, mock)
  },
  updateTimeToLive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTimeToLive', 'DynamoDB', Promise.resolve(result), true, mock)
  },
  updateTimeToLiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTimeToLive', 'DynamoDB', Promise.resolve(result), false, mock)
  },
  updateTimeToLiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'updateTimeToLive', 'DynamoDB', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'send', 'DynamoDBClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'send', 'DynamoDBClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb', 'send', 'DynamoDBClient', Promise.reject(result), true, mock)
  }
}
