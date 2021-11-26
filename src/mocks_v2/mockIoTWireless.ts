
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
  export const mockIoTWireless = {
  associateAwsAccountWithPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateAwsAccountWithPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateAwsAccountWithPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateMulticastGroupWithFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateMulticastGroupWithFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateMulticastGroupWithFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessDeviceWithThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessGatewayWithCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessGatewayWithCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessGatewayWithCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessGatewayWithThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessGatewayWithThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessGatewayWithThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWirelessGatewayWithThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  cancelMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  cancelMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  cancelMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateAwsAccountFromPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateAwsAccountFromPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateAwsAccountFromPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateMulticastGroupFromFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateMulticastGroupFromFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateMulticastGroupFromFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessGatewayFromCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessGatewayFromCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessGatewayFromCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessGatewayFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessGatewayFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessGatewayFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getLogLevelsByResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getLogLevelsByResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getLogLevelsByResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLogLevelsByResourceTypes', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getResourceEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getResourceEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getResourceEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceEventConfiguration', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getServiceEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceEndpoint', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getServiceEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceEndpoint', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getServiceEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceEndpoint', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessDeviceStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDeviceStatistics', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessDeviceStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDeviceStatistics', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessDeviceStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessDeviceStatistics', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayFirmwareInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayFirmwareInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayFirmwareInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayStatistics', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayStatistics', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayStatistics', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDestinations', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDestinations', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDestinations', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listDeviceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceProfiles', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listDeviceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceProfiles', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listDeviceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceProfiles', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listFuotaTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFuotaTasks', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listFuotaTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFuotaTasks', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listFuotaTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFuotaTasks', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listMulticastGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroups', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listMulticastGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroups', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listMulticastGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroups', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listMulticastGroupsByFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listMulticastGroupsByFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listMulticastGroupsByFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listPartnerAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPartnerAccounts', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listPartnerAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPartnerAccounts', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listPartnerAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPartnerAccounts', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listServiceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceProfiles', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listServiceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceProfiles', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listServiceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServiceProfiles', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessDevices', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessDevices', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessDevices', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessGatewayTaskDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessGatewayTaskDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessGatewayTaskDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGateways', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGateways', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWirelessGateways', 'IoTWireless', Promise.reject(result), true, mock)
  },
  putResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  putResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  putResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  resetAllResourceLogLevels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetAllResourceLogLevels', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  resetAllResourceLogLevelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetAllResourceLogLevels', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  resetAllResourceLogLevelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetAllResourceLogLevels', 'IoTWireless', Promise.reject(result), true, mock)
  },
  resetResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  resetResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  resetResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  sendDataToMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  sendDataToMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  sendDataToMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  sendDataToWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  sendDataToWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  sendDataToWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendDataToWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  testWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  testWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  testWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateLogLevelsByResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateLogLevelsByResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateLogLevelsByResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogLevelsByResourceTypes', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updatePartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updatePartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updatePartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateResourceEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateResourceEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateResourceEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceEventConfiguration', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
}
