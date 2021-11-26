
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
  export const mockSSMContacts = {
  acceptPage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPage', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  acceptPageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPage', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  acceptPageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptPage', 'SSMContacts', Promise.reject(result), true, mock)
  },
  activateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  activateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  activateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  createContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  createContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  createContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  createContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  createContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  createContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deactivateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deactivateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deactivateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deleteContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deleteContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deleteContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deleteContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deleteContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deleteContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  describeEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  describeEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  describeEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  describePage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePage', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  describePageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePage', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  describePageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePage', 'SSMContacts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContactPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactPolicy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactPolicy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactPolicy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listContactChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactChannels', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listContactChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactChannels', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listContactChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactChannels', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listEngagements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngagements', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listEngagementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngagements', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listEngagementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEngagements', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPageReceipts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPageReceipts', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPageReceiptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPageReceipts', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPageReceiptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPageReceipts', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPagesByContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPagesByContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPagesByContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPagesByEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPagesByEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPagesByEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPagesByEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  putContactPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContactPolicy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  putContactPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContactPolicy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  putContactPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContactPolicy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  sendActivationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendActivationCode', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  sendActivationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendActivationCode', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  sendActivationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendActivationCode', 'SSMContacts', Promise.reject(result), true, mock)
  },
  startEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  startEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  startEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  stopEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  stopEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  stopEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  updateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  updateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  updateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
}
