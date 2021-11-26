
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
  export const mockRoute53RecoveryCluster = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  getRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  getRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  getRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoutingControlState', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  updateRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  updateRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  updateRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlState', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  updateRoutingControlStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  updateRoutingControlStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  updateRoutingControlStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingControlStates', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
}
