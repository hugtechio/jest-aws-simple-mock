
/**
* @description mocks_v3:mockTimestreamQuery module is mocks for AWS-SDK V3
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
export const mockTimestreamQuery = {
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'cancelQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  createScheduledQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'createScheduledQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  createScheduledQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'createScheduledQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  createScheduledQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'createScheduledQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  deleteScheduledQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'deleteScheduledQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  deleteScheduledQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'deleteScheduledQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  deleteScheduledQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'deleteScheduledQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeEndpoints', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  describeScheduledQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeScheduledQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  describeScheduledQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeScheduledQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  describeScheduledQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'describeScheduledQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  executeScheduledQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'executeScheduledQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  executeScheduledQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'executeScheduledQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  executeScheduledQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'executeScheduledQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  listScheduledQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listScheduledQueries', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  listScheduledQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listScheduledQueries', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  listScheduledQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listScheduledQueries', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listTagsForResource', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listTagsForResource', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'listTagsForResource', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  prepareQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'prepareQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  prepareQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'prepareQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  prepareQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'prepareQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'query', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'tagResource', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'tagResource', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'tagResource', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'untagResource', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'untagResource', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'untagResource', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  updateScheduledQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'updateScheduledQuery', 'TimestreamQuery', Promise.resolve(result), true, mock)
  },
  updateScheduledQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'updateScheduledQuery', 'TimestreamQuery', Promise.resolve(result), false, mock)
  },
  updateScheduledQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'updateScheduledQuery', 'TimestreamQuery', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-timestream-query', 'send', 'TimestreamQueryClient', Promise.reject(result), true, mock)
  }
}
