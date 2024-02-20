
/**
* @description mocks_v3:mockBCMDataExports module is mocks for AWS-SDK V3
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
export const mockBCMDataExports = {
  createExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'createExport', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  createExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'createExport', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  createExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'createExport', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  deleteExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'deleteExport', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  deleteExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'deleteExport', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  deleteExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'deleteExport', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  getExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExecution', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  getExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExecution', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  getExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExecution', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  getExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExport', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  getExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExport', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  getExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getExport', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  getTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getTable', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  getTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getTable', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  getTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'getTable', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExecutions', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExecutions', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExecutions', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExports', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExports', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listExports', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTables', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTables', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTables', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTagsForResource', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTagsForResource', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'listTagsForResource', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'tagResource', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'tagResource', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'tagResource', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'untagResource', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'untagResource', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'untagResource', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  updateExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'updateExport', 'BCMDataExports', Promise.resolve(result), true, mock)
  },
  updateExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'updateExport', 'BCMDataExports', Promise.resolve(result), false, mock)
  },
  updateExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'updateExport', 'BCMDataExports', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'send', 'BCMDataExportsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'send', 'BCMDataExportsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bcm-data-exports', 'send', 'BCMDataExportsClient', Promise.reject(result), true, mock)
  }
}
