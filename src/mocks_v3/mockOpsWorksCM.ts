
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockOpsWorksCM = {
  associateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'associateNode', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  associateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'associateNode', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  associateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'associateNode', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  createBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createBackup', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  createBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createBackup', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  createBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createBackup', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  createServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  createServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  createServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'createServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteBackup', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteBackup', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteBackup', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  deleteServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  deleteServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  deleteServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'deleteServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeAccountAttributes', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeAccountAttributes', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeAccountAttributes', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeBackups', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeBackups', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeBackups', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeEvents', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeEvents', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeEvents', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeNodeAssociationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeNodeAssociationStatus', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeNodeAssociationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeNodeAssociationStatus', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeNodeAssociationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeNodeAssociationStatus', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  describeServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeServers', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  describeServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeServers', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  describeServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'describeServers', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'destroy', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'destroy', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'destroy', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  disassociateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'disassociateNode', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  disassociateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'disassociateNode', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  disassociateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'disassociateNode', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  exportServerEngineAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'exportServerEngineAttribute', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  exportServerEngineAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'exportServerEngineAttribute', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  exportServerEngineAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'exportServerEngineAttribute', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'listTagsForResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'listTagsForResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'listTagsForResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  restoreServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'restoreServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  restoreServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'restoreServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  restoreServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'restoreServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  startMaintenance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'startMaintenance', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  startMaintenanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'startMaintenance', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  startMaintenanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'startMaintenance', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'tagResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'tagResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'tagResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'untagResource', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'untagResource', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'untagResource', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  updateServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServer', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  updateServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServer', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  updateServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServer', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  updateServerEngineAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServerEngineAttributes', 'OpsWorksCM', Promise.resolve(result), true, mock)
  },
  updateServerEngineAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServerEngineAttributes', 'OpsWorksCM', Promise.resolve(result), false, mock)
  },
  updateServerEngineAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'updateServerEngineAttributes', 'OpsWorksCM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'send', 'OpsWorksCMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'send', 'OpsWorksCMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworkscm', 'send', 'OpsWorksCMClient', Promise.reject(result), true, mock)
  }
}