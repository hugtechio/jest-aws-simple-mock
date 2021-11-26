
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
  export const mockCodeStar = {
  associateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  associateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  associateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  createUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  createUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  createUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  deleteUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  deleteUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  deleteUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  describeUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  describeUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  describeUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStar', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStar', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStar', Promise.reject(result), true, mock)
  },
  disassociateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  disassociateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  disassociateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeStar', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CodeStar', Promise.reject(result), true, mock)
  },
  listTagsForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listTagsForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listTagsForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  listTeamMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTeamMembers', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listTeamMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTeamMembers', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listTeamMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTeamMembers', 'CodeStar', Promise.reject(result), true, mock)
  },
  listUserProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserProfiles', 'CodeStar', Promise.resolve(result), true, mock)
  },
  listUserProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserProfiles', 'CodeStar', Promise.resolve(result), false, mock)
  },
  listUserProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserProfiles', 'CodeStar', Promise.reject(result), true, mock)
  },
  tagProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  tagProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  tagProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  untagProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  untagProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  untagProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateTeamMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTeamMember', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateTeamMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTeamMember', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateTeamMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTeamMember', 'CodeStar', Promise.reject(result), true, mock)
  },
  updateUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserProfile', 'CodeStar', Promise.resolve(result), true, mock)
  },
  updateUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserProfile', 'CodeStar', Promise.resolve(result), false, mock)
  },
  updateUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserProfile', 'CodeStar', Promise.reject(result), true, mock)
  },
}
