
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
  export const mockSecretsManager = {
  cancelRotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  cancelRotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  cancelRotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRotateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  createSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  createSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  createSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  deleteSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  deleteSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  deleteSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  describeSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  describeSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  describeSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getRandomPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getRandomPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getRandomPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRandomPassword', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  getSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  getSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  getSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSecretValue', 'SecretsManager', Promise.reject(result), true, mock)
  },
  listSecretVersionIds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  listSecretVersionIdsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  listSecretVersionIdsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecretVersionIds', 'SecretsManager', Promise.reject(result), true, mock)
  },
  listSecrets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  listSecretsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  listSecretsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecrets', 'SecretsManager', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
  putSecretValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  putSecretValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  putSecretValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSecretValue', 'SecretsManager', Promise.reject(result), true, mock)
  },
  removeRegionsFromReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  removeRegionsFromReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  removeRegionsFromReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegionsFromReplication', 'SecretsManager', Promise.reject(result), true, mock)
  },
  replicateSecretToRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  replicateSecretToRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  replicateSecretToRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('replicateSecretToRegions', 'SecretsManager', Promise.reject(result), true, mock)
  },
  restoreSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  restoreSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  restoreSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  rotateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  rotateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  rotateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  stopReplicationToReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  stopReplicationToReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  stopReplicationToReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopReplicationToReplica', 'SecretsManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecretsManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecretsManager', Promise.reject(result), true, mock)
  },
  updateSecret: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  updateSecretAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  updateSecretThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecret', 'SecretsManager', Promise.reject(result), true, mock)
  },
  updateSecretVersionStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  updateSecretVersionStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  updateSecretVersionStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecretVersionStage', 'SecretsManager', Promise.reject(result), true, mock)
  },
  validateResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', Promise.resolve(result), true, mock)
  },
  validateResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', Promise.resolve(result), false, mock)
  },
  validateResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateResourcePolicy', 'SecretsManager', Promise.reject(result), true, mock)
  },
}
