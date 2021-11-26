
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockDynamoDBStreams = {
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'describeStream', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'describeStream', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'describeStream', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'destroy', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'destroy', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'destroy', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  getRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getRecords', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  getRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getRecords', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  getRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getRecords', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  getShardIterator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getShardIterator', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  getShardIteratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getShardIterator', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  getShardIteratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'getShardIterator', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'listStreams', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'listStreams', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'listStreams', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'send', 'DynamoDBStreamsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'send', 'DynamoDBStreamsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dynamodb-streams', 'send', 'DynamoDBStreamsClient', Promise.reject(result), true, mock)
  }
}