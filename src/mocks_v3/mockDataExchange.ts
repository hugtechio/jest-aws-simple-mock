
/**
* @description mocks_v3:mockDataExchange module is mocks for AWS-SDK V3
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
export const mockDataExchange = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'cancelJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'cancelJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'cancelJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  createDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  createEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  createRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'createRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'deleteRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  getAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  getDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  getEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  getRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'getRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  listDataSetRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSetRevisions', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listDataSetRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSetRevisions', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listDataSetRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSetRevisions', 'DataExchange', Promise.reject(result), true, mock)
  },
  listDataSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSets', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listDataSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSets', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listDataSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listDataSets', 'DataExchange', Promise.reject(result), true, mock)
  },
  listEventActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listEventActions', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listEventActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listEventActions', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listEventActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listEventActions', 'DataExchange', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listJobs', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listJobs', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listJobs', 'DataExchange', Promise.reject(result), true, mock)
  },
  listRevisionAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listRevisionAssets', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listRevisionAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listRevisionAssets', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listRevisionAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listRevisionAssets', 'DataExchange', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listTagsForResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listTagsForResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'listTagsForResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  revokeRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'revokeRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  revokeRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'revokeRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  revokeRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'revokeRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  sendApiAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendApiAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  sendApiAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendApiAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  sendApiAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendApiAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  sendDataSetNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendDataSetNotification', 'DataExchange', Promise.resolve(result), true, mock)
  },
  sendDataSetNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendDataSetNotification', 'DataExchange', Promise.resolve(result), false, mock)
  },
  sendDataSetNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'sendDataSetNotification', 'DataExchange', Promise.reject(result), true, mock)
  },
  startJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'startJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  startJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'startJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  startJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'startJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'tagResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'tagResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'tagResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'untagResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'untagResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'untagResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'updateRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'send', 'DataExchangeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'send', 'DataExchangeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dataexchange', 'send', 'DataExchangeClient', Promise.reject(result), true, mock)
  }
}
