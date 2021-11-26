
/**
* @description mocks_v3:mockSecretsManager module is mocks for AWS-SDK V3
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

  export const mockSecretsManager = {
  cancelRotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'cancelRotateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  cancelRotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'cancelRotateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  cancelRotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'cancelRotateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  createSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'createSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  createSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'createSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  createSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'createSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  deleteSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  deleteSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  deleteSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'deleteSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  describeSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'describeSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  describeSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'describeSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  describeSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'describeSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'destroy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'destroy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'destroy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getRandomPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getRandomPassword', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getRandomPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getRandomPassword', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getRandomPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getRandomPassword', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getSecretValue', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getSecretValue', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'getSecretValue', 'SecretsManager', Promise.reject(result), true, mock)
  },
  listSecretVersionIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecretVersionIds', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  listSecretVersionIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecretVersionIds', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  listSecretVersionIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecretVersionIds', 'SecretsManager', Promise.reject(result), true, mock)
  },
  listSecrets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecrets', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  listSecretsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecrets', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  listSecretsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'listSecrets', 'SecretsManager', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  putSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putSecretValue', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  putSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putSecretValue', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  putSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'putSecretValue', 'SecretsManager', Promise.reject(result), true, mock)
  },
  removeRegionsFromReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'removeRegionsFromReplication', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  removeRegionsFromReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'removeRegionsFromReplication', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  removeRegionsFromReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'removeRegionsFromReplication', 'SecretsManager', Promise.reject(result), true, mock)
  },
  replicateSecretToRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'replicateSecretToRegions', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  replicateSecretToRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'replicateSecretToRegions', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  replicateSecretToRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'replicateSecretToRegions', 'SecretsManager', Promise.reject(result), true, mock)
  },
  restoreSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'restoreSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  restoreSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'restoreSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  restoreSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'restoreSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  rotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'rotateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  rotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'rotateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  rotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'rotateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  stopReplicationToReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'stopReplicationToReplica', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  stopReplicationToReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'stopReplicationToReplica', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  stopReplicationToReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'stopReplicationToReplica', 'SecretsManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'tagResource', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'tagResource', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'tagResource', 'SecretsManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'untagResource', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'untagResource', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'untagResource', 'SecretsManager', Promise.reject(result), true, mock)
  },
  updateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  updateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  updateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  updateSecretVersionStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecretVersionStage', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  updateSecretVersionStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecretVersionStage', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  updateSecretVersionStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'updateSecretVersionStage', 'SecretsManager', Promise.reject(result), true, mock)
  },
  validateResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'validateResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  validateResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'validateResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  validateResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'validateResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'send', 'SecretsManagerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'send', 'SecretsManagerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-secrets-manager', 'send', 'SecretsManagerClient', Promise.reject(result), true, mock)
  }
}