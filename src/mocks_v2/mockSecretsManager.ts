
/**
* @description mocks_v2:mockSecretsManager.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSecretsManager = {
  cancelRotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', result, true, true, mock)
  },
  cancelRotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', result, false, true, mock)
  },
  cancelRotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', result, true, false, mock)
  },
  createSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', result, true, true, mock)
  },
  createSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', result, false, true, mock)
  },
  createSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', result, true, false, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', result, true, true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', result, false, true, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', result, true, false, mock)
  },
  deleteSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', result, true, true, mock)
  },
  deleteSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', result, false, true, mock)
  },
  deleteSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', result, true, false, mock)
  },
  describeSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', result, true, true, mock)
  },
  describeSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', result, false, true, mock)
  },
  describeSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', result, true, false, mock)
  },
  getRandomPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', result, true, true, mock)
  },
  getRandomPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', result, false, true, mock)
  },
  getRandomPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', result, true, false, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', result, true, true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', result, false, true, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', result, true, false, mock)
  },
  getSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', result, true, true, mock)
  },
  getSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', result, false, true, mock)
  },
  getSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', result, true, false, mock)
  },
  listSecretVersionIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', result, true, true, mock)
  },
  listSecretVersionIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', result, false, true, mock)
  },
  listSecretVersionIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', result, true, false, mock)
  },
  listSecrets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', result, true, true, mock)
  },
  listSecretsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', result, false, true, mock)
  },
  listSecretsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', result, true, false, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', result, true, true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', result, false, true, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', result, true, false, mock)
  },
  putSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', result, true, true, mock)
  },
  putSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', result, false, true, mock)
  },
  putSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', result, true, false, mock)
  },
  removeRegionsFromReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', result, true, true, mock)
  },
  removeRegionsFromReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', result, false, true, mock)
  },
  removeRegionsFromReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', result, true, false, mock)
  },
  replicateSecretToRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', result, true, true, mock)
  },
  replicateSecretToRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', result, false, true, mock)
  },
  replicateSecretToRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', result, true, false, mock)
  },
  restoreSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', result, true, true, mock)
  },
  restoreSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', result, false, true, mock)
  },
  restoreSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', result, true, false, mock)
  },
  rotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', result, true, true, mock)
  },
  rotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', result, false, true, mock)
  },
  rotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', result, true, false, mock)
  },
  stopReplicationToReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', result, true, true, mock)
  },
  stopReplicationToReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', result, false, true, mock)
  },
  stopReplicationToReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', result, true, false, mock)
  },
  updateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', result, true, true, mock)
  },
  updateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', result, false, true, mock)
  },
  updateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', result, true, false, mock)
  },
  updateSecretVersionStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', result, true, true, mock)
  },
  updateSecretVersionStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', result, false, true, mock)
  },
  updateSecretVersionStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', result, true, false, mock)
  },
  validateResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', result, true, true, mock)
  },
  validateResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', result, false, true, mock)
  },
  validateResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', result, true, false, mock)
  },
}
