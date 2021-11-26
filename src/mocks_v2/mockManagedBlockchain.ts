
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
  export const mockManagedBlockchain = {
  createMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetwork', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetwork', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetwork', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  deleteMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  deleteMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  deleteMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  deleteNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  deleteNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  deleteNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetwork', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetwork', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetwork', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworks', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworks', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworks', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listProposalVotes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposalVotes', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listProposalVotesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposalVotes', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listProposalVotesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposalVotes', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listProposals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposals', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listProposalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposals', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listProposalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProposals', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  rejectInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  rejectInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  rejectInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInvitation', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  updateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  updateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  updateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  updateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  updateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  updateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  voteOnProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('voteOnProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  voteOnProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('voteOnProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  voteOnProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('voteOnProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
}
