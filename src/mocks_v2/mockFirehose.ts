
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
  export const mockFirehose = {
  createDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  createDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  createDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  deleteDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  deleteDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  deleteDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  describeDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  describeDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  describeDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', Promise.reject(result), true, mock)
  },
  listDeliveryStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', Promise.resolve(result), true, mock)
  },
  listDeliveryStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', Promise.resolve(result), false, mock)
  },
  listDeliveryStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', Promise.reject(result), true, mock)
  },
  listTagsForDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  listTagsForDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  listTagsForDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', Promise.resolve(result), true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', Promise.resolve(result), false, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', Promise.reject(result), true, mock)
  },
  putRecordBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', Promise.resolve(result), true, mock)
  },
  putRecordBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', Promise.resolve(result), false, mock)
  },
  putRecordBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', Promise.reject(result), true, mock)
  },
  startDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), true, mock)
  },
  startDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), false, mock)
  },
  startDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', Promise.reject(result), true, mock)
  },
  stopDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), true, mock)
  },
  stopDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), false, mock)
  },
  stopDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', Promise.reject(result), true, mock)
  },
  tagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  tagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  tagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  untagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  untagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  untagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', Promise.resolve(result), true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', Promise.resolve(result), false, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', Promise.reject(result), true, mock)
  },
}
