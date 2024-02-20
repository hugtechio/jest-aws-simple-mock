
/**
* @description mocks_v3:mockIdentitystore module is mocks for AWS-SDK V3
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
export const mockIdentitystore = {
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroup', 'Identitystore', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroup', 'Identitystore', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroup', 'Identitystore', Promise.reject(result), true, mock)
  },
  createGroupMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroupMembership', 'Identitystore', Promise.resolve(result), true, mock)
  },
  createGroupMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroupMembership', 'Identitystore', Promise.resolve(result), false, mock)
  },
  createGroupMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createGroupMembership', 'Identitystore', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createUser', 'Identitystore', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createUser', 'Identitystore', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'createUser', 'Identitystore', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroup', 'Identitystore', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroup', 'Identitystore', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroup', 'Identitystore', Promise.reject(result), true, mock)
  },
  deleteGroupMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroupMembership', 'Identitystore', Promise.resolve(result), true, mock)
  },
  deleteGroupMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroupMembership', 'Identitystore', Promise.resolve(result), false, mock)
  },
  deleteGroupMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteGroupMembership', 'Identitystore', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteUser', 'Identitystore', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteUser', 'Identitystore', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'deleteUser', 'Identitystore', Promise.reject(result), true, mock)
  },
  describeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroup', 'Identitystore', Promise.resolve(result), true, mock)
  },
  describeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroup', 'Identitystore', Promise.resolve(result), false, mock)
  },
  describeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroup', 'Identitystore', Promise.reject(result), true, mock)
  },
  describeGroupMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroupMembership', 'Identitystore', Promise.resolve(result), true, mock)
  },
  describeGroupMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroupMembership', 'Identitystore', Promise.resolve(result), false, mock)
  },
  describeGroupMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeGroupMembership', 'Identitystore', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeUser', 'Identitystore', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeUser', 'Identitystore', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'describeUser', 'Identitystore', Promise.reject(result), true, mock)
  },
  getGroupId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupId', 'Identitystore', Promise.resolve(result), true, mock)
  },
  getGroupIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupId', 'Identitystore', Promise.resolve(result), false, mock)
  },
  getGroupIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupId', 'Identitystore', Promise.reject(result), true, mock)
  },
  getGroupMembershipId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupMembershipId', 'Identitystore', Promise.resolve(result), true, mock)
  },
  getGroupMembershipIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupMembershipId', 'Identitystore', Promise.resolve(result), false, mock)
  },
  getGroupMembershipIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getGroupMembershipId', 'Identitystore', Promise.reject(result), true, mock)
  },
  getUserId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getUserId', 'Identitystore', Promise.resolve(result), true, mock)
  },
  getUserIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getUserId', 'Identitystore', Promise.resolve(result), false, mock)
  },
  getUserIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'getUserId', 'Identitystore', Promise.reject(result), true, mock)
  },
  isMemberInGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'isMemberInGroups', 'Identitystore', Promise.resolve(result), true, mock)
  },
  isMemberInGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'isMemberInGroups', 'Identitystore', Promise.resolve(result), false, mock)
  },
  isMemberInGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'isMemberInGroups', 'Identitystore', Promise.reject(result), true, mock)
  },
  listGroupMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMemberships', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listGroupMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMemberships', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listGroupMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMemberships', 'Identitystore', Promise.reject(result), true, mock)
  },
  listGroupMembershipsForMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMembershipsForMember', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listGroupMembershipsForMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMembershipsForMember', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listGroupMembershipsForMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroupMembershipsForMember', 'Identitystore', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroups', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroups', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listGroups', 'Identitystore', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listUsers', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listUsers', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'listUsers', 'Identitystore', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateGroup', 'Identitystore', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateGroup', 'Identitystore', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateGroup', 'Identitystore', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateUser', 'Identitystore', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateUser', 'Identitystore', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'updateUser', 'Identitystore', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'send', 'IdentitystoreClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'send', 'IdentitystoreClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-identitystore', 'send', 'IdentitystoreClient', Promise.reject(result), true, mock)
  }
}
