
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockRoute53RecoveryCluster = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'destroy', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'destroy', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'destroy', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  getRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'getRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  getRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'getRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  getRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'getRoutingControlState', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  updateRoutingControlState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  updateRoutingControlStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlState', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  updateRoutingControlStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlState', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  updateRoutingControlStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlStates', 'Route53RecoveryCluster', Promise.resolve(result), true, mock)
  },
  updateRoutingControlStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlStates', 'Route53RecoveryCluster', Promise.resolve(result), false, mock)
  },
  updateRoutingControlStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'updateRoutingControlStates', 'Route53RecoveryCluster', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'send', 'Route53RecoveryClusterClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'send', 'Route53RecoveryClusterClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-cluster', 'send', 'Route53RecoveryClusterClient', Promise.reject(result), true, mock)
  }
}