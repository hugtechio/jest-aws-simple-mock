
/**
* @description mocks_v2:mockCognitoSync.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCognitoSync = {
  bulkPublish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', result, true, true, mock)
  },
  bulkPublishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', result, false, true, mock)
  },
  bulkPublishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', result, true, false, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', result, true, true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', result, false, true, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', result, true, false, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', result, true, true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', result, false, true, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', result, true, false, mock)
  },
  describeIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', result, true, true, mock)
  },
  describeIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', result, false, true, mock)
  },
  describeIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', result, true, false, mock)
  },
  describeIdentityUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', result, true, true, mock)
  },
  describeIdentityUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', result, false, true, mock)
  },
  describeIdentityUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', result, true, false, mock)
  },
  getBulkPublishDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', result, true, true, mock)
  },
  getBulkPublishDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', result, false, true, mock)
  },
  getBulkPublishDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', result, true, false, mock)
  },
  getCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', result, true, true, mock)
  },
  getCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', result, false, true, mock)
  },
  getCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', result, true, false, mock)
  },
  getIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', result, true, true, mock)
  },
  getIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', result, false, true, mock)
  },
  getIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', result, true, false, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', result, true, true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', result, false, true, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', result, true, false, mock)
  },
  listIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', result, true, true, mock)
  },
  listIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', result, false, true, mock)
  },
  listIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', result, true, false, mock)
  },
  listRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', result, true, true, mock)
  },
  listRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', result, false, true, mock)
  },
  listRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', result, true, false, mock)
  },
  registerDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', result, true, true, mock)
  },
  registerDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', result, false, true, mock)
  },
  registerDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', result, true, false, mock)
  },
  setCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', result, true, true, mock)
  },
  setCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', result, false, true, mock)
  },
  setCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', result, true, false, mock)
  },
  setIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', result, true, true, mock)
  },
  setIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', result, false, true, mock)
  },
  setIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', result, true, false, mock)
  },
  subscribeToDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', result, true, true, mock)
  },
  subscribeToDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', result, false, true, mock)
  },
  subscribeToDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', result, true, false, mock)
  },
  unsubscribeFromDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', result, true, true, mock)
  },
  unsubscribeFromDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', result, false, true, mock)
  },
  unsubscribeFromDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', result, true, false, mock)
  },
  updateRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', result, true, true, mock)
  },
  updateRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', result, false, true, mock)
  },
  updateRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', result, true, false, mock)
  },
}
