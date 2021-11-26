
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockNimble = {
  acceptEulas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'acceptEulas', 'Nimble', Promise.resolve(result), true, mock)
  },
  acceptEulasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'acceptEulas', 'Nimble', Promise.resolve(result), false, mock)
  },
  acceptEulasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'acceptEulas', 'Nimble', Promise.reject(result), true, mock)
  },
  createLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  createLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  createLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  createStreamingSessionStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSessionStream', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStreamingSessionStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSessionStream', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStreamingSessionStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStreamingSessionStream', 'Nimble', Promise.reject(result), true, mock)
  },
  createStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  createStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  createStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  createStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'createStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  deleteStudioMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  deleteStudioMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  deleteStudioMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'deleteStudioMember', 'Nimble', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'destroy', 'Nimble', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'destroy', 'Nimble', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'destroy', 'Nimble', Promise.reject(result), true, mock)
  },
  getEula: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getEula', 'Nimble', Promise.resolve(result), true, mock)
  },
  getEulaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getEula', 'Nimble', Promise.resolve(result), false, mock)
  },
  getEulaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getEula', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileDetails', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileDetails', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileDetails', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileInitialization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileInitialization', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileInitializationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileInitialization', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileInitializationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileInitialization', 'Nimble', Promise.reject(result), true, mock)
  },
  getLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  getLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  getLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  getStreamingSessionStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSessionStream', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStreamingSessionStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSessionStream', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStreamingSessionStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStreamingSessionStream', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  getStudioMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  getStudioMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  getStudioMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'getStudioMember', 'Nimble', Promise.reject(result), true, mock)
  },
  listEulaAcceptances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulaAcceptances', 'Nimble', Promise.resolve(result), true, mock)
  },
  listEulaAcceptancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulaAcceptances', 'Nimble', Promise.resolve(result), false, mock)
  },
  listEulaAcceptancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulaAcceptances', 'Nimble', Promise.reject(result), true, mock)
  },
  listEulas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulas', 'Nimble', Promise.resolve(result), true, mock)
  },
  listEulasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulas', 'Nimble', Promise.resolve(result), false, mock)
  },
  listEulasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listEulas', 'Nimble', Promise.reject(result), true, mock)
  },
  listLaunchProfileMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfileMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  listLaunchProfileMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfileMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  listLaunchProfileMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfileMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  listLaunchProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfiles', 'Nimble', Promise.resolve(result), true, mock)
  },
  listLaunchProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfiles', 'Nimble', Promise.resolve(result), false, mock)
  },
  listLaunchProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listLaunchProfiles', 'Nimble', Promise.reject(result), true, mock)
  },
  listStreamingImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingImages', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStreamingImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingImages', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStreamingImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingImages', 'Nimble', Promise.reject(result), true, mock)
  },
  listStreamingSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingSessions', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStreamingSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingSessions', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStreamingSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStreamingSessions', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudioComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioComponents', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudioComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioComponents', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudioComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioComponents', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudioMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudioMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudioMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudioMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  listStudios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudios', 'Nimble', Promise.resolve(result), true, mock)
  },
  listStudiosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudios', 'Nimble', Promise.resolve(result), false, mock)
  },
  listStudiosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listStudios', 'Nimble', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listTagsForResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listTagsForResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'listTagsForResource', 'Nimble', Promise.reject(result), true, mock)
  },
  putLaunchProfileMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putLaunchProfileMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  putLaunchProfileMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putLaunchProfileMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  putLaunchProfileMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putLaunchProfileMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  putStudioMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putStudioMembers', 'Nimble', Promise.resolve(result), true, mock)
  },
  putStudioMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putStudioMembers', 'Nimble', Promise.resolve(result), false, mock)
  },
  putStudioMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'putStudioMembers', 'Nimble', Promise.reject(result), true, mock)
  },
  startStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  startStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  startStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  startStudioSSOConfigurationRepair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStudioSSOConfigurationRepair', 'Nimble', Promise.resolve(result), true, mock)
  },
  startStudioSSOConfigurationRepairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStudioSSOConfigurationRepair', 'Nimble', Promise.resolve(result), false, mock)
  },
  startStudioSSOConfigurationRepairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'startStudioSSOConfigurationRepair', 'Nimble', Promise.reject(result), true, mock)
  },
  stopStreamingSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'stopStreamingSession', 'Nimble', Promise.resolve(result), true, mock)
  },
  stopStreamingSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'stopStreamingSession', 'Nimble', Promise.resolve(result), false, mock)
  },
  stopStreamingSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'stopStreamingSession', 'Nimble', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'tagResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'tagResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'tagResource', 'Nimble', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'untagResource', 'Nimble', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'untagResource', 'Nimble', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'untagResource', 'Nimble', Promise.reject(result), true, mock)
  },
  updateLaunchProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfile', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateLaunchProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfile', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateLaunchProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfile', 'Nimble', Promise.reject(result), true, mock)
  },
  updateLaunchProfileMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfileMember', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateLaunchProfileMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfileMember', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateLaunchProfileMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateLaunchProfileMember', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStreamingImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStreamingImage', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStreamingImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStreamingImage', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStreamingImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStreamingImage', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudio', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudio', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudio', 'Nimble', Promise.reject(result), true, mock)
  },
  updateStudioComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudioComponent', 'Nimble', Promise.resolve(result), true, mock)
  },
  updateStudioComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudioComponent', 'Nimble', Promise.resolve(result), false, mock)
  },
  updateStudioComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'updateStudioComponent', 'Nimble', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'send', 'NimbleClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'send', 'NimbleClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-nimble', 'send', 'NimbleClient', Promise.reject(result), true, mock)
  }
}