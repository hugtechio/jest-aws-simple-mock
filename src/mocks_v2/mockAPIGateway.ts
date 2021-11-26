
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
  export const mockAPIGateway = {
  createApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApiKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApiKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApiKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  createAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthorizer', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthorizer', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthorizer', 'APIGateway', Promise.reject(result), true, mock)
  },
  createBasePathMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBasePathMapping', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createBasePathMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBasePathMapping', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createBasePathMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBasePathMapping', 'APIGateway', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'APIGateway', Promise.reject(result), true, mock)
  },
  createDocumentationPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationPart', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createDocumentationPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationPart', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createDocumentationPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationPart', 'APIGateway', Promise.reject(result), true, mock)
  },
  createDocumentationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationVersion', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createDocumentationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationVersion', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createDocumentationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentationVersion', 'APIGateway', Promise.reject(result), true, mock)
  },
  createDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainName', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainName', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainName', 'APIGateway', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'APIGateway', Promise.reject(result), true, mock)
  },
  createRequestValidator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRequestValidator', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createRequestValidatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRequestValidator', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createRequestValidatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRequestValidator', 'APIGateway', Promise.reject(result), true, mock)
  },
  createResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  createRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  createStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStage', 'APIGateway', Promise.reject(result), true, mock)
  },
  createUsagePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlan', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createUsagePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlan', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createUsagePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlan', 'APIGateway', Promise.reject(result), true, mock)
  },
  createUsagePlanKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlanKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createUsagePlanKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlanKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createUsagePlanKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsagePlanKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  createVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcLink', 'APIGateway', Promise.resolve(result), true, mock)
  },
  createVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcLink', 'APIGateway', Promise.resolve(result), false, mock)
  },
  createVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcLink', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApiKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApiKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApiKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthorizer', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthorizer', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthorizer', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteBasePathMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBasePathMapping', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteBasePathMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBasePathMapping', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteBasePathMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBasePathMapping', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClientCertificate', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClientCertificate', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClientCertificate', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeployment', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeployment', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeployment', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteDocumentationPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationPart', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteDocumentationPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationPart', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteDocumentationPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationPart', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteDocumentationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationVersion', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteDocumentationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationVersion', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteDocumentationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentationVersion', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainName', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainName', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainName', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteGatewayResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteGatewayResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteGatewayResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethod', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethod', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethod', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteMethodResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethodResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteMethodResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethodResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteMethodResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMethodResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteRequestValidator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRequestValidator', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteRequestValidatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRequestValidator', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteRequestValidatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRequestValidator', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStage', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteUsagePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlan', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteUsagePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlan', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteUsagePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlan', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteUsagePlanKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlanKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteUsagePlanKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlanKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteUsagePlanKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsagePlanKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  deleteVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcLink', 'APIGateway', Promise.resolve(result), true, mock)
  },
  deleteVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcLink', 'APIGateway', Promise.resolve(result), false, mock)
  },
  deleteVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcLink', 'APIGateway', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'APIGateway', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'APIGateway', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'APIGateway', Promise.reject(result), true, mock)
  },
  flushStageAuthorizersCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageAuthorizersCache', 'APIGateway', Promise.resolve(result), true, mock)
  },
  flushStageAuthorizersCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageAuthorizersCache', 'APIGateway', Promise.resolve(result), false, mock)
  },
  flushStageAuthorizersCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageAuthorizersCache', 'APIGateway', Promise.reject(result), true, mock)
  },
  flushStageCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageCache', 'APIGateway', Promise.resolve(result), true, mock)
  },
  flushStageCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageCache', 'APIGateway', Promise.resolve(result), false, mock)
  },
  flushStageCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('flushStageCache', 'APIGateway', Promise.reject(result), true, mock)
  },
  generateClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateClientCertificate', 'APIGateway', Promise.resolve(result), true, mock)
  },
  generateClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateClientCertificate', 'APIGateway', Promise.resolve(result), false, mock)
  },
  generateClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateClientCertificate', 'APIGateway', Promise.reject(result), true, mock)
  },
  getAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'APIGateway', Promise.reject(result), true, mock)
  },
  getApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  getApiKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKeys', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getApiKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKeys', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getApiKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApiKeys', 'APIGateway', Promise.reject(result), true, mock)
  },
  getAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizer', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizer', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizer', 'APIGateway', Promise.reject(result), true, mock)
  },
  getAuthorizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizers', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getAuthorizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizers', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getAuthorizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAuthorizers', 'APIGateway', Promise.reject(result), true, mock)
  },
  getBasePathMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMapping', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getBasePathMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMapping', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getBasePathMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMapping', 'APIGateway', Promise.reject(result), true, mock)
  },
  getBasePathMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMappings', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getBasePathMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMappings', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getBasePathMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBasePathMappings', 'APIGateway', Promise.reject(result), true, mock)
  },
  getClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificate', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificate', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificate', 'APIGateway', Promise.reject(result), true, mock)
  },
  getClientCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificates', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getClientCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificates', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getClientCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClientCertificates', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployments', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployments', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployments', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDocumentationPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationPart', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDocumentationPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationPart', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDocumentationPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationPart', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDocumentationParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationParts', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDocumentationPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationParts', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDocumentationPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationParts', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDocumentationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersion', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDocumentationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersion', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDocumentationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersion', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDocumentationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersions', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDocumentationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersions', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDocumentationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentationVersions', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainName', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainName', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainName', 'APIGateway', Promise.reject(result), true, mock)
  },
  getDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainNames', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainNames', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainNames', 'APIGateway', Promise.reject(result), true, mock)
  },
  getExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExport', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExport', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExport', 'APIGateway', Promise.reject(result), true, mock)
  },
  getGatewayResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getGatewayResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getGatewayResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  getGatewayResponses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponses', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getGatewayResponsesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponses', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getGatewayResponsesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayResponses', 'APIGateway', Promise.reject(result), true, mock)
  },
  getIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'APIGateway', Promise.reject(result), true, mock)
  },
  getIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegrationResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegrationResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegrationResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  getMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethod', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethod', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethod', 'APIGateway', Promise.reject(result), true, mock)
  },
  getMethodResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethodResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getMethodResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethodResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getMethodResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMethodResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  getModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModel', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModel', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModel', 'APIGateway', Promise.reject(result), true, mock)
  },
  getModelTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModelTemplate', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getModelTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModelTemplate', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getModelTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModelTemplate', 'APIGateway', Promise.reject(result), true, mock)
  },
  getModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModels', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModels', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getModels', 'APIGateway', Promise.reject(result), true, mock)
  },
  getRequestValidator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidator', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getRequestValidatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidator', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getRequestValidatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidator', 'APIGateway', Promise.reject(result), true, mock)
  },
  getRequestValidators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidators', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getRequestValidatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidators', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getRequestValidatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRequestValidators', 'APIGateway', Promise.reject(result), true, mock)
  },
  getResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  getResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'APIGateway', Promise.reject(result), true, mock)
  },
  getRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  getRestApis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApis', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getRestApisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApis', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getRestApisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRestApis', 'APIGateway', Promise.reject(result), true, mock)
  },
  getSdk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdk', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getSdkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdk', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getSdkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdk', 'APIGateway', Promise.reject(result), true, mock)
  },
  getSdkType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkType', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getSdkTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkType', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getSdkTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkType', 'APIGateway', Promise.reject(result), true, mock)
  },
  getSdkTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkTypes', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getSdkTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkTypes', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getSdkTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSdkTypes', 'APIGateway', Promise.reject(result), true, mock)
  },
  getStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStage', 'APIGateway', Promise.reject(result), true, mock)
  },
  getStages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStages', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getStagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStages', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getStagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStages', 'APIGateway', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'APIGateway', Promise.reject(result), true, mock)
  },
  getUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsage', 'APIGateway', Promise.reject(result), true, mock)
  },
  getUsagePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlan', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getUsagePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlan', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getUsagePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlan', 'APIGateway', Promise.reject(result), true, mock)
  },
  getUsagePlanKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getUsagePlanKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getUsagePlanKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  getUsagePlanKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKeys', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getUsagePlanKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKeys', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getUsagePlanKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlanKeys', 'APIGateway', Promise.reject(result), true, mock)
  },
  getUsagePlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlans', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getUsagePlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlans', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getUsagePlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsagePlans', 'APIGateway', Promise.reject(result), true, mock)
  },
  getVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLink', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLink', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLink', 'APIGateway', Promise.reject(result), true, mock)
  },
  getVpcLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLinks', 'APIGateway', Promise.resolve(result), true, mock)
  },
  getVpcLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLinks', 'APIGateway', Promise.resolve(result), false, mock)
  },
  getVpcLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVpcLinks', 'APIGateway', Promise.reject(result), true, mock)
  },
  importApiKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApiKeys', 'APIGateway', Promise.resolve(result), true, mock)
  },
  importApiKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApiKeys', 'APIGateway', Promise.resolve(result), false, mock)
  },
  importApiKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApiKeys', 'APIGateway', Promise.reject(result), true, mock)
  },
  importDocumentationParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importDocumentationParts', 'APIGateway', Promise.resolve(result), true, mock)
  },
  importDocumentationPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importDocumentationParts', 'APIGateway', Promise.resolve(result), false, mock)
  },
  importDocumentationPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importDocumentationParts', 'APIGateway', Promise.reject(result), true, mock)
  },
  importRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  importRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  importRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  putGatewayResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGatewayResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putGatewayResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGatewayResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putGatewayResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGatewayResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  putIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'APIGateway', Promise.reject(result), true, mock)
  },
  putIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegrationResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegrationResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegrationResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  putMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethod', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethod', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethod', 'APIGateway', Promise.reject(result), true, mock)
  },
  putMethodResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethodResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putMethodResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethodResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putMethodResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMethodResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  putRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  putRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  putRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  testInvokeAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeAuthorizer', 'APIGateway', Promise.resolve(result), true, mock)
  },
  testInvokeAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeAuthorizer', 'APIGateway', Promise.resolve(result), false, mock)
  },
  testInvokeAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeAuthorizer', 'APIGateway', Promise.reject(result), true, mock)
  },
  testInvokeMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeMethod', 'APIGateway', Promise.resolve(result), true, mock)
  },
  testInvokeMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeMethod', 'APIGateway', Promise.resolve(result), false, mock)
  },
  testInvokeMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testInvokeMethod', 'APIGateway', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccount', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccount', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccount', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApiKey', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApiKey', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApiKey', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthorizer', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthorizer', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuthorizer', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateBasePathMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBasePathMapping', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateBasePathMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBasePathMapping', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateBasePathMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBasePathMapping', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClientCertificate', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClientCertificate', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClientCertificate', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeployment', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeployment', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeployment', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateDocumentationPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationPart', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateDocumentationPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationPart', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateDocumentationPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationPart', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateDocumentationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationVersion', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateDocumentationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationVersion', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateDocumentationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentationVersion', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainName', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainName', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainName', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateGatewayResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateGatewayResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateGatewayResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegration', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegration', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegration', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegrationResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegrationResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntegrationResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethod', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethod', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethod', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateMethodResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethodResponse', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateMethodResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethodResponse', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateMethodResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMethodResponse', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateModel', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateModel', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateModel', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateRequestValidator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRequestValidator', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateRequestValidatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRequestValidator', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateRequestValidatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRequestValidator', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateRestApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRestApi', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateRestApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRestApi', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateRestApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRestApi', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStage', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsage', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsage', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsage', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateUsagePlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsagePlan', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateUsagePlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsagePlan', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateUsagePlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUsagePlan', 'APIGateway', Promise.reject(result), true, mock)
  },
  updateVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVpcLink', 'APIGateway', Promise.resolve(result), true, mock)
  },
  updateVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVpcLink', 'APIGateway', Promise.resolve(result), false, mock)
  },
  updateVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVpcLink', 'APIGateway', Promise.reject(result), true, mock)
  },
}
