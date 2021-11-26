
/**
* @description mocks_v3:mockSNS module is mocks for AWS-SDK V3
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

  export const mockSNS = {
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'addPermission', 'SNS', Promise.resolve(result), true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'addPermission', 'SNS', Promise.resolve(result), false, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'addPermission', 'SNS', Promise.reject(result), true, mock)
  },
  checkIfPhoneNumberIsOptedOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'checkIfPhoneNumberIsOptedOut', 'SNS', Promise.resolve(result), true, mock)
  },
  checkIfPhoneNumberIsOptedOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'checkIfPhoneNumberIsOptedOut', 'SNS', Promise.resolve(result), false, mock)
  },
  checkIfPhoneNumberIsOptedOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'checkIfPhoneNumberIsOptedOut', 'SNS', Promise.reject(result), true, mock)
  },
  confirmSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'confirmSubscription', 'SNS', Promise.resolve(result), true, mock)
  },
  confirmSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'confirmSubscription', 'SNS', Promise.resolve(result), false, mock)
  },
  confirmSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'confirmSubscription', 'SNS', Promise.reject(result), true, mock)
  },
  createPlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformApplication', 'SNS', Promise.resolve(result), true, mock)
  },
  createPlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformApplication', 'SNS', Promise.resolve(result), false, mock)
  },
  createPlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformApplication', 'SNS', Promise.reject(result), true, mock)
  },
  createPlatformEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformEndpoint', 'SNS', Promise.resolve(result), true, mock)
  },
  createPlatformEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformEndpoint', 'SNS', Promise.resolve(result), false, mock)
  },
  createPlatformEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createPlatformEndpoint', 'SNS', Promise.reject(result), true, mock)
  },
  createSMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createSMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), true, mock)
  },
  createSMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createSMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), false, mock)
  },
  createSMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createSMSSandboxPhoneNumber', 'SNS', Promise.reject(result), true, mock)
  },
  createTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createTopic', 'SNS', Promise.resolve(result), true, mock)
  },
  createTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createTopic', 'SNS', Promise.resolve(result), false, mock)
  },
  createTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'createTopic', 'SNS', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteEndpoint', 'SNS', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteEndpoint', 'SNS', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteEndpoint', 'SNS', Promise.reject(result), true, mock)
  },
  deletePlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deletePlatformApplication', 'SNS', Promise.resolve(result), true, mock)
  },
  deletePlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deletePlatformApplication', 'SNS', Promise.resolve(result), false, mock)
  },
  deletePlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deletePlatformApplication', 'SNS', Promise.reject(result), true, mock)
  },
  deleteSMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteSMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), true, mock)
  },
  deleteSMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteSMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), false, mock)
  },
  deleteSMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteSMSSandboxPhoneNumber', 'SNS', Promise.reject(result), true, mock)
  },
  deleteTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteTopic', 'SNS', Promise.resolve(result), true, mock)
  },
  deleteTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteTopic', 'SNS', Promise.resolve(result), false, mock)
  },
  deleteTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'deleteTopic', 'SNS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'destroy', 'SNS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'destroy', 'SNS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'destroy', 'SNS', Promise.reject(result), true, mock)
  },
  getEndpointAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getEndpointAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  getEndpointAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getEndpointAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  getEndpointAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getEndpointAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  getPlatformApplicationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getPlatformApplicationAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  getPlatformApplicationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getPlatformApplicationAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  getPlatformApplicationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getPlatformApplicationAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  getSMSAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  getSMSAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  getSMSAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  getSMSSandboxAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSSandboxAccountStatus', 'SNS', Promise.resolve(result), true, mock)
  },
  getSMSSandboxAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSSandboxAccountStatus', 'SNS', Promise.resolve(result), false, mock)
  },
  getSMSSandboxAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSMSSandboxAccountStatus', 'SNS', Promise.reject(result), true, mock)
  },
  getSubscriptionAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSubscriptionAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  getSubscriptionAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSubscriptionAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  getSubscriptionAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getSubscriptionAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  getTopicAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getTopicAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  getTopicAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getTopicAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  getTopicAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'getTopicAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  listEndpointsByPlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listEndpointsByPlatformApplication', 'SNS', Promise.resolve(result), true, mock)
  },
  listEndpointsByPlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listEndpointsByPlatformApplication', 'SNS', Promise.resolve(result), false, mock)
  },
  listEndpointsByPlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listEndpointsByPlatformApplication', 'SNS', Promise.reject(result), true, mock)
  },
  listOriginationNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listOriginationNumbers', 'SNS', Promise.resolve(result), true, mock)
  },
  listOriginationNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listOriginationNumbers', 'SNS', Promise.resolve(result), false, mock)
  },
  listOriginationNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listOriginationNumbers', 'SNS', Promise.reject(result), true, mock)
  },
  listPhoneNumbersOptedOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPhoneNumbersOptedOut', 'SNS', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersOptedOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPhoneNumbersOptedOut', 'SNS', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersOptedOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPhoneNumbersOptedOut', 'SNS', Promise.reject(result), true, mock)
  },
  listPlatformApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPlatformApplications', 'SNS', Promise.resolve(result), true, mock)
  },
  listPlatformApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPlatformApplications', 'SNS', Promise.resolve(result), false, mock)
  },
  listPlatformApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listPlatformApplications', 'SNS', Promise.reject(result), true, mock)
  },
  listSMSSandboxPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSMSSandboxPhoneNumbers', 'SNS', Promise.resolve(result), true, mock)
  },
  listSMSSandboxPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSMSSandboxPhoneNumbers', 'SNS', Promise.resolve(result), false, mock)
  },
  listSMSSandboxPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSMSSandboxPhoneNumbers', 'SNS', Promise.reject(result), true, mock)
  },
  listSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptions', 'SNS', Promise.resolve(result), true, mock)
  },
  listSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptions', 'SNS', Promise.resolve(result), false, mock)
  },
  listSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptions', 'SNS', Promise.reject(result), true, mock)
  },
  listSubscriptionsByTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptionsByTopic', 'SNS', Promise.resolve(result), true, mock)
  },
  listSubscriptionsByTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptionsByTopic', 'SNS', Promise.resolve(result), false, mock)
  },
  listSubscriptionsByTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listSubscriptionsByTopic', 'SNS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTagsForResource', 'SNS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTagsForResource', 'SNS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTagsForResource', 'SNS', Promise.reject(result), true, mock)
  },
  listTopics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTopics', 'SNS', Promise.resolve(result), true, mock)
  },
  listTopicsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTopics', 'SNS', Promise.resolve(result), false, mock)
  },
  listTopicsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'listTopics', 'SNS', Promise.reject(result), true, mock)
  },
  optInPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'optInPhoneNumber', 'SNS', Promise.resolve(result), true, mock)
  },
  optInPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'optInPhoneNumber', 'SNS', Promise.resolve(result), false, mock)
  },
  optInPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'optInPhoneNumber', 'SNS', Promise.reject(result), true, mock)
  },
  publish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publish', 'SNS', Promise.resolve(result), true, mock)
  },
  publishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publish', 'SNS', Promise.resolve(result), false, mock)
  },
  publishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publish', 'SNS', Promise.reject(result), true, mock)
  },
  publishBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publishBatch', 'SNS', Promise.resolve(result), true, mock)
  },
  publishBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publishBatch', 'SNS', Promise.resolve(result), false, mock)
  },
  publishBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'publishBatch', 'SNS', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'removePermission', 'SNS', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'removePermission', 'SNS', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'removePermission', 'SNS', Promise.reject(result), true, mock)
  },
  setEndpointAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setEndpointAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  setEndpointAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setEndpointAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  setEndpointAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setEndpointAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  setPlatformApplicationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setPlatformApplicationAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  setPlatformApplicationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setPlatformApplicationAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  setPlatformApplicationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setPlatformApplicationAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  setSMSAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSMSAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  setSMSAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSMSAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  setSMSAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSMSAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  setSubscriptionAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSubscriptionAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  setSubscriptionAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSubscriptionAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  setSubscriptionAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setSubscriptionAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  setTopicAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setTopicAttributes', 'SNS', Promise.resolve(result), true, mock)
  },
  setTopicAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setTopicAttributes', 'SNS', Promise.resolve(result), false, mock)
  },
  setTopicAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'setTopicAttributes', 'SNS', Promise.reject(result), true, mock)
  },
  subscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'subscribe', 'SNS', Promise.resolve(result), true, mock)
  },
  subscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'subscribe', 'SNS', Promise.resolve(result), false, mock)
  },
  subscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'subscribe', 'SNS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'tagResource', 'SNS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'tagResource', 'SNS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'tagResource', 'SNS', Promise.reject(result), true, mock)
  },
  unsubscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'unsubscribe', 'SNS', Promise.resolve(result), true, mock)
  },
  unsubscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'unsubscribe', 'SNS', Promise.resolve(result), false, mock)
  },
  unsubscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'unsubscribe', 'SNS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'untagResource', 'SNS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'untagResource', 'SNS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'untagResource', 'SNS', Promise.reject(result), true, mock)
  },
  verifySMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'verifySMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), true, mock)
  },
  verifySMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'verifySMSSandboxPhoneNumber', 'SNS', Promise.resolve(result), false, mock)
  },
  verifySMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'verifySMSSandboxPhoneNumber', 'SNS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'send', 'SNSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'send', 'SNSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sns', 'send', 'SNSClient', Promise.reject(result), true, mock)
  }
}