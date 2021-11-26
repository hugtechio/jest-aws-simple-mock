
/**
* @description mocks_v2:mockSNS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSNS = {
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SNS', result, true, true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SNS', result, false, true, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'SNS', result, true, false, mock)
  },
  checkIfPhoneNumberIsOptedOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkIfPhoneNumberIsOptedOut', 'SNS', result, true, true, mock)
  },
  checkIfPhoneNumberIsOptedOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkIfPhoneNumberIsOptedOut', 'SNS', result, false, true, mock)
  },
  checkIfPhoneNumberIsOptedOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkIfPhoneNumberIsOptedOut', 'SNS', result, true, false, mock)
  },
  confirmSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSubscription', 'SNS', result, true, true, mock)
  },
  confirmSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSubscription', 'SNS', result, false, true, mock)
  },
  confirmSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSubscription', 'SNS', result, true, false, mock)
  },
  createPlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformApplication', 'SNS', result, true, true, mock)
  },
  createPlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformApplication', 'SNS', result, false, true, mock)
  },
  createPlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformApplication', 'SNS', result, true, false, mock)
  },
  createPlatformEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformEndpoint', 'SNS', result, true, true, mock)
  },
  createPlatformEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformEndpoint', 'SNS', result, false, true, mock)
  },
  createPlatformEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlatformEndpoint', 'SNS', result, true, false, mock)
  },
  createSMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMSSandboxPhoneNumber', 'SNS', result, true, true, mock)
  },
  createSMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMSSandboxPhoneNumber', 'SNS', result, false, true, mock)
  },
  createSMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMSSandboxPhoneNumber', 'SNS', result, true, false, mock)
  },
  createTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTopic', 'SNS', result, true, true, mock)
  },
  createTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTopic', 'SNS', result, false, true, mock)
  },
  createTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTopic', 'SNS', result, true, false, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'SNS', result, true, true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'SNS', result, false, true, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'SNS', result, true, false, mock)
  },
  deletePlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlatformApplication', 'SNS', result, true, true, mock)
  },
  deletePlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlatformApplication', 'SNS', result, false, true, mock)
  },
  deletePlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlatformApplication', 'SNS', result, true, false, mock)
  },
  deleteSMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSMSSandboxPhoneNumber', 'SNS', result, true, true, mock)
  },
  deleteSMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSMSSandboxPhoneNumber', 'SNS', result, false, true, mock)
  },
  deleteSMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSMSSandboxPhoneNumber', 'SNS', result, true, false, mock)
  },
  deleteTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTopic', 'SNS', result, true, true, mock)
  },
  deleteTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTopic', 'SNS', result, false, true, mock)
  },
  deleteTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTopic', 'SNS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SNS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SNS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SNS', result, true, false, mock)
  },
  getEndpointAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEndpointAttributes', 'SNS', result, true, true, mock)
  },
  getEndpointAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEndpointAttributes', 'SNS', result, false, true, mock)
  },
  getEndpointAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEndpointAttributes', 'SNS', result, true, false, mock)
  },
  getPlatformApplicationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlatformApplicationAttributes', 'SNS', result, true, true, mock)
  },
  getPlatformApplicationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlatformApplicationAttributes', 'SNS', result, false, true, mock)
  },
  getPlatformApplicationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlatformApplicationAttributes', 'SNS', result, true, false, mock)
  },
  getSMSAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSAttributes', 'SNS', result, true, true, mock)
  },
  getSMSAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSAttributes', 'SNS', result, false, true, mock)
  },
  getSMSAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSAttributes', 'SNS', result, true, false, mock)
  },
  getSMSSandboxAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSSandboxAccountStatus', 'SNS', result, true, true, mock)
  },
  getSMSSandboxAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSSandboxAccountStatus', 'SNS', result, false, true, mock)
  },
  getSMSSandboxAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSMSSandboxAccountStatus', 'SNS', result, true, false, mock)
  },
  getSubscriptionAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionAttributes', 'SNS', result, true, true, mock)
  },
  getSubscriptionAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionAttributes', 'SNS', result, false, true, mock)
  },
  getSubscriptionAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionAttributes', 'SNS', result, true, false, mock)
  },
  getTopicAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTopicAttributes', 'SNS', result, true, true, mock)
  },
  getTopicAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTopicAttributes', 'SNS', result, false, true, mock)
  },
  getTopicAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTopicAttributes', 'SNS', result, true, false, mock)
  },
  listEndpointsByPlatformApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointsByPlatformApplication', 'SNS', result, true, true, mock)
  },
  listEndpointsByPlatformApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointsByPlatformApplication', 'SNS', result, false, true, mock)
  },
  listEndpointsByPlatformApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointsByPlatformApplication', 'SNS', result, true, false, mock)
  },
  listOriginationNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginationNumbers', 'SNS', result, true, true, mock)
  },
  listOriginationNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginationNumbers', 'SNS', result, false, true, mock)
  },
  listOriginationNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginationNumbers', 'SNS', result, true, false, mock)
  },
  listPhoneNumbersOptedOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbersOptedOut', 'SNS', result, true, true, mock)
  },
  listPhoneNumbersOptedOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbersOptedOut', 'SNS', result, false, true, mock)
  },
  listPhoneNumbersOptedOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbersOptedOut', 'SNS', result, true, false, mock)
  },
  listPlatformApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlatformApplications', 'SNS', result, true, true, mock)
  },
  listPlatformApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlatformApplications', 'SNS', result, false, true, mock)
  },
  listPlatformApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlatformApplications', 'SNS', result, true, false, mock)
  },
  listSMSSandboxPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSMSSandboxPhoneNumbers', 'SNS', result, true, true, mock)
  },
  listSMSSandboxPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSMSSandboxPhoneNumbers', 'SNS', result, false, true, mock)
  },
  listSMSSandboxPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSMSSandboxPhoneNumbers', 'SNS', result, true, false, mock)
  },
  listSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptions', 'SNS', result, true, true, mock)
  },
  listSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptions', 'SNS', result, false, true, mock)
  },
  listSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptions', 'SNS', result, true, false, mock)
  },
  listSubscriptionsByTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptionsByTopic', 'SNS', result, true, true, mock)
  },
  listSubscriptionsByTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptionsByTopic', 'SNS', result, false, true, mock)
  },
  listSubscriptionsByTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscriptionsByTopic', 'SNS', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SNS', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SNS', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SNS', result, true, false, mock)
  },
  listTopics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopics', 'SNS', result, true, true, mock)
  },
  listTopicsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopics', 'SNS', result, false, true, mock)
  },
  listTopicsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopics', 'SNS', result, true, false, mock)
  },
  optInPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optInPhoneNumber', 'SNS', result, true, true, mock)
  },
  optInPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optInPhoneNumber', 'SNS', result, false, true, mock)
  },
  optInPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optInPhoneNumber', 'SNS', result, true, false, mock)
  },
  publish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'SNS', result, true, true, mock)
  },
  publishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'SNS', result, false, true, mock)
  },
  publishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'SNS', result, true, false, mock)
  },
  publishBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishBatch', 'SNS', result, true, true, mock)
  },
  publishBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishBatch', 'SNS', result, false, true, mock)
  },
  publishBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishBatch', 'SNS', result, true, false, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SNS', result, true, true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SNS', result, false, true, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'SNS', result, true, false, mock)
  },
  setEndpointAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setEndpointAttributes', 'SNS', result, true, true, mock)
  },
  setEndpointAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setEndpointAttributes', 'SNS', result, false, true, mock)
  },
  setEndpointAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setEndpointAttributes', 'SNS', result, true, false, mock)
  },
  setPlatformApplicationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPlatformApplicationAttributes', 'SNS', result, true, true, mock)
  },
  setPlatformApplicationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPlatformApplicationAttributes', 'SNS', result, false, true, mock)
  },
  setPlatformApplicationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPlatformApplicationAttributes', 'SNS', result, true, false, mock)
  },
  setSMSAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMSAttributes', 'SNS', result, true, true, mock)
  },
  setSMSAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMSAttributes', 'SNS', result, false, true, mock)
  },
  setSMSAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMSAttributes', 'SNS', result, true, false, mock)
  },
  setSubscriptionAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSubscriptionAttributes', 'SNS', result, true, true, mock)
  },
  setSubscriptionAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSubscriptionAttributes', 'SNS', result, false, true, mock)
  },
  setSubscriptionAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSubscriptionAttributes', 'SNS', result, true, false, mock)
  },
  setTopicAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTopicAttributes', 'SNS', result, true, true, mock)
  },
  setTopicAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTopicAttributes', 'SNS', result, false, true, mock)
  },
  setTopicAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTopicAttributes', 'SNS', result, true, false, mock)
  },
  subscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'SNS', result, true, true, mock)
  },
  subscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'SNS', result, false, true, mock)
  },
  subscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'SNS', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SNS', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SNS', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SNS', result, true, false, mock)
  },
  unsubscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'SNS', result, true, true, mock)
  },
  unsubscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'SNS', result, false, true, mock)
  },
  unsubscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'SNS', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SNS', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SNS', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SNS', result, true, false, mock)
  },
  verifySMSSandboxPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySMSSandboxPhoneNumber', 'SNS', result, true, true, mock)
  },
  verifySMSSandboxPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySMSSandboxPhoneNumber', 'SNS', result, false, true, mock)
  },
  verifySMSSandboxPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySMSSandboxPhoneNumber', 'SNS', result, true, false, mock)
  },
}
