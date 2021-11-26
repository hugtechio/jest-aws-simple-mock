
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
  export const mockDataExchange = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  createDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  createEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  createRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  createRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  createRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  deleteRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  deleteRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  deleteRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataExchange', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataExchange', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataExchange', Promise.reject(result), true, mock)
  },
  getAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  getDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  getEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  getRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  getRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  getRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
  listDataSetRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSetRevisions', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listDataSetRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSetRevisions', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listDataSetRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSetRevisions', 'DataExchange', Promise.reject(result), true, mock)
  },
  listDataSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSets', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listDataSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSets', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listDataSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataSets', 'DataExchange', Promise.reject(result), true, mock)
  },
  listEventActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventActions', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listEventActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventActions', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listEventActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventActions', 'DataExchange', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataExchange', Promise.reject(result), true, mock)
  },
  listRevisionAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRevisionAssets', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listRevisionAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRevisionAssets', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listRevisionAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRevisionAssets', 'DataExchange', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  startJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'DataExchange', Promise.resolve(result), true, mock)
  },
  startJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'DataExchange', Promise.resolve(result), false, mock)
  },
  startJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'DataExchange', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataExchange', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataExchange', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAsset', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAsset', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAsset', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSet', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSet', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSet', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateEventAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventAction', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateEventActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventAction', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateEventActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventAction', 'DataExchange', Promise.reject(result), true, mock)
  },
  updateRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRevision', 'DataExchange', Promise.resolve(result), true, mock)
  },
  updateRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRevision', 'DataExchange', Promise.resolve(result), false, mock)
  },
  updateRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRevision', 'DataExchange', Promise.reject(result), true, mock)
  },
}
