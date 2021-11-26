
/**
* @description mocks_v2:mockFirehose.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockFirehose = {
  createDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', result, true, true, mock)
  },
  createDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', result, false, true, mock)
  },
  createDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliveryStream', 'Firehose', result, true, false, mock)
  },
  deleteDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', result, true, true, mock)
  },
  deleteDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', result, false, true, mock)
  },
  deleteDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryStream', 'Firehose', result, true, false, mock)
  },
  describeDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', result, true, true, mock)
  },
  describeDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', result, false, true, mock)
  },
  describeDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryStream', 'Firehose', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Firehose', result, true, false, mock)
  },
  listDeliveryStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', result, true, true, mock)
  },
  listDeliveryStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', result, false, true, mock)
  },
  listDeliveryStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliveryStreams', 'Firehose', result, true, false, mock)
  },
  listTagsForDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', result, true, true, mock)
  },
  listTagsForDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', result, false, true, mock)
  },
  listTagsForDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForDeliveryStream', 'Firehose', result, true, false, mock)
  },
  putRecord: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', result, true, true, mock)
  },
  putRecordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', result, false, true, mock)
  },
  putRecordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecord', 'Firehose', result, true, false, mock)
  },
  putRecordBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', result, true, true, mock)
  },
  putRecordBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', result, false, true, mock)
  },
  putRecordBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecordBatch', 'Firehose', result, true, false, mock)
  },
  startDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', result, true, true, mock)
  },
  startDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', result, false, true, mock)
  },
  startDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeliveryStreamEncryption', 'Firehose', result, true, false, mock)
  },
  stopDeliveryStreamEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', result, true, true, mock)
  },
  stopDeliveryStreamEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', result, false, true, mock)
  },
  stopDeliveryStreamEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeliveryStreamEncryption', 'Firehose', result, true, false, mock)
  },
  tagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', result, true, true, mock)
  },
  tagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', result, false, true, mock)
  },
  tagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagDeliveryStream', 'Firehose', result, true, false, mock)
  },
  untagDeliveryStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', result, true, true, mock)
  },
  untagDeliveryStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', result, false, true, mock)
  },
  untagDeliveryStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagDeliveryStream', 'Firehose', result, true, false, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', result, true, true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', result, false, true, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'Firehose', result, true, false, mock)
  },
}
