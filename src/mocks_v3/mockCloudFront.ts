
/**
* @description mocks_v3:mockCloudFront module is mocks for AWS-SDK V3
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
export const mockCloudFront = {
  associateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'associateAlias', 'CloudFront', Promise.resolve(result), true, mock)
  },
  associateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'associateAlias', 'CloudFront', Promise.resolve(result), false, mock)
  },
  associateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'associateAlias', 'CloudFront', Promise.reject(result), true, mock)
  },
  copyDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'copyDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  copyDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'copyDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  copyDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'copyDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  createCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  createContinuousDeploymentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createContinuousDeploymentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createContinuousDeploymentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createContinuousDeploymentPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  createDistributionWithTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistributionWithTags', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createDistributionWithTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistributionWithTags', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createDistributionWithTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createDistributionWithTags', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  createInvalidation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createInvalidation', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createInvalidationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createInvalidation', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createInvalidationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createInvalidation', 'CloudFront', Promise.reject(result), true, mock)
  },
  createKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  createKeyValueStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyValueStore', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createKeyValueStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyValueStore', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createKeyValueStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createKeyValueStore', 'CloudFront', Promise.reject(result), true, mock)
  },
  createMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  createOriginAccessControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginAccessControl', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createOriginAccessControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginAccessControl', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createOriginAccessControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginAccessControl', 'CloudFront', Promise.reject(result), true, mock)
  },
  createOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createPublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createPublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createPublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  createRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  createResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  createStreamingDistributionWithTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistributionWithTags', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createStreamingDistributionWithTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistributionWithTags', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createStreamingDistributionWithTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'createStreamingDistributionWithTags', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteContinuousDeploymentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteContinuousDeploymentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteContinuousDeploymentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteContinuousDeploymentPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteKeyValueStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyValueStore', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteKeyValueStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyValueStore', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteKeyValueStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteKeyValueStore', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteOriginAccessControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginAccessControl', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteOriginAccessControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginAccessControl', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteOriginAccessControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginAccessControl', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deletePublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deletePublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deletePublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deletePublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deletePublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deletePublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'deleteStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  describeFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  describeFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  describeFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  describeKeyValueStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeKeyValueStore', 'CloudFront', Promise.resolve(result), true, mock)
  },
  describeKeyValueStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeKeyValueStore', 'CloudFront', Promise.resolve(result), false, mock)
  },
  describeKeyValueStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'describeKeyValueStore', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCachePolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCachePolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCachePolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCachePolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCloudFrontOriginAccessIdentityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getContinuousDeploymentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getContinuousDeploymentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getContinuousDeploymentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getContinuousDeploymentPolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getContinuousDeploymentPolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getContinuousDeploymentPolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getContinuousDeploymentPolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  getDistributionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistributionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getDistributionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistributionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getDistributionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getDistributionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryption', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryption', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryption', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionProfileConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionProfileConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionProfileConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  getInvalidation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getInvalidation', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getInvalidationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getInvalidation', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getInvalidationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getInvalidation', 'CloudFront', Promise.reject(result), true, mock)
  },
  getKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  getKeyGroupConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroupConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getKeyGroupConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroupConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getKeyGroupConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getKeyGroupConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginAccessControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControl', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginAccessControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControl', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginAccessControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControl', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginAccessControlConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControlConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginAccessControlConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControlConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginAccessControlConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginAccessControlConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginRequestPolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginRequestPolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginRequestPolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getOriginRequestPolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  getPublicKeyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKeyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getPublicKeyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKeyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getPublicKeyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getPublicKeyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getResponseHeadersPolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getResponseHeadersPolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getResponseHeadersPolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getResponseHeadersPolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  getStreamingDistributionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistributionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getStreamingDistributionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistributionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getStreamingDistributionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'getStreamingDistributionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  listCachePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCachePolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listCachePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCachePolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listCachePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCachePolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listCloudFrontOriginAccessIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listCloudFrontOriginAccessIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listCloudFrontOriginAccessIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.reject(result), true, mock)
  },
  listConflictingAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listConflictingAliases', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listConflictingAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listConflictingAliases', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listConflictingAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listConflictingAliases', 'CloudFront', Promise.reject(result), true, mock)
  },
  listContinuousDeploymentPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listContinuousDeploymentPolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listContinuousDeploymentPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listContinuousDeploymentPolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listContinuousDeploymentPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listContinuousDeploymentPolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByCachePolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByCachePolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByCachePolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByCachePolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByCachePolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByCachePolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByOriginRequestPolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByOriginRequestPolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByOriginRequestPolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByResponseHeadersPolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByResponseHeadersPolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByResponseHeadersPolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByWebACLId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByWebACLId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByWebACLIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByWebACLId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByWebACLIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributionsByWebACLId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listDistributions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFieldLevelEncryptionConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionConfigs', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFieldLevelEncryptionConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionConfigs', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFieldLevelEncryptionConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionConfigs', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFieldLevelEncryptionProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionProfiles', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFieldLevelEncryptionProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionProfiles', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFieldLevelEncryptionProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFieldLevelEncryptionProfiles', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFunctions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFunctions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listFunctions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listInvalidations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listInvalidations', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listInvalidationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listInvalidations', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listInvalidationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listInvalidations', 'CloudFront', Promise.reject(result), true, mock)
  },
  listKeyGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyGroups', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listKeyGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyGroups', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listKeyGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyGroups', 'CloudFront', Promise.reject(result), true, mock)
  },
  listKeyValueStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyValueStores', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listKeyValueStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyValueStores', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listKeyValueStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listKeyValueStores', 'CloudFront', Promise.reject(result), true, mock)
  },
  listOriginAccessControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginAccessControls', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listOriginAccessControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginAccessControls', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listOriginAccessControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginAccessControls', 'CloudFront', Promise.reject(result), true, mock)
  },
  listOriginRequestPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginRequestPolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listOriginRequestPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginRequestPolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listOriginRequestPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listOriginRequestPolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listPublicKeys', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listPublicKeys', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listPublicKeys', 'CloudFront', Promise.reject(result), true, mock)
  },
  listRealtimeLogConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listRealtimeLogConfigs', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listRealtimeLogConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listRealtimeLogConfigs', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listRealtimeLogConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listRealtimeLogConfigs', 'CloudFront', Promise.reject(result), true, mock)
  },
  listResponseHeadersPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listResponseHeadersPolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listResponseHeadersPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listResponseHeadersPolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listResponseHeadersPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listResponseHeadersPolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listStreamingDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listStreamingDistributions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listStreamingDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listStreamingDistributions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listStreamingDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listStreamingDistributions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listTagsForResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listTagsForResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'listTagsForResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  publishFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'publishFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  publishFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'publishFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  publishFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'publishFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'tagResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'tagResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'tagResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  testFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'testFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  testFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'testFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  testFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'testFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'untagResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'untagResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'untagResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateContinuousDeploymentPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateContinuousDeploymentPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateContinuousDeploymentPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateContinuousDeploymentPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateContinuousDeploymentPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateDistributionWithStagingConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistributionWithStagingConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateDistributionWithStagingConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistributionWithStagingConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateDistributionWithStagingConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateDistributionWithStagingConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateKeyValueStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyValueStore', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateKeyValueStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyValueStore', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateKeyValueStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateKeyValueStore', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateOriginAccessControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginAccessControl', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateOriginAccessControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginAccessControl', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateOriginAccessControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginAccessControl', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updatePublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updatePublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updatePublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updatePublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updatePublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updatePublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'updateStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'send', 'CloudFrontClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'send', 'CloudFrontClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront', 'send', 'CloudFrontClient', Promise.reject(result), true, mock)
  }
}
