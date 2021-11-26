
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
  export const mockDetective = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  createGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  createGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  createGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGraph', 'Detective', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'Detective', Promise.reject(result), true, mock)
  },
  deleteGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGraph', 'Detective', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'Detective', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Detective', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Detective', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Detective', Promise.reject(result), true, mock)
  },
  disassociateMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembership', 'Detective', Promise.resolve(result), true, mock)
  },
  disassociateMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembership', 'Detective', Promise.resolve(result), false, mock)
  },
  disassociateMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembership', 'Detective', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listGraphs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGraphs', 'Detective', Promise.resolve(result), true, mock)
  },
  listGraphsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGraphs', 'Detective', Promise.resolve(result), false, mock)
  },
  listGraphsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGraphs', 'Detective', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Detective', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Detective', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Detective', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Detective', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Detective', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Detective', Promise.reject(result), true, mock)
  },
  rejectInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  rejectInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  rejectInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  startMonitoringMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMember', 'Detective', Promise.resolve(result), true, mock)
  },
  startMonitoringMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMember', 'Detective', Promise.resolve(result), false, mock)
  },
  startMonitoringMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMember', 'Detective', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Detective', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Detective', Promise.reject(result), true, mock)
  },
}
