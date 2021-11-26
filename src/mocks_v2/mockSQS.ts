
/**
* @description mocks_v2:mockSQS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSQS = {
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', result, true, true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', result, false, true, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', result, true, false, mock)
  },
  changeMessageVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', result, true, true, mock)
  },
  changeMessageVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', result, false, true, mock)
  },
  changeMessageVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', result, true, false, mock)
  },
  changeMessageVisibilityBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', result, true, true, mock)
  },
  changeMessageVisibilityBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', result, false, true, mock)
  },
  changeMessageVisibilityBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', result, true, false, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', result, true, true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', result, false, true, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', result, true, false, mock)
  },
  deleteMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', result, true, true, mock)
  },
  deleteMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', result, false, true, mock)
  },
  deleteMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', result, true, false, mock)
  },
  deleteMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', result, true, true, mock)
  },
  deleteMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', result, false, true, mock)
  },
  deleteMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', result, true, false, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', result, true, true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', result, false, true, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', result, true, false, mock)
  },
  getQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', result, true, true, mock)
  },
  getQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', result, false, true, mock)
  },
  getQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', result, true, false, mock)
  },
  getQueueUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', result, true, true, mock)
  },
  getQueueUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', result, false, true, mock)
  },
  getQueueUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', result, true, false, mock)
  },
  listDeadLetterSourceQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', result, true, true, mock)
  },
  listDeadLetterSourceQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', result, false, true, mock)
  },
  listDeadLetterSourceQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', result, true, false, mock)
  },
  listQueueTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', result, true, true, mock)
  },
  listQueueTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', result, false, true, mock)
  },
  listQueueTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', result, true, false, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', result, true, true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', result, false, true, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', result, true, false, mock)
  },
  purgeQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', result, true, true, mock)
  },
  purgeQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', result, false, true, mock)
  },
  purgeQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', result, true, false, mock)
  },
  receiveMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', result, true, true, mock)
  },
  receiveMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', result, false, true, mock)
  },
  receiveMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', result, true, false, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', result, true, true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', result, false, true, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', result, true, false, mock)
  },
  sendMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', result, true, true, mock)
  },
  sendMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', result, false, true, mock)
  },
  sendMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', result, true, false, mock)
  },
  sendMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', result, true, true, mock)
  },
  sendMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', result, false, true, mock)
  },
  sendMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', result, true, false, mock)
  },
  setQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', result, true, true, mock)
  },
  setQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', result, false, true, mock)
  },
  setQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', result, true, false, mock)
  },
  tagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', result, true, true, mock)
  },
  tagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', result, false, true, mock)
  },
  tagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', result, true, false, mock)
  },
  untagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', result, true, true, mock)
  },
  untagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', result, false, true, mock)
  },
  untagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', result, true, false, mock)
  },
}
