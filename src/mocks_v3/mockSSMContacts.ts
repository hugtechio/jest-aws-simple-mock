
/**
* @description mocks_v3:mockSSMContacts module is mocks for AWS-SDK V3
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

  export const mockSSMContacts = {
  acceptPage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'acceptPage', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  acceptPageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'acceptPage', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  acceptPageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'acceptPage', 'SSMContacts', Promise.reject(result), true, mock)
  },
  activateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'activateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  activateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'activateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  activateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'activateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  createContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  createContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  createContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  createContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  createContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  createContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'createContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deactivateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deactivateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deactivateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deactivateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deactivateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deactivateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deleteContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deleteContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deleteContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  deleteContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  deleteContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  deleteContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'deleteContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  describeEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describeEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  describeEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describeEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  describeEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describeEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  describePage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describePage', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  describePageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describePage', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  describePageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'describePage', 'SSMContacts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'destroy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'destroy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'destroy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  getContactPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactPolicy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  getContactPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactPolicy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  getContactPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'getContactPolicy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listContactChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContactChannels', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listContactChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContactChannels', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listContactChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContactChannels', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContacts', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContacts', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listContacts', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listEngagements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listEngagements', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listEngagementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listEngagements', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listEngagementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listEngagements', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPageReceipts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPageReceipts', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPageReceiptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPageReceipts', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPageReceiptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPageReceipts', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPagesByContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPagesByContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPagesByContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listPagesByEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listPagesByEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listPagesByEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listPagesByEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listTagsForResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listTagsForResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'listTagsForResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  putContactPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'putContactPolicy', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  putContactPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'putContactPolicy', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  putContactPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'putContactPolicy', 'SSMContacts', Promise.reject(result), true, mock)
  },
  sendActivationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'sendActivationCode', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  sendActivationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'sendActivationCode', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  sendActivationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'sendActivationCode', 'SSMContacts', Promise.reject(result), true, mock)
  },
  startEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'startEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  startEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'startEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  startEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'startEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  stopEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'stopEngagement', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  stopEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'stopEngagement', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  stopEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'stopEngagement', 'SSMContacts', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'tagResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'tagResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'tagResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'untagResource', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'untagResource', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'untagResource', 'SSMContacts', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContact', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContact', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContact', 'SSMContacts', Promise.reject(result), true, mock)
  },
  updateContactChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContactChannel', 'SSMContacts', Promise.resolve(result), true, mock)
  },
  updateContactChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContactChannel', 'SSMContacts', Promise.resolve(result), false, mock)
  },
  updateContactChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'updateContactChannel', 'SSMContacts', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'send', 'SSMContactsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'send', 'SSMContactsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm-contacts', 'send', 'SSMContactsClient', Promise.reject(result), true, mock)
  }
}