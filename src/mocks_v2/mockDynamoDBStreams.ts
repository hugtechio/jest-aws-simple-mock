
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
  export const mockDynamoDBStreams = {
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStream', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  getRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  getRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  getRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecords', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  getShardIterator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  getShardIteratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  getShardIteratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getShardIterator', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'DynamoDBStreams', Promise.reject(result), true, mock)
  },
}
