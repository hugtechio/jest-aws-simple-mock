
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
  export const mockRedshiftData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  cancelStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  cancelStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  cancelStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  describeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  describeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  describeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'RedshiftData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RedshiftData', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RedshiftData', Promise.reject(result), true, mock)
  },
  getStatementResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  getStatementResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  getStatementResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStatementResult', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemas', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listStatements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listStatementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listStatementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStatements', 'RedshiftData', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'RedshiftData', Promise.reject(result), true, mock)
  },
}
