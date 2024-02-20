
/**
* @description mocks_v3:mockFirehose module is mocks for AWS-SDK V3
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
export const mockFirehose = {
  createDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'createDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  createDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'createDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  createDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'createDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  deleteDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'deleteDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  deleteDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'deleteDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  deleteDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'deleteDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  describeDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'describeDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  describeDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'describeDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  describeDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'describeDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  listDeliveryStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listDeliveryStreams', 'Firehose', Promise.resolve(result), true, mock)
  },
  listDeliveryStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listDeliveryStreams', 'Firehose', Promise.resolve(result), false, mock)
  },
  listDeliveryStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listDeliveryStreams', 'Firehose', Promise.reject(result), true, mock)
  },
  listTagsForDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listTagsForDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  listTagsForDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listTagsForDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  listTagsForDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'listTagsForDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  putRecordBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecordBatch', 'Firehose', Promise.resolve(result), true, mock)
  },
  putRecordBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecordBatch', 'Firehose', Promise.resolve(result), false, mock)
  },
  putRecordBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecordBatch', 'Firehose', Promise.reject(result), true, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecord', 'Firehose', Promise.resolve(result), true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecord', 'Firehose', Promise.resolve(result), false, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'putRecord', 'Firehose', Promise.reject(result), true, mock)
  },
  startDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'startDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), true, mock)
  },
  startDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'startDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), false, mock)
  },
  startDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'startDeliveryStreamEncryption', 'Firehose', Promise.reject(result), true, mock)
  },
  stopDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'stopDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), true, mock)
  },
  stopDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'stopDeliveryStreamEncryption', 'Firehose', Promise.resolve(result), false, mock)
  },
  stopDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'stopDeliveryStreamEncryption', 'Firehose', Promise.reject(result), true, mock)
  },
  tagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'tagDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  tagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'tagDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  tagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'tagDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  untagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'untagDeliveryStream', 'Firehose', Promise.resolve(result), true, mock)
  },
  untagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'untagDeliveryStream', 'Firehose', Promise.resolve(result), false, mock)
  },
  untagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'untagDeliveryStream', 'Firehose', Promise.reject(result), true, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'updateDestination', 'Firehose', Promise.resolve(result), true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'updateDestination', 'Firehose', Promise.resolve(result), false, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'updateDestination', 'Firehose', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'send', 'FirehoseClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'send', 'FirehoseClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-firehose', 'send', 'FirehoseClient', Promise.reject(result), true, mock)
  }
}
