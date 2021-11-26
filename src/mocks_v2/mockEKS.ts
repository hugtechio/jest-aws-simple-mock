
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
  export const mockEKS = {
  associateEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEncryptionConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  associateEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEncryptionConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  associateEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEncryptionConfig', 'EKS', Promise.reject(result), true, mock)
  },
  associateIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  associateIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  associateIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  createAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  createAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  createAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddon', 'EKS', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'EKS', Promise.reject(result), true, mock)
  },
  createFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  createFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  createFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  createNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  createNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  createNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  deleteAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddon', 'EKS', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'EKS', Promise.reject(result), true, mock)
  },
  deleteFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  deleteNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  deregisterCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  deregisterClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  deregisterClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCluster', 'EKS', Promise.reject(result), true, mock)
  },
  describeAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddon', 'EKS', Promise.reject(result), true, mock)
  },
  describeAddonVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddonVersions', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAddonVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddonVersions', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAddonVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddonVersions', 'EKS', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EKS', Promise.reject(result), true, mock)
  },
  describeFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  describeFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  describeFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  describeIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  describeIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  describeIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  describeNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  describeNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  describeNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  describeUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUpdate', 'EKS', Promise.resolve(result), true, mock)
  },
  describeUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUpdate', 'EKS', Promise.resolve(result), false, mock)
  },
  describeUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUpdate', 'EKS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EKS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EKS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EKS', Promise.reject(result), true, mock)
  },
  disassociateIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  disassociateIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  disassociateIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  listAddons: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAddons', 'EKS', Promise.resolve(result), true, mock)
  },
  listAddonsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAddons', 'EKS', Promise.resolve(result), false, mock)
  },
  listAddonsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAddons', 'EKS', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EKS', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EKS', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EKS', Promise.reject(result), true, mock)
  },
  listFargateProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFargateProfiles', 'EKS', Promise.resolve(result), true, mock)
  },
  listFargateProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFargateProfiles', 'EKS', Promise.resolve(result), false, mock)
  },
  listFargateProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFargateProfiles', 'EKS', Promise.reject(result), true, mock)
  },
  listIdentityProviderConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviderConfigs', 'EKS', Promise.resolve(result), true, mock)
  },
  listIdentityProviderConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviderConfigs', 'EKS', Promise.resolve(result), false, mock)
  },
  listIdentityProviderConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIdentityProviderConfigs', 'EKS', Promise.reject(result), true, mock)
  },
  listNodegroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodegroups', 'EKS', Promise.resolve(result), true, mock)
  },
  listNodegroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodegroups', 'EKS', Promise.resolve(result), false, mock)
  },
  listNodegroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodegroups', 'EKS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EKS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EKS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EKS', Promise.reject(result), true, mock)
  },
  listUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUpdates', 'EKS', Promise.resolve(result), true, mock)
  },
  listUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUpdates', 'EKS', Promise.resolve(result), false, mock)
  },
  listUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUpdates', 'EKS', Promise.reject(result), true, mock)
  },
  registerCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  registerClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  registerClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCluster', 'EKS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EKS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EKS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EKS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EKS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EKS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EKS', Promise.reject(result), true, mock)
  },
  updateAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  updateAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  updateAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddon', 'EKS', Promise.reject(result), true, mock)
  },
  updateClusterConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  updateClusterConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  updateClusterConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterConfig', 'EKS', Promise.reject(result), true, mock)
  },
  updateClusterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterVersion', 'EKS', Promise.resolve(result), true, mock)
  },
  updateClusterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterVersion', 'EKS', Promise.resolve(result), false, mock)
  },
  updateClusterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterVersion', 'EKS', Promise.reject(result), true, mock)
  },
  updateNodegroupConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  updateNodegroupConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  updateNodegroupConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupConfig', 'EKS', Promise.reject(result), true, mock)
  },
  updateNodegroupVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupVersion', 'EKS', Promise.resolve(result), true, mock)
  },
  updateNodegroupVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupVersion', 'EKS', Promise.resolve(result), false, mock)
  },
  updateNodegroupVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNodegroupVersion', 'EKS', Promise.reject(result), true, mock)
  },
}
