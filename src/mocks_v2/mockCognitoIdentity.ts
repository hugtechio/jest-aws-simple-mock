
/**
* @description mocks_v2:mockCognitoIdentity.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCognitoIdentity = {
  createIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', result, true, true, mock)
  },
  createIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', result, false, true, mock)
  },
  createIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIdentityPool', 'CognitoIdentity', result, true, false, mock)
  },
  deleteIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', result, true, true, mock)
  },
  deleteIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', result, false, true, mock)
  },
  deleteIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentities', 'CognitoIdentity', result, true, false, mock)
  },
  deleteIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', result, true, true, mock)
  },
  deleteIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', result, false, true, mock)
  },
  deleteIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIdentityPool', 'CognitoIdentity', result, true, false, mock)
  },
  describeIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  describeIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  describeIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  describeIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', result, true, true, mock)
  },
  describeIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', result, false, true, mock)
  },
  describeIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityPool', 'CognitoIdentity', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CognitoIdentity', result, true, false, mock)
  },
  getCredentialsForIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  getCredentialsForIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  getCredentialsForIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCredentialsForIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  getId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', result, true, true, mock)
  },
  getIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', result, false, true, mock)
  },
  getIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getId', 'CognitoIdentity', result, true, false, mock)
  },
  getIdentityPoolRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', result, true, true, mock)
  },
  getIdentityPoolRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', result, false, true, mock)
  },
  getIdentityPoolRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIdentityPoolRoles', 'CognitoIdentity', result, true, false, mock)
  },
  getOpenIdToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', result, true, true, mock)
  },
  getOpenIdTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', result, false, true, mock)
  },
  getOpenIdTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdToken', 'CognitoIdentity', result, true, false, mock)
  },
  getOpenIdTokenForDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  getOpenIdTokenForDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  getOpenIdTokenForDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpenIdTokenForDeveloperIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  getPrincipalTagAttributeMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', result, true, true, mock)
  },
  getPrincipalTagAttributeMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', result, false, true, mock)
  },
  getPrincipalTagAttributeMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPrincipalTagAttributeMap', 'CognitoIdentity', result, true, false, mock)
  },
  listIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', result, true, true, mock)
  },
  listIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', result, false, true, mock)
  },
  listIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentities', 'CognitoIdentity', result, true, false, mock)
  },
  listIdentityPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', result, true, true, mock)
  },
  listIdentityPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', result, false, true, mock)
  },
  listIdentityPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityPools', 'CognitoIdentity', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CognitoIdentity', result, true, false, mock)
  },
  lookupDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  lookupDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  lookupDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupDeveloperIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  mergeDeveloperIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', result, true, true, mock)
  },
  mergeDeveloperIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', result, false, true, mock)
  },
  mergeDeveloperIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeDeveloperIdentities', 'CognitoIdentity', result, true, false, mock)
  },
  setIdentityPoolRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', result, true, true, mock)
  },
  setIdentityPoolRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', result, false, true, mock)
  },
  setIdentityPoolRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIdentityPoolRoles', 'CognitoIdentity', result, true, false, mock)
  },
  setPrincipalTagAttributeMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', result, true, true, mock)
  },
  setPrincipalTagAttributeMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', result, false, true, mock)
  },
  setPrincipalTagAttributeMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setPrincipalTagAttributeMap', 'CognitoIdentity', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CognitoIdentity', result, true, false, mock)
  },
  unlinkDeveloperIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  unlinkDeveloperIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  unlinkDeveloperIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkDeveloperIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  unlinkIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', result, true, true, mock)
  },
  unlinkIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', result, false, true, mock)
  },
  unlinkIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlinkIdentity', 'CognitoIdentity', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CognitoIdentity', result, true, false, mock)
  },
  updateIdentityPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', result, true, true, mock)
  },
  updateIdentityPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', result, false, true, mock)
  },
  updateIdentityPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityPool', 'CognitoIdentity', result, true, false, mock)
  },
}
