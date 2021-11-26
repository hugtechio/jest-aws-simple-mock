
/**
* @description mocks_v3:mockSES module is mocks for AWS-SDK V3
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

  export const mockSES = {
  cloneReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'cloneReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  cloneReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'cloneReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  cloneReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'cloneReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSet', 'SES', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSet', 'SES', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSet', 'SES', Promise.reject(result), true, mock)
  },
  createConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetEventDestination', 'SES', Promise.resolve(result), true, mock)
  },
  createConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetEventDestination', 'SES', Promise.resolve(result), false, mock)
  },
  createConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetEventDestination', 'SES', Promise.reject(result), true, mock)
  },
  createConfigurationSetTrackingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), true, mock)
  },
  createConfigurationSetTrackingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), false, mock)
  },
  createConfigurationSetTrackingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createConfigurationSetTrackingOptions', 'SES', Promise.reject(result), true, mock)
  },
  createCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  createCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  createCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createCustomVerificationEmailTemplate', 'SES', Promise.reject(result), true, mock)
  },
  createReceiptFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptFilter', 'SES', Promise.resolve(result), true, mock)
  },
  createReceiptFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptFilter', 'SES', Promise.resolve(result), false, mock)
  },
  createReceiptFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptFilter', 'SES', Promise.reject(result), true, mock)
  },
  createReceiptRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRule', 'SES', Promise.resolve(result), true, mock)
  },
  createReceiptRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRule', 'SES', Promise.resolve(result), false, mock)
  },
  createReceiptRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRule', 'SES', Promise.reject(result), true, mock)
  },
  createReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  createReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  createReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  createTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  createTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  createTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'createTemplate', 'SES', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSet', 'SES', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSet', 'SES', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSet', 'SES', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetEventDestination', 'SES', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetEventDestination', 'SES', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetEventDestination', 'SES', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetTrackingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetTrackingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetTrackingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteConfigurationSetTrackingOptions', 'SES', Promise.reject(result), true, mock)
  },
  deleteCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  deleteCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  deleteCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteCustomVerificationEmailTemplate', 'SES', Promise.reject(result), true, mock)
  },
  deleteIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentity', 'SES', Promise.resolve(result), true, mock)
  },
  deleteIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentity', 'SES', Promise.resolve(result), false, mock)
  },
  deleteIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentity', 'SES', Promise.reject(result), true, mock)
  },
  deleteIdentityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentityPolicy', 'SES', Promise.resolve(result), true, mock)
  },
  deleteIdentityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentityPolicy', 'SES', Promise.resolve(result), false, mock)
  },
  deleteIdentityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteIdentityPolicy', 'SES', Promise.reject(result), true, mock)
  },
  deleteReceiptFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptFilter', 'SES', Promise.resolve(result), true, mock)
  },
  deleteReceiptFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptFilter', 'SES', Promise.resolve(result), false, mock)
  },
  deleteReceiptFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptFilter', 'SES', Promise.reject(result), true, mock)
  },
  deleteReceiptRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRule', 'SES', Promise.resolve(result), true, mock)
  },
  deleteReceiptRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRule', 'SES', Promise.resolve(result), false, mock)
  },
  deleteReceiptRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRule', 'SES', Promise.reject(result), true, mock)
  },
  deleteReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  deleteReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  deleteReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  deleteTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  deleteTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  deleteTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteTemplate', 'SES', Promise.reject(result), true, mock)
  },
  deleteVerifiedEmailAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteVerifiedEmailAddress', 'SES', Promise.resolve(result), true, mock)
  },
  deleteVerifiedEmailAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteVerifiedEmailAddress', 'SES', Promise.resolve(result), false, mock)
  },
  deleteVerifiedEmailAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'deleteVerifiedEmailAddress', 'SES', Promise.reject(result), true, mock)
  },
  describeActiveReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeActiveReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  describeActiveReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeActiveReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  describeActiveReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeActiveReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  describeConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeConfigurationSet', 'SES', Promise.resolve(result), true, mock)
  },
  describeConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeConfigurationSet', 'SES', Promise.resolve(result), false, mock)
  },
  describeConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeConfigurationSet', 'SES', Promise.reject(result), true, mock)
  },
  describeReceiptRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRule', 'SES', Promise.resolve(result), true, mock)
  },
  describeReceiptRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRule', 'SES', Promise.resolve(result), false, mock)
  },
  describeReceiptRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRule', 'SES', Promise.reject(result), true, mock)
  },
  describeReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  describeReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  describeReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'describeReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'destroy', 'SES', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'destroy', 'SES', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'destroy', 'SES', Promise.reject(result), true, mock)
  },
  getAccountSendingEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getAccountSendingEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  getAccountSendingEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getAccountSendingEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  getAccountSendingEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getAccountSendingEnabled', 'SES', Promise.reject(result), true, mock)
  },
  getCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  getCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  getCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getCustomVerificationEmailTemplate', 'SES', Promise.reject(result), true, mock)
  },
  getIdentityDkimAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityDkimAttributes', 'SES', Promise.resolve(result), true, mock)
  },
  getIdentityDkimAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityDkimAttributes', 'SES', Promise.resolve(result), false, mock)
  },
  getIdentityDkimAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityDkimAttributes', 'SES', Promise.reject(result), true, mock)
  },
  getIdentityMailFromDomainAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityMailFromDomainAttributes', 'SES', Promise.resolve(result), true, mock)
  },
  getIdentityMailFromDomainAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityMailFromDomainAttributes', 'SES', Promise.resolve(result), false, mock)
  },
  getIdentityMailFromDomainAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityMailFromDomainAttributes', 'SES', Promise.reject(result), true, mock)
  },
  getIdentityNotificationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityNotificationAttributes', 'SES', Promise.resolve(result), true, mock)
  },
  getIdentityNotificationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityNotificationAttributes', 'SES', Promise.resolve(result), false, mock)
  },
  getIdentityNotificationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityNotificationAttributes', 'SES', Promise.reject(result), true, mock)
  },
  getIdentityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityPolicies', 'SES', Promise.resolve(result), true, mock)
  },
  getIdentityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityPolicies', 'SES', Promise.resolve(result), false, mock)
  },
  getIdentityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityPolicies', 'SES', Promise.reject(result), true, mock)
  },
  getIdentityVerificationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityVerificationAttributes', 'SES', Promise.resolve(result), true, mock)
  },
  getIdentityVerificationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityVerificationAttributes', 'SES', Promise.resolve(result), false, mock)
  },
  getIdentityVerificationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getIdentityVerificationAttributes', 'SES', Promise.reject(result), true, mock)
  },
  getSendQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendQuota', 'SES', Promise.resolve(result), true, mock)
  },
  getSendQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendQuota', 'SES', Promise.resolve(result), false, mock)
  },
  getSendQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendQuota', 'SES', Promise.reject(result), true, mock)
  },
  getSendStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendStatistics', 'SES', Promise.resolve(result), true, mock)
  },
  getSendStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendStatistics', 'SES', Promise.resolve(result), false, mock)
  },
  getSendStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getSendStatistics', 'SES', Promise.reject(result), true, mock)
  },
  getTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  getTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  getTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'getTemplate', 'SES', Promise.reject(result), true, mock)
  },
  listConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listConfigurationSets', 'SES', Promise.resolve(result), true, mock)
  },
  listConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listConfigurationSets', 'SES', Promise.resolve(result), false, mock)
  },
  listConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listConfigurationSets', 'SES', Promise.reject(result), true, mock)
  },
  listCustomVerificationEmailTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listCustomVerificationEmailTemplates', 'SES', Promise.resolve(result), true, mock)
  },
  listCustomVerificationEmailTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listCustomVerificationEmailTemplates', 'SES', Promise.resolve(result), false, mock)
  },
  listCustomVerificationEmailTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listCustomVerificationEmailTemplates', 'SES', Promise.reject(result), true, mock)
  },
  listIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentities', 'SES', Promise.resolve(result), true, mock)
  },
  listIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentities', 'SES', Promise.resolve(result), false, mock)
  },
  listIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentities', 'SES', Promise.reject(result), true, mock)
  },
  listIdentityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentityPolicies', 'SES', Promise.resolve(result), true, mock)
  },
  listIdentityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentityPolicies', 'SES', Promise.resolve(result), false, mock)
  },
  listIdentityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listIdentityPolicies', 'SES', Promise.reject(result), true, mock)
  },
  listReceiptFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptFilters', 'SES', Promise.resolve(result), true, mock)
  },
  listReceiptFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptFilters', 'SES', Promise.resolve(result), false, mock)
  },
  listReceiptFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptFilters', 'SES', Promise.reject(result), true, mock)
  },
  listReceiptRuleSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptRuleSets', 'SES', Promise.resolve(result), true, mock)
  },
  listReceiptRuleSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptRuleSets', 'SES', Promise.resolve(result), false, mock)
  },
  listReceiptRuleSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listReceiptRuleSets', 'SES', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listTemplates', 'SES', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listTemplates', 'SES', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listTemplates', 'SES', Promise.reject(result), true, mock)
  },
  listVerifiedEmailAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listVerifiedEmailAddresses', 'SES', Promise.resolve(result), true, mock)
  },
  listVerifiedEmailAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listVerifiedEmailAddresses', 'SES', Promise.resolve(result), false, mock)
  },
  listVerifiedEmailAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'listVerifiedEmailAddresses', 'SES', Promise.reject(result), true, mock)
  },
  putConfigurationSetDeliveryOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putConfigurationSetDeliveryOptions', 'SES', Promise.resolve(result), true, mock)
  },
  putConfigurationSetDeliveryOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putConfigurationSetDeliveryOptions', 'SES', Promise.resolve(result), false, mock)
  },
  putConfigurationSetDeliveryOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putConfigurationSetDeliveryOptions', 'SES', Promise.reject(result), true, mock)
  },
  putIdentityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putIdentityPolicy', 'SES', Promise.resolve(result), true, mock)
  },
  putIdentityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putIdentityPolicy', 'SES', Promise.resolve(result), false, mock)
  },
  putIdentityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'putIdentityPolicy', 'SES', Promise.reject(result), true, mock)
  },
  reorderReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'reorderReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  reorderReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'reorderReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  reorderReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'reorderReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  sendBounce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBounce', 'SES', Promise.resolve(result), true, mock)
  },
  sendBounceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBounce', 'SES', Promise.resolve(result), false, mock)
  },
  sendBounceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBounce', 'SES', Promise.reject(result), true, mock)
  },
  sendBulkTemplatedEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBulkTemplatedEmail', 'SES', Promise.resolve(result), true, mock)
  },
  sendBulkTemplatedEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBulkTemplatedEmail', 'SES', Promise.resolve(result), false, mock)
  },
  sendBulkTemplatedEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendBulkTemplatedEmail', 'SES', Promise.reject(result), true, mock)
  },
  sendCustomVerificationEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendCustomVerificationEmail', 'SES', Promise.resolve(result), true, mock)
  },
  sendCustomVerificationEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendCustomVerificationEmail', 'SES', Promise.resolve(result), false, mock)
  },
  sendCustomVerificationEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendCustomVerificationEmail', 'SES', Promise.reject(result), true, mock)
  },
  sendEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendEmail', 'SES', Promise.resolve(result), true, mock)
  },
  sendEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendEmail', 'SES', Promise.resolve(result), false, mock)
  },
  sendEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendEmail', 'SES', Promise.reject(result), true, mock)
  },
  sendRawEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendRawEmail', 'SES', Promise.resolve(result), true, mock)
  },
  sendRawEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendRawEmail', 'SES', Promise.resolve(result), false, mock)
  },
  sendRawEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendRawEmail', 'SES', Promise.reject(result), true, mock)
  },
  sendTemplatedEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendTemplatedEmail', 'SES', Promise.resolve(result), true, mock)
  },
  sendTemplatedEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendTemplatedEmail', 'SES', Promise.resolve(result), false, mock)
  },
  sendTemplatedEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'sendTemplatedEmail', 'SES', Promise.reject(result), true, mock)
  },
  setActiveReceiptRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setActiveReceiptRuleSet', 'SES', Promise.resolve(result), true, mock)
  },
  setActiveReceiptRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setActiveReceiptRuleSet', 'SES', Promise.resolve(result), false, mock)
  },
  setActiveReceiptRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setActiveReceiptRuleSet', 'SES', Promise.reject(result), true, mock)
  },
  setIdentityDkimEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityDkimEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  setIdentityDkimEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityDkimEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  setIdentityDkimEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityDkimEnabled', 'SES', Promise.reject(result), true, mock)
  },
  setIdentityFeedbackForwardingEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityFeedbackForwardingEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  setIdentityFeedbackForwardingEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityFeedbackForwardingEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  setIdentityFeedbackForwardingEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityFeedbackForwardingEnabled', 'SES', Promise.reject(result), true, mock)
  },
  setIdentityHeadersInNotificationsEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityHeadersInNotificationsEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  setIdentityHeadersInNotificationsEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityHeadersInNotificationsEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  setIdentityHeadersInNotificationsEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityHeadersInNotificationsEnabled', 'SES', Promise.reject(result), true, mock)
  },
  setIdentityMailFromDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityMailFromDomain', 'SES', Promise.resolve(result), true, mock)
  },
  setIdentityMailFromDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityMailFromDomain', 'SES', Promise.resolve(result), false, mock)
  },
  setIdentityMailFromDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityMailFromDomain', 'SES', Promise.reject(result), true, mock)
  },
  setIdentityNotificationTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityNotificationTopic', 'SES', Promise.resolve(result), true, mock)
  },
  setIdentityNotificationTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityNotificationTopic', 'SES', Promise.resolve(result), false, mock)
  },
  setIdentityNotificationTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setIdentityNotificationTopic', 'SES', Promise.reject(result), true, mock)
  },
  setReceiptRulePosition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setReceiptRulePosition', 'SES', Promise.resolve(result), true, mock)
  },
  setReceiptRulePositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setReceiptRulePosition', 'SES', Promise.resolve(result), false, mock)
  },
  setReceiptRulePositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'setReceiptRulePosition', 'SES', Promise.reject(result), true, mock)
  },
  testRenderTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'testRenderTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  testRenderTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'testRenderTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  testRenderTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'testRenderTemplate', 'SES', Promise.reject(result), true, mock)
  },
  updateAccountSendingEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateAccountSendingEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  updateAccountSendingEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateAccountSendingEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  updateAccountSendingEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateAccountSendingEnabled', 'SES', Promise.reject(result), true, mock)
  },
  updateConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetEventDestination', 'SES', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetEventDestination', 'SES', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetEventDestination', 'SES', Promise.reject(result), true, mock)
  },
  updateConfigurationSetReputationMetricsEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetReputationMetricsEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetReputationMetricsEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetReputationMetricsEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetReputationMetricsEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetReputationMetricsEnabled', 'SES', Promise.reject(result), true, mock)
  },
  updateConfigurationSetSendingEnabled: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetSendingEnabled', 'SES', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetSendingEnabledAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetSendingEnabled', 'SES', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetSendingEnabledThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetSendingEnabled', 'SES', Promise.reject(result), true, mock)
  },
  updateConfigurationSetTrackingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetTrackingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetTrackingOptions', 'SES', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetTrackingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateConfigurationSetTrackingOptions', 'SES', Promise.reject(result), true, mock)
  },
  updateCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  updateCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateCustomVerificationEmailTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  updateCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateCustomVerificationEmailTemplate', 'SES', Promise.reject(result), true, mock)
  },
  updateReceiptRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateReceiptRule', 'SES', Promise.resolve(result), true, mock)
  },
  updateReceiptRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateReceiptRule', 'SES', Promise.resolve(result), false, mock)
  },
  updateReceiptRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateReceiptRule', 'SES', Promise.reject(result), true, mock)
  },
  updateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateTemplate', 'SES', Promise.resolve(result), true, mock)
  },
  updateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateTemplate', 'SES', Promise.resolve(result), false, mock)
  },
  updateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'updateTemplate', 'SES', Promise.reject(result), true, mock)
  },
  verifyDomainDkim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainDkim', 'SES', Promise.resolve(result), true, mock)
  },
  verifyDomainDkimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainDkim', 'SES', Promise.resolve(result), false, mock)
  },
  verifyDomainDkimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainDkim', 'SES', Promise.reject(result), true, mock)
  },
  verifyDomainIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainIdentity', 'SES', Promise.resolve(result), true, mock)
  },
  verifyDomainIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainIdentity', 'SES', Promise.resolve(result), false, mock)
  },
  verifyDomainIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyDomainIdentity', 'SES', Promise.reject(result), true, mock)
  },
  verifyEmailAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailAddress', 'SES', Promise.resolve(result), true, mock)
  },
  verifyEmailAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailAddress', 'SES', Promise.resolve(result), false, mock)
  },
  verifyEmailAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailAddress', 'SES', Promise.reject(result), true, mock)
  },
  verifyEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailIdentity', 'SES', Promise.resolve(result), true, mock)
  },
  verifyEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailIdentity', 'SES', Promise.resolve(result), false, mock)
  },
  verifyEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'verifyEmailIdentity', 'SES', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'send', 'SESClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'send', 'SESClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ses', 'send', 'SESClient', Promise.reject(result), true, mock)
  }
}