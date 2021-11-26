
/**
* @description mocks_v2:mockDynamoDB.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockDynamoDB = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'DynamoDB', result, true, true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'DynamoDB', result, false, true, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'DynamoDB', result, true, false, mock)
  },
  batchGetItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetItem', 'DynamoDB', result, true, true, mock)
  },
  batchGetItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetItem', 'DynamoDB', result, false, true, mock)
  },
  batchGetItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetItem', 'DynamoDB', result, true, false, mock)
  },
  batchWriteItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWriteItem', 'DynamoDB', result, true, true, mock)
  },
  batchWriteItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWriteItem', 'DynamoDB', result, false, true, mock)
  },
  batchWriteItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWriteItem', 'DynamoDB', result, true, false, mock)
  },
  createBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'DynamoDB', result, true, true, mock)
  },
  createBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'DynamoDB', result, false, true, mock)
  },
  createBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'DynamoDB', result, true, false, mock)
  },
  createGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalTable', 'DynamoDB', result, true, true, mock)
  },
  createGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalTable', 'DynamoDB', result, false, true, mock)
  },
  createGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalTable', 'DynamoDB', result, true, false, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'DynamoDB', result, true, true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'DynamoDB', result, false, true, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'DynamoDB', result, true, false, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'DynamoDB', result, true, true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'DynamoDB', result, false, true, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'DynamoDB', result, true, false, mock)
  },
  deleteItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteItem', 'DynamoDB', result, true, true, mock)
  },
  deleteItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteItem', 'DynamoDB', result, false, true, mock)
  },
  deleteItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteItem', 'DynamoDB', result, true, false, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'DynamoDB', result, true, true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'DynamoDB', result, false, true, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'DynamoDB', result, true, false, mock)
  },
  describeBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackup', 'DynamoDB', result, true, true, mock)
  },
  describeBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackup', 'DynamoDB', result, false, true, mock)
  },
  describeBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackup', 'DynamoDB', result, true, false, mock)
  },
  describeContinuousBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousBackups', 'DynamoDB', result, true, true, mock)
  },
  describeContinuousBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousBackups', 'DynamoDB', result, false, true, mock)
  },
  describeContinuousBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContinuousBackups', 'DynamoDB', result, true, false, mock)
  },
  describeContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContributorInsights', 'DynamoDB', result, true, true, mock)
  },
  describeContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContributorInsights', 'DynamoDB', result, false, true, mock)
  },
  describeContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContributorInsights', 'DynamoDB', result, true, false, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DynamoDB', result, true, true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DynamoDB', result, false, true, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'DynamoDB', result, true, false, mock)
  },
  describeExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'DynamoDB', result, true, true, mock)
  },
  describeExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'DynamoDB', result, false, true, mock)
  },
  describeExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'DynamoDB', result, true, false, mock)
  },
  describeGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTable', 'DynamoDB', result, true, true, mock)
  },
  describeGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTable', 'DynamoDB', result, false, true, mock)
  },
  describeGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTable', 'DynamoDB', result, true, false, mock)
  },
  describeGlobalTableSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTableSettings', 'DynamoDB', result, true, true, mock)
  },
  describeGlobalTableSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTableSettings', 'DynamoDB', result, false, true, mock)
  },
  describeGlobalTableSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalTableSettings', 'DynamoDB', result, true, false, mock)
  },
  describeKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKinesisStreamingDestination', 'DynamoDB', result, true, true, mock)
  },
  describeKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKinesisStreamingDestination', 'DynamoDB', result, false, true, mock)
  },
  describeKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKinesisStreamingDestination', 'DynamoDB', result, true, false, mock)
  },
  describeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'DynamoDB', result, true, true, mock)
  },
  describeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'DynamoDB', result, false, true, mock)
  },
  describeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'DynamoDB', result, true, false, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'DynamoDB', result, true, true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'DynamoDB', result, false, true, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'DynamoDB', result, true, false, mock)
  },
  describeTableReplicaAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableReplicaAutoScaling', 'DynamoDB', result, true, true, mock)
  },
  describeTableReplicaAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableReplicaAutoScaling', 'DynamoDB', result, false, true, mock)
  },
  describeTableReplicaAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableReplicaAutoScaling', 'DynamoDB', result, true, false, mock)
  },
  describeTimeToLive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTimeToLive', 'DynamoDB', result, true, true, mock)
  },
  describeTimeToLiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTimeToLive', 'DynamoDB', result, false, true, mock)
  },
  describeTimeToLiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTimeToLive', 'DynamoDB', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDB', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDB', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDB', result, true, false, mock)
  },
  disableKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKinesisStreamingDestination', 'DynamoDB', result, true, true, mock)
  },
  disableKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKinesisStreamingDestination', 'DynamoDB', result, false, true, mock)
  },
  disableKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKinesisStreamingDestination', 'DynamoDB', result, true, false, mock)
  },
  enableKinesisStreamingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKinesisStreamingDestination', 'DynamoDB', result, true, true, mock)
  },
  enableKinesisStreamingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKinesisStreamingDestination', 'DynamoDB', result, false, true, mock)
  },
  enableKinesisStreamingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKinesisStreamingDestination', 'DynamoDB', result, true, false, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'DynamoDB', result, true, true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'DynamoDB', result, false, true, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'DynamoDB', result, true, false, mock)
  },
  executeTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeTransaction', 'DynamoDB', result, true, true, mock)
  },
  executeTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeTransaction', 'DynamoDB', result, false, true, mock)
  },
  executeTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeTransaction', 'DynamoDB', result, true, false, mock)
  },
  exportTableToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportTableToPointInTime', 'DynamoDB', result, true, true, mock)
  },
  exportTableToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportTableToPointInTime', 'DynamoDB', result, false, true, mock)
  },
  exportTableToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportTableToPointInTime', 'DynamoDB', result, true, false, mock)
  },
  getItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getItem', 'DynamoDB', result, true, true, mock)
  },
  getItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getItem', 'DynamoDB', result, false, true, mock)
  },
  getItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getItem', 'DynamoDB', result, true, false, mock)
  },
  listBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackups', 'DynamoDB', result, true, true, mock)
  },
  listBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackups', 'DynamoDB', result, false, true, mock)
  },
  listBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackups', 'DynamoDB', result, true, false, mock)
  },
  listContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContributorInsights', 'DynamoDB', result, true, true, mock)
  },
  listContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContributorInsights', 'DynamoDB', result, false, true, mock)
  },
  listContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContributorInsights', 'DynamoDB', result, true, false, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'DynamoDB', result, true, true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'DynamoDB', result, false, true, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'DynamoDB', result, true, false, mock)
  },
  listGlobalTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGlobalTables', 'DynamoDB', result, true, true, mock)
  },
  listGlobalTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGlobalTables', 'DynamoDB', result, false, true, mock)
  },
  listGlobalTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGlobalTables', 'DynamoDB', result, true, false, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'DynamoDB', result, true, true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'DynamoDB', result, false, true, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'DynamoDB', result, true, false, mock)
  },
  listTagsOfResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsOfResource', 'DynamoDB', result, true, true, mock)
  },
  listTagsOfResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsOfResource', 'DynamoDB', result, false, true, mock)
  },
  listTagsOfResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsOfResource', 'DynamoDB', result, true, false, mock)
  },
  putItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItem', 'DynamoDB', result, true, true, mock)
  },
  putItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItem', 'DynamoDB', result, false, true, mock)
  },
  putItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItem', 'DynamoDB', result, true, false, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DynamoDB', result, true, true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DynamoDB', result, false, true, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('query', 'DynamoDB', result, true, false, mock)
  },
  restoreTableFromBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromBackup', 'DynamoDB', result, true, true, mock)
  },
  restoreTableFromBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromBackup', 'DynamoDB', result, false, true, mock)
  },
  restoreTableFromBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromBackup', 'DynamoDB', result, true, false, mock)
  },
  restoreTableToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableToPointInTime', 'DynamoDB', result, true, true, mock)
  },
  restoreTableToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableToPointInTime', 'DynamoDB', result, false, true, mock)
  },
  restoreTableToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableToPointInTime', 'DynamoDB', result, true, false, mock)
  },
  scan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DynamoDB', result, true, true, mock)
  },
  scanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DynamoDB', result, false, true, mock)
  },
  scanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scan', 'DynamoDB', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DynamoDB', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DynamoDB', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DynamoDB', result, true, false, mock)
  },
  transactGetItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGetItems', 'DynamoDB', result, true, true, mock)
  },
  transactGetItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGetItems', 'DynamoDB', result, false, true, mock)
  },
  transactGetItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactGetItems', 'DynamoDB', result, true, false, mock)
  },
  transactWriteItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWriteItems', 'DynamoDB', result, true, true, mock)
  },
  transactWriteItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWriteItems', 'DynamoDB', result, false, true, mock)
  },
  transactWriteItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transactWriteItems', 'DynamoDB', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DynamoDB', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DynamoDB', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DynamoDB', result, true, false, mock)
  },
  updateContinuousBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContinuousBackups', 'DynamoDB', result, true, true, mock)
  },
  updateContinuousBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContinuousBackups', 'DynamoDB', result, false, true, mock)
  },
  updateContinuousBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContinuousBackups', 'DynamoDB', result, true, false, mock)
  },
  updateContributorInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContributorInsights', 'DynamoDB', result, true, true, mock)
  },
  updateContributorInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContributorInsights', 'DynamoDB', result, false, true, mock)
  },
  updateContributorInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContributorInsights', 'DynamoDB', result, true, false, mock)
  },
  updateGlobalTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTable', 'DynamoDB', result, true, true, mock)
  },
  updateGlobalTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTable', 'DynamoDB', result, false, true, mock)
  },
  updateGlobalTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTable', 'DynamoDB', result, true, false, mock)
  },
  updateGlobalTableSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTableSettings', 'DynamoDB', result, true, true, mock)
  },
  updateGlobalTableSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTableSettings', 'DynamoDB', result, false, true, mock)
  },
  updateGlobalTableSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalTableSettings', 'DynamoDB', result, true, false, mock)
  },
  updateItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateItem', 'DynamoDB', result, true, true, mock)
  },
  updateItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateItem', 'DynamoDB', result, false, true, mock)
  },
  updateItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateItem', 'DynamoDB', result, true, false, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'DynamoDB', result, true, true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'DynamoDB', result, false, true, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'DynamoDB', result, true, false, mock)
  },
  updateTableReplicaAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTableReplicaAutoScaling', 'DynamoDB', result, true, true, mock)
  },
  updateTableReplicaAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTableReplicaAutoScaling', 'DynamoDB', result, false, true, mock)
  },
  updateTableReplicaAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTableReplicaAutoScaling', 'DynamoDB', result, true, false, mock)
  },
  updateTimeToLive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimeToLive', 'DynamoDB', result, true, true, mock)
  },
  updateTimeToLiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimeToLive', 'DynamoDB', result, false, true, mock)
  },
  updateTimeToLiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTimeToLive', 'DynamoDB', result, true, false, mock)
  },
}
