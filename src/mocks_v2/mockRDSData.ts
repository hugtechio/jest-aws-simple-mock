
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
  export const mockRDSData = {
  batchExecuteStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', Promise.resolve(result), true, mock)
  },
  batchExecuteStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', Promise.resolve(result), false, mock)
  },
  batchExecuteStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchExecuteStatement', 'RDSData', Promise.reject(result), true, mock)
  },
  beginTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  beginTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  beginTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('beginTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
  commitTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  commitTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  commitTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('commitTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RDSData', Promise.reject(result), true, mock)
  },
  executeSql: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', Promise.resolve(result), true, mock)
  },
  executeSqlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', Promise.resolve(result), false, mock)
  },
  executeSqlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeSql', 'RDSData', Promise.reject(result), true, mock)
  },
  executeStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', Promise.resolve(result), true, mock)
  },
  executeStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', Promise.resolve(result), false, mock)
  },
  executeStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeStatement', 'RDSData', Promise.reject(result), true, mock)
  },
  rollbackTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', Promise.resolve(result), true, mock)
  },
  rollbackTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', Promise.resolve(result), false, mock)
  },
  rollbackTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackTransaction', 'RDSData', Promise.reject(result), true, mock)
  },
}
