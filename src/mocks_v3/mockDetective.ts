
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockDetective = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  createGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  createGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  createGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.reject(result), true, mock)
  },
  deleteGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'destroy', 'Detective', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'destroy', 'Detective', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'destroy', 'Detective', Promise.reject(result), true, mock)
  },
  disassociateMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.resolve(result), true, mock)
  },
  disassociateMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.resolve(result), false, mock)
  },
  disassociateMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listGraphs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.resolve(result), true, mock)
  },
  listGraphsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.resolve(result), false, mock)
  },
  listGraphsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.reject(result), true, mock)
  },
  rejectInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  rejectInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  rejectInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  startMonitoringMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.resolve(result), true, mock)
  },
  startMonitoringMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.resolve(result), false, mock)
  },
  startMonitoringMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.reject(result), true, mock)
  }
}