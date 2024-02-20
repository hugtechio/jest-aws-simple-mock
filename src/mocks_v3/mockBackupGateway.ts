
/**
* @description mocks_v3:mockBackupGateway module is mocks for AWS-SDK V3
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
export const mockBackupGateway = {
  associateGatewayToServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'associateGatewayToServer', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  associateGatewayToServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'associateGatewayToServer', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  associateGatewayToServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'associateGatewayToServer', 'BackupGateway', Promise.reject(result), true, mock)
  },
  createGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'createGateway', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  createGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'createGateway', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  createGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'createGateway', 'BackupGateway', Promise.reject(result), true, mock)
  },
  deleteGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteGateway', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  deleteGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteGateway', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  deleteGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteGateway', 'BackupGateway', Promise.reject(result), true, mock)
  },
  deleteHypervisor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteHypervisor', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  deleteHypervisorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteHypervisor', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  deleteHypervisorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'deleteHypervisor', 'BackupGateway', Promise.reject(result), true, mock)
  },
  disassociateGatewayFromServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'disassociateGatewayFromServer', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  disassociateGatewayFromServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'disassociateGatewayFromServer', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  disassociateGatewayFromServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'disassociateGatewayFromServer', 'BackupGateway', Promise.reject(result), true, mock)
  },
  getBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getBandwidthRateLimitSchedule', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  getBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getBandwidthRateLimitSchedule', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  getBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getBandwidthRateLimitSchedule', 'BackupGateway', Promise.reject(result), true, mock)
  },
  getGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getGateway', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  getGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getGateway', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  getGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getGateway', 'BackupGateway', Promise.reject(result), true, mock)
  },
  getHypervisor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisor', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  getHypervisorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisor', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  getHypervisorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisor', 'BackupGateway', Promise.reject(result), true, mock)
  },
  getHypervisorPropertyMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisorPropertyMappings', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  getHypervisorPropertyMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisorPropertyMappings', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  getHypervisorPropertyMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getHypervisorPropertyMappings', 'BackupGateway', Promise.reject(result), true, mock)
  },
  getVirtualMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getVirtualMachine', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  getVirtualMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getVirtualMachine', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  getVirtualMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'getVirtualMachine', 'BackupGateway', Promise.reject(result), true, mock)
  },
  importHypervisorConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'importHypervisorConfiguration', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  importHypervisorConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'importHypervisorConfiguration', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  importHypervisorConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'importHypervisorConfiguration', 'BackupGateway', Promise.reject(result), true, mock)
  },
  listGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listGateways', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  listGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listGateways', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  listGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listGateways', 'BackupGateway', Promise.reject(result), true, mock)
  },
  listHypervisors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listHypervisors', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  listHypervisorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listHypervisors', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  listHypervisorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listHypervisors', 'BackupGateway', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listTagsForResource', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listTagsForResource', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listTagsForResource', 'BackupGateway', Promise.reject(result), true, mock)
  },
  listVirtualMachines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listVirtualMachines', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  listVirtualMachinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listVirtualMachines', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  listVirtualMachinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'listVirtualMachines', 'BackupGateway', Promise.reject(result), true, mock)
  },
  putBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putBandwidthRateLimitSchedule', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  putBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putBandwidthRateLimitSchedule', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  putBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putBandwidthRateLimitSchedule', 'BackupGateway', Promise.reject(result), true, mock)
  },
  putHypervisorPropertyMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putHypervisorPropertyMappings', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  putHypervisorPropertyMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putHypervisorPropertyMappings', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  putHypervisorPropertyMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putHypervisorPropertyMappings', 'BackupGateway', Promise.reject(result), true, mock)
  },
  putMaintenanceStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putMaintenanceStartTime', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  putMaintenanceStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putMaintenanceStartTime', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  putMaintenanceStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'putMaintenanceStartTime', 'BackupGateway', Promise.reject(result), true, mock)
  },
  startVirtualMachinesMetadataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'startVirtualMachinesMetadataSync', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  startVirtualMachinesMetadataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'startVirtualMachinesMetadataSync', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  startVirtualMachinesMetadataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'startVirtualMachinesMetadataSync', 'BackupGateway', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'tagResource', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'tagResource', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'tagResource', 'BackupGateway', Promise.reject(result), true, mock)
  },
  testHypervisorConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'testHypervisorConfiguration', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  testHypervisorConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'testHypervisorConfiguration', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  testHypervisorConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'testHypervisorConfiguration', 'BackupGateway', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'untagResource', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'untagResource', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'untagResource', 'BackupGateway', Promise.reject(result), true, mock)
  },
  updateGatewayInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewayInformation', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  updateGatewayInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewayInformation', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  updateGatewayInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewayInformation', 'BackupGateway', Promise.reject(result), true, mock)
  },
  updateGatewaySoftwareNow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewaySoftwareNow', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  updateGatewaySoftwareNowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewaySoftwareNow', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  updateGatewaySoftwareNowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateGatewaySoftwareNow', 'BackupGateway', Promise.reject(result), true, mock)
  },
  updateHypervisor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateHypervisor', 'BackupGateway', Promise.resolve(result), true, mock)
  },
  updateHypervisorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateHypervisor', 'BackupGateway', Promise.resolve(result), false, mock)
  },
  updateHypervisorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'updateHypervisor', 'BackupGateway', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'send', 'BackupGatewayClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'send', 'BackupGatewayClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup-gateway', 'send', 'BackupGatewayClient', Promise.reject(result), true, mock)
  }
}
