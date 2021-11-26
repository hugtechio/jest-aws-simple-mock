
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
  export const mockIoT1ClickDevicesService = {
  claimDevicesByClaimCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  claimDevicesByClaimCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  claimDevicesByClaimCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevicesByClaimCode', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  finalizeDeviceClaim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  finalizeDeviceClaimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  finalizeDeviceClaimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeDeviceClaim', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  getDeviceMethods: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceMethods', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  getDeviceMethodsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceMethods', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  getDeviceMethodsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceMethods', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  initiateDeviceClaim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  initiateDeviceClaimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  initiateDeviceClaimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDeviceClaim', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  invokeDeviceMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  invokeDeviceMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  invokeDeviceMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeDeviceMethod', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listDeviceEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listDeviceEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listDeviceEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  unclaimDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unclaimDevice', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  unclaimDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unclaimDevice', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  unclaimDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unclaimDevice', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
  updateDeviceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceState', 'IoT1ClickDevicesService', Promise.resolve(result), true, mock)
  },
  updateDeviceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceState', 'IoT1ClickDevicesService', Promise.resolve(result), false, mock)
  },
  updateDeviceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceState', 'IoT1ClickDevicesService', Promise.reject(result), true, mock)
  },
}
