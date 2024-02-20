
/**
* @description mocks_v3:mockPinpointSMSVoiceV2 module is mocks for AWS-SDK V3
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
export const mockPinpointSMSVoiceV2 = {
  associateOriginationIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'associateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  associateOriginationIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'associateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  associateOriginationIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'associateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createConfigurationSet', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createConfigurationSet', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createConfigurationSet', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createEventDestination', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createOptOutList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createOptOutList', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createOptOutListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createOptOutList', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createOptOutListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createOptOutList', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createPool', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createPool', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createPool', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createRegistrationAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAssociation', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createRegistrationAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAssociation', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createRegistrationAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAssociation', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createRegistrationAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createRegistrationAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createRegistrationAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistration', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistration', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistration', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createRegistrationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createRegistrationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createRegistrationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createRegistrationVersion', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  createVerifiedDestinationNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  createVerifiedDestinationNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  createVerifiedDestinationNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'createVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteConfigurationSet', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteConfigurationSet', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteConfigurationSet', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteDefaultMessageType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultMessageType', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteDefaultMessageTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultMessageType', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteDefaultMessageTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultMessageType', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteDefaultSenderId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteDefaultSenderIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteDefaultSenderIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteDefaultSenderId', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteEventDestination', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteKeyword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteKeyword', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteKeywordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteKeyword', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteKeywordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteKeyword', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteOptOutList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptOutList', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteOptOutListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptOutList', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteOptOutListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptOutList', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteOptedOutNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptedOutNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteOptedOutNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptedOutNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteOptedOutNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteOptedOutNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deletePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deletePool', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deletePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deletePool', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deletePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deletePool', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteRegistrationAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteRegistrationAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteRegistrationAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationAttachment', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistration', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistration', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistration', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteRegistrationFieldValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteRegistrationFieldValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteRegistrationFieldValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteTextMessageSpendLimitOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteTextMessageSpendLimitOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteTextMessageSpendLimitOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteVerifiedDestinationNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteVerifiedDestinationNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteVerifiedDestinationNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVerifiedDestinationNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  deleteVoiceMessageSpendLimitOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  deleteVoiceMessageSpendLimitOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  deleteVoiceMessageSpendLimitOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'deleteVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountAttributes', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountAttributes', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountAttributes', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountLimits', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountLimits', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeAccountLimits', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeConfigurationSets', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeConfigurationSets', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeConfigurationSets', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeKeywords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeKeywords', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeKeywordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeKeywords', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeKeywordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeKeywords', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeOptOutLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptOutLists', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeOptOutListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptOutLists', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeOptOutListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptOutLists', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeOptedOutNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptedOutNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeOptedOutNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptedOutNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeOptedOutNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeOptedOutNumbers', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describePhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePhoneNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describePhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePhoneNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describePhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePhoneNumbers', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describePools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePools', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describePoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePools', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describePoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describePools', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationAttachments', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationAttachments', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationAttachments', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationFieldDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationFieldDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationFieldDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldDefinitions', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationFieldValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldValues', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationFieldValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldValues', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationFieldValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationFieldValues', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationSectionDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationSectionDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationSectionDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationSectionDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationSectionDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationSectionDefinitions', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationTypeDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationTypeDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationTypeDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationTypeDefinitions', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationTypeDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationTypeDefinitions', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationVersions', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationVersions', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrationVersions', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeRegistrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrations', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeRegistrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrations', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeRegistrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeRegistrations', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeSenderIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSenderIds', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeSenderIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSenderIds', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeSenderIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSenderIds', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeSpendLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSpendLimits', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeSpendLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSpendLimits', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeSpendLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeSpendLimits', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  describeVerifiedDestinationNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeVerifiedDestinationNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  describeVerifiedDestinationNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeVerifiedDestinationNumbers', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  describeVerifiedDestinationNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'describeVerifiedDestinationNumbers', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  disassociateOriginationIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'disassociateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  disassociateOriginationIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'disassociateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  disassociateOriginationIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'disassociateOriginationIdentity', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  discardRegistrationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'discardRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  discardRegistrationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'discardRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  discardRegistrationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'discardRegistrationVersion', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  listPoolOriginationIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listPoolOriginationIdentities', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  listPoolOriginationIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listPoolOriginationIdentities', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  listPoolOriginationIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listPoolOriginationIdentities', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  listRegistrationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listRegistrationAssociations', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  listRegistrationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listRegistrationAssociations', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  listRegistrationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listRegistrationAssociations', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listTagsForResource', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listTagsForResource', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'listTagsForResource', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  putKeyword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putKeyword', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  putKeywordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putKeyword', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  putKeywordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putKeyword', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  putOptedOutNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putOptedOutNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  putOptedOutNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putOptedOutNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  putOptedOutNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putOptedOutNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  putRegistrationFieldValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  putRegistrationFieldValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  putRegistrationFieldValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'putRegistrationFieldValue', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  releasePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releasePhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  releasePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releasePhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  releasePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releasePhoneNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  releaseSenderId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releaseSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  releaseSenderIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releaseSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  releaseSenderIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'releaseSenderId', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  requestPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestPhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  requestPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestPhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  requestPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestPhoneNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  requestSenderId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  requestSenderIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  requestSenderIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'requestSenderId', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  sendDestinationNumberVerificationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendDestinationNumberVerificationCode', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  sendDestinationNumberVerificationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendDestinationNumberVerificationCode', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  sendDestinationNumberVerificationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendDestinationNumberVerificationCode', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  sendTextMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendTextMessage', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  sendTextMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendTextMessage', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  sendTextMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendTextMessage', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  sendVoiceMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendVoiceMessage', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  sendVoiceMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendVoiceMessage', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  sendVoiceMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'sendVoiceMessage', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  setDefaultMessageType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultMessageType', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  setDefaultMessageTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultMessageType', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  setDefaultMessageTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultMessageType', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  setDefaultSenderId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  setDefaultSenderIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  setDefaultSenderIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setDefaultSenderId', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  setTextMessageSpendLimitOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  setTextMessageSpendLimitOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  setTextMessageSpendLimitOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setTextMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  setVoiceMessageSpendLimitOverride: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  setVoiceMessageSpendLimitOverrideAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  setVoiceMessageSpendLimitOverrideThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'setVoiceMessageSpendLimitOverride', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  submitRegistrationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'submitRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  submitRegistrationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'submitRegistrationVersion', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  submitRegistrationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'submitRegistrationVersion', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'tagResource', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'tagResource', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'tagResource', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'untagResource', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'untagResource', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'untagResource', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  updateEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  updateEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateEventDestination', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  updateEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateEventDestination', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  updatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePhoneNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePhoneNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  updatePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePool', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  updatePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePool', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  updatePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updatePool', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  updateSenderId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  updateSenderIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateSenderId', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  updateSenderIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'updateSenderId', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  verifyDestinationNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'verifyDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), true, mock)
  },
  verifyDestinationNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'verifyDestinationNumber', 'PinpointSMSVoiceV2', Promise.resolve(result), false, mock)
  },
  verifyDestinationNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'verifyDestinationNumber', 'PinpointSMSVoiceV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'send', 'PinpointSMSVoiceV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'send', 'PinpointSMSVoiceV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice-v2', 'send', 'PinpointSMSVoiceV2Client', Promise.reject(result), true, mock)
  }
}
