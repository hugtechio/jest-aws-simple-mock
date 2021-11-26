
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
  export const mockChimeSDKMessaging = {
  associateChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  associateChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  associateChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  batchCreateChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  batchCreateChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  batchCreateChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateChannelMembership', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  channelFlowCallback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('channelFlowCallback', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  channelFlowCallbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('channelFlowCallback', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  channelFlowCallbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('channelFlowCallback', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  createChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  createChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  createChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelBan', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  createChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  createChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  createChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  createChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  createChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  createChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelMembership', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  createChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  createChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  createChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannelModerator', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelBan', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMembership', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelMessage', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  deleteChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  deleteChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  deleteChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannelModerator', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelBan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelBanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelBan', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelBanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelBan', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembership', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembership', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelMembershipForAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembershipForAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelMembershipForAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembershipForAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelMembershipForAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelMembershipForAppInstanceUser', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelModeratedByAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelModeratedByAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelModeratedByAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  describeChannelModerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  describeChannelModeratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModerator', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  describeChannelModeratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannelModerator', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  disassociateChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  disassociateChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  disassociateChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  getChannelMembershipPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  getChannelMembershipPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  getChannelMembershipPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  getChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  getChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  getChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessage', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  getChannelMessageStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessageStatus', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  getChannelMessageStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessageStatus', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  getChannelMessageStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannelMessageStatus', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  getMessagingSessionEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMessagingSessionEndpoint', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  getMessagingSessionEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMessagingSessionEndpoint', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  getMessagingSessionEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMessagingSessionEndpoint', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelBans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelBans', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelBansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelBans', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelBansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelBans', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelFlows', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelFlows', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelFlows', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMemberships', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMemberships', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMemberships', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelMembershipsForAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMembershipsForAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelMembershipsForAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMembershipsForAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelMembershipsForAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMembershipsForAppInstanceUser', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMessages', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMessages', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelMessages', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelModerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelModerators', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelModeratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelModerators', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelModeratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelModerators', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelsAssociatedWithChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsAssociatedWithChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelsAssociatedWithChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsAssociatedWithChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelsAssociatedWithChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsAssociatedWithChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listChannelsModeratedByAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listChannelsModeratedByAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listChannelsModeratedByAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannelsModeratedByAppInstanceUser', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  putChannelMembershipPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  putChannelMembershipPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  putChannelMembershipPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putChannelMembershipPreferences', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  redactChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('redactChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  redactChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('redactChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  redactChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('redactChannelMessage', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  sendChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  sendChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  sendChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendChannelMessage', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  updateChannelFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  updateChannelFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelFlow', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  updateChannelFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelFlow', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  updateChannelMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  updateChannelMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelMessage', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  updateChannelMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelMessage', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
  updateChannelReadMarker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelReadMarker', 'ChimeSDKMessaging', Promise.resolve(result), true, mock)
  },
  updateChannelReadMarkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelReadMarker', 'ChimeSDKMessaging', Promise.resolve(result), false, mock)
  },
  updateChannelReadMarkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelReadMarker', 'ChimeSDKMessaging', Promise.reject(result), true, mock)
  },
}