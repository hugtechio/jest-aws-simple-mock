
/**
* @description mocks_v3:mockRolesAnywhere module is mocks for AWS-SDK V3
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
export const mockRolesAnywhere = {
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  createTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  createTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  createTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'createTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  deleteCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  deleteCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  deleteCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  deleteTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  deleteTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  deleteTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'deleteTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  disableCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  disableCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  disableCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  disableProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  disableProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  disableProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  disableTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  disableTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  disableTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'disableTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  enableCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  enableCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  enableCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  enableProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  enableProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  enableProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  enableTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  enableTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  enableTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'enableTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  getCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  getCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  getCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  getProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  getProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  getProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  getSubject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getSubject', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  getSubjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getSubject', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  getSubjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getSubject', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  getTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  getTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  getTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'getTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  importCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'importCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  importCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'importCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  importCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'importCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  listCrls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listCrls', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  listCrlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listCrls', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  listCrlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listCrls', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  listProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listProfiles', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  listProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listProfiles', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  listProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listProfiles', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  listSubjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listSubjects', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  listSubjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listSubjects', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  listSubjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listSubjects', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTagsForResource', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTagsForResource', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTagsForResource', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  listTrustAnchors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTrustAnchors', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  listTrustAnchorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTrustAnchors', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  listTrustAnchorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'listTrustAnchors', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  putNotificationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'putNotificationSettings', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  putNotificationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'putNotificationSettings', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  putNotificationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'putNotificationSettings', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  resetNotificationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'resetNotificationSettings', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  resetNotificationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'resetNotificationSettings', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  resetNotificationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'resetNotificationSettings', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'tagResource', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'tagResource', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'tagResource', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'untagResource', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'untagResource', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'untagResource', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  updateCrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateCrl', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  updateCrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateCrl', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  updateCrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateCrl', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateProfile', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateProfile', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateProfile', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  updateTrustAnchor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateTrustAnchor', 'RolesAnywhere', Promise.resolve(result), true, mock)
  },
  updateTrustAnchorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateTrustAnchor', 'RolesAnywhere', Promise.resolve(result), false, mock)
  },
  updateTrustAnchorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'updateTrustAnchor', 'RolesAnywhere', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'send', 'RolesAnywhereClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'send', 'RolesAnywhereClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rolesanywhere', 'send', 'RolesAnywhereClient', Promise.reject(result), true, mock)
  }
}
