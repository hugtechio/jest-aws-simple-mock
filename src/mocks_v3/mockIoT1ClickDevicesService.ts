
/**
* @description mocks_v3:mockIoT1ClickDevicesService module is mocks for AWS-SDK V3
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
export const mockIoT1ClickDevicesService = {
  claimDevicesByClaimCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  claimDevicesByClaimCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  claimDevicesByClaimCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'describeDevice', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'describeDevice', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'describeDevice', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  finalizeDeviceClaim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  finalizeDeviceClaimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  finalizeDeviceClaimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  getDeviceMethods: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'getDeviceMethods', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  getDeviceMethodsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'getDeviceMethods', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  getDeviceMethodsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'getDeviceMethods', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  initiateDeviceClaim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  initiateDeviceClaimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  initiateDeviceClaimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  invokeDeviceMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  invokeDeviceMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  invokeDeviceMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listDeviceEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDeviceEvents', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listDeviceEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDeviceEvents', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listDeviceEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDeviceEvents', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDevices', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDevices', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listDevices', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listTagsForResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listTagsForResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'listTagsForResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'tagResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'tagResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'tagResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  unclaimDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'unclaimDevice', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  unclaimDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'unclaimDevice', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  unclaimDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'unclaimDevice', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'untagResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'untagResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'untagResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  updateDeviceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'updateDeviceState', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  updateDeviceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'updateDeviceState', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  updateDeviceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'updateDeviceState', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'send', 'IoT1ClickDevicesServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'send', 'IoT1ClickDevicesServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-devices-service', 'send', 'IoT1ClickDevicesServiceClient', Promise.reject(result), true, mock)
  }
}
