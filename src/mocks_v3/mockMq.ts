
/**
* @description mocks_v3:mockMq module is mocks for AWS-SDK V3
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
export const mockMq = {
  createBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createBroker', 'Mq', Promise.resolve(result), true, mock)
  },
  createBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createBroker', 'Mq', Promise.resolve(result), false, mock)
  },
  createBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createBroker', 'Mq', Promise.reject(result), true, mock)
  },
  createConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createConfiguration', 'Mq', Promise.resolve(result), true, mock)
  },
  createConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createConfiguration', 'Mq', Promise.resolve(result), false, mock)
  },
  createConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createConfiguration', 'Mq', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createTags', 'Mq', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createTags', 'Mq', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createTags', 'Mq', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createUser', 'Mq', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createUser', 'Mq', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'createUser', 'Mq', Promise.reject(result), true, mock)
  },
  deleteBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteBroker', 'Mq', Promise.resolve(result), true, mock)
  },
  deleteBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteBroker', 'Mq', Promise.resolve(result), false, mock)
  },
  deleteBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteBroker', 'Mq', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteTags', 'Mq', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteTags', 'Mq', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteTags', 'Mq', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteUser', 'Mq', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteUser', 'Mq', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'deleteUser', 'Mq', Promise.reject(result), true, mock)
  },
  describeBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBroker', 'Mq', Promise.resolve(result), true, mock)
  },
  describeBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBroker', 'Mq', Promise.resolve(result), false, mock)
  },
  describeBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBroker', 'Mq', Promise.reject(result), true, mock)
  },
  describeBrokerEngineTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerEngineTypes', 'Mq', Promise.resolve(result), true, mock)
  },
  describeBrokerEngineTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerEngineTypes', 'Mq', Promise.resolve(result), false, mock)
  },
  describeBrokerEngineTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerEngineTypes', 'Mq', Promise.reject(result), true, mock)
  },
  describeBrokerInstanceOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerInstanceOptions', 'Mq', Promise.resolve(result), true, mock)
  },
  describeBrokerInstanceOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerInstanceOptions', 'Mq', Promise.resolve(result), false, mock)
  },
  describeBrokerInstanceOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeBrokerInstanceOptions', 'Mq', Promise.reject(result), true, mock)
  },
  describeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfiguration', 'Mq', Promise.resolve(result), true, mock)
  },
  describeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfiguration', 'Mq', Promise.resolve(result), false, mock)
  },
  describeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfiguration', 'Mq', Promise.reject(result), true, mock)
  },
  describeConfigurationRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfigurationRevision', 'Mq', Promise.resolve(result), true, mock)
  },
  describeConfigurationRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfigurationRevision', 'Mq', Promise.resolve(result), false, mock)
  },
  describeConfigurationRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeConfigurationRevision', 'Mq', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeUser', 'Mq', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeUser', 'Mq', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'describeUser', 'Mq', Promise.reject(result), true, mock)
  },
  listBrokers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listBrokers', 'Mq', Promise.resolve(result), true, mock)
  },
  listBrokersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listBrokers', 'Mq', Promise.resolve(result), false, mock)
  },
  listBrokersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listBrokers', 'Mq', Promise.reject(result), true, mock)
  },
  listConfigurationRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurationRevisions', 'Mq', Promise.resolve(result), true, mock)
  },
  listConfigurationRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurationRevisions', 'Mq', Promise.resolve(result), false, mock)
  },
  listConfigurationRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurationRevisions', 'Mq', Promise.reject(result), true, mock)
  },
  listConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurations', 'Mq', Promise.resolve(result), true, mock)
  },
  listConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurations', 'Mq', Promise.resolve(result), false, mock)
  },
  listConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listConfigurations', 'Mq', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listTags', 'Mq', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listTags', 'Mq', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listTags', 'Mq', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listUsers', 'Mq', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listUsers', 'Mq', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'listUsers', 'Mq', Promise.reject(result), true, mock)
  },
  promote: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'promote', 'Mq', Promise.resolve(result), true, mock)
  },
  promoteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'promote', 'Mq', Promise.resolve(result), false, mock)
  },
  promoteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'promote', 'Mq', Promise.reject(result), true, mock)
  },
  rebootBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'rebootBroker', 'Mq', Promise.resolve(result), true, mock)
  },
  rebootBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'rebootBroker', 'Mq', Promise.resolve(result), false, mock)
  },
  rebootBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'rebootBroker', 'Mq', Promise.reject(result), true, mock)
  },
  updateBroker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateBroker', 'Mq', Promise.resolve(result), true, mock)
  },
  updateBrokerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateBroker', 'Mq', Promise.resolve(result), false, mock)
  },
  updateBrokerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateBroker', 'Mq', Promise.reject(result), true, mock)
  },
  updateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateConfiguration', 'Mq', Promise.resolve(result), true, mock)
  },
  updateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateConfiguration', 'Mq', Promise.resolve(result), false, mock)
  },
  updateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateConfiguration', 'Mq', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateUser', 'Mq', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateUser', 'Mq', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'updateUser', 'Mq', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'send', 'MqClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'send', 'MqClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mq', 'send', 'MqClient', Promise.reject(result), true, mock)
  }
}
