
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
  export const mockKafkaConnect = {
  createConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnector', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  createConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnector', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  createConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnector', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  createCustomPlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomPlugin', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  createCustomPluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomPlugin', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  createCustomPluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomPlugin', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  createWorkerConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerConfiguration', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  createWorkerConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerConfiguration', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  createWorkerConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerConfiguration', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  deleteConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnector', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  deleteConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnector', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  deleteConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnector', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  describeConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnector', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  describeConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnector', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  describeConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnector', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  describeCustomPlugin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomPlugin', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  describeCustomPluginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomPlugin', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  describeCustomPluginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomPlugin', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  describeWorkerConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkerConfiguration', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  describeWorkerConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkerConfiguration', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  describeWorkerConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkerConfiguration', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  listConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectors', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  listConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectors', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  listConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectors', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  listCustomPlugins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomPlugins', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  listCustomPluginsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomPlugins', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  listCustomPluginsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomPlugins', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  listWorkerConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerConfigurations', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  listWorkerConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerConfigurations', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  listWorkerConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerConfigurations', 'KafkaConnect', Promise.reject(result), true, mock)
  },
  updateConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnector', 'KafkaConnect', Promise.resolve(result), true, mock)
  },
  updateConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnector', 'KafkaConnect', Promise.resolve(result), false, mock)
  },
  updateConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnector', 'KafkaConnect', Promise.reject(result), true, mock)
  },
}
