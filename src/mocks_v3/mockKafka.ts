
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockKafka = {
  batchAssociateScramSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchAssociateScramSecret', 'Kafka', Promise.resolve(result), true, mock)
  },
  batchAssociateScramSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchAssociateScramSecret', 'Kafka', Promise.resolve(result), false, mock)
  },
  batchAssociateScramSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchAssociateScramSecret', 'Kafka', Promise.reject(result), true, mock)
  },
  batchDisassociateScramSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchDisassociateScramSecret', 'Kafka', Promise.resolve(result), true, mock)
  },
  batchDisassociateScramSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchDisassociateScramSecret', 'Kafka', Promise.resolve(result), false, mock)
  },
  batchDisassociateScramSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'batchDisassociateScramSecret', 'Kafka', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createCluster', 'Kafka', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createCluster', 'Kafka', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createCluster', 'Kafka', Promise.reject(result), true, mock)
  },
  createConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createConfiguration', 'Kafka', Promise.resolve(result), true, mock)
  },
  createConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createConfiguration', 'Kafka', Promise.resolve(result), false, mock)
  },
  createConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'createConfiguration', 'Kafka', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteCluster', 'Kafka', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteCluster', 'Kafka', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteCluster', 'Kafka', Promise.reject(result), true, mock)
  },
  deleteConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteConfiguration', 'Kafka', Promise.resolve(result), true, mock)
  },
  deleteConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteConfiguration', 'Kafka', Promise.resolve(result), false, mock)
  },
  deleteConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'deleteConfiguration', 'Kafka', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeCluster', 'Kafka', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeCluster', 'Kafka', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeCluster', 'Kafka', Promise.reject(result), true, mock)
  },
  describeClusterOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeClusterOperation', 'Kafka', Promise.resolve(result), true, mock)
  },
  describeClusterOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeClusterOperation', 'Kafka', Promise.resolve(result), false, mock)
  },
  describeClusterOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeClusterOperation', 'Kafka', Promise.reject(result), true, mock)
  },
  describeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfiguration', 'Kafka', Promise.resolve(result), true, mock)
  },
  describeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfiguration', 'Kafka', Promise.resolve(result), false, mock)
  },
  describeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfiguration', 'Kafka', Promise.reject(result), true, mock)
  },
  describeConfigurationRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfigurationRevision', 'Kafka', Promise.resolve(result), true, mock)
  },
  describeConfigurationRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfigurationRevision', 'Kafka', Promise.resolve(result), false, mock)
  },
  describeConfigurationRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'describeConfigurationRevision', 'Kafka', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'destroy', 'Kafka', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'destroy', 'Kafka', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'destroy', 'Kafka', Promise.reject(result), true, mock)
  },
  getBootstrapBrokers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getBootstrapBrokers', 'Kafka', Promise.resolve(result), true, mock)
  },
  getBootstrapBrokersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getBootstrapBrokers', 'Kafka', Promise.resolve(result), false, mock)
  },
  getBootstrapBrokersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getBootstrapBrokers', 'Kafka', Promise.reject(result), true, mock)
  },
  getCompatibleKafkaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getCompatibleKafkaVersions', 'Kafka', Promise.resolve(result), true, mock)
  },
  getCompatibleKafkaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getCompatibleKafkaVersions', 'Kafka', Promise.resolve(result), false, mock)
  },
  getCompatibleKafkaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'getCompatibleKafkaVersions', 'Kafka', Promise.reject(result), true, mock)
  },
  listClusterOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusterOperations', 'Kafka', Promise.resolve(result), true, mock)
  },
  listClusterOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusterOperations', 'Kafka', Promise.resolve(result), false, mock)
  },
  listClusterOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusterOperations', 'Kafka', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusters', 'Kafka', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusters', 'Kafka', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listClusters', 'Kafka', Promise.reject(result), true, mock)
  },
  listConfigurationRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurationRevisions', 'Kafka', Promise.resolve(result), true, mock)
  },
  listConfigurationRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurationRevisions', 'Kafka', Promise.resolve(result), false, mock)
  },
  listConfigurationRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurationRevisions', 'Kafka', Promise.reject(result), true, mock)
  },
  listConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurations', 'Kafka', Promise.resolve(result), true, mock)
  },
  listConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurations', 'Kafka', Promise.resolve(result), false, mock)
  },
  listConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listConfigurations', 'Kafka', Promise.reject(result), true, mock)
  },
  listKafkaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listKafkaVersions', 'Kafka', Promise.resolve(result), true, mock)
  },
  listKafkaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listKafkaVersions', 'Kafka', Promise.resolve(result), false, mock)
  },
  listKafkaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listKafkaVersions', 'Kafka', Promise.reject(result), true, mock)
  },
  listNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listNodes', 'Kafka', Promise.resolve(result), true, mock)
  },
  listNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listNodes', 'Kafka', Promise.resolve(result), false, mock)
  },
  listNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listNodes', 'Kafka', Promise.reject(result), true, mock)
  },
  listScramSecrets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listScramSecrets', 'Kafka', Promise.resolve(result), true, mock)
  },
  listScramSecretsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listScramSecrets', 'Kafka', Promise.resolve(result), false, mock)
  },
  listScramSecretsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listScramSecrets', 'Kafka', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listTagsForResource', 'Kafka', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listTagsForResource', 'Kafka', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'listTagsForResource', 'Kafka', Promise.reject(result), true, mock)
  },
  rebootBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'rebootBroker', 'Kafka', Promise.resolve(result), true, mock)
  },
  rebootBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'rebootBroker', 'Kafka', Promise.resolve(result), false, mock)
  },
  rebootBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'rebootBroker', 'Kafka', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'tagResource', 'Kafka', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'tagResource', 'Kafka', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'tagResource', 'Kafka', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'untagResource', 'Kafka', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'untagResource', 'Kafka', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'untagResource', 'Kafka', Promise.reject(result), true, mock)
  },
  updateBrokerCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerCount', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateBrokerCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerCount', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateBrokerCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerCount', 'Kafka', Promise.reject(result), true, mock)
  },
  updateBrokerStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerStorage', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateBrokerStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerStorage', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateBrokerStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerStorage', 'Kafka', Promise.reject(result), true, mock)
  },
  updateBrokerType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerType', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateBrokerTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerType', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateBrokerTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateBrokerType', 'Kafka', Promise.reject(result), true, mock)
  },
  updateClusterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterConfiguration', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateClusterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterConfiguration', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateClusterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterConfiguration', 'Kafka', Promise.reject(result), true, mock)
  },
  updateClusterKafkaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterKafkaVersion', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateClusterKafkaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterKafkaVersion', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateClusterKafkaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateClusterKafkaVersion', 'Kafka', Promise.reject(result), true, mock)
  },
  updateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateConfiguration', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateConfiguration', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateConfiguration', 'Kafka', Promise.reject(result), true, mock)
  },
  updateMonitoring: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateMonitoring', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateMonitoringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateMonitoring', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateMonitoringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateMonitoring', 'Kafka', Promise.reject(result), true, mock)
  },
  updateSecurity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateSecurity', 'Kafka', Promise.resolve(result), true, mock)
  },
  updateSecurityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateSecurity', 'Kafka', Promise.resolve(result), false, mock)
  },
  updateSecurityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'updateSecurity', 'Kafka', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'send', 'KafkaClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'send', 'KafkaClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kafka', 'send', 'KafkaClient', Promise.reject(result), true, mock)
  }
}