
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
  export const mockHoneycode = {
  batchCreateTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchCreateTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchCreateTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchDeleteTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchDeleteTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchDeleteTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchUpdateTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchUpdateTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchUpdateTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  batchUpsertTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpsertTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  batchUpsertTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpsertTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  batchUpsertTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpsertTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  describeTableDataImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableDataImportJob', 'Honeycode', Promise.resolve(result), true, mock)
  },
  describeTableDataImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableDataImportJob', 'Honeycode', Promise.resolve(result), false, mock)
  },
  describeTableDataImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableDataImportJob', 'Honeycode', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Honeycode', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Honeycode', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Honeycode', Promise.reject(result), true, mock)
  },
  getScreenData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScreenData', 'Honeycode', Promise.resolve(result), true, mock)
  },
  getScreenDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScreenData', 'Honeycode', Promise.resolve(result), false, mock)
  },
  getScreenDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScreenData', 'Honeycode', Promise.reject(result), true, mock)
  },
  invokeScreenAutomation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeScreenAutomation', 'Honeycode', Promise.resolve(result), true, mock)
  },
  invokeScreenAutomationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeScreenAutomation', 'Honeycode', Promise.resolve(result), false, mock)
  },
  invokeScreenAutomationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeScreenAutomation', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTableColumns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableColumns', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTableColumnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableColumns', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTableColumnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableColumns', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'Honeycode', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'Honeycode', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'Honeycode', Promise.reject(result), true, mock)
  },
  queryTableRows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryTableRows', 'Honeycode', Promise.resolve(result), true, mock)
  },
  queryTableRowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryTableRows', 'Honeycode', Promise.resolve(result), false, mock)
  },
  queryTableRowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('queryTableRows', 'Honeycode', Promise.reject(result), true, mock)
  },
  startTableDataImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTableDataImportJob', 'Honeycode', Promise.resolve(result), true, mock)
  },
  startTableDataImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTableDataImportJob', 'Honeycode', Promise.resolve(result), false, mock)
  },
  startTableDataImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTableDataImportJob', 'Honeycode', Promise.reject(result), true, mock)
  },
}
