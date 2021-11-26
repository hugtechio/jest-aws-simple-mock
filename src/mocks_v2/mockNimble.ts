
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
  export const mockNimble = {
  acceptEulas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptEulas', 'Nimble', Promise.resolve(result), true, mock)
  },
  acceptEulasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptEulas', 'Nimble', Promise.resolve(result), false, mock)
  },
  acceptEulasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptEulas', 'Nimble', Promise.reject(result), true, mock)
  },
  createLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  createLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  createLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingSessionStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSessionStream', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingSessionStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSessionStream', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingSessionStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingSessionStream', 'Nimble', Promise.reject(result), true, mock)
  },
  createStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  createStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudioMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioMember', 'Nimble', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Nimble', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Nimble', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Nimble', Promise.reject(result), true, mock)
  },
  getEula: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEula', 'Nimble', Promise.resolve(result), true, mock)
  },
  getEulaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEula', 'Nimble', Promise.resolve(result), false, mock)
  },
  getEulaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEula', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileDetails', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileDetails', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileDetails', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileInitialization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileInitialization', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileInitializationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileInitialization', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileInitializationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileInitialization', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingSessionStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSessionStream', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingSessionStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSessionStream', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingSessionStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingSessionStream', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudioMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioMember', 'Nimble', Promise.reject(result), true, mock)
  },
  listEulaAcceptances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulaAcceptances', 'Nimble', Promise.resolve(result), true, mock)
  },
  listEulaAcceptancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulaAcceptances', 'Nimble', Promise.resolve(result), false, mock)
  },
  listEulaAcceptancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulaAcceptances', 'Nimble', Promise.reject(result), true, mock)
  },
  listEulas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulas', 'Nimble', Promise.resolve(result), true, mock)
  },
  listEulasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulas', 'Nimble', Promise.resolve(result), false, mock)
  },
  listEulasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEulas', 'Nimble', Promise.reject(result), true, mock)
  },
  listLaunchProfileMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfileMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  listLaunchProfileMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfileMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  listLaunchProfileMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfileMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  listLaunchProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfiles', 'Nimble', Promise.resolve(result), true, mock)
  },
  listLaunchProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfiles', 'Nimble', Promise.resolve(result), false, mock)
  },
  listLaunchProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLaunchProfiles', 'Nimble', Promise.reject(result), true, mock)
  },
  listStreamingImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingImages', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStreamingImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingImages', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStreamingImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingImages', 'Nimble', Promise.reject(result), true, mock)
  },
  listStreamingSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingSessions', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStreamingSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingSessions', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStreamingSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingSessions', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudioComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioComponents', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudioComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioComponents', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudioComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioComponents', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudioMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudioMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudioMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudiosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudiosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'Nimble', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Nimble', Promise.reject(result), true, mock)
  },
  putLaunchProfileMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLaunchProfileMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  putLaunchProfileMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLaunchProfileMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  putLaunchProfileMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLaunchProfileMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  putStudioMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStudioMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  putStudioMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStudioMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  putStudioMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStudioMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  startStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  startStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  startStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  startStudioSSOConfigurationRepair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStudioSSOConfigurationRepair', 'Nimble', Promise.resolve(result), true, mock)
  },
  startStudioSSOConfigurationRepairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStudioSSOConfigurationRepair', 'Nimble', Promise.resolve(result), false, mock)
  },
  startStudioSSOConfigurationRepairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStudioSSOConfigurationRepair', 'Nimble', Promise.reject(result), true, mock)
  },
  stopStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  stopStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  stopStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Nimble', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Nimble', Promise.reject(result), true, mock)
  },
  updateLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  updateLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
}
