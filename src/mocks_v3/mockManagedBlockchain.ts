
/**
* @description mocks_v3:mockManagedBlockchain module is mocks for AWS-SDK V3
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
export const mockManagedBlockchain = {
  createAccessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createAccessor', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createAccessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createAccessor', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createAccessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createAccessor', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNetwork', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNetwork', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNetwork', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  createProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  createProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  createProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'createProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  deleteAccessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteAccessor', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  deleteAccessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteAccessor', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  deleteAccessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteAccessor', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  deleteMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  deleteMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  deleteMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  deleteNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  deleteNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  deleteNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'deleteNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getAccessor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getAccessor', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getAccessorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getAccessor', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getAccessorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getAccessor', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNetwork', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNetwork', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNetwork', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  getProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  getProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  getProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'getProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listAccessors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listAccessors', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listAccessorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listAccessors', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listAccessorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listAccessors', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listInvitations', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listInvitations', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listInvitations', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listMembers', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listMembers', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listMembers', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNetworks', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNetworks', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNetworks', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNodes', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNodes', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listNodes', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listProposalVotes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposalVotes', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listProposalVotesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposalVotes', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listProposalVotesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposalVotes', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listProposals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposals', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listProposalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposals', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listProposalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listProposals', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listTagsForResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listTagsForResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'listTagsForResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  rejectInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'rejectInvitation', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  rejectInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'rejectInvitation', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  rejectInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'rejectInvitation', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'tagResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'tagResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'tagResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'untagResource', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'untagResource', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'untagResource', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  updateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateMember', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  updateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateMember', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  updateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateMember', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  updateNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateNode', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  updateNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateNode', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  updateNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'updateNode', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  voteOnProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'voteOnProposal', 'ManagedBlockchain', Promise.resolve(result), true, mock)
  },
  voteOnProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'voteOnProposal', 'ManagedBlockchain', Promise.resolve(result), false, mock)
  },
  voteOnProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'voteOnProposal', 'ManagedBlockchain', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'send', 'ManagedBlockchainClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'send', 'ManagedBlockchainClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain', 'send', 'ManagedBlockchainClient', Promise.reject(result), true, mock)
  }
}
