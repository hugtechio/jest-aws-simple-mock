
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
  export const mockCloudFront = {
  associateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAlias', 'CloudFront', Promise.resolve(result), true, mock)
  },
  associateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAlias', 'CloudFront', Promise.resolve(result), false, mock)
  },
  associateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAlias', 'CloudFront', Promise.reject(result), true, mock)
  },
  createCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  createDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  createDistributionWithTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionWithTags', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createDistributionWithTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionWithTags', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createDistributionWithTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistributionWithTags', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  createFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  createInvalidation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvalidation', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createInvalidationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvalidation', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createInvalidationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvalidation', 'CloudFront', Promise.reject(result), true, mock)
  },
  createKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  createMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  createOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  createRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  createResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  createStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  createStreamingDistributionWithTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistributionWithTags', 'CloudFront', Promise.resolve(result), true, mock)
  },
  createStreamingDistributionWithTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistributionWithTags', 'CloudFront', Promise.resolve(result), false, mock)
  },
  createStreamingDistributionWithTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingDistributionWithTags', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deletePublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deletePublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deletePublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  deleteStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  deleteStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  deleteStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  describeFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  describeFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  describeFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCachePolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCachePolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCachePolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCachePolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getCloudFrontOriginAccessIdentityConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getCloudFrontOriginAccessIdentityConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFrontOriginAccessIdentityConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  getDistributionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getDistributionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getDistributionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryption', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryption', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryption', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFieldLevelEncryptionProfileConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFieldLevelEncryptionProfileConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFieldLevelEncryptionProfileConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFieldLevelEncryptionProfileConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  getInvalidation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvalidation', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getInvalidationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvalidation', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getInvalidationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvalidation', 'CloudFront', Promise.reject(result), true, mock)
  },
  getKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  getKeyGroupConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroupConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getKeyGroupConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroupConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getKeyGroupConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyGroupConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getMonitoringSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMonitoringSubscription', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getMonitoringSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMonitoringSubscription', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getMonitoringSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMonitoringSubscription', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getOriginRequestPolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getOriginRequestPolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getOriginRequestPolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOriginRequestPolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  getPublicKeyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKeyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getPublicKeyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKeyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getPublicKeyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPublicKeyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  getResponseHeadersPolicyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicyConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getResponseHeadersPolicyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicyConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getResponseHeadersPolicyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResponseHeadersPolicyConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  getStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  getStreamingDistributionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistributionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  getStreamingDistributionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistributionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  getStreamingDistributionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamingDistributionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  listCachePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCachePolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listCachePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCachePolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listCachePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCachePolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listCloudFrontOriginAccessIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listCloudFrontOriginAccessIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listCloudFrontOriginAccessIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCloudFrontOriginAccessIdentities', 'CloudFront', Promise.reject(result), true, mock)
  },
  listConflictingAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConflictingAliases', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listConflictingAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConflictingAliases', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listConflictingAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConflictingAliases', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByCachePolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByCachePolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByCachePolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByCachePolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByCachePolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByCachePolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByOriginRequestPolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByOriginRequestPolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByOriginRequestPolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByOriginRequestPolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByResponseHeadersPolicyId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByResponseHeadersPolicyIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByResponseHeadersPolicyIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByResponseHeadersPolicyId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listDistributionsByWebACLId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByWebACLId', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listDistributionsByWebACLIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByWebACLId', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listDistributionsByWebACLIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributionsByWebACLId', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFieldLevelEncryptionConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionConfigs', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFieldLevelEncryptionConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionConfigs', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFieldLevelEncryptionConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionConfigs', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFieldLevelEncryptionProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionProfiles', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFieldLevelEncryptionProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionProfiles', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFieldLevelEncryptionProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFieldLevelEncryptionProfiles', 'CloudFront', Promise.reject(result), true, mock)
  },
  listFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listInvalidations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvalidations', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listInvalidationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvalidations', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listInvalidationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvalidations', 'CloudFront', Promise.reject(result), true, mock)
  },
  listKeyGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyGroups', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listKeyGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyGroups', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listKeyGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyGroups', 'CloudFront', Promise.reject(result), true, mock)
  },
  listOriginRequestPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginRequestPolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listOriginRequestPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginRequestPolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listOriginRequestPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginRequestPolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudFront', Promise.reject(result), true, mock)
  },
  listRealtimeLogConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeLogConfigs', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listRealtimeLogConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeLogConfigs', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listRealtimeLogConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRealtimeLogConfigs', 'CloudFront', Promise.reject(result), true, mock)
  },
  listResponseHeadersPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponseHeadersPolicies', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listResponseHeadersPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponseHeadersPolicies', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listResponseHeadersPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResponseHeadersPolicies', 'CloudFront', Promise.reject(result), true, mock)
  },
  listStreamingDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingDistributions', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listStreamingDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingDistributions', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listStreamingDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamingDistributions', 'CloudFront', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  publishFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  publishFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  publishFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  testFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  testFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  testFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudFront', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudFront', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateCachePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCachePolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateCachePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCachePolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateCachePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCachePolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateCloudFrontOriginAccessIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateCloudFrontOriginAccessIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateCloudFrontOriginAccessIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCloudFrontOriginAccessIdentity', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFieldLevelEncryptionConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFieldLevelEncryptionConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFieldLevelEncryptionConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFieldLevelEncryptionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFieldLevelEncryptionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionProfile', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFieldLevelEncryptionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFieldLevelEncryptionProfile', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunction', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunction', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunction', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateKeyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyGroup', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateKeyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyGroup', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateKeyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateKeyGroup', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateOriginRequestPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginRequestPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateOriginRequestPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginRequestPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateOriginRequestPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginRequestPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updatePublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicKey', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updatePublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicKey', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updatePublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicKey', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateRealtimeLogConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRealtimeLogConfig', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateRealtimeLogConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRealtimeLogConfig', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateRealtimeLogConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRealtimeLogConfig', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateResponseHeadersPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateResponseHeadersPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponseHeadersPolicy', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateResponseHeadersPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResponseHeadersPolicy', 'CloudFront', Promise.reject(result), true, mock)
  },
  updateStreamingDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingDistribution', 'CloudFront', Promise.resolve(result), true, mock)
  },
  updateStreamingDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingDistribution', 'CloudFront', Promise.resolve(result), false, mock)
  },
  updateStreamingDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStreamingDistribution', 'CloudFront', Promise.reject(result), true, mock)
  },
}
