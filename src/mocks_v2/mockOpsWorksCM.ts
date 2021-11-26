
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
  export const mockOpsWorksCM = {
  associateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateNode', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  associateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateNode', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  associateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateNode', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  createBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  createBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  createBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackup', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  createServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  createServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  createServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  deleteServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  deleteServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  deleteServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeNodeAssociationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeAssociationStatus', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeNodeAssociationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeAssociationStatus', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeNodeAssociationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeAssociationStatus', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServers', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServers', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServers', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  disassociateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateNode', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  disassociateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateNode', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  disassociateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateNode', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  exportServerEngineAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportServerEngineAttribute', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  exportServerEngineAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportServerEngineAttribute', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  exportServerEngineAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportServerEngineAttribute', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  restoreServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  restoreServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  restoreServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  startMaintenance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMaintenance', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  startMaintenanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMaintenance', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  startMaintenanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMaintenance', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  updateServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  updateServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  updateServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  updateServerEngineAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerEngineAttributes', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  updateServerEngineAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerEngineAttributes', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  updateServerEngineAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerEngineAttributes', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
}
