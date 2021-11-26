
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
  export const mockTimestreamWrite = {
  createDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  createDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  createDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  createTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  createTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  createTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  deleteDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  deleteDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  deleteDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  deleteTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  deleteTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  deleteTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoints', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  describeTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  describeTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  describeTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatabases', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTables', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  updateDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  updateDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  updateDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatabase', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  updateTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  updateTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  updateTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTable', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
  writeRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', Promise.resolve(result), true, mock)
  },
  writeRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', Promise.resolve(result), false, mock)
  },
  writeRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('writeRecords', 'TimestreamWrite', Promise.reject(result), true, mock)
  },
}
