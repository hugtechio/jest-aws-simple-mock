
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
  export const mockCognitoIdentityProvider = {
  addCustomAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomAttributes', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  addCustomAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomAttributes', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  addCustomAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomAttributes', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminAddUserToGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminAddUserToGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminAddUserToGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminAddUserToGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminAddUserToGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminAddUserToGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminConfirmSignUp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminConfirmSignUp', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminConfirmSignUpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminConfirmSignUp', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminConfirmSignUpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminConfirmSignUp', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminCreateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminCreateUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminCreateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminCreateUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminCreateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminCreateUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminDeleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminDeleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminDeleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminDeleteUserAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminDeleteUserAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminDeleteUserAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDeleteUserAttributes', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminDisableProviderForUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableProviderForUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminDisableProviderForUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableProviderForUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminDisableProviderForUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableProviderForUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminDisableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminDisableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminDisableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminDisableUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminEnableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminEnableUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminEnableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminEnableUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminEnableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminEnableUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminForgetDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminForgetDevice', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminForgetDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminForgetDevice', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminForgetDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminForgetDevice', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminGetDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetDevice', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminGetDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetDevice', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminGetDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetDevice', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminGetUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminGetUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminGetUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminGetUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminInitiateAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminInitiateAuth', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminInitiateAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminInitiateAuth', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminInitiateAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminInitiateAuth', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminLinkProviderForUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminLinkProviderForUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminLinkProviderForUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminLinkProviderForUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminLinkProviderForUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminLinkProviderForUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminListDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListDevices', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminListDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListDevices', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminListDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListDevices', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminListGroupsForUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListGroupsForUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminListGroupsForUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListGroupsForUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminListGroupsForUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListGroupsForUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminListUserAuthEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListUserAuthEvents', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminListUserAuthEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListUserAuthEvents', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminListUserAuthEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminListUserAuthEvents', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminRemoveUserFromGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRemoveUserFromGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminRemoveUserFromGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRemoveUserFromGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminRemoveUserFromGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRemoveUserFromGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminResetUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminResetUserPassword', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminResetUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminResetUserPassword', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminResetUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminResetUserPassword', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminRespondToAuthChallenge: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRespondToAuthChallenge', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminRespondToAuthChallengeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRespondToAuthChallenge', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminRespondToAuthChallengeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminRespondToAuthChallenge', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminSetUserMFAPreference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserMFAPreference', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminSetUserMFAPreferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserMFAPreference', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminSetUserMFAPreferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserMFAPreference', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminSetUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserPassword', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminSetUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserPassword', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminSetUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserPassword', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminSetUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserSettings', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminSetUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserSettings', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminSetUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminSetUserSettings', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminUpdateAuthEventFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateAuthEventFeedback', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminUpdateAuthEventFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateAuthEventFeedback', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminUpdateAuthEventFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateAuthEventFeedback', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminUpdateDeviceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateDeviceStatus', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminUpdateDeviceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateDeviceStatus', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminUpdateDeviceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateDeviceStatus', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminUpdateUserAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminUpdateUserAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminUpdateUserAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUpdateUserAttributes', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  adminUserGlobalSignOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUserGlobalSignOut', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  adminUserGlobalSignOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUserGlobalSignOut', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  adminUserGlobalSignOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('adminUserGlobalSignOut', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  associateSoftwareToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSoftwareToken', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  associateSoftwareTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSoftwareToken', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  associateSoftwareTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSoftwareToken', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  changePassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changePassword', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  changePasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changePassword', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  changePasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changePassword', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  confirmDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmDevice', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  confirmDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmDevice', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  confirmDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmDevice', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  confirmForgotPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmForgotPassword', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  confirmForgotPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmForgotPassword', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  confirmForgotPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmForgotPassword', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  confirmSignUp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSignUp', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  confirmSignUpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSignUp', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  confirmSignUpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmSignUp', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityProvider', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createResourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createResourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createResourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceServer', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createUserImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createUserImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createUserImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserImportJob', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createUserPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPool', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createUserPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPool', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createUserPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPool', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createUserPoolClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createUserPoolClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createUserPoolClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolClient', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  createUserPoolDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  createUserPoolDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  createUserPoolDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserPoolDomain', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityProvider', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteResourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteResourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteResourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceServer', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteUserAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteUserAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteUserAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserAttributes', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteUserPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPool', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteUserPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPool', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteUserPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPool', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteUserPoolClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteUserPoolClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteUserPoolClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolClient', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  deleteUserPoolDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  deleteUserPoolDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  deleteUserPoolDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserPoolDomain', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProvider', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeResourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeResourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeResourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourceServer', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeRiskConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRiskConfiguration', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeRiskConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRiskConfiguration', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeRiskConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRiskConfiguration', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeUserImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeUserImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeUserImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserImportJob', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeUserPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPool', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeUserPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPool', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeUserPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPool', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeUserPoolClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeUserPoolClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeUserPoolClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolClient', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  describeUserPoolDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  describeUserPoolDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  describeUserPoolDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserPoolDomain', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  forgetDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetDevice', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  forgetDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetDevice', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  forgetDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetDevice', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  forgotPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgotPassword', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  forgotPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgotPassword', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  forgotPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgotPassword', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getCSVHeader: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCSVHeader', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getCSVHeaderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCSVHeader', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getCSVHeaderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCSVHeader', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getIdentityProviderByIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityProviderByIdentifier', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getIdentityProviderByIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityProviderByIdentifier', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getIdentityProviderByIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityProviderByIdentifier', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getSigningCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningCertificate', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getSigningCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningCertificate', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getSigningCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningCertificate', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getUICustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUICustomization', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getUICustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUICustomization', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getUICustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUICustomization', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUser', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUser', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUser', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getUserAttributeVerificationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserAttributeVerificationCode', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getUserAttributeVerificationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserAttributeVerificationCode', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getUserAttributeVerificationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserAttributeVerificationCode', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  getUserPoolMfaConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  getUserPoolMfaConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  getUserPoolMfaConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  globalSignOut: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('globalSignOut', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  globalSignOutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('globalSignOut', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  globalSignOutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('globalSignOut', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  initiateAuth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateAuth', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  initiateAuthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateAuth', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  initiateAuthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateAuth', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listIdentityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviders', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listIdentityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviders', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listIdentityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviders', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listResourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceServers', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listResourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceServers', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listResourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceServers', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listUserImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserImportJobs', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listUserImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserImportJobs', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listUserImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserImportJobs', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listUserPoolClients: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPoolClients', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listUserPoolClientsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPoolClients', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listUserPoolClientsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPoolClients', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listUserPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPools', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listUserPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPools', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listUserPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserPools', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  listUsersInGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsersInGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  listUsersInGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsersInGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  listUsersInGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsersInGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  resendConfirmationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendConfirmationCode', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  resendConfirmationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendConfirmationCode', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  resendConfirmationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendConfirmationCode', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  respondToAuthChallenge: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondToAuthChallenge', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  respondToAuthChallengeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondToAuthChallenge', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  respondToAuthChallengeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('respondToAuthChallenge', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  revokeToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeToken', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  revokeTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeToken', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  revokeTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeToken', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  setRiskConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRiskConfiguration', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  setRiskConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRiskConfiguration', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  setRiskConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setRiskConfiguration', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  setUICustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUICustomization', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  setUICustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUICustomization', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  setUICustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUICustomization', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  setUserMFAPreference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserMFAPreference', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  setUserMFAPreferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserMFAPreference', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  setUserMFAPreferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserMFAPreference', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  setUserPoolMfaConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  setUserPoolMfaConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  setUserPoolMfaConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserPoolMfaConfig', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  setUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserSettings', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  setUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserSettings', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  setUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setUserSettings', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  signUp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signUp', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  signUpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signUp', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  signUpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signUp', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  startUserImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  startUserImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  startUserImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startUserImportJob', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  stopUserImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  stopUserImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopUserImportJob', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  stopUserImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopUserImportJob', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateAuthEventFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthEventFeedback', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateAuthEventFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthEventFeedback', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateAuthEventFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthEventFeedback', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateDeviceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceStatus', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateDeviceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceStatus', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateDeviceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceStatus', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProvider', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProvider', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateResourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateResourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceServer', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateResourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceServer', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateUserAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateUserAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserAttributes', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateUserAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserAttributes', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateUserPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPool', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateUserPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPool', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateUserPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPool', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateUserPoolClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateUserPoolClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolClient', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateUserPoolClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolClient', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  updateUserPoolDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  updateUserPoolDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolDomain', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  updateUserPoolDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPoolDomain', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  verifySoftwareToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySoftwareToken', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  verifySoftwareTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySoftwareToken', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  verifySoftwareTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifySoftwareToken', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
  verifyUserAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyUserAttribute', 'CognitoIdentityProvider', Promise.resolve(result), true, mock)
  },
  verifyUserAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyUserAttribute', 'CognitoIdentityProvider', Promise.resolve(result), false, mock)
  },
  verifyUserAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyUserAttribute', 'CognitoIdentityProvider', Promise.reject(result), true, mock)
  },
}
