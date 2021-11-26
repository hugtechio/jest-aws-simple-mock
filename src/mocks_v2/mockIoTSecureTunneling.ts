
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
  export const mockIoTSecureTunneling = {
  closeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  closeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  closeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  describeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  describeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  describeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  listTunnels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  listTunnelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  listTunnelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTunnels', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  openTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  openTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  openTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
}
