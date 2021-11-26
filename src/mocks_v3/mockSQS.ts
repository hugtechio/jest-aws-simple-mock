
/**
* @description mocks_v3:mockSQS module is mocks for AWS-SDK V3
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

  export const mockSQS = {
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'addPermission', 'SQS', Promise.resolve(result), true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'addPermission', 'SQS', Promise.resolve(result), false, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'addPermission', 'SQS', Promise.reject(result), true, mock)
  },
  changeMessageVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibility', 'SQS', Promise.resolve(result), true, mock)
  },
  changeMessageVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibility', 'SQS', Promise.resolve(result), false, mock)
  },
  changeMessageVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibility', 'SQS', Promise.reject(result), true, mock)
  },
  changeMessageVisibilityBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibilityBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  changeMessageVisibilityBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibilityBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  changeMessageVisibilityBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'changeMessageVisibilityBatch', 'SQS', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'createQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'createQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'createQueue', 'SQS', Promise.reject(result), true, mock)
  },
  deleteMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessage', 'SQS', Promise.reject(result), true, mock)
  },
  deleteMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessageBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessageBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteMessageBatch', 'SQS', Promise.reject(result), true, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'deleteQueue', 'SQS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'destroy', 'SQS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'destroy', 'SQS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'destroy', 'SQS', Promise.reject(result), true, mock)
  },
  getQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueAttributes', 'SQS', Promise.resolve(result), true, mock)
  },
  getQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueAttributes', 'SQS', Promise.resolve(result), false, mock)
  },
  getQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueAttributes', 'SQS', Promise.reject(result), true, mock)
  },
  getQueueUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueUrl', 'SQS', Promise.resolve(result), true, mock)
  },
  getQueueUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueUrl', 'SQS', Promise.resolve(result), false, mock)
  },
  getQueueUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'getQueueUrl', 'SQS', Promise.reject(result), true, mock)
  },
  listDeadLetterSourceQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listDeadLetterSourceQueues', 'SQS', Promise.resolve(result), true, mock)
  },
  listDeadLetterSourceQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listDeadLetterSourceQueues', 'SQS', Promise.resolve(result), false, mock)
  },
  listDeadLetterSourceQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listDeadLetterSourceQueues', 'SQS', Promise.reject(result), true, mock)
  },
  listQueueTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueueTags', 'SQS', Promise.resolve(result), true, mock)
  },
  listQueueTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueueTags', 'SQS', Promise.resolve(result), false, mock)
  },
  listQueueTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueueTags', 'SQS', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueues', 'SQS', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueues', 'SQS', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'listQueues', 'SQS', Promise.reject(result), true, mock)
  },
  purgeQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'purgeQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  purgeQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'purgeQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  purgeQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'purgeQueue', 'SQS', Promise.reject(result), true, mock)
  },
  receiveMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'receiveMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  receiveMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'receiveMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  receiveMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'receiveMessage', 'SQS', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'removePermission', 'SQS', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'removePermission', 'SQS', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'removePermission', 'SQS', Promise.reject(result), true, mock)
  },
  sendMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  sendMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  sendMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessage', 'SQS', Promise.reject(result), true, mock)
  },
  sendMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessageBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  sendMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessageBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  sendMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'sendMessageBatch', 'SQS', Promise.reject(result), true, mock)
  },
  setQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'setQueueAttributes', 'SQS', Promise.resolve(result), true, mock)
  },
  setQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'setQueueAttributes', 'SQS', Promise.resolve(result), false, mock)
  },
  setQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'setQueueAttributes', 'SQS', Promise.reject(result), true, mock)
  },
  tagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'tagQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  tagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'tagQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  tagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'tagQueue', 'SQS', Promise.reject(result), true, mock)
  },
  untagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'untagQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  untagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'untagQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  untagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'untagQueue', 'SQS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'send', 'SQSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'send', 'SQSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sqs', 'send', 'SQSClient', Promise.reject(result), true, mock)
  }
}