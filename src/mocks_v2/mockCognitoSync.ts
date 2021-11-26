
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockCognitoSync = {
  bulkPublish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  bulkPublishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  bulkPublishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('bulkPublish', 'CognitoSync', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPoolUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  describeIdentityUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  describeIdentityUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  describeIdentityUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getBulkPublishDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getBulkPublishDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getBulkPublishDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBulkPublishDetails', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCognitoEvents', 'CognitoSync', Promise.reject(result), true, mock)
  },
  getIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  getIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  getIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolConfiguration', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listIdentityPoolUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listIdentityPoolUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listIdentityPoolUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPoolUsage', 'CognitoSync', Promise.reject(result), true, mock)
  },
  listRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  listRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  listRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecords', 'CognitoSync', Promise.reject(result), true, mock)
  },
  registerDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  registerDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  registerDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDevice', 'CognitoSync', Promise.reject(result), true, mock)
  },
  setCognitoEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  setCognitoEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  setCognitoEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setCognitoEvents', 'CognitoSync', Promise.reject(result), true, mock)
  },
  setIdentityPoolConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  setIdentityPoolConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  setIdentityPoolConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolConfiguration', 'CognitoSync', Promise.reject(result), true, mock)
  },
  subscribeToDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  subscribeToDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  subscribeToDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  unsubscribeFromDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  unsubscribeFromDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  unsubscribeFromDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribeFromDataset', 'CognitoSync', Promise.reject(result), true, mock)
  },
  updateRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', Promise.resolve(result), true, mock)
  },
  updateRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', Promise.resolve(result), false, mock)
  },
  updateRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecords', 'CognitoSync', Promise.reject(result), true, mock)
  },
}
