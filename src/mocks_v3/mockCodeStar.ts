
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockCodeStar = {
  associateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'associateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  associateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'associateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  associateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'associateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  createUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  createUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  createUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'createUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  deleteUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  deleteUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  deleteUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'deleteUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  describeUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  describeUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  describeUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'describeUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'destroy', 'CodeStar', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'destroy', 'CodeStar', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'destroy', 'CodeStar', Promise.reject(result), true, mock)
  },
  disassociateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'disassociateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  disassociateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'disassociateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  disassociateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'disassociateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listProjects', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listProjects', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listProjects', 'CodeStar', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listResources', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listResources', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listResources', 'CodeStar', Promise.reject(result), true, mock)
  },
  listTagsForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTagsForProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listTagsForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTagsForProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listTagsForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTagsForProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  listTeamMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTeamMembers', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listTeamMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTeamMembers', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listTeamMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listTeamMembers', 'CodeStar', Promise.reject(result), true, mock)
  },
  listUserProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listUserProfiles', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listUserProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listUserProfiles', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listUserProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'listUserProfiles', 'CodeStar', Promise.reject(result), true, mock)
  },
  tagProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'tagProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  tagProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'tagProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  tagProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'tagProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  untagProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'untagProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  untagProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'untagProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  untagProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'untagProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'updateUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'send', 'CodeStarClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'send', 'CodeStarClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar', 'send', 'CodeStarClient', Promise.reject(result), true, mock)
  }
}