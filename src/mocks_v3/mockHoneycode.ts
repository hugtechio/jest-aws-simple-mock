
/**
* @description mocks_v3:mockHoneycode module is mocks for AWS-SDK V3
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
export const mockHoneycode = {
  batchCreateTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchCreateTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchCreateTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchCreateTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchCreateTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchCreateTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchDeleteTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchDeleteTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchDeleteTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchDeleteTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchDeleteTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchDeleteTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchUpdateTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpdateTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchUpdateTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpdateTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchUpdateTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpdateTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchUpsertTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpsertTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchUpsertTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpsertTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchUpsertTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'batchUpsertTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  describeTableDataImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'describeTableDataImportJob', 'Honeycode', Promise.resolve(result), true, mock)
  },
  describeTableDataImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'describeTableDataImportJob', 'Honeycode', Promise.resolve(result), false, mock)
  },
  describeTableDataImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'describeTableDataImportJob', 'Honeycode', Promise.reject(result), true, mock)
  },
  getScreenData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'getScreenData', 'Honeycode', Promise.resolve(result), true, mock)
  },
  getScreenDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'getScreenData', 'Honeycode', Promise.resolve(result), false, mock)
  },
  getScreenDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'getScreenData', 'Honeycode', Promise.reject(result), true, mock)
  },
  invokeScreenAutomation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'invokeScreenAutomation', 'Honeycode', Promise.resolve(result), true, mock)
  },
  invokeScreenAutomationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'invokeScreenAutomation', 'Honeycode', Promise.resolve(result), false, mock)
  },
  invokeScreenAutomationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'invokeScreenAutomation', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTableColumns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableColumns', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTableColumnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableColumns', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTableColumnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableColumns', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTables', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTables', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTables', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTagsForResource', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTagsForResource', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'listTagsForResource', 'Honeycode', Promise.reject(result), true, mock)
  },
  queryTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'queryTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  queryTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'queryTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  queryTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'queryTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  startTableDataImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'startTableDataImportJob', 'Honeycode', Promise.resolve(result), true, mock)
  },
  startTableDataImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'startTableDataImportJob', 'Honeycode', Promise.resolve(result), false, mock)
  },
  startTableDataImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'startTableDataImportJob', 'Honeycode', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'tagResource', 'Honeycode', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'tagResource', 'Honeycode', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'tagResource', 'Honeycode', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'untagResource', 'Honeycode', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'untagResource', 'Honeycode', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'untagResource', 'Honeycode', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'send', 'HoneycodeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'send', 'HoneycodeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-honeycode', 'send', 'HoneycodeClient', Promise.reject(result), true, mock)
  }
}
