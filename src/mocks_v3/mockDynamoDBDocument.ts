
/**
* @description mocks_v3:mockDynamoDBDocument module is mocks for AWS-SDK V3
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
export const mockDynamoDBDocument = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchExecuteStatement', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchExecuteStatement', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchExecuteStatement', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  batchGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchGet', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  batchGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchGet', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  batchGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchGet', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  batchWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchWrite', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  batchWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchWrite', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  batchWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'batchWrite', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  delete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'delete', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  deleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'delete', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  deleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'delete', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  dynamoDBDocumentClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'dynamoDBDocumentClient', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  dynamoDBDocumentClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'dynamoDBDocumentClient', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  dynamoDBDocumentClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'dynamoDBDocumentClient', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeStatement', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeStatement', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeStatement', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  executeTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeTransaction', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  executeTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeTransaction', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  executeTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'executeTransaction', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  get: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'get', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  getAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'get', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  getThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'get', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  put: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'put', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  putAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'put', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  putThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'put', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  query: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'query', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  queryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'query', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  queryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'query', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  scan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'scan', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  scanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'scan', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  scanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'scan', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  transactGet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactGet', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  transactGetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactGet', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  transactGetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactGet', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  transactWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactWrite', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  transactWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactWrite', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  transactWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'transactWrite', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  update: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'update', 'DynamoDBDocument', Promise.resolve(result), true, mock)
  },
  updateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'update', 'DynamoDBDocument', Promise.resolve(result), false, mock)
  },
  updateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'update', 'DynamoDBDocument', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'send', 'DynamoDBDocumentClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'send', 'DynamoDBDocumentClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/lib-dynamodb', 'send', 'DynamoDBDocumentClient', Promise.reject(result), true, mock)
  }
}
