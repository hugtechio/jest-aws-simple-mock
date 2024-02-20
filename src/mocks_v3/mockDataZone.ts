
/**
* @description mocks_v3:mockDataZone module is mocks for AWS-SDK V3
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
export const mockDataZone = {
  acceptPredictions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptPredictions', 'DataZone', Promise.resolve(result), true, mock)
  },
  acceptPredictionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptPredictions', 'DataZone', Promise.resolve(result), false, mock)
  },
  acceptPredictionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptPredictions', 'DataZone', Promise.reject(result), true, mock)
  },
  acceptSubscriptionRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptSubscriptionRequest', 'DataZone', Promise.resolve(result), true, mock)
  },
  acceptSubscriptionRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptSubscriptionRequest', 'DataZone', Promise.resolve(result), false, mock)
  },
  acceptSubscriptionRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'acceptSubscriptionRequest', 'DataZone', Promise.reject(result), true, mock)
  },
  cancelSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'cancelSubscription', 'DataZone', Promise.resolve(result), true, mock)
  },
  cancelSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'cancelSubscription', 'DataZone', Promise.resolve(result), false, mock)
  },
  cancelSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'cancelSubscription', 'DataZone', Promise.reject(result), true, mock)
  },
  createAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAsset', 'DataZone', Promise.resolve(result), true, mock)
  },
  createAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAsset', 'DataZone', Promise.resolve(result), false, mock)
  },
  createAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAsset', 'DataZone', Promise.reject(result), true, mock)
  },
  createAssetRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetRevision', 'DataZone', Promise.resolve(result), true, mock)
  },
  createAssetRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetRevision', 'DataZone', Promise.resolve(result), false, mock)
  },
  createAssetRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetRevision', 'DataZone', Promise.reject(result), true, mock)
  },
  createAssetType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetType', 'DataZone', Promise.resolve(result), true, mock)
  },
  createAssetTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetType', 'DataZone', Promise.resolve(result), false, mock)
  },
  createAssetTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createAssetType', 'DataZone', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDataSource', 'DataZone', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDataSource', 'DataZone', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDataSource', 'DataZone', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDomain', 'DataZone', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDomain', 'DataZone', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createDomain', 'DataZone', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironment', 'DataZone', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironment', 'DataZone', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironment', 'DataZone', Promise.reject(result), true, mock)
  },
  createEnvironmentProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironmentProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  createEnvironmentProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironmentProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  createEnvironmentProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createEnvironmentProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  createFormType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createFormType', 'DataZone', Promise.resolve(result), true, mock)
  },
  createFormTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createFormType', 'DataZone', Promise.resolve(result), false, mock)
  },
  createFormTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createFormType', 'DataZone', Promise.reject(result), true, mock)
  },
  createGlossary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossary', 'DataZone', Promise.resolve(result), true, mock)
  },
  createGlossaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossary', 'DataZone', Promise.resolve(result), false, mock)
  },
  createGlossaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossary', 'DataZone', Promise.reject(result), true, mock)
  },
  createGlossaryTerm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossaryTerm', 'DataZone', Promise.resolve(result), true, mock)
  },
  createGlossaryTermAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossaryTerm', 'DataZone', Promise.resolve(result), false, mock)
  },
  createGlossaryTermThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGlossaryTerm', 'DataZone', Promise.reject(result), true, mock)
  },
  createGroupProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGroupProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  createGroupProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGroupProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  createGroupProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createGroupProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  createListingChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createListingChangeSet', 'DataZone', Promise.resolve(result), true, mock)
  },
  createListingChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createListingChangeSet', 'DataZone', Promise.resolve(result), false, mock)
  },
  createListingChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createListingChangeSet', 'DataZone', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProject', 'DataZone', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProject', 'DataZone', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProject', 'DataZone', Promise.reject(result), true, mock)
  },
  createProjectMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProjectMembership', 'DataZone', Promise.resolve(result), true, mock)
  },
  createProjectMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProjectMembership', 'DataZone', Promise.resolve(result), false, mock)
  },
  createProjectMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createProjectMembership', 'DataZone', Promise.reject(result), true, mock)
  },
  createSubscriptionGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionGrant', 'DataZone', Promise.resolve(result), true, mock)
  },
  createSubscriptionGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionGrant', 'DataZone', Promise.resolve(result), false, mock)
  },
  createSubscriptionGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionGrant', 'DataZone', Promise.reject(result), true, mock)
  },
  createSubscriptionRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionRequest', 'DataZone', Promise.resolve(result), true, mock)
  },
  createSubscriptionRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionRequest', 'DataZone', Promise.resolve(result), false, mock)
  },
  createSubscriptionRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionRequest', 'DataZone', Promise.reject(result), true, mock)
  },
  createSubscriptionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionTarget', 'DataZone', Promise.resolve(result), true, mock)
  },
  createSubscriptionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionTarget', 'DataZone', Promise.resolve(result), false, mock)
  },
  createSubscriptionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createSubscriptionTarget', 'DataZone', Promise.reject(result), true, mock)
  },
  createUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createUserProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  createUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createUserProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  createUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'createUserProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAsset', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAsset', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAsset', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteAssetType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAssetType', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteAssetTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAssetType', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteAssetTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteAssetType', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDataSource', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDataSource', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDataSource', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDomain', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDomain', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteDomain', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteEnvironmentBlueprintConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentBlueprintConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentBlueprintConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentBlueprintConfiguration', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironment', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironment', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironment', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteEnvironmentProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteEnvironmentProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteFormType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteFormType', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteFormTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteFormType', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteFormTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteFormType', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteGlossary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossary', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteGlossaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossary', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteGlossaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossary', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteGlossaryTerm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossaryTerm', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteGlossaryTermAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossaryTerm', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteGlossaryTermThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteGlossaryTerm', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteListing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteListing', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteListingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteListing', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteListingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteListing', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProject', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProject', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProject', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteProjectMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProjectMembership', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteProjectMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProjectMembership', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteProjectMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteProjectMembership', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteSubscriptionGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionGrant', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionGrant', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionGrant', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteSubscriptionRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionRequest', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionRequest', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionRequest', 'DataZone', Promise.reject(result), true, mock)
  },
  deleteSubscriptionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionTarget', 'DataZone', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionTarget', 'DataZone', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'deleteSubscriptionTarget', 'DataZone', Promise.reject(result), true, mock)
  },
  getAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAsset', 'DataZone', Promise.resolve(result), true, mock)
  },
  getAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAsset', 'DataZone', Promise.resolve(result), false, mock)
  },
  getAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAsset', 'DataZone', Promise.reject(result), true, mock)
  },
  getAssetType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAssetType', 'DataZone', Promise.resolve(result), true, mock)
  },
  getAssetTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAssetType', 'DataZone', Promise.resolve(result), false, mock)
  },
  getAssetTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getAssetType', 'DataZone', Promise.reject(result), true, mock)
  },
  getDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSource', 'DataZone', Promise.resolve(result), true, mock)
  },
  getDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSource', 'DataZone', Promise.resolve(result), false, mock)
  },
  getDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSource', 'DataZone', Promise.reject(result), true, mock)
  },
  getDataSourceRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSourceRun', 'DataZone', Promise.resolve(result), true, mock)
  },
  getDataSourceRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSourceRun', 'DataZone', Promise.resolve(result), false, mock)
  },
  getDataSourceRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDataSourceRun', 'DataZone', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDomain', 'DataZone', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDomain', 'DataZone', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getDomain', 'DataZone', Promise.reject(result), true, mock)
  },
  getEnvironmentBlueprint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprint', 'DataZone', Promise.resolve(result), true, mock)
  },
  getEnvironmentBlueprintAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprint', 'DataZone', Promise.resolve(result), false, mock)
  },
  getEnvironmentBlueprintThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprint', 'DataZone', Promise.reject(result), true, mock)
  },
  getEnvironmentBlueprintConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), true, mock)
  },
  getEnvironmentBlueprintConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), false, mock)
  },
  getEnvironmentBlueprintConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentBlueprintConfiguration', 'DataZone', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironment', 'DataZone', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironment', 'DataZone', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironment', 'DataZone', Promise.reject(result), true, mock)
  },
  getEnvironmentProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  getEnvironmentProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  getEnvironmentProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getEnvironmentProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  getFormType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getFormType', 'DataZone', Promise.resolve(result), true, mock)
  },
  getFormTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getFormType', 'DataZone', Promise.resolve(result), false, mock)
  },
  getFormTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getFormType', 'DataZone', Promise.reject(result), true, mock)
  },
  getGlossary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossary', 'DataZone', Promise.resolve(result), true, mock)
  },
  getGlossaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossary', 'DataZone', Promise.resolve(result), false, mock)
  },
  getGlossaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossary', 'DataZone', Promise.reject(result), true, mock)
  },
  getGlossaryTerm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossaryTerm', 'DataZone', Promise.resolve(result), true, mock)
  },
  getGlossaryTermAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossaryTerm', 'DataZone', Promise.resolve(result), false, mock)
  },
  getGlossaryTermThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGlossaryTerm', 'DataZone', Promise.reject(result), true, mock)
  },
  getGroupProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGroupProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  getGroupProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGroupProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  getGroupProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getGroupProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  getIamPortalLoginUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getIamPortalLoginUrl', 'DataZone', Promise.resolve(result), true, mock)
  },
  getIamPortalLoginUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getIamPortalLoginUrl', 'DataZone', Promise.resolve(result), false, mock)
  },
  getIamPortalLoginUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getIamPortalLoginUrl', 'DataZone', Promise.reject(result), true, mock)
  },
  getListing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getListing', 'DataZone', Promise.resolve(result), true, mock)
  },
  getListingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getListing', 'DataZone', Promise.resolve(result), false, mock)
  },
  getListingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getListing', 'DataZone', Promise.reject(result), true, mock)
  },
  getProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getProject', 'DataZone', Promise.resolve(result), true, mock)
  },
  getProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getProject', 'DataZone', Promise.resolve(result), false, mock)
  },
  getProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getProject', 'DataZone', Promise.reject(result), true, mock)
  },
  getSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscription', 'DataZone', Promise.resolve(result), true, mock)
  },
  getSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscription', 'DataZone', Promise.resolve(result), false, mock)
  },
  getSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscription', 'DataZone', Promise.reject(result), true, mock)
  },
  getSubscriptionGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionGrant', 'DataZone', Promise.resolve(result), true, mock)
  },
  getSubscriptionGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionGrant', 'DataZone', Promise.resolve(result), false, mock)
  },
  getSubscriptionGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionGrant', 'DataZone', Promise.reject(result), true, mock)
  },
  getSubscriptionRequestDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionRequestDetails', 'DataZone', Promise.resolve(result), true, mock)
  },
  getSubscriptionRequestDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionRequestDetails', 'DataZone', Promise.resolve(result), false, mock)
  },
  getSubscriptionRequestDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionRequestDetails', 'DataZone', Promise.reject(result), true, mock)
  },
  getSubscriptionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionTarget', 'DataZone', Promise.resolve(result), true, mock)
  },
  getSubscriptionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionTarget', 'DataZone', Promise.resolve(result), false, mock)
  },
  getSubscriptionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getSubscriptionTarget', 'DataZone', Promise.reject(result), true, mock)
  },
  getUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getUserProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  getUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getUserProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  getUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'getUserProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  listAssetRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listAssetRevisions', 'DataZone', Promise.resolve(result), true, mock)
  },
  listAssetRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listAssetRevisions', 'DataZone', Promise.resolve(result), false, mock)
  },
  listAssetRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listAssetRevisions', 'DataZone', Promise.reject(result), true, mock)
  },
  listDataSourceRunActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRunActivities', 'DataZone', Promise.resolve(result), true, mock)
  },
  listDataSourceRunActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRunActivities', 'DataZone', Promise.resolve(result), false, mock)
  },
  listDataSourceRunActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRunActivities', 'DataZone', Promise.reject(result), true, mock)
  },
  listDataSourceRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRuns', 'DataZone', Promise.resolve(result), true, mock)
  },
  listDataSourceRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRuns', 'DataZone', Promise.resolve(result), false, mock)
  },
  listDataSourceRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSourceRuns', 'DataZone', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSources', 'DataZone', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSources', 'DataZone', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDataSources', 'DataZone', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDomains', 'DataZone', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDomains', 'DataZone', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listDomains', 'DataZone', Promise.reject(result), true, mock)
  },
  listEnvironmentBlueprintConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprintConfigurations', 'DataZone', Promise.resolve(result), true, mock)
  },
  listEnvironmentBlueprintConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprintConfigurations', 'DataZone', Promise.resolve(result), false, mock)
  },
  listEnvironmentBlueprintConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprintConfigurations', 'DataZone', Promise.reject(result), true, mock)
  },
  listEnvironmentBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprints', 'DataZone', Promise.resolve(result), true, mock)
  },
  listEnvironmentBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprints', 'DataZone', Promise.resolve(result), false, mock)
  },
  listEnvironmentBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentBlueprints', 'DataZone', Promise.reject(result), true, mock)
  },
  listEnvironmentProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentProfiles', 'DataZone', Promise.resolve(result), true, mock)
  },
  listEnvironmentProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentProfiles', 'DataZone', Promise.resolve(result), false, mock)
  },
  listEnvironmentProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironmentProfiles', 'DataZone', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironments', 'DataZone', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironments', 'DataZone', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listEnvironments', 'DataZone', Promise.reject(result), true, mock)
  },
  listNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listNotifications', 'DataZone', Promise.resolve(result), true, mock)
  },
  listNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listNotifications', 'DataZone', Promise.resolve(result), false, mock)
  },
  listNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listNotifications', 'DataZone', Promise.reject(result), true, mock)
  },
  listProjectMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjectMemberships', 'DataZone', Promise.resolve(result), true, mock)
  },
  listProjectMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjectMemberships', 'DataZone', Promise.resolve(result), false, mock)
  },
  listProjectMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjectMemberships', 'DataZone', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjects', 'DataZone', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjects', 'DataZone', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listProjects', 'DataZone', Promise.reject(result), true, mock)
  },
  listSubscriptionGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionGrants', 'DataZone', Promise.resolve(result), true, mock)
  },
  listSubscriptionGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionGrants', 'DataZone', Promise.resolve(result), false, mock)
  },
  listSubscriptionGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionGrants', 'DataZone', Promise.reject(result), true, mock)
  },
  listSubscriptionRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionRequests', 'DataZone', Promise.resolve(result), true, mock)
  },
  listSubscriptionRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionRequests', 'DataZone', Promise.resolve(result), false, mock)
  },
  listSubscriptionRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionRequests', 'DataZone', Promise.reject(result), true, mock)
  },
  listSubscriptionTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionTargets', 'DataZone', Promise.resolve(result), true, mock)
  },
  listSubscriptionTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionTargets', 'DataZone', Promise.resolve(result), false, mock)
  },
  listSubscriptionTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptionTargets', 'DataZone', Promise.reject(result), true, mock)
  },
  listSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptions', 'DataZone', Promise.resolve(result), true, mock)
  },
  listSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptions', 'DataZone', Promise.resolve(result), false, mock)
  },
  listSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listSubscriptions', 'DataZone', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listTagsForResource', 'DataZone', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listTagsForResource', 'DataZone', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'listTagsForResource', 'DataZone', Promise.reject(result), true, mock)
  },
  putEnvironmentBlueprintConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'putEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), true, mock)
  },
  putEnvironmentBlueprintConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'putEnvironmentBlueprintConfiguration', 'DataZone', Promise.resolve(result), false, mock)
  },
  putEnvironmentBlueprintConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'putEnvironmentBlueprintConfiguration', 'DataZone', Promise.reject(result), true, mock)
  },
  rejectPredictions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectPredictions', 'DataZone', Promise.resolve(result), true, mock)
  },
  rejectPredictionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectPredictions', 'DataZone', Promise.resolve(result), false, mock)
  },
  rejectPredictionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectPredictions', 'DataZone', Promise.reject(result), true, mock)
  },
  rejectSubscriptionRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectSubscriptionRequest', 'DataZone', Promise.resolve(result), true, mock)
  },
  rejectSubscriptionRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectSubscriptionRequest', 'DataZone', Promise.resolve(result), false, mock)
  },
  rejectSubscriptionRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'rejectSubscriptionRequest', 'DataZone', Promise.reject(result), true, mock)
  },
  revokeSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'revokeSubscription', 'DataZone', Promise.resolve(result), true, mock)
  },
  revokeSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'revokeSubscription', 'DataZone', Promise.resolve(result), false, mock)
  },
  revokeSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'revokeSubscription', 'DataZone', Promise.reject(result), true, mock)
  },
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'search', 'DataZone', Promise.resolve(result), true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'search', 'DataZone', Promise.resolve(result), false, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'search', 'DataZone', Promise.reject(result), true, mock)
  },
  searchGroupProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchGroupProfiles', 'DataZone', Promise.resolve(result), true, mock)
  },
  searchGroupProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchGroupProfiles', 'DataZone', Promise.resolve(result), false, mock)
  },
  searchGroupProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchGroupProfiles', 'DataZone', Promise.reject(result), true, mock)
  },
  searchListings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchListings', 'DataZone', Promise.resolve(result), true, mock)
  },
  searchListingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchListings', 'DataZone', Promise.resolve(result), false, mock)
  },
  searchListingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchListings', 'DataZone', Promise.reject(result), true, mock)
  },
  searchTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchTypes', 'DataZone', Promise.resolve(result), true, mock)
  },
  searchTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchTypes', 'DataZone', Promise.resolve(result), false, mock)
  },
  searchTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchTypes', 'DataZone', Promise.reject(result), true, mock)
  },
  searchUserProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchUserProfiles', 'DataZone', Promise.resolve(result), true, mock)
  },
  searchUserProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchUserProfiles', 'DataZone', Promise.resolve(result), false, mock)
  },
  searchUserProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'searchUserProfiles', 'DataZone', Promise.reject(result), true, mock)
  },
  startDataSourceRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'startDataSourceRun', 'DataZone', Promise.resolve(result), true, mock)
  },
  startDataSourceRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'startDataSourceRun', 'DataZone', Promise.resolve(result), false, mock)
  },
  startDataSourceRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'startDataSourceRun', 'DataZone', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'tagResource', 'DataZone', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'tagResource', 'DataZone', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'tagResource', 'DataZone', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'untagResource', 'DataZone', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'untagResource', 'DataZone', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'untagResource', 'DataZone', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDataSource', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDataSource', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDataSource', 'DataZone', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDomain', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDomain', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateDomain', 'DataZone', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironment', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironment', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironment', 'DataZone', Promise.reject(result), true, mock)
  },
  updateEnvironmentProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironmentProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateEnvironmentProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironmentProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateEnvironmentProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateEnvironmentProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  updateGlossary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossary', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateGlossaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossary', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateGlossaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossary', 'DataZone', Promise.reject(result), true, mock)
  },
  updateGlossaryTerm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossaryTerm', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateGlossaryTermAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossaryTerm', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateGlossaryTermThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGlossaryTerm', 'DataZone', Promise.reject(result), true, mock)
  },
  updateGroupProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGroupProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateGroupProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGroupProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateGroupProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateGroupProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateProject', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateProject', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateProject', 'DataZone', Promise.reject(result), true, mock)
  },
  updateSubscriptionGrantStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionGrantStatus', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateSubscriptionGrantStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionGrantStatus', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateSubscriptionGrantStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionGrantStatus', 'DataZone', Promise.reject(result), true, mock)
  },
  updateSubscriptionRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionRequest', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateSubscriptionRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionRequest', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateSubscriptionRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionRequest', 'DataZone', Promise.reject(result), true, mock)
  },
  updateSubscriptionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionTarget', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateSubscriptionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionTarget', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateSubscriptionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateSubscriptionTarget', 'DataZone', Promise.reject(result), true, mock)
  },
  updateUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateUserProfile', 'DataZone', Promise.resolve(result), true, mock)
  },
  updateUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateUserProfile', 'DataZone', Promise.resolve(result), false, mock)
  },
  updateUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'updateUserProfile', 'DataZone', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'send', 'DataZoneClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'send', 'DataZoneClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-datazone', 'send', 'DataZoneClient', Promise.reject(result), true, mock)
  }
}
