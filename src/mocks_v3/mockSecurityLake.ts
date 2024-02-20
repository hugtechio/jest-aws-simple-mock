
/**
* @description mocks_v3:mockSecurityLake module is mocks for AWS-SDK V3
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
export const mockSecurityLake = {
  createAwsLogSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createAwsLogSource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createAwsLogSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createAwsLogSource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createAwsLogSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createAwsLogSource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createCustomLogSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createCustomLogSource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createCustomLogSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createCustomLogSource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createCustomLogSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createCustomLogSource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createDataLake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLake', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createDataLakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLake', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createDataLakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLake', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createDataLakeExceptionSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createDataLakeExceptionSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createDataLakeExceptionSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeExceptionSubscription', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createDataLakeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createDataLakeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createDataLakeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createDataLakeOrganizationConfiguration', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriber', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriber', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriber', 'SecurityLake', Promise.reject(result), true, mock)
  },
  createSubscriberNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriberNotification', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  createSubscriberNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriberNotification', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  createSubscriberNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'createSubscriberNotification', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteAwsLogSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteAwsLogSource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteAwsLogSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteAwsLogSource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteAwsLogSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteAwsLogSource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteCustomLogSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteCustomLogSource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteCustomLogSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteCustomLogSource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteCustomLogSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteCustomLogSource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteDataLake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLake', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteDataLakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLake', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteDataLakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLake', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteDataLakeExceptionSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteDataLakeExceptionSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteDataLakeExceptionSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeExceptionSubscription', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteDataLakeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteDataLakeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteDataLakeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteDataLakeOrganizationConfiguration', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriber', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriber', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriber', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deleteSubscriberNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriberNotification', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deleteSubscriberNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriberNotification', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deleteSubscriberNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deleteSubscriberNotification', 'SecurityLake', Promise.reject(result), true, mock)
  },
  deregisterDataLakeDelegatedAdministrator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deregisterDataLakeDelegatedAdministrator', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  deregisterDataLakeDelegatedAdministratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deregisterDataLakeDelegatedAdministrator', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  deregisterDataLakeDelegatedAdministratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'deregisterDataLakeDelegatedAdministrator', 'SecurityLake', Promise.reject(result), true, mock)
  },
  getDataLakeExceptionSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  getDataLakeExceptionSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  getDataLakeExceptionSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeExceptionSubscription', 'SecurityLake', Promise.reject(result), true, mock)
  },
  getDataLakeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  getDataLakeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeOrganizationConfiguration', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  getDataLakeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeOrganizationConfiguration', 'SecurityLake', Promise.reject(result), true, mock)
  },
  getDataLakeSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeSources', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  getDataLakeSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeSources', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  getDataLakeSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getDataLakeSources', 'SecurityLake', Promise.reject(result), true, mock)
  },
  getSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getSubscriber', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  getSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getSubscriber', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  getSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'getSubscriber', 'SecurityLake', Promise.reject(result), true, mock)
  },
  listDataLakeExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakeExceptions', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  listDataLakeExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakeExceptions', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  listDataLakeExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakeExceptions', 'SecurityLake', Promise.reject(result), true, mock)
  },
  listDataLakes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakes', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  listDataLakesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakes', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  listDataLakesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listDataLakes', 'SecurityLake', Promise.reject(result), true, mock)
  },
  listLogSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listLogSources', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  listLogSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listLogSources', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  listLogSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listLogSources', 'SecurityLake', Promise.reject(result), true, mock)
  },
  listSubscribers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listSubscribers', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  listSubscribersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listSubscribers', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  listSubscribersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listSubscribers', 'SecurityLake', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listTagsForResource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listTagsForResource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'listTagsForResource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  registerDataLakeDelegatedAdministrator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'registerDataLakeDelegatedAdministrator', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  registerDataLakeDelegatedAdministratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'registerDataLakeDelegatedAdministrator', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  registerDataLakeDelegatedAdministratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'registerDataLakeDelegatedAdministrator', 'SecurityLake', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'tagResource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'tagResource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'tagResource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'untagResource', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'untagResource', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'untagResource', 'SecurityLake', Promise.reject(result), true, mock)
  },
  updateDataLake: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLake', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  updateDataLakeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLake', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  updateDataLakeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLake', 'SecurityLake', Promise.reject(result), true, mock)
  },
  updateDataLakeExceptionSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  updateDataLakeExceptionSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLakeExceptionSubscription', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  updateDataLakeExceptionSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateDataLakeExceptionSubscription', 'SecurityLake', Promise.reject(result), true, mock)
  },
  updateSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriber', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  updateSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriber', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  updateSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriber', 'SecurityLake', Promise.reject(result), true, mock)
  },
  updateSubscriberNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriberNotification', 'SecurityLake', Promise.resolve(result), true, mock)
  },
  updateSubscriberNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriberNotification', 'SecurityLake', Promise.resolve(result), false, mock)
  },
  updateSubscriberNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'updateSubscriberNotification', 'SecurityLake', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'send', 'SecurityLakeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'send', 'SecurityLakeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-securitylake', 'send', 'SecurityLakeClient', Promise.reject(result), true, mock)
  }
}
