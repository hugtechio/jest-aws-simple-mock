
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
  export const mockKinesis = {
  addTagsToStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  addTagsToStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  addTagsToStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  createStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  createStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  createStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  decreaseStreamRetentionPeriod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseStreamRetentionPeriod', 'Kinesis', Promise.resolve(result), true, mock)
  },
  decreaseStreamRetentionPeriodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseStreamRetentionPeriod', 'Kinesis', Promise.resolve(result), false, mock)
  },
  decreaseStreamRetentionPeriodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseStreamRetentionPeriod', 'Kinesis', Promise.reject(result), true, mock)
  },
  deleteStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  deleteStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  deleteStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  deregisterStreamConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterStreamConsumer', 'Kinesis', Promise.resolve(result), true, mock)
  },
  deregisterStreamConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterStreamConsumer', 'Kinesis', Promise.resolve(result), false, mock)
  },
  deregisterStreamConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterStreamConsumer', 'Kinesis', Promise.reject(result), true, mock)
  },
  describeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'Kinesis', Promise.resolve(result), true, mock)
  },
  describeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'Kinesis', Promise.resolve(result), false, mock)
  },
  describeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLimits', 'Kinesis', Promise.reject(result), true, mock)
  },
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  describeStreamConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamConsumer', 'Kinesis', Promise.resolve(result), true, mock)
  },
  describeStreamConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamConsumer', 'Kinesis', Promise.resolve(result), false, mock)
  },
  describeStreamConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamConsumer', 'Kinesis', Promise.reject(result), true, mock)
  },
  describeStreamSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamSummary', 'Kinesis', Promise.resolve(result), true, mock)
  },
  describeStreamSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamSummary', 'Kinesis', Promise.resolve(result), false, mock)
  },
  describeStreamSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStreamSummary', 'Kinesis', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kinesis', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kinesis', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Kinesis', Promise.reject(result), true, mock)
  },
  disableEnhancedMonitoring: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableEnhancedMonitoring', 'Kinesis', Promise.resolve(result), true, mock)
  },
  disableEnhancedMonitoringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableEnhancedMonitoring', 'Kinesis', Promise.resolve(result), false, mock)
  },
  disableEnhancedMonitoringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableEnhancedMonitoring', 'Kinesis', Promise.reject(result), true, mock)
  },
  enableEnhancedMonitoring: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableEnhancedMonitoring', 'Kinesis', Promise.resolve(result), true, mock)
  },
  enableEnhancedMonitoringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableEnhancedMonitoring', 'Kinesis', Promise.resolve(result), false, mock)
  },
  enableEnhancedMonitoringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableEnhancedMonitoring', 'Kinesis', Promise.reject(result), true, mock)
  },
  getRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'Kinesis', Promise.resolve(result), true, mock)
  },
  getRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'Kinesis', Promise.resolve(result), false, mock)
  },
  getRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'Kinesis', Promise.reject(result), true, mock)
  },
  getShardIterator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'Kinesis', Promise.resolve(result), true, mock)
  },
  getShardIteratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'Kinesis', Promise.resolve(result), false, mock)
  },
  getShardIteratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'Kinesis', Promise.reject(result), true, mock)
  },
  increaseStreamRetentionPeriod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseStreamRetentionPeriod', 'Kinesis', Promise.resolve(result), true, mock)
  },
  increaseStreamRetentionPeriodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseStreamRetentionPeriod', 'Kinesis', Promise.resolve(result), false, mock)
  },
  increaseStreamRetentionPeriodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseStreamRetentionPeriod', 'Kinesis', Promise.reject(result), true, mock)
  },
  listShards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listShards', 'Kinesis', Promise.resolve(result), true, mock)
  },
  listShardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listShards', 'Kinesis', Promise.resolve(result), false, mock)
  },
  listShardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listShards', 'Kinesis', Promise.reject(result), true, mock)
  },
  listStreamConsumers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamConsumers', 'Kinesis', Promise.resolve(result), true, mock)
  },
  listStreamConsumersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamConsumers', 'Kinesis', Promise.resolve(result), false, mock)
  },
  listStreamConsumersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamConsumers', 'Kinesis', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Kinesis', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Kinesis', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Kinesis', Promise.reject(result), true, mock)
  },
  listTagsForStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  listTagsForStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  listTagsForStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  mergeShards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeShards', 'Kinesis', Promise.resolve(result), true, mock)
  },
  mergeShardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeShards', 'Kinesis', Promise.resolve(result), false, mock)
  },
  mergeShardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeShards', 'Kinesis', Promise.reject(result), true, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Kinesis', Promise.resolve(result), true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Kinesis', Promise.resolve(result), false, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Kinesis', Promise.reject(result), true, mock)
  },
  putRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecords', 'Kinesis', Promise.resolve(result), true, mock)
  },
  putRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecords', 'Kinesis', Promise.resolve(result), false, mock)
  },
  putRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecords', 'Kinesis', Promise.reject(result), true, mock)
  },
  registerStreamConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerStreamConsumer', 'Kinesis', Promise.resolve(result), true, mock)
  },
  registerStreamConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerStreamConsumer', 'Kinesis', Promise.resolve(result), false, mock)
  },
  registerStreamConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerStreamConsumer', 'Kinesis', Promise.reject(result), true, mock)
  },
  removeTagsFromStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromStream', 'Kinesis', Promise.resolve(result), true, mock)
  },
  removeTagsFromStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromStream', 'Kinesis', Promise.resolve(result), false, mock)
  },
  removeTagsFromStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromStream', 'Kinesis', Promise.reject(result), true, mock)
  },
  splitShard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('splitShard', 'Kinesis', Promise.resolve(result), true, mock)
  },
  splitShardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('splitShard', 'Kinesis', Promise.resolve(result), false, mock)
  },
  splitShardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('splitShard', 'Kinesis', Promise.reject(result), true, mock)
  },
  startStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamEncryption', 'Kinesis', Promise.resolve(result), true, mock)
  },
  startStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamEncryption', 'Kinesis', Promise.resolve(result), false, mock)
  },
  startStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamEncryption', 'Kinesis', Promise.reject(result), true, mock)
  },
  stopStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamEncryption', 'Kinesis', Promise.resolve(result), true, mock)
  },
  stopStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamEncryption', 'Kinesis', Promise.resolve(result), false, mock)
  },
  stopStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamEncryption', 'Kinesis', Promise.reject(result), true, mock)
  },
  subscribeToShard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToShard', 'Kinesis', Promise.resolve(result), true, mock)
  },
  subscribeToShardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToShard', 'Kinesis', Promise.resolve(result), false, mock)
  },
  subscribeToShardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribeToShard', 'Kinesis', Promise.reject(result), true, mock)
  },
  updateShardCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateShardCount', 'Kinesis', Promise.resolve(result), true, mock)
  },
  updateShardCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateShardCount', 'Kinesis', Promise.resolve(result), false, mock)
  },
  updateShardCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateShardCount', 'Kinesis', Promise.reject(result), true, mock)
  },
}
