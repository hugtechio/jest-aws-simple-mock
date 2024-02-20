
/**
* @description mocks_v3:mockEKS module is mocks for AWS-SDK V3
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
export const mockEKS = {
  associateAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateAccessPolicy', 'EKS', Promise.resolve(result), true, mock)
  },
  associateAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateAccessPolicy', 'EKS', Promise.resolve(result), false, mock)
  },
  associateAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateAccessPolicy', 'EKS', Promise.reject(result), true, mock)
  },
  associateEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateEncryptionConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  associateEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateEncryptionConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  associateEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateEncryptionConfig', 'EKS', Promise.reject(result), true, mock)
  },
  associateIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  associateIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  associateIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'associateIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  createAccessEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAccessEntry', 'EKS', Promise.resolve(result), true, mock)
  },
  createAccessEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAccessEntry', 'EKS', Promise.resolve(result), false, mock)
  },
  createAccessEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAccessEntry', 'EKS', Promise.reject(result), true, mock)
  },
  createAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  createAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  createAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createAddon', 'EKS', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createCluster', 'EKS', Promise.reject(result), true, mock)
  },
  createEksAnywhereSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createEksAnywhereSubscription', 'EKS', Promise.resolve(result), true, mock)
  },
  createEksAnywhereSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createEksAnywhereSubscription', 'EKS', Promise.resolve(result), false, mock)
  },
  createEksAnywhereSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createEksAnywhereSubscription', 'EKS', Promise.reject(result), true, mock)
  },
  createFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  createFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  createFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  createNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  createNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  createNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  createPodIdentityAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createPodIdentityAssociation', 'EKS', Promise.resolve(result), true, mock)
  },
  createPodIdentityAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createPodIdentityAssociation', 'EKS', Promise.resolve(result), false, mock)
  },
  createPodIdentityAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'createPodIdentityAssociation', 'EKS', Promise.reject(result), true, mock)
  },
  deleteAccessEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAccessEntry', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteAccessEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAccessEntry', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteAccessEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAccessEntry', 'EKS', Promise.reject(result), true, mock)
  },
  deleteAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteAddon', 'EKS', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteCluster', 'EKS', Promise.reject(result), true, mock)
  },
  deleteEksAnywhereSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteEksAnywhereSubscription', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteEksAnywhereSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteEksAnywhereSubscription', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteEksAnywhereSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteEksAnywhereSubscription', 'EKS', Promise.reject(result), true, mock)
  },
  deleteFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  deleteNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  deleteNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  deleteNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deleteNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  deletePodIdentityAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deletePodIdentityAssociation', 'EKS', Promise.resolve(result), true, mock)
  },
  deletePodIdentityAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deletePodIdentityAssociation', 'EKS', Promise.resolve(result), false, mock)
  },
  deletePodIdentityAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deletePodIdentityAssociation', 'EKS', Promise.reject(result), true, mock)
  },
  deregisterCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deregisterCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  deregisterClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deregisterCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  deregisterClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'deregisterCluster', 'EKS', Promise.reject(result), true, mock)
  },
  describeAccessEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAccessEntry', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAccessEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAccessEntry', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAccessEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAccessEntry', 'EKS', Promise.reject(result), true, mock)
  },
  describeAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddon', 'EKS', Promise.reject(result), true, mock)
  },
  describeAddonConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonConfiguration', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAddonConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonConfiguration', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAddonConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonConfiguration', 'EKS', Promise.reject(result), true, mock)
  },
  describeAddonVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonVersions', 'EKS', Promise.resolve(result), true, mock)
  },
  describeAddonVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonVersions', 'EKS', Promise.resolve(result), false, mock)
  },
  describeAddonVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeAddonVersions', 'EKS', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeCluster', 'EKS', Promise.reject(result), true, mock)
  },
  describeEksAnywhereSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeEksAnywhereSubscription', 'EKS', Promise.resolve(result), true, mock)
  },
  describeEksAnywhereSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeEksAnywhereSubscription', 'EKS', Promise.resolve(result), false, mock)
  },
  describeEksAnywhereSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeEksAnywhereSubscription', 'EKS', Promise.reject(result), true, mock)
  },
  describeFargateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeFargateProfile', 'EKS', Promise.resolve(result), true, mock)
  },
  describeFargateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeFargateProfile', 'EKS', Promise.resolve(result), false, mock)
  },
  describeFargateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeFargateProfile', 'EKS', Promise.reject(result), true, mock)
  },
  describeIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  describeIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  describeIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  describeInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeInsight', 'EKS', Promise.resolve(result), true, mock)
  },
  describeInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeInsight', 'EKS', Promise.resolve(result), false, mock)
  },
  describeInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeInsight', 'EKS', Promise.reject(result), true, mock)
  },
  describeNodegroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeNodegroup', 'EKS', Promise.resolve(result), true, mock)
  },
  describeNodegroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeNodegroup', 'EKS', Promise.resolve(result), false, mock)
  },
  describeNodegroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeNodegroup', 'EKS', Promise.reject(result), true, mock)
  },
  describePodIdentityAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describePodIdentityAssociation', 'EKS', Promise.resolve(result), true, mock)
  },
  describePodIdentityAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describePodIdentityAssociation', 'EKS', Promise.resolve(result), false, mock)
  },
  describePodIdentityAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describePodIdentityAssociation', 'EKS', Promise.reject(result), true, mock)
  },
  describeUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeUpdate', 'EKS', Promise.resolve(result), true, mock)
  },
  describeUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeUpdate', 'EKS', Promise.resolve(result), false, mock)
  },
  describeUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'describeUpdate', 'EKS', Promise.reject(result), true, mock)
  },
  disassociateAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateAccessPolicy', 'EKS', Promise.resolve(result), true, mock)
  },
  disassociateAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateAccessPolicy', 'EKS', Promise.resolve(result), false, mock)
  },
  disassociateAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateAccessPolicy', 'EKS', Promise.reject(result), true, mock)
  },
  disassociateIdentityProviderConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateIdentityProviderConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  disassociateIdentityProviderConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateIdentityProviderConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  disassociateIdentityProviderConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'disassociateIdentityProviderConfig', 'EKS', Promise.reject(result), true, mock)
  },
  listAccessEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessEntries', 'EKS', Promise.resolve(result), true, mock)
  },
  listAccessEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessEntries', 'EKS', Promise.resolve(result), false, mock)
  },
  listAccessEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessEntries', 'EKS', Promise.reject(result), true, mock)
  },
  listAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessPolicies', 'EKS', Promise.resolve(result), true, mock)
  },
  listAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessPolicies', 'EKS', Promise.resolve(result), false, mock)
  },
  listAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAccessPolicies', 'EKS', Promise.reject(result), true, mock)
  },
  listAddons: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAddons', 'EKS', Promise.resolve(result), true, mock)
  },
  listAddonsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAddons', 'EKS', Promise.resolve(result), false, mock)
  },
  listAddonsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAddons', 'EKS', Promise.reject(result), true, mock)
  },
  listAssociatedAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAssociatedAccessPolicies', 'EKS', Promise.resolve(result), true, mock)
  },
  listAssociatedAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAssociatedAccessPolicies', 'EKS', Promise.resolve(result), false, mock)
  },
  listAssociatedAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listAssociatedAccessPolicies', 'EKS', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listClusters', 'EKS', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listClusters', 'EKS', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listClusters', 'EKS', Promise.reject(result), true, mock)
  },
  listEksAnywhereSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listEksAnywhereSubscriptions', 'EKS', Promise.resolve(result), true, mock)
  },
  listEksAnywhereSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listEksAnywhereSubscriptions', 'EKS', Promise.resolve(result), false, mock)
  },
  listEksAnywhereSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listEksAnywhereSubscriptions', 'EKS', Promise.reject(result), true, mock)
  },
  listFargateProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listFargateProfiles', 'EKS', Promise.resolve(result), true, mock)
  },
  listFargateProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listFargateProfiles', 'EKS', Promise.resolve(result), false, mock)
  },
  listFargateProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listFargateProfiles', 'EKS', Promise.reject(result), true, mock)
  },
  listIdentityProviderConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listIdentityProviderConfigs', 'EKS', Promise.resolve(result), true, mock)
  },
  listIdentityProviderConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listIdentityProviderConfigs', 'EKS', Promise.resolve(result), false, mock)
  },
  listIdentityProviderConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listIdentityProviderConfigs', 'EKS', Promise.reject(result), true, mock)
  },
  listInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listInsights', 'EKS', Promise.resolve(result), true, mock)
  },
  listInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listInsights', 'EKS', Promise.resolve(result), false, mock)
  },
  listInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listInsights', 'EKS', Promise.reject(result), true, mock)
  },
  listNodegroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listNodegroups', 'EKS', Promise.resolve(result), true, mock)
  },
  listNodegroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listNodegroups', 'EKS', Promise.resolve(result), false, mock)
  },
  listNodegroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listNodegroups', 'EKS', Promise.reject(result), true, mock)
  },
  listPodIdentityAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listPodIdentityAssociations', 'EKS', Promise.resolve(result), true, mock)
  },
  listPodIdentityAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listPodIdentityAssociations', 'EKS', Promise.resolve(result), false, mock)
  },
  listPodIdentityAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listPodIdentityAssociations', 'EKS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listTagsForResource', 'EKS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listTagsForResource', 'EKS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listTagsForResource', 'EKS', Promise.reject(result), true, mock)
  },
  listUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listUpdates', 'EKS', Promise.resolve(result), true, mock)
  },
  listUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listUpdates', 'EKS', Promise.resolve(result), false, mock)
  },
  listUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'listUpdates', 'EKS', Promise.reject(result), true, mock)
  },
  registerCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'registerCluster', 'EKS', Promise.resolve(result), true, mock)
  },
  registerClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'registerCluster', 'EKS', Promise.resolve(result), false, mock)
  },
  registerClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'registerCluster', 'EKS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'tagResource', 'EKS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'tagResource', 'EKS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'tagResource', 'EKS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'untagResource', 'EKS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'untagResource', 'EKS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'untagResource', 'EKS', Promise.reject(result), true, mock)
  },
  updateAccessEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAccessEntry', 'EKS', Promise.resolve(result), true, mock)
  },
  updateAccessEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAccessEntry', 'EKS', Promise.resolve(result), false, mock)
  },
  updateAccessEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAccessEntry', 'EKS', Promise.reject(result), true, mock)
  },
  updateAddon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAddon', 'EKS', Promise.resolve(result), true, mock)
  },
  updateAddonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAddon', 'EKS', Promise.resolve(result), false, mock)
  },
  updateAddonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateAddon', 'EKS', Promise.reject(result), true, mock)
  },
  updateClusterConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  updateClusterConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  updateClusterConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterConfig', 'EKS', Promise.reject(result), true, mock)
  },
  updateClusterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterVersion', 'EKS', Promise.resolve(result), true, mock)
  },
  updateClusterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterVersion', 'EKS', Promise.resolve(result), false, mock)
  },
  updateClusterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateClusterVersion', 'EKS', Promise.reject(result), true, mock)
  },
  updateEksAnywhereSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateEksAnywhereSubscription', 'EKS', Promise.resolve(result), true, mock)
  },
  updateEksAnywhereSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateEksAnywhereSubscription', 'EKS', Promise.resolve(result), false, mock)
  },
  updateEksAnywhereSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateEksAnywhereSubscription', 'EKS', Promise.reject(result), true, mock)
  },
  updateNodegroupConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupConfig', 'EKS', Promise.resolve(result), true, mock)
  },
  updateNodegroupConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupConfig', 'EKS', Promise.resolve(result), false, mock)
  },
  updateNodegroupConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupConfig', 'EKS', Promise.reject(result), true, mock)
  },
  updateNodegroupVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupVersion', 'EKS', Promise.resolve(result), true, mock)
  },
  updateNodegroupVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupVersion', 'EKS', Promise.resolve(result), false, mock)
  },
  updateNodegroupVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updateNodegroupVersion', 'EKS', Promise.reject(result), true, mock)
  },
  updatePodIdentityAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updatePodIdentityAssociation', 'EKS', Promise.resolve(result), true, mock)
  },
  updatePodIdentityAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updatePodIdentityAssociation', 'EKS', Promise.resolve(result), false, mock)
  },
  updatePodIdentityAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'updatePodIdentityAssociation', 'EKS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'send', 'EKSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'send', 'EKSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-eks', 'send', 'EKSClient', Promise.reject(result), true, mock)
  }
}
