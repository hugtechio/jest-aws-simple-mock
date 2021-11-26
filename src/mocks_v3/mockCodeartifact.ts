
/**
* @description mocks_v3:mockCodeartifact module is mocks for AWS-SDK V3
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

  export const mockCodeartifact = {
  associateExternalConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'associateExternalConnection', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  associateExternalConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'associateExternalConnection', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  associateExternalConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'associateExternalConnection', 'Codeartifact', Promise.reject(result), true, mock)
  },
  copyPackageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'copyPackageVersions', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  copyPackageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'copyPackageVersions', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  copyPackageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'copyPackageVersions', 'Codeartifact', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createDomain', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createDomain', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createDomain', 'Codeartifact', Promise.reject(result), true, mock)
  },
  createRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createRepository', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  createRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createRepository', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  createRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'createRepository', 'Codeartifact', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomain', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomain', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomain', 'Codeartifact', Promise.reject(result), true, mock)
  },
  deleteDomainPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  deleteDomainPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  deleteDomainPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteDomainPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  deletePackageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deletePackageVersions', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  deletePackageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deletePackageVersions', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  deletePackageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deletePackageVersions', 'Codeartifact', Promise.reject(result), true, mock)
  },
  deleteRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepository', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  deleteRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepository', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  deleteRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepository', 'Codeartifact', Promise.reject(result), true, mock)
  },
  deleteRepositoryPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  deleteRepositoryPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  deleteRepositoryPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'deleteRepositoryPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeDomain', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeDomain', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeDomain', 'Codeartifact', Promise.reject(result), true, mock)
  },
  describePackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describePackageVersion', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  describePackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describePackageVersion', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  describePackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describePackageVersion', 'Codeartifact', Promise.reject(result), true, mock)
  },
  describeRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeRepository', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  describeRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeRepository', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  describeRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'describeRepository', 'Codeartifact', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'destroy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'destroy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'destroy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  disassociateExternalConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disassociateExternalConnection', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  disassociateExternalConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disassociateExternalConnection', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  disassociateExternalConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disassociateExternalConnection', 'Codeartifact', Promise.reject(result), true, mock)
  },
  disposePackageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disposePackageVersions', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  disposePackageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disposePackageVersions', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  disposePackageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'disposePackageVersions', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getAuthorizationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getAuthorizationToken', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getAuthorizationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getAuthorizationToken', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getAuthorizationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getAuthorizationToken', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getDomainPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getDomainPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getDomainPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getDomainPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getPackageVersionAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionAsset', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getPackageVersionAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionAsset', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getPackageVersionAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionAsset', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getPackageVersionReadme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionReadme', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getPackageVersionReadmeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionReadme', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getPackageVersionReadmeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getPackageVersionReadme', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getRepositoryEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryEndpoint', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getRepositoryEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryEndpoint', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getRepositoryEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryEndpoint', 'Codeartifact', Promise.reject(result), true, mock)
  },
  getRepositoryPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  getRepositoryPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  getRepositoryPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'getRepositoryPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listDomains', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listDomains', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listDomains', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listPackageVersionAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionAssets', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listPackageVersionAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionAssets', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listPackageVersionAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionAssets', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listPackageVersionDependencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionDependencies', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listPackageVersionDependenciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionDependencies', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listPackageVersionDependenciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersionDependencies', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listPackageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersions', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listPackageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersions', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listPackageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackageVersions', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackages', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackages', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listPackages', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositories', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositories', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositories', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listRepositoriesInDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositoriesInDomain', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listRepositoriesInDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositoriesInDomain', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listRepositoriesInDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listRepositoriesInDomain', 'Codeartifact', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listTagsForResource', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listTagsForResource', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'listTagsForResource', 'Codeartifact', Promise.reject(result), true, mock)
  },
  putDomainPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  putDomainPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putDomainPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  putDomainPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putDomainPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  putRepositoryPermissionsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  putRepositoryPermissionsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putRepositoryPermissionsPolicy', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  putRepositoryPermissionsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'putRepositoryPermissionsPolicy', 'Codeartifact', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'tagResource', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'tagResource', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'tagResource', 'Codeartifact', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'untagResource', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'untagResource', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'untagResource', 'Codeartifact', Promise.reject(result), true, mock)
  },
  updatePackageVersionsStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updatePackageVersionsStatus', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  updatePackageVersionsStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updatePackageVersionsStatus', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  updatePackageVersionsStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updatePackageVersionsStatus', 'Codeartifact', Promise.reject(result), true, mock)
  },
  updateRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updateRepository', 'Codeartifact', Promise.resolve(result), true, mock)
  },
  updateRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updateRepository', 'Codeartifact', Promise.resolve(result), false, mock)
  },
  updateRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'updateRepository', 'Codeartifact', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'send', 'CodeartifactClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'send', 'CodeartifactClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeartifact', 'send', 'CodeartifactClient', Promise.reject(result), true, mock)
  }
}