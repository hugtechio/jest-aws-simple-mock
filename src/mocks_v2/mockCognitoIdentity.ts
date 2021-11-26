
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
  export const mockCognitoIdentity = {
  createIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  createIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  createIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  deleteIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  deleteIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  deleteIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  deleteIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  deleteIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  deleteIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  describeIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  describeIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  describeIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  describeIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  describeIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  describeIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getCredentialsForIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getCredentialsForIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getCredentialsForIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getIdentityPoolRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getIdentityPoolRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getIdentityPoolRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getOpenIdToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getOpenIdTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getOpenIdTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getOpenIdTokenForDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getOpenIdTokenForDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getOpenIdTokenForDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  getPrincipalTagAttributeMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  getPrincipalTagAttributeMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  getPrincipalTagAttributeMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  listIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  listIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  listIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  listIdentityPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  listIdentityPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  listIdentityPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  lookupDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  lookupDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  lookupDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  mergeDeveloperIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  mergeDeveloperIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  mergeDeveloperIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  setIdentityPoolRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  setIdentityPoolRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  setIdentityPoolRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  setPrincipalTagAttributeMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  setPrincipalTagAttributeMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  setPrincipalTagAttributeMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  unlinkDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  unlinkDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  unlinkDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  unlinkIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  unlinkIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  unlinkIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
  updateIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', Promise.resolve(result), true, mock)
  },
  updateIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', Promise.resolve(result), false, mock)
  },
  updateIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', Promise.reject(result), true, mock)
  },
}
