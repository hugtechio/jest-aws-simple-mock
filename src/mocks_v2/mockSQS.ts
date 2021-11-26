
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
  export const mockSQS = {
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', Promise.resolve(result), true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', Promise.resolve(result), false, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SQS', Promise.reject(result), true, mock)
  },
  changeMessageVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', Promise.resolve(result), true, mock)
  },
  changeMessageVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', Promise.resolve(result), false, mock)
  },
  changeMessageVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibility', 'SQS', Promise.reject(result), true, mock)
  },
  changeMessageVisibilityBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  changeMessageVisibilityBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  changeMessageVisibilityBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeMessageVisibilityBatch', 'SQS', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'SQS', Promise.reject(result), true, mock)
  },
  deleteMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessage', 'SQS', Promise.reject(result), true, mock)
  },
  deleteMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMessageBatch', 'SQS', Promise.reject(result), true, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueue', 'SQS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SQS', Promise.reject(result), true, mock)
  },
  getQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', Promise.resolve(result), true, mock)
  },
  getQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', Promise.resolve(result), false, mock)
  },
  getQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueAttributes', 'SQS', Promise.reject(result), true, mock)
  },
  getQueueUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', Promise.resolve(result), true, mock)
  },
  getQueueUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', Promise.resolve(result), false, mock)
  },
  getQueueUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQueueUrl', 'SQS', Promise.reject(result), true, mock)
  },
  listDeadLetterSourceQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', Promise.resolve(result), true, mock)
  },
  listDeadLetterSourceQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', Promise.resolve(result), false, mock)
  },
  listDeadLetterSourceQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeadLetterSourceQueues', 'SQS', Promise.reject(result), true, mock)
  },
  listQueueTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', Promise.resolve(result), true, mock)
  },
  listQueueTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', Promise.resolve(result), false, mock)
  },
  listQueueTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueTags', 'SQS', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'SQS', Promise.reject(result), true, mock)
  },
  purgeQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  purgeQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  purgeQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purgeQueue', 'SQS', Promise.reject(result), true, mock)
  },
  receiveMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  receiveMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  receiveMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('receiveMessage', 'SQS', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SQS', Promise.reject(result), true, mock)
  },
  sendMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', Promise.resolve(result), true, mock)
  },
  sendMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', Promise.resolve(result), false, mock)
  },
  sendMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'SQS', Promise.reject(result), true, mock)
  },
  sendMessageBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', Promise.resolve(result), true, mock)
  },
  sendMessageBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', Promise.resolve(result), false, mock)
  },
  sendMessageBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessageBatch', 'SQS', Promise.reject(result), true, mock)
  },
  setQueueAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', Promise.resolve(result), true, mock)
  },
  setQueueAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', Promise.resolve(result), false, mock)
  },
  setQueueAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setQueueAttributes', 'SQS', Promise.reject(result), true, mock)
  },
  tagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  tagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  tagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagQueue', 'SQS', Promise.reject(result), true, mock)
  },
  untagQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', Promise.resolve(result), true, mock)
  },
  untagQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', Promise.resolve(result), false, mock)
  },
  untagQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagQueue', 'SQS', Promise.reject(result), true, mock)
  },
}