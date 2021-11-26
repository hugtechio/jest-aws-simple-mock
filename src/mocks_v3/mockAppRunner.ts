
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAppRunner = {
  associateCustomDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'associateCustomDomain', 'AppRunner', Promise.resolve(result), true, mock)
  },
  associateCustomDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'associateCustomDomain', 'AppRunner', Promise.resolve(result), false, mock)
  },
  associateCustomDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'associateCustomDomain', 'AppRunner', Promise.reject(result), true, mock)
  },
  createAutoScalingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), true, mock)
  },
  createAutoScalingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), false, mock)
  },
  createAutoScalingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createAutoScalingConfiguration', 'AppRunner', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createConnection', 'AppRunner', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createConnection', 'AppRunner', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createConnection', 'AppRunner', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'createService', 'AppRunner', Promise.reject(result), true, mock)
  },
  deleteAutoScalingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), true, mock)
  },
  deleteAutoScalingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), false, mock)
  },
  deleteAutoScalingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteAutoScalingConfiguration', 'AppRunner', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteConnection', 'AppRunner', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteConnection', 'AppRunner', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteConnection', 'AppRunner', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'deleteService', 'AppRunner', Promise.reject(result), true, mock)
  },
  describeAutoScalingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), true, mock)
  },
  describeAutoScalingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeAutoScalingConfiguration', 'AppRunner', Promise.resolve(result), false, mock)
  },
  describeAutoScalingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeAutoScalingConfiguration', 'AppRunner', Promise.reject(result), true, mock)
  },
  describeCustomDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeCustomDomains', 'AppRunner', Promise.resolve(result), true, mock)
  },
  describeCustomDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeCustomDomains', 'AppRunner', Promise.resolve(result), false, mock)
  },
  describeCustomDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeCustomDomains', 'AppRunner', Promise.reject(result), true, mock)
  },
  describeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  describeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  describeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'describeService', 'AppRunner', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'destroy', 'AppRunner', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'destroy', 'AppRunner', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'destroy', 'AppRunner', Promise.reject(result), true, mock)
  },
  disassociateCustomDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'disassociateCustomDomain', 'AppRunner', Promise.resolve(result), true, mock)
  },
  disassociateCustomDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'disassociateCustomDomain', 'AppRunner', Promise.resolve(result), false, mock)
  },
  disassociateCustomDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'disassociateCustomDomain', 'AppRunner', Promise.reject(result), true, mock)
  },
  listAutoScalingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listAutoScalingConfigurations', 'AppRunner', Promise.resolve(result), true, mock)
  },
  listAutoScalingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listAutoScalingConfigurations', 'AppRunner', Promise.resolve(result), false, mock)
  },
  listAutoScalingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listAutoScalingConfigurations', 'AppRunner', Promise.reject(result), true, mock)
  },
  listConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listConnections', 'AppRunner', Promise.resolve(result), true, mock)
  },
  listConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listConnections', 'AppRunner', Promise.resolve(result), false, mock)
  },
  listConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listConnections', 'AppRunner', Promise.reject(result), true, mock)
  },
  listOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listOperations', 'AppRunner', Promise.resolve(result), true, mock)
  },
  listOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listOperations', 'AppRunner', Promise.resolve(result), false, mock)
  },
  listOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listOperations', 'AppRunner', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listServices', 'AppRunner', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listServices', 'AppRunner', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listServices', 'AppRunner', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listTagsForResource', 'AppRunner', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listTagsForResource', 'AppRunner', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'listTagsForResource', 'AppRunner', Promise.reject(result), true, mock)
  },
  pauseService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'pauseService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  pauseServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'pauseService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  pauseServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'pauseService', 'AppRunner', Promise.reject(result), true, mock)
  },
  resumeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'resumeService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  resumeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'resumeService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  resumeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'resumeService', 'AppRunner', Promise.reject(result), true, mock)
  },
  startDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'startDeployment', 'AppRunner', Promise.resolve(result), true, mock)
  },
  startDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'startDeployment', 'AppRunner', Promise.resolve(result), false, mock)
  },
  startDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'startDeployment', 'AppRunner', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'tagResource', 'AppRunner', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'tagResource', 'AppRunner', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'tagResource', 'AppRunner', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'untagResource', 'AppRunner', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'untagResource', 'AppRunner', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'untagResource', 'AppRunner', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'updateService', 'AppRunner', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'updateService', 'AppRunner', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'updateService', 'AppRunner', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'send', 'AppRunnerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'send', 'AppRunnerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apprunner', 'send', 'AppRunnerClient', Promise.reject(result), true, mock)
  }
}