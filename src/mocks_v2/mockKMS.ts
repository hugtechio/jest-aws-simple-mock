
/**
* @description mocks_v2:mockKMS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockKMS = {
  cancelKeyDeletion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelKeyDeletion', 'KMS', result, true, true, mock)
  },
  cancelKeyDeletionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelKeyDeletion', 'KMS', result, false, true, mock)
  },
  cancelKeyDeletionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelKeyDeletion', 'KMS', result, true, false, mock)
  },
  connectCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectCustomKeyStore', 'KMS', result, true, true, mock)
  },
  connectCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectCustomKeyStore', 'KMS', result, false, true, mock)
  },
  connectCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectCustomKeyStore', 'KMS', result, true, false, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'KMS', result, true, true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'KMS', result, false, true, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'KMS', result, true, false, mock)
  },
  createCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomKeyStore', 'KMS', result, true, true, mock)
  },
  createCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomKeyStore', 'KMS', result, false, true, mock)
  },
  createCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomKeyStore', 'KMS', result, true, false, mock)
  },
  createGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'KMS', result, true, true, mock)
  },
  createGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'KMS', result, false, true, mock)
  },
  createGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'KMS', result, true, false, mock)
  },
  createKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKey', 'KMS', result, true, true, mock)
  },
  createKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKey', 'KMS', result, false, true, mock)
  },
  createKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKey', 'KMS', result, true, false, mock)
  },
  decrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decrypt', 'KMS', result, true, true, mock)
  },
  decryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decrypt', 'KMS', result, false, true, mock)
  },
  decryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decrypt', 'KMS', result, true, false, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'KMS', result, true, true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'KMS', result, false, true, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'KMS', result, true, false, mock)
  },
  deleteCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomKeyStore', 'KMS', result, true, true, mock)
  },
  deleteCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomKeyStore', 'KMS', result, false, true, mock)
  },
  deleteCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomKeyStore', 'KMS', result, true, false, mock)
  },
  deleteImportedKeyMaterial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImportedKeyMaterial', 'KMS', result, true, true, mock)
  },
  deleteImportedKeyMaterialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImportedKeyMaterial', 'KMS', result, false, true, mock)
  },
  deleteImportedKeyMaterialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImportedKeyMaterial', 'KMS', result, true, false, mock)
  },
  describeCustomKeyStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomKeyStores', 'KMS', result, true, true, mock)
  },
  describeCustomKeyStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomKeyStores', 'KMS', result, false, true, mock)
  },
  describeCustomKeyStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomKeyStores', 'KMS', result, true, false, mock)
  },
  describeKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKey', 'KMS', result, true, true, mock)
  },
  describeKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKey', 'KMS', result, false, true, mock)
  },
  describeKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKey', 'KMS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KMS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KMS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KMS', result, true, false, mock)
  },
  disableKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKey', 'KMS', result, true, true, mock)
  },
  disableKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKey', 'KMS', result, false, true, mock)
  },
  disableKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKey', 'KMS', result, true, false, mock)
  },
  disableKeyRotation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKeyRotation', 'KMS', result, true, true, mock)
  },
  disableKeyRotationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKeyRotation', 'KMS', result, false, true, mock)
  },
  disableKeyRotationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableKeyRotation', 'KMS', result, true, false, mock)
  },
  disconnectCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectCustomKeyStore', 'KMS', result, true, true, mock)
  },
  disconnectCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectCustomKeyStore', 'KMS', result, false, true, mock)
  },
  disconnectCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectCustomKeyStore', 'KMS', result, true, false, mock)
  },
  enableKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKey', 'KMS', result, true, true, mock)
  },
  enableKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKey', 'KMS', result, false, true, mock)
  },
  enableKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKey', 'KMS', result, true, false, mock)
  },
  enableKeyRotation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKeyRotation', 'KMS', result, true, true, mock)
  },
  enableKeyRotationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKeyRotation', 'KMS', result, false, true, mock)
  },
  enableKeyRotationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableKeyRotation', 'KMS', result, true, false, mock)
  },
  encrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('encrypt', 'KMS', result, true, true, mock)
  },
  encryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('encrypt', 'KMS', result, false, true, mock)
  },
  encryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('encrypt', 'KMS', result, true, false, mock)
  },
  generateDataKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKey', 'KMS', result, true, true, mock)
  },
  generateDataKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKey', 'KMS', result, false, true, mock)
  },
  generateDataKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKey', 'KMS', result, true, false, mock)
  },
  generateDataKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPair', 'KMS', result, true, true, mock)
  },
  generateDataKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPair', 'KMS', result, false, true, mock)
  },
  generateDataKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPair', 'KMS', result, true, false, mock)
  },
  generateDataKeyPairWithoutPlaintext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPairWithoutPlaintext', 'KMS', result, true, true, mock)
  },
  generateDataKeyPairWithoutPlaintextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPairWithoutPlaintext', 'KMS', result, false, true, mock)
  },
  generateDataKeyPairWithoutPlaintextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyPairWithoutPlaintext', 'KMS', result, true, false, mock)
  },
  generateDataKeyWithoutPlaintext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyWithoutPlaintext', 'KMS', result, true, true, mock)
  },
  generateDataKeyWithoutPlaintextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyWithoutPlaintext', 'KMS', result, false, true, mock)
  },
  generateDataKeyWithoutPlaintextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateDataKeyWithoutPlaintext', 'KMS', result, true, false, mock)
  },
  generateRandom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateRandom', 'KMS', result, true, true, mock)
  },
  generateRandomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateRandom', 'KMS', result, false, true, mock)
  },
  generateRandomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateRandom', 'KMS', result, true, false, mock)
  },
  getKeyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPolicy', 'KMS', result, true, true, mock)
  },
  getKeyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPolicy', 'KMS', result, false, true, mock)
  },
  getKeyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPolicy', 'KMS', result, true, false, mock)
  },
  getKeyRotationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyRotationStatus', 'KMS', result, true, true, mock)
  },
  getKeyRotationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyRotationStatus', 'KMS', result, false, true, mock)
  },
  getKeyRotationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyRotationStatus', 'KMS', result, true, false, mock)
  },
  getParametersForImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersForImport', 'KMS', result, true, true, mock)
  },
  getParametersForImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersForImport', 'KMS', result, false, true, mock)
  },
  getParametersForImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersForImport', 'KMS', result, true, false, mock)
  },
  getPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'KMS', result, true, true, mock)
  },
  getPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'KMS', result, false, true, mock)
  },
  getPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'KMS', result, true, false, mock)
  },
  importKeyMaterial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyMaterial', 'KMS', result, true, true, mock)
  },
  importKeyMaterialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyMaterial', 'KMS', result, false, true, mock)
  },
  importKeyMaterialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyMaterial', 'KMS', result, true, false, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'KMS', result, true, true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'KMS', result, false, true, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'KMS', result, true, false, mock)
  },
  listGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGrants', 'KMS', result, true, true, mock)
  },
  listGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGrants', 'KMS', result, false, true, mock)
  },
  listGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGrants', 'KMS', result, true, false, mock)
  },
  listKeyPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPolicies', 'KMS', result, true, true, mock)
  },
  listKeyPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPolicies', 'KMS', result, false, true, mock)
  },
  listKeyPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPolicies', 'KMS', result, true, false, mock)
  },
  listKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeys', 'KMS', result, true, true, mock)
  },
  listKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeys', 'KMS', result, false, true, mock)
  },
  listKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeys', 'KMS', result, true, false, mock)
  },
  listResourceTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTags', 'KMS', result, true, true, mock)
  },
  listResourceTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTags', 'KMS', result, false, true, mock)
  },
  listResourceTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceTags', 'KMS', result, true, false, mock)
  },
  listRetirableGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetirableGrants', 'KMS', result, true, true, mock)
  },
  listRetirableGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetirableGrants', 'KMS', result, false, true, mock)
  },
  listRetirableGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetirableGrants', 'KMS', result, true, false, mock)
  },
  putKeyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putKeyPolicy', 'KMS', result, true, true, mock)
  },
  putKeyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putKeyPolicy', 'KMS', result, false, true, mock)
  },
  putKeyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putKeyPolicy', 'KMS', result, true, false, mock)
  },
  reEncrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reEncrypt', 'KMS', result, true, true, mock)
  },
  reEncryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reEncrypt', 'KMS', result, false, true, mock)
  },
  reEncryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reEncrypt', 'KMS', result, true, false, mock)
  },
  replicateKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateKey', 'KMS', result, true, true, mock)
  },
  replicateKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateKey', 'KMS', result, false, true, mock)
  },
  replicateKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateKey', 'KMS', result, true, false, mock)
  },
  retireGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retireGrant', 'KMS', result, true, true, mock)
  },
  retireGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retireGrant', 'KMS', result, false, true, mock)
  },
  retireGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retireGrant', 'KMS', result, true, false, mock)
  },
  revokeGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeGrant', 'KMS', result, true, true, mock)
  },
  revokeGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeGrant', 'KMS', result, false, true, mock)
  },
  revokeGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeGrant', 'KMS', result, true, false, mock)
  },
  scheduleKeyDeletion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleKeyDeletion', 'KMS', result, true, true, mock)
  },
  scheduleKeyDeletionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleKeyDeletion', 'KMS', result, false, true, mock)
  },
  scheduleKeyDeletionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleKeyDeletion', 'KMS', result, true, false, mock)
  },
  sign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sign', 'KMS', result, true, true, mock)
  },
  signAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sign', 'KMS', result, false, true, mock)
  },
  signThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sign', 'KMS', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KMS', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KMS', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KMS', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KMS', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KMS', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KMS', result, true, false, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'KMS', result, true, true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'KMS', result, false, true, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'KMS', result, true, false, mock)
  },
  updateCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomKeyStore', 'KMS', result, true, true, mock)
  },
  updateCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomKeyStore', 'KMS', result, false, true, mock)
  },
  updateCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomKeyStore', 'KMS', result, true, false, mock)
  },
  updateKeyDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyDescription', 'KMS', result, true, true, mock)
  },
  updateKeyDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyDescription', 'KMS', result, false, true, mock)
  },
  updateKeyDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyDescription', 'KMS', result, true, false, mock)
  },
  updatePrimaryRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryRegion', 'KMS', result, true, true, mock)
  },
  updatePrimaryRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryRegion', 'KMS', result, false, true, mock)
  },
  updatePrimaryRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrimaryRegion', 'KMS', result, true, false, mock)
  },
  verify: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verify', 'KMS', result, true, true, mock)
  },
  verifyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verify', 'KMS', result, false, true, mock)
  },
  verifyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verify', 'KMS', result, true, false, mock)
  },
}
