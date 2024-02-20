
/**
* @description mocks_v3:mockCognitoSync module is mocks for AWS-SDK V3
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
export const mockCognitoSync = {
  bulkPublish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'bulkPublish', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  bulkPublishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'bulkPublish', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  bulkPublishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'bulkPublish', 'CognitoSync', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'deleteDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'deleteDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'deleteDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityPoolUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeIdentityUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeIdentityUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeIdentityUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'describeIdentityUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getBulkPublishDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getBulkPublishDetails', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getBulkPublishDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getBulkPublishDetails', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getBulkPublishDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getBulkPublishDetails', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getCognitoEvents', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getCognitoEvents', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getCognitoEvents', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'getIdentityPoolConfiguration', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listDatasets', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listDatasets', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listDatasets', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listIdentityPoolUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listRecords', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listRecords', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'listRecords', 'CognitoSync', Promise.reject(result), true, mock)
  },
  registerDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'registerDevice', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  registerDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'registerDevice', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  registerDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'registerDevice', 'CognitoSync', Promise.reject(result), true, mock)
  },
  setCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setCognitoEvents', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  setCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setCognitoEvents', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  setCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setCognitoEvents', 'CognitoSync', Promise.reject(result), true, mock)
  },
  setIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  setIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  setIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'setIdentityPoolConfiguration', 'CognitoSync', Promise.reject(result), true, mock)
  },
  subscribeToDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'subscribeToDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  subscribeToDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'subscribeToDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  subscribeToDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'subscribeToDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  unsubscribeFromDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'unsubscribeFromDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  unsubscribeFromDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'unsubscribeFromDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  unsubscribeFromDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'unsubscribeFromDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  updateRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'updateRecords', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  updateRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'updateRecords', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  updateRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'updateRecords', 'CognitoSync', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'send', 'CognitoSyncClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'send', 'CognitoSyncClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cognito-sync', 'send', 'CognitoSyncClient', Promise.reject(result), true, mock)
  }
}
