
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockKMS = {
  cancelKeyDeletion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'cancelKeyDeletion', 'KMS', Promise.resolve(result), true, mock)
  },
  cancelKeyDeletionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'cancelKeyDeletion', 'KMS', Promise.resolve(result), false, mock)
  },
  cancelKeyDeletionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'cancelKeyDeletion', 'KMS', Promise.reject(result), true, mock)
  },
  connectCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'connectCustomKeyStore', 'KMS', Promise.resolve(result), true, mock)
  },
  connectCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'connectCustomKeyStore', 'KMS', Promise.resolve(result), false, mock)
  },
  connectCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'connectCustomKeyStore', 'KMS', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createAlias', 'KMS', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createAlias', 'KMS', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createAlias', 'KMS', Promise.reject(result), true, mock)
  },
  createCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createCustomKeyStore', 'KMS', Promise.resolve(result), true, mock)
  },
  createCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createCustomKeyStore', 'KMS', Promise.resolve(result), false, mock)
  },
  createCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createCustomKeyStore', 'KMS', Promise.reject(result), true, mock)
  },
  createGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createGrant', 'KMS', Promise.resolve(result), true, mock)
  },
  createGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createGrant', 'KMS', Promise.resolve(result), false, mock)
  },
  createGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createGrant', 'KMS', Promise.reject(result), true, mock)
  },
  createKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createKey', 'KMS', Promise.resolve(result), true, mock)
  },
  createKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createKey', 'KMS', Promise.resolve(result), false, mock)
  },
  createKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'createKey', 'KMS', Promise.reject(result), true, mock)
  },
  decrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'decrypt', 'KMS', Promise.resolve(result), true, mock)
  },
  decryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'decrypt', 'KMS', Promise.resolve(result), false, mock)
  },
  decryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'decrypt', 'KMS', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteAlias', 'KMS', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteAlias', 'KMS', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteAlias', 'KMS', Promise.reject(result), true, mock)
  },
  deleteCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteCustomKeyStore', 'KMS', Promise.resolve(result), true, mock)
  },
  deleteCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteCustomKeyStore', 'KMS', Promise.resolve(result), false, mock)
  },
  deleteCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteCustomKeyStore', 'KMS', Promise.reject(result), true, mock)
  },
  deleteImportedKeyMaterial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteImportedKeyMaterial', 'KMS', Promise.resolve(result), true, mock)
  },
  deleteImportedKeyMaterialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteImportedKeyMaterial', 'KMS', Promise.resolve(result), false, mock)
  },
  deleteImportedKeyMaterialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'deleteImportedKeyMaterial', 'KMS', Promise.reject(result), true, mock)
  },
  describeCustomKeyStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeCustomKeyStores', 'KMS', Promise.resolve(result), true, mock)
  },
  describeCustomKeyStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeCustomKeyStores', 'KMS', Promise.resolve(result), false, mock)
  },
  describeCustomKeyStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeCustomKeyStores', 'KMS', Promise.reject(result), true, mock)
  },
  describeKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeKey', 'KMS', Promise.resolve(result), true, mock)
  },
  describeKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeKey', 'KMS', Promise.resolve(result), false, mock)
  },
  describeKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'describeKey', 'KMS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'destroy', 'KMS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'destroy', 'KMS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'destroy', 'KMS', Promise.reject(result), true, mock)
  },
  disableKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKey', 'KMS', Promise.resolve(result), true, mock)
  },
  disableKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKey', 'KMS', Promise.resolve(result), false, mock)
  },
  disableKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKey', 'KMS', Promise.reject(result), true, mock)
  },
  disableKeyRotation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKeyRotation', 'KMS', Promise.resolve(result), true, mock)
  },
  disableKeyRotationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKeyRotation', 'KMS', Promise.resolve(result), false, mock)
  },
  disableKeyRotationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disableKeyRotation', 'KMS', Promise.reject(result), true, mock)
  },
  disconnectCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disconnectCustomKeyStore', 'KMS', Promise.resolve(result), true, mock)
  },
  disconnectCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disconnectCustomKeyStore', 'KMS', Promise.resolve(result), false, mock)
  },
  disconnectCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'disconnectCustomKeyStore', 'KMS', Promise.reject(result), true, mock)
  },
  enableKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKey', 'KMS', Promise.resolve(result), true, mock)
  },
  enableKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKey', 'KMS', Promise.resolve(result), false, mock)
  },
  enableKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKey', 'KMS', Promise.reject(result), true, mock)
  },
  enableKeyRotation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKeyRotation', 'KMS', Promise.resolve(result), true, mock)
  },
  enableKeyRotationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKeyRotation', 'KMS', Promise.resolve(result), false, mock)
  },
  enableKeyRotationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'enableKeyRotation', 'KMS', Promise.reject(result), true, mock)
  },
  encrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'encrypt', 'KMS', Promise.resolve(result), true, mock)
  },
  encryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'encrypt', 'KMS', Promise.resolve(result), false, mock)
  },
  encryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'encrypt', 'KMS', Promise.reject(result), true, mock)
  },
  generateDataKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKey', 'KMS', Promise.resolve(result), true, mock)
  },
  generateDataKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKey', 'KMS', Promise.resolve(result), false, mock)
  },
  generateDataKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKey', 'KMS', Promise.reject(result), true, mock)
  },
  generateDataKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPair', 'KMS', Promise.resolve(result), true, mock)
  },
  generateDataKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPair', 'KMS', Promise.resolve(result), false, mock)
  },
  generateDataKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPair', 'KMS', Promise.reject(result), true, mock)
  },
  generateDataKeyPairWithoutPlaintext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPairWithoutPlaintext', 'KMS', Promise.resolve(result), true, mock)
  },
  generateDataKeyPairWithoutPlaintextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPairWithoutPlaintext', 'KMS', Promise.resolve(result), false, mock)
  },
  generateDataKeyPairWithoutPlaintextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyPairWithoutPlaintext', 'KMS', Promise.reject(result), true, mock)
  },
  generateDataKeyWithoutPlaintext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyWithoutPlaintext', 'KMS', Promise.resolve(result), true, mock)
  },
  generateDataKeyWithoutPlaintextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyWithoutPlaintext', 'KMS', Promise.resolve(result), false, mock)
  },
  generateDataKeyWithoutPlaintextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateDataKeyWithoutPlaintext', 'KMS', Promise.reject(result), true, mock)
  },
  generateRandom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateRandom', 'KMS', Promise.resolve(result), true, mock)
  },
  generateRandomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateRandom', 'KMS', Promise.resolve(result), false, mock)
  },
  generateRandomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'generateRandom', 'KMS', Promise.reject(result), true, mock)
  },
  getKeyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyPolicy', 'KMS', Promise.resolve(result), true, mock)
  },
  getKeyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyPolicy', 'KMS', Promise.resolve(result), false, mock)
  },
  getKeyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyPolicy', 'KMS', Promise.reject(result), true, mock)
  },
  getKeyRotationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyRotationStatus', 'KMS', Promise.resolve(result), true, mock)
  },
  getKeyRotationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyRotationStatus', 'KMS', Promise.resolve(result), false, mock)
  },
  getKeyRotationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getKeyRotationStatus', 'KMS', Promise.reject(result), true, mock)
  },
  getParametersForImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getParametersForImport', 'KMS', Promise.resolve(result), true, mock)
  },
  getParametersForImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getParametersForImport', 'KMS', Promise.resolve(result), false, mock)
  },
  getParametersForImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getParametersForImport', 'KMS', Promise.reject(result), true, mock)
  },
  getPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getPublicKey', 'KMS', Promise.resolve(result), true, mock)
  },
  getPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getPublicKey', 'KMS', Promise.resolve(result), false, mock)
  },
  getPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'getPublicKey', 'KMS', Promise.reject(result), true, mock)
  },
  importKeyMaterial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'importKeyMaterial', 'KMS', Promise.resolve(result), true, mock)
  },
  importKeyMaterialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'importKeyMaterial', 'KMS', Promise.resolve(result), false, mock)
  },
  importKeyMaterialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'importKeyMaterial', 'KMS', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listAliases', 'KMS', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listAliases', 'KMS', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listAliases', 'KMS', Promise.reject(result), true, mock)
  },
  listGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listGrants', 'KMS', Promise.resolve(result), true, mock)
  },
  listGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listGrants', 'KMS', Promise.resolve(result), false, mock)
  },
  listGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listGrants', 'KMS', Promise.reject(result), true, mock)
  },
  listKeyPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeyPolicies', 'KMS', Promise.resolve(result), true, mock)
  },
  listKeyPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeyPolicies', 'KMS', Promise.resolve(result), false, mock)
  },
  listKeyPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeyPolicies', 'KMS', Promise.reject(result), true, mock)
  },
  listKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeys', 'KMS', Promise.resolve(result), true, mock)
  },
  listKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeys', 'KMS', Promise.resolve(result), false, mock)
  },
  listKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listKeys', 'KMS', Promise.reject(result), true, mock)
  },
  listResourceTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listResourceTags', 'KMS', Promise.resolve(result), true, mock)
  },
  listResourceTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listResourceTags', 'KMS', Promise.resolve(result), false, mock)
  },
  listResourceTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listResourceTags', 'KMS', Promise.reject(result), true, mock)
  },
  listRetirableGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listRetirableGrants', 'KMS', Promise.resolve(result), true, mock)
  },
  listRetirableGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listRetirableGrants', 'KMS', Promise.resolve(result), false, mock)
  },
  listRetirableGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'listRetirableGrants', 'KMS', Promise.reject(result), true, mock)
  },
  putKeyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'putKeyPolicy', 'KMS', Promise.resolve(result), true, mock)
  },
  putKeyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'putKeyPolicy', 'KMS', Promise.resolve(result), false, mock)
  },
  putKeyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'putKeyPolicy', 'KMS', Promise.reject(result), true, mock)
  },
  reEncrypt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'reEncrypt', 'KMS', Promise.resolve(result), true, mock)
  },
  reEncryptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'reEncrypt', 'KMS', Promise.resolve(result), false, mock)
  },
  reEncryptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'reEncrypt', 'KMS', Promise.reject(result), true, mock)
  },
  replicateKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'replicateKey', 'KMS', Promise.resolve(result), true, mock)
  },
  replicateKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'replicateKey', 'KMS', Promise.resolve(result), false, mock)
  },
  replicateKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'replicateKey', 'KMS', Promise.reject(result), true, mock)
  },
  retireGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'retireGrant', 'KMS', Promise.resolve(result), true, mock)
  },
  retireGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'retireGrant', 'KMS', Promise.resolve(result), false, mock)
  },
  retireGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'retireGrant', 'KMS', Promise.reject(result), true, mock)
  },
  revokeGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'revokeGrant', 'KMS', Promise.resolve(result), true, mock)
  },
  revokeGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'revokeGrant', 'KMS', Promise.resolve(result), false, mock)
  },
  revokeGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'revokeGrant', 'KMS', Promise.reject(result), true, mock)
  },
  scheduleKeyDeletion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'scheduleKeyDeletion', 'KMS', Promise.resolve(result), true, mock)
  },
  scheduleKeyDeletionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'scheduleKeyDeletion', 'KMS', Promise.resolve(result), false, mock)
  },
  scheduleKeyDeletionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'scheduleKeyDeletion', 'KMS', Promise.reject(result), true, mock)
  },
  sign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'sign', 'KMS', Promise.resolve(result), true, mock)
  },
  signAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'sign', 'KMS', Promise.resolve(result), false, mock)
  },
  signThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'sign', 'KMS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'tagResource', 'KMS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'tagResource', 'KMS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'tagResource', 'KMS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'untagResource', 'KMS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'untagResource', 'KMS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'untagResource', 'KMS', Promise.reject(result), true, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateAlias', 'KMS', Promise.resolve(result), true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateAlias', 'KMS', Promise.resolve(result), false, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateAlias', 'KMS', Promise.reject(result), true, mock)
  },
  updateCustomKeyStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateCustomKeyStore', 'KMS', Promise.resolve(result), true, mock)
  },
  updateCustomKeyStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateCustomKeyStore', 'KMS', Promise.resolve(result), false, mock)
  },
  updateCustomKeyStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateCustomKeyStore', 'KMS', Promise.reject(result), true, mock)
  },
  updateKeyDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateKeyDescription', 'KMS', Promise.resolve(result), true, mock)
  },
  updateKeyDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateKeyDescription', 'KMS', Promise.resolve(result), false, mock)
  },
  updateKeyDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updateKeyDescription', 'KMS', Promise.reject(result), true, mock)
  },
  updatePrimaryRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updatePrimaryRegion', 'KMS', Promise.resolve(result), true, mock)
  },
  updatePrimaryRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updatePrimaryRegion', 'KMS', Promise.resolve(result), false, mock)
  },
  updatePrimaryRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'updatePrimaryRegion', 'KMS', Promise.reject(result), true, mock)
  },
  verify: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'verify', 'KMS', Promise.resolve(result), true, mock)
  },
  verifyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'verify', 'KMS', Promise.resolve(result), false, mock)
  },
  verifyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'verify', 'KMS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'send', 'KMSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'send', 'KMSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kms', 'send', 'KMSClient', Promise.reject(result), true, mock)
  }
}