
/**
* @description mocks_v3:mockChime module is mocks for AWS-SDK V3
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

  export const mockChime = {
  associatePhoneNumberWithUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumberWithUser', 'Chime', Promise.resolve(result), true, mock)
  },
  associatePhoneNumberWithUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumberWithUser', 'Chime', Promise.resolve(result), false, mock)
  },
  associatePhoneNumberWithUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumberWithUser', 'Chime', Promise.reject(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  associatePhoneNumbersWithVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associatePhoneNumbersWithVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  associateSigninDelegateGroupsWithAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associateSigninDelegateGroupsWithAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  associateSigninDelegateGroupsWithAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associateSigninDelegateGroupsWithAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  associateSigninDelegateGroupsWithAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'associateSigninDelegateGroupsWithAccount', 'Chime', Promise.reject(result), true, mock)
  },
  batchCreateAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  batchCreateAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  batchCreateAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  batchCreateChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateChannelMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  batchCreateChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateChannelMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  batchCreateChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateChannelMembership', 'Chime', Promise.reject(result), true, mock)
  },
  batchCreateRoomMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateRoomMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  batchCreateRoomMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateRoomMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  batchCreateRoomMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchCreateRoomMembership', 'Chime', Promise.reject(result), true, mock)
  },
  batchDeletePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchDeletePhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  batchDeletePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchDeletePhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  batchDeletePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchDeletePhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  batchSuspendUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchSuspendUser', 'Chime', Promise.resolve(result), true, mock)
  },
  batchSuspendUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchSuspendUser', 'Chime', Promise.resolve(result), false, mock)
  },
  batchSuspendUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchSuspendUser', 'Chime', Promise.reject(result), true, mock)
  },
  batchUnsuspendUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUnsuspendUser', 'Chime', Promise.resolve(result), true, mock)
  },
  batchUnsuspendUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUnsuspendUser', 'Chime', Promise.resolve(result), false, mock)
  },
  batchUnsuspendUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUnsuspendUser', 'Chime', Promise.reject(result), true, mock)
  },
  batchUpdatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdatePhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  batchUpdatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdatePhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  batchUpdatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdatePhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  batchUpdateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdateUser', 'Chime', Promise.resolve(result), true, mock)
  },
  batchUpdateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdateUser', 'Chime', Promise.resolve(result), false, mock)
  },
  batchUpdateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'batchUpdateUser', 'Chime', Promise.reject(result), true, mock)
  },
  createAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  createAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  createAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAccount', 'Chime', Promise.reject(result), true, mock)
  },
  createAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstance', 'Chime', Promise.resolve(result), true, mock)
  },
  createAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstance', 'Chime', Promise.resolve(result), false, mock)
  },
  createAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstance', 'Chime', Promise.reject(result), true, mock)
  },
  createAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceAdmin', 'Chime', Promise.resolve(result), true, mock)
  },
  createAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceAdmin', 'Chime', Promise.resolve(result), false, mock)
  },
  createAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceAdmin', 'Chime', Promise.reject(result), true, mock)
  },
  createAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  createAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  createAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  createAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  createAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  createAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  createBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createBot', 'Chime', Promise.resolve(result), true, mock)
  },
  createBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createBot', 'Chime', Promise.resolve(result), false, mock)
  },
  createBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createBot', 'Chime', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannel', 'Chime', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannel', 'Chime', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannel', 'Chime', Promise.reject(result), true, mock)
  },
  createChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelBan', 'Chime', Promise.resolve(result), true, mock)
  },
  createChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelBan', 'Chime', Promise.resolve(result), false, mock)
  },
  createChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelBan', 'Chime', Promise.reject(result), true, mock)
  },
  createChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  createChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  createChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelMembership', 'Chime', Promise.reject(result), true, mock)
  },
  createChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelModerator', 'Chime', Promise.resolve(result), true, mock)
  },
  createChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelModerator', 'Chime', Promise.resolve(result), false, mock)
  },
  createChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createChannelModerator', 'Chime', Promise.reject(result), true, mock)
  },
  createMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMediaCapturePipeline', 'Chime', Promise.resolve(result), true, mock)
  },
  createMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMediaCapturePipeline', 'Chime', Promise.resolve(result), false, mock)
  },
  createMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMediaCapturePipeline', 'Chime', Promise.reject(result), true, mock)
  },
  createMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeeting', 'Chime', Promise.resolve(result), true, mock)
  },
  createMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeeting', 'Chime', Promise.resolve(result), false, mock)
  },
  createMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeeting', 'Chime', Promise.reject(result), true, mock)
  },
  createMeetingDialOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingDialOut', 'Chime', Promise.resolve(result), true, mock)
  },
  createMeetingDialOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingDialOut', 'Chime', Promise.resolve(result), false, mock)
  },
  createMeetingDialOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingDialOut', 'Chime', Promise.reject(result), true, mock)
  },
  createMeetingWithAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingWithAttendees', 'Chime', Promise.resolve(result), true, mock)
  },
  createMeetingWithAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingWithAttendees', 'Chime', Promise.resolve(result), false, mock)
  },
  createMeetingWithAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createMeetingWithAttendees', 'Chime', Promise.reject(result), true, mock)
  },
  createPhoneNumberOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createPhoneNumberOrder', 'Chime', Promise.resolve(result), true, mock)
  },
  createPhoneNumberOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createPhoneNumberOrder', 'Chime', Promise.resolve(result), false, mock)
  },
  createPhoneNumberOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createPhoneNumberOrder', 'Chime', Promise.reject(result), true, mock)
  },
  createProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createProxySession', 'Chime', Promise.resolve(result), true, mock)
  },
  createProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createProxySession', 'Chime', Promise.resolve(result), false, mock)
  },
  createProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createProxySession', 'Chime', Promise.reject(result), true, mock)
  },
  createRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoom', 'Chime', Promise.resolve(result), true, mock)
  },
  createRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoom', 'Chime', Promise.resolve(result), false, mock)
  },
  createRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoom', 'Chime', Promise.reject(result), true, mock)
  },
  createRoomMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoomMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  createRoomMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoomMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  createRoomMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createRoomMembership', 'Chime', Promise.reject(result), true, mock)
  },
  createSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplication', 'Chime', Promise.resolve(result), true, mock)
  },
  createSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplication', 'Chime', Promise.resolve(result), false, mock)
  },
  createSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplication', 'Chime', Promise.reject(result), true, mock)
  },
  createSipMediaApplicationCall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplicationCall', 'Chime', Promise.resolve(result), true, mock)
  },
  createSipMediaApplicationCallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplicationCall', 'Chime', Promise.resolve(result), false, mock)
  },
  createSipMediaApplicationCallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipMediaApplicationCall', 'Chime', Promise.reject(result), true, mock)
  },
  createSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipRule', 'Chime', Promise.resolve(result), true, mock)
  },
  createSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipRule', 'Chime', Promise.resolve(result), false, mock)
  },
  createSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createSipRule', 'Chime', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createUser', 'Chime', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createUser', 'Chime', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createUser', 'Chime', Promise.reject(result), true, mock)
  },
  createVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  createVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  createVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  createVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  createVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  createVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'createVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAccount', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstance', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstance', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstance', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceAdmin', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceAdmin', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceAdmin', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAppInstanceStreamingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceStreamingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceStreamingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceStreamingConfigurations', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  deleteAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannel', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannel', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannel', 'Chime', Promise.reject(result), true, mock)
  },
  deleteChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelBan', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelBan', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelBan', 'Chime', Promise.reject(result), true, mock)
  },
  deleteChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMembership', 'Chime', Promise.reject(result), true, mock)
  },
  deleteChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelMessage', 'Chime', Promise.reject(result), true, mock)
  },
  deleteChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelModerator', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelModerator', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteChannelModerator', 'Chime', Promise.reject(result), true, mock)
  },
  deleteEventsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteEventsConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteEventsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteEventsConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteEventsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteEventsConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  deleteMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMediaCapturePipeline', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMediaCapturePipeline', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMediaCapturePipeline', 'Chime', Promise.reject(result), true, mock)
  },
  deleteMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMeeting', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMeeting', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteMeeting', 'Chime', Promise.reject(result), true, mock)
  },
  deletePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deletePhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  deletePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deletePhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  deletePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deletePhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  deleteProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteProxySession', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteProxySession', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteProxySession', 'Chime', Promise.reject(result), true, mock)
  },
  deleteRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoom', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoom', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoom', 'Chime', Promise.reject(result), true, mock)
  },
  deleteRoomMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoomMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteRoomMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoomMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteRoomMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteRoomMembership', 'Chime', Promise.reject(result), true, mock)
  },
  deleteSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipMediaApplication', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipMediaApplication', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipMediaApplication', 'Chime', Promise.reject(result), true, mock)
  },
  deleteSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipRule', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipRule', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteSipRule', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorOrigination', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorOrigination', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorOrigination', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorProxy', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorProxy', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorProxy', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorStreamingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTermination', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTermination', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTermination', 'Chime', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'deleteVoiceConnectorTerminationCredentials', 'Chime', Promise.reject(result), true, mock)
  },
  describeAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstance', 'Chime', Promise.resolve(result), true, mock)
  },
  describeAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstance', 'Chime', Promise.resolve(result), false, mock)
  },
  describeAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstance', 'Chime', Promise.reject(result), true, mock)
  },
  describeAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceAdmin', 'Chime', Promise.resolve(result), true, mock)
  },
  describeAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceAdmin', 'Chime', Promise.resolve(result), false, mock)
  },
  describeAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceAdmin', 'Chime', Promise.reject(result), true, mock)
  },
  describeAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  describeAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  describeAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannel', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannel', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannel', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelBan', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelBan', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelBan', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembership', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannelMembershipForAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembershipForAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelMembershipForAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembershipForAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelMembershipForAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelMembershipForAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannelModeratedByAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModeratedByAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelModeratedByAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModeratedByAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelModeratedByAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModeratedByAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  describeChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModerator', 'Chime', Promise.resolve(result), true, mock)
  },
  describeChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModerator', 'Chime', Promise.resolve(result), false, mock)
  },
  describeChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'describeChannelModerator', 'Chime', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'destroy', 'Chime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'destroy', 'Chime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'destroy', 'Chime', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumberFromUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumberFromUser', 'Chime', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumberFromUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumberFromUser', 'Chime', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumberFromUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumberFromUser', 'Chime', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  disassociateSigninDelegateGroupsFromAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociateSigninDelegateGroupsFromAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  disassociateSigninDelegateGroupsFromAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociateSigninDelegateGroupsFromAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  disassociateSigninDelegateGroupsFromAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'disassociateSigninDelegateGroupsFromAccount', 'Chime', Promise.reject(result), true, mock)
  },
  getAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  getAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  getAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccount', 'Chime', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccountSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccountSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAccountSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getAppInstanceRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceRetentionSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getAppInstanceRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceRetentionSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getAppInstanceRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceRetentionSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getAppInstanceStreamingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), true, mock)
  },
  getAppInstanceStreamingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), false, mock)
  },
  getAppInstanceStreamingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAppInstanceStreamingConfigurations', 'Chime', Promise.reject(result), true, mock)
  },
  getAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  getAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  getAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  getBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getBot', 'Chime', Promise.resolve(result), true, mock)
  },
  getBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getBot', 'Chime', Promise.resolve(result), false, mock)
  },
  getBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getBot', 'Chime', Promise.reject(result), true, mock)
  },
  getChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getChannelMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  getChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getChannelMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  getChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getChannelMessage', 'Chime', Promise.reject(result), true, mock)
  },
  getEventsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getEventsConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  getEventsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getEventsConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  getEventsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getEventsConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  getGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getGlobalSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getGlobalSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getGlobalSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMediaCapturePipeline', 'Chime', Promise.resolve(result), true, mock)
  },
  getMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMediaCapturePipeline', 'Chime', Promise.resolve(result), false, mock)
  },
  getMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMediaCapturePipeline', 'Chime', Promise.reject(result), true, mock)
  },
  getMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMeeting', 'Chime', Promise.resolve(result), true, mock)
  },
  getMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMeeting', 'Chime', Promise.resolve(result), false, mock)
  },
  getMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMeeting', 'Chime', Promise.reject(result), true, mock)
  },
  getMessagingSessionEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMessagingSessionEndpoint', 'Chime', Promise.resolve(result), true, mock)
  },
  getMessagingSessionEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMessagingSessionEndpoint', 'Chime', Promise.resolve(result), false, mock)
  },
  getMessagingSessionEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getMessagingSessionEndpoint', 'Chime', Promise.reject(result), true, mock)
  },
  getPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  getPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  getPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  getPhoneNumberOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberOrder', 'Chime', Promise.resolve(result), true, mock)
  },
  getPhoneNumberOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberOrder', 'Chime', Promise.resolve(result), false, mock)
  },
  getPhoneNumberOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberOrder', 'Chime', Promise.reject(result), true, mock)
  },
  getPhoneNumberSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getPhoneNumberSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getPhoneNumberSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getPhoneNumberSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getProxySession', 'Chime', Promise.resolve(result), true, mock)
  },
  getProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getProxySession', 'Chime', Promise.resolve(result), false, mock)
  },
  getProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getProxySession', 'Chime', Promise.reject(result), true, mock)
  },
  getRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRetentionSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRetentionSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRetentionSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRoom', 'Chime', Promise.resolve(result), true, mock)
  },
  getRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRoom', 'Chime', Promise.resolve(result), false, mock)
  },
  getRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getRoom', 'Chime', Promise.reject(result), true, mock)
  },
  getSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplication', 'Chime', Promise.resolve(result), true, mock)
  },
  getSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplication', 'Chime', Promise.resolve(result), false, mock)
  },
  getSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplication', 'Chime', Promise.reject(result), true, mock)
  },
  getSipMediaApplicationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplicationLoggingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  getSipMediaApplicationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplicationLoggingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  getSipMediaApplicationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipMediaApplicationLoggingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  getSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipRule', 'Chime', Promise.resolve(result), true, mock)
  },
  getSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipRule', 'Chime', Promise.resolve(result), false, mock)
  },
  getSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getSipRule', 'Chime', Promise.reject(result), true, mock)
  },
  getUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUser', 'Chime', Promise.resolve(result), true, mock)
  },
  getUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUser', 'Chime', Promise.resolve(result), false, mock)
  },
  getUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUser', 'Chime', Promise.reject(result), true, mock)
  },
  getUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUserSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  getUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUserSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  getUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getUserSettings', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorLoggingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorLoggingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorLoggingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorOrigination', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorOrigination', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorOrigination', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorProxy', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorProxy', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorProxy', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorStreamingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTermination', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTermination', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTermination', 'Chime', Promise.reject(result), true, mock)
  },
  getVoiceConnectorTerminationHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTerminationHealth', 'Chime', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorTerminationHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTerminationHealth', 'Chime', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorTerminationHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'getVoiceConnectorTerminationHealth', 'Chime', Promise.reject(result), true, mock)
  },
  inviteUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'inviteUsers', 'Chime', Promise.resolve(result), true, mock)
  },
  inviteUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'inviteUsers', 'Chime', Promise.resolve(result), false, mock)
  },
  inviteUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'inviteUsers', 'Chime', Promise.reject(result), true, mock)
  },
  listAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAccounts', 'Chime', Promise.resolve(result), true, mock)
  },
  listAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAccounts', 'Chime', Promise.resolve(result), false, mock)
  },
  listAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAccounts', 'Chime', Promise.reject(result), true, mock)
  },
  listAppInstanceAdmins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceAdmins', 'Chime', Promise.resolve(result), true, mock)
  },
  listAppInstanceAdminsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceAdmins', 'Chime', Promise.resolve(result), false, mock)
  },
  listAppInstanceAdminsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceAdmins', 'Chime', Promise.reject(result), true, mock)
  },
  listAppInstanceUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceUsers', 'Chime', Promise.resolve(result), true, mock)
  },
  listAppInstanceUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceUsers', 'Chime', Promise.resolve(result), false, mock)
  },
  listAppInstanceUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstanceUsers', 'Chime', Promise.reject(result), true, mock)
  },
  listAppInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstances', 'Chime', Promise.resolve(result), true, mock)
  },
  listAppInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstances', 'Chime', Promise.resolve(result), false, mock)
  },
  listAppInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAppInstances', 'Chime', Promise.reject(result), true, mock)
  },
  listAttendeeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendeeTags', 'Chime', Promise.resolve(result), true, mock)
  },
  listAttendeeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendeeTags', 'Chime', Promise.resolve(result), false, mock)
  },
  listAttendeeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendeeTags', 'Chime', Promise.reject(result), true, mock)
  },
  listAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendees', 'Chime', Promise.resolve(result), true, mock)
  },
  listAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendees', 'Chime', Promise.resolve(result), false, mock)
  },
  listAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listAttendees', 'Chime', Promise.reject(result), true, mock)
  },
  listBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listBots', 'Chime', Promise.resolve(result), true, mock)
  },
  listBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listBots', 'Chime', Promise.resolve(result), false, mock)
  },
  listBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listBots', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelBans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelBans', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelBansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelBans', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelBansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelBans', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMemberships', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMemberships', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMemberships', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelMembershipsForAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMembershipsForAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelMembershipsForAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMembershipsForAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelMembershipsForAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMembershipsForAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMessages', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMessages', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelMessages', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelModerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelModerators', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelModeratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelModerators', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelModeratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelModerators', 'Chime', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannels', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannels', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannels', 'Chime', Promise.reject(result), true, mock)
  },
  listChannelsModeratedByAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelsModeratedByAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  listChannelsModeratedByAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelsModeratedByAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  listChannelsModeratedByAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listChannelsModeratedByAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  listMediaCapturePipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMediaCapturePipelines', 'Chime', Promise.resolve(result), true, mock)
  },
  listMediaCapturePipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMediaCapturePipelines', 'Chime', Promise.resolve(result), false, mock)
  },
  listMediaCapturePipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMediaCapturePipelines', 'Chime', Promise.reject(result), true, mock)
  },
  listMeetingTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetingTags', 'Chime', Promise.resolve(result), true, mock)
  },
  listMeetingTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetingTags', 'Chime', Promise.resolve(result), false, mock)
  },
  listMeetingTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetingTags', 'Chime', Promise.reject(result), true, mock)
  },
  listMeetings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetings', 'Chime', Promise.resolve(result), true, mock)
  },
  listMeetingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetings', 'Chime', Promise.resolve(result), false, mock)
  },
  listMeetingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listMeetings', 'Chime', Promise.reject(result), true, mock)
  },
  listPhoneNumberOrders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumberOrders', 'Chime', Promise.resolve(result), true, mock)
  },
  listPhoneNumberOrdersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumberOrders', 'Chime', Promise.resolve(result), false, mock)
  },
  listPhoneNumberOrdersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumberOrders', 'Chime', Promise.reject(result), true, mock)
  },
  listPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumbers', 'Chime', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumbers', 'Chime', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listPhoneNumbers', 'Chime', Promise.reject(result), true, mock)
  },
  listProxySessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listProxySessions', 'Chime', Promise.resolve(result), true, mock)
  },
  listProxySessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listProxySessions', 'Chime', Promise.resolve(result), false, mock)
  },
  listProxySessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listProxySessions', 'Chime', Promise.reject(result), true, mock)
  },
  listRoomMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRoomMemberships', 'Chime', Promise.resolve(result), true, mock)
  },
  listRoomMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRoomMemberships', 'Chime', Promise.resolve(result), false, mock)
  },
  listRoomMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRoomMemberships', 'Chime', Promise.reject(result), true, mock)
  },
  listRooms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRooms', 'Chime', Promise.resolve(result), true, mock)
  },
  listRoomsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRooms', 'Chime', Promise.resolve(result), false, mock)
  },
  listRoomsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listRooms', 'Chime', Promise.reject(result), true, mock)
  },
  listSipMediaApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipMediaApplications', 'Chime', Promise.resolve(result), true, mock)
  },
  listSipMediaApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipMediaApplications', 'Chime', Promise.resolve(result), false, mock)
  },
  listSipMediaApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipMediaApplications', 'Chime', Promise.reject(result), true, mock)
  },
  listSipRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipRules', 'Chime', Promise.resolve(result), true, mock)
  },
  listSipRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipRules', 'Chime', Promise.resolve(result), false, mock)
  },
  listSipRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSipRules', 'Chime', Promise.reject(result), true, mock)
  },
  listSupportedPhoneNumberCountries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSupportedPhoneNumberCountries', 'Chime', Promise.resolve(result), true, mock)
  },
  listSupportedPhoneNumberCountriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSupportedPhoneNumberCountries', 'Chime', Promise.resolve(result), false, mock)
  },
  listSupportedPhoneNumberCountriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listSupportedPhoneNumberCountries', 'Chime', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listTagsForResource', 'Chime', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listTagsForResource', 'Chime', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listTagsForResource', 'Chime', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listUsers', 'Chime', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listUsers', 'Chime', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listUsers', 'Chime', Promise.reject(result), true, mock)
  },
  listVoiceConnectorGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorGroups', 'Chime', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorGroups', 'Chime', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorGroups', 'Chime', Promise.reject(result), true, mock)
  },
  listVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectorTerminationCredentials', 'Chime', Promise.reject(result), true, mock)
  },
  listVoiceConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectors', 'Chime', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectors', 'Chime', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'listVoiceConnectors', 'Chime', Promise.reject(result), true, mock)
  },
  logoutUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'logoutUser', 'Chime', Promise.resolve(result), true, mock)
  },
  logoutUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'logoutUser', 'Chime', Promise.resolve(result), false, mock)
  },
  logoutUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'logoutUser', 'Chime', Promise.reject(result), true, mock)
  },
  putAppInstanceRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceRetentionSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  putAppInstanceRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceRetentionSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  putAppInstanceRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceRetentionSettings', 'Chime', Promise.reject(result), true, mock)
  },
  putAppInstanceStreamingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), true, mock)
  },
  putAppInstanceStreamingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceStreamingConfigurations', 'Chime', Promise.resolve(result), false, mock)
  },
  putAppInstanceStreamingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putAppInstanceStreamingConfigurations', 'Chime', Promise.reject(result), true, mock)
  },
  putEventsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putEventsConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  putEventsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putEventsConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  putEventsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putEventsConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  putRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putRetentionSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  putRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putRetentionSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  putRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putRetentionSettings', 'Chime', Promise.reject(result), true, mock)
  },
  putSipMediaApplicationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putSipMediaApplicationLoggingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  putSipMediaApplicationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putSipMediaApplicationLoggingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  putSipMediaApplicationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putSipMediaApplicationLoggingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorEmergencyCallingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorLoggingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorLoggingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorLoggingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorOrigination', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorOrigination', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorOrigination', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorProxy', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorProxy', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorProxy', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorStreamingConfiguration', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorStreamingConfiguration', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTermination', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTermination', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTermination', 'Chime', Promise.reject(result), true, mock)
  },
  putVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTerminationCredentials', 'Chime', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'putVoiceConnectorTerminationCredentials', 'Chime', Promise.reject(result), true, mock)
  },
  redactChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactChannelMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  redactChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactChannelMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  redactChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactChannelMessage', 'Chime', Promise.reject(result), true, mock)
  },
  redactConversationMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactConversationMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  redactConversationMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactConversationMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  redactConversationMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactConversationMessage', 'Chime', Promise.reject(result), true, mock)
  },
  redactRoomMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactRoomMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  redactRoomMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactRoomMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  redactRoomMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'redactRoomMessage', 'Chime', Promise.reject(result), true, mock)
  },
  regenerateSecurityToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'regenerateSecurityToken', 'Chime', Promise.resolve(result), true, mock)
  },
  regenerateSecurityTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'regenerateSecurityToken', 'Chime', Promise.resolve(result), false, mock)
  },
  regenerateSecurityTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'regenerateSecurityToken', 'Chime', Promise.reject(result), true, mock)
  },
  resetPersonalPIN: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'resetPersonalPIN', 'Chime', Promise.resolve(result), true, mock)
  },
  resetPersonalPINAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'resetPersonalPIN', 'Chime', Promise.resolve(result), false, mock)
  },
  resetPersonalPINThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'resetPersonalPIN', 'Chime', Promise.reject(result), true, mock)
  },
  restorePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'restorePhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  restorePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'restorePhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  restorePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'restorePhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  searchAvailablePhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'searchAvailablePhoneNumbers', 'Chime', Promise.resolve(result), true, mock)
  },
  searchAvailablePhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'searchAvailablePhoneNumbers', 'Chime', Promise.resolve(result), false, mock)
  },
  searchAvailablePhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'searchAvailablePhoneNumbers', 'Chime', Promise.reject(result), true, mock)
  },
  sendChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'sendChannelMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  sendChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'sendChannelMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  sendChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'sendChannelMessage', 'Chime', Promise.reject(result), true, mock)
  },
  startMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'startMeetingTranscription', 'Chime', Promise.resolve(result), true, mock)
  },
  startMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'startMeetingTranscription', 'Chime', Promise.resolve(result), false, mock)
  },
  startMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'startMeetingTranscription', 'Chime', Promise.reject(result), true, mock)
  },
  stopMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'stopMeetingTranscription', 'Chime', Promise.resolve(result), true, mock)
  },
  stopMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'stopMeetingTranscription', 'Chime', Promise.resolve(result), false, mock)
  },
  stopMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'stopMeetingTranscription', 'Chime', Promise.reject(result), true, mock)
  },
  tagAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  tagAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  tagAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  tagMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagMeeting', 'Chime', Promise.resolve(result), true, mock)
  },
  tagMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagMeeting', 'Chime', Promise.resolve(result), false, mock)
  },
  tagMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagMeeting', 'Chime', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagResource', 'Chime', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagResource', 'Chime', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'tagResource', 'Chime', Promise.reject(result), true, mock)
  },
  untagAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagAttendee', 'Chime', Promise.resolve(result), true, mock)
  },
  untagAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagAttendee', 'Chime', Promise.resolve(result), false, mock)
  },
  untagAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagAttendee', 'Chime', Promise.reject(result), true, mock)
  },
  untagMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagMeeting', 'Chime', Promise.resolve(result), true, mock)
  },
  untagMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagMeeting', 'Chime', Promise.resolve(result), false, mock)
  },
  untagMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagMeeting', 'Chime', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagResource', 'Chime', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagResource', 'Chime', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'untagResource', 'Chime', Promise.reject(result), true, mock)
  },
  updateAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccount', 'Chime', Promise.resolve(result), true, mock)
  },
  updateAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccount', 'Chime', Promise.resolve(result), false, mock)
  },
  updateAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccount', 'Chime', Promise.reject(result), true, mock)
  },
  updateAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccountSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  updateAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccountSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  updateAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAccountSettings', 'Chime', Promise.reject(result), true, mock)
  },
  updateAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstance', 'Chime', Promise.resolve(result), true, mock)
  },
  updateAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstance', 'Chime', Promise.resolve(result), false, mock)
  },
  updateAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstance', 'Chime', Promise.reject(result), true, mock)
  },
  updateAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstanceUser', 'Chime', Promise.resolve(result), true, mock)
  },
  updateAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstanceUser', 'Chime', Promise.resolve(result), false, mock)
  },
  updateAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateAppInstanceUser', 'Chime', Promise.reject(result), true, mock)
  },
  updateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateBot', 'Chime', Promise.resolve(result), true, mock)
  },
  updateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateBot', 'Chime', Promise.resolve(result), false, mock)
  },
  updateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateBot', 'Chime', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannel', 'Chime', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannel', 'Chime', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannel', 'Chime', Promise.reject(result), true, mock)
  },
  updateChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelMessage', 'Chime', Promise.resolve(result), true, mock)
  },
  updateChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelMessage', 'Chime', Promise.resolve(result), false, mock)
  },
  updateChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelMessage', 'Chime', Promise.reject(result), true, mock)
  },
  updateChannelReadMarker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelReadMarker', 'Chime', Promise.resolve(result), true, mock)
  },
  updateChannelReadMarkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelReadMarker', 'Chime', Promise.resolve(result), false, mock)
  },
  updateChannelReadMarkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateChannelReadMarker', 'Chime', Promise.reject(result), true, mock)
  },
  updateGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateGlobalSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  updateGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateGlobalSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  updateGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateGlobalSettings', 'Chime', Promise.reject(result), true, mock)
  },
  updatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumber', 'Chime', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumber', 'Chime', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumber', 'Chime', Promise.reject(result), true, mock)
  },
  updatePhoneNumberSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumberSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumberSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updatePhoneNumberSettings', 'Chime', Promise.reject(result), true, mock)
  },
  updateProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateProxySession', 'Chime', Promise.resolve(result), true, mock)
  },
  updateProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateProxySession', 'Chime', Promise.resolve(result), false, mock)
  },
  updateProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateProxySession', 'Chime', Promise.reject(result), true, mock)
  },
  updateRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoom', 'Chime', Promise.resolve(result), true, mock)
  },
  updateRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoom', 'Chime', Promise.resolve(result), false, mock)
  },
  updateRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoom', 'Chime', Promise.reject(result), true, mock)
  },
  updateRoomMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoomMembership', 'Chime', Promise.resolve(result), true, mock)
  },
  updateRoomMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoomMembership', 'Chime', Promise.resolve(result), false, mock)
  },
  updateRoomMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateRoomMembership', 'Chime', Promise.reject(result), true, mock)
  },
  updateSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplication', 'Chime', Promise.resolve(result), true, mock)
  },
  updateSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplication', 'Chime', Promise.resolve(result), false, mock)
  },
  updateSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplication', 'Chime', Promise.reject(result), true, mock)
  },
  updateSipMediaApplicationCall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplicationCall', 'Chime', Promise.resolve(result), true, mock)
  },
  updateSipMediaApplicationCallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplicationCall', 'Chime', Promise.resolve(result), false, mock)
  },
  updateSipMediaApplicationCallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipMediaApplicationCall', 'Chime', Promise.reject(result), true, mock)
  },
  updateSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipRule', 'Chime', Promise.resolve(result), true, mock)
  },
  updateSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipRule', 'Chime', Promise.resolve(result), false, mock)
  },
  updateSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateSipRule', 'Chime', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUser', 'Chime', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUser', 'Chime', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUser', 'Chime', Promise.reject(result), true, mock)
  },
  updateUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUserSettings', 'Chime', Promise.resolve(result), true, mock)
  },
  updateUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUserSettings', 'Chime', Promise.resolve(result), false, mock)
  },
  updateUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateUserSettings', 'Chime', Promise.reject(result), true, mock)
  },
  updateVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnector', 'Chime', Promise.resolve(result), true, mock)
  },
  updateVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnector', 'Chime', Promise.resolve(result), false, mock)
  },
  updateVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnector', 'Chime', Promise.reject(result), true, mock)
  },
  updateVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnectorGroup', 'Chime', Promise.resolve(result), true, mock)
  },
  updateVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnectorGroup', 'Chime', Promise.resolve(result), false, mock)
  },
  updateVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'updateVoiceConnectorGroup', 'Chime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'send', 'ChimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'send', 'ChimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime', 'send', 'ChimeClient', Promise.reject(result), true, mock)
  }
}