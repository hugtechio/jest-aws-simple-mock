
/**
* @description mocks_v3:mockIoTWireless module is mocks for AWS-SDK V3
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

  export const mockIoTWireless = {
  associateAwsAccountWithPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateAwsAccountWithPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateAwsAccountWithPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateAwsAccountWithPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateMulticastGroupWithFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateMulticastGroupWithFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateMulticastGroupWithFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateMulticastGroupWithFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessDeviceWithThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessDeviceWithThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessDeviceWithThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessDeviceWithThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessGatewayWithCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessGatewayWithCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessGatewayWithCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  associateWirelessGatewayWithThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  associateWirelessGatewayWithThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  associateWirelessGatewayWithThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'associateWirelessGatewayWithThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  cancelMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'cancelMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  cancelMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'cancelMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  cancelMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'cancelMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  createWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  createWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  createWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'createWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  deleteWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  deleteWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  deleteWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'deleteWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'destroy', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'destroy', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'destroy', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateAwsAccountFromPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateAwsAccountFromPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateAwsAccountFromPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateAwsAccountFromPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateMulticastGroupFromFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateMulticastGroupFromFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateMulticastGroupFromFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateMulticastGroupFromFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessDeviceFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessDeviceFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessDeviceFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessDeviceFromThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessGatewayFromCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessGatewayFromCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessGatewayFromCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  disassociateWirelessGatewayFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  disassociateWirelessGatewayFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  disassociateWirelessGatewayFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'disassociateWirelessGatewayFromThing', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getDeviceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDeviceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getDeviceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDeviceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getDeviceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getDeviceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getLogLevelsByResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getLogLevelsByResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getLogLevelsByResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getLogLevelsByResourceTypes', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getPartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getPartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getPartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getPartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getPartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getPartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getResourceEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getResourceEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getResourceEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceEventConfiguration', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getServiceEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceEndpoint', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getServiceEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceEndpoint', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getServiceEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceEndpoint', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getServiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceProfile', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getServiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceProfile', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getServiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getServiceProfile', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessDeviceStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDeviceStatistics', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessDeviceStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDeviceStatistics', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessDeviceStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessDeviceStatistics', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayCertificate', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayCertificate', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayCertificate', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayFirmwareInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayFirmwareInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayFirmwareInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayFirmwareInformation', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayStatistics', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayStatistics', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayStatistics', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  getWirelessGatewayTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  getWirelessGatewayTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  getWirelessGatewayTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'getWirelessGatewayTaskDefinition', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDestinations', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDestinations', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDestinations', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listDeviceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDeviceProfiles', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listDeviceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDeviceProfiles', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listDeviceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listDeviceProfiles', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listFuotaTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listFuotaTasks', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listFuotaTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listFuotaTasks', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listFuotaTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listFuotaTasks', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listMulticastGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroups', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listMulticastGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroups', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listMulticastGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroups', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listMulticastGroupsByFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listMulticastGroupsByFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listMulticastGroupsByFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listMulticastGroupsByFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listPartnerAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listPartnerAccounts', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listPartnerAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listPartnerAccounts', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listPartnerAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listPartnerAccounts', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listServiceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listServiceProfiles', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listServiceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listServiceProfiles', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listServiceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listServiceProfiles', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listTagsForResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listTagsForResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listTagsForResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessDevices', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessDevices', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessDevices', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessGatewayTaskDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessGatewayTaskDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessGatewayTaskDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGatewayTaskDefinitions', 'IoTWireless', Promise.reject(result), true, mock)
  },
  listWirelessGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGateways', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  listWirelessGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGateways', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  listWirelessGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'listWirelessGateways', 'IoTWireless', Promise.reject(result), true, mock)
  },
  putResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'putResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  putResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'putResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  putResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'putResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  resetAllResourceLogLevels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetAllResourceLogLevels', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  resetAllResourceLogLevelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetAllResourceLogLevels', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  resetAllResourceLogLevelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetAllResourceLogLevels', 'IoTWireless', Promise.reject(result), true, mock)
  },
  resetResourceLogLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetResourceLogLevel', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  resetResourceLogLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetResourceLogLevel', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  resetResourceLogLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'resetResourceLogLevel', 'IoTWireless', Promise.reject(result), true, mock)
  },
  sendDataToMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  sendDataToMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  sendDataToMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  sendDataToWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  sendDataToWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  sendDataToWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'sendDataToWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startBulkAssociateWirelessDeviceWithMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkAssociateWirelessDeviceWithMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startBulkDisassociateWirelessDeviceFromMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startBulkDisassociateWirelessDeviceFromMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  startMulticastGroupSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startMulticastGroupSession', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  startMulticastGroupSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startMulticastGroupSession', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  startMulticastGroupSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'startMulticastGroupSession', 'IoTWireless', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'tagResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'tagResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'tagResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  testWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'testWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  testWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'testWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  testWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'testWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'untagResource', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'untagResource', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'untagResource', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateDestination', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateDestination', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateDestination', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateFuotaTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateFuotaTask', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateFuotaTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateFuotaTask', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateFuotaTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateFuotaTask', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateLogLevelsByResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateLogLevelsByResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateLogLevelsByResourceTypes', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateLogLevelsByResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateLogLevelsByResourceTypes', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateMulticastGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateMulticastGroup', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateMulticastGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateMulticastGroup', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateMulticastGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateMulticastGroup', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updatePartnerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updatePartnerAccount', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updatePartnerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updatePartnerAccount', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updatePartnerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updatePartnerAccount', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateResourceEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateResourceEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateResourceEventConfiguration', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateResourceEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateResourceEventConfiguration', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateWirelessDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessDevice', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateWirelessDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessDevice', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateWirelessDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessDevice', 'IoTWireless', Promise.reject(result), true, mock)
  },
  updateWirelessGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessGateway', 'IoTWireless', Promise.resolve(result), true, mock)
  },
  updateWirelessGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessGateway', 'IoTWireless', Promise.resolve(result), false, mock)
  },
  updateWirelessGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'updateWirelessGateway', 'IoTWireless', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'send', 'IoTWirelessClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'send', 'IoTWirelessClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-wireless', 'send', 'IoTWirelessClient', Promise.reject(result), true, mock)
  }
}