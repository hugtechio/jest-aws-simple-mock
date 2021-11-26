
/**
* @description mocks_v3:mockApiGatewayV2 module is mocks for AWS-SDK V3
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

  export const mockApiGatewayV2 = {
  createApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createApiMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApiMapping', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createApiMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApiMapping', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createApiMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createApiMapping', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createAuthorizer', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createAuthorizer', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createAuthorizer', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDeployment', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDeployment', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDeployment', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDomainName', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDomainName', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createDomainName', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegration', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegration', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegration', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createIntegrationResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createModel', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createModel', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createModel', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRoute', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRoute', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRoute', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createRouteResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRouteResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createRouteResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRouteResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createRouteResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createRouteResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createStage', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createStage', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createStage', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  createVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createVpcLink', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  createVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createVpcLink', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  createVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'createVpcLink', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteAccessLogSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAccessLogSettings', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteAccessLogSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAccessLogSettings', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteAccessLogSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAccessLogSettings', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteApiMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApiMapping', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteApiMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApiMapping', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteApiMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteApiMapping', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAuthorizer', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAuthorizer', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteAuthorizer', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteCorsConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteCorsConfiguration', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteCorsConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteCorsConfiguration', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteCorsConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteCorsConfiguration', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDeployment', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDeployment', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDeployment', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDomainName', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDomainName', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteDomainName', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegration', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegration', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegration', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteIntegrationResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteModel', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteModel', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteModel', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRoute', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRoute', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRoute', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteRouteRequestParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteRequestParameter', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteRouteRequestParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteRequestParameter', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteRouteRequestParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteRequestParameter', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteRouteResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteRouteResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteRouteResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteRouteSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteSettings', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteRouteSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteSettings', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteRouteSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteRouteSettings', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteStage', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteStage', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteStage', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  deleteVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteVpcLink', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  deleteVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteVpcLink', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  deleteVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'deleteVpcLink', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'destroy', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'destroy', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'destroy', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  exportApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'exportApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  exportApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'exportApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  exportApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'exportApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getApiMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMapping', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getApiMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMapping', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getApiMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMapping', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getApiMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMappings', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getApiMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMappings', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getApiMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApiMappings', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getApis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApis', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getApisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApis', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getApisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getApis', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizer', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizer', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizer', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getAuthorizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizers', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getAuthorizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizers', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getAuthorizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getAuthorizers', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployment', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployment', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployment', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployments', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployments', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDeployments', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainName', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainName', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainName', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainNames', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainNames', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getDomainNames', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegration', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegration', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegration', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getIntegrationResponses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponses', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getIntegrationResponsesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponses', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getIntegrationResponsesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrationResponses', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrations', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrations', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getIntegrations', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModel', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModel', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModel', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getModelTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModelTemplate', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getModelTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModelTemplate', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getModelTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModelTemplate', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModels', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModels', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getModels', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoute', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoute', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoute', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getRouteResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getRouteResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getRouteResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getRouteResponses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponses', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getRouteResponsesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponses', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getRouteResponsesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRouteResponses', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoutes', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoutes', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getRoutes', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStage', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStage', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStage', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getStages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStages', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getStagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStages', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getStagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getStages', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getTags', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getTags', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getTags', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLink', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLink', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLink', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  getVpcLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLinks', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  getVpcLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLinks', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  getVpcLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'getVpcLinks', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  importApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'importApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  importApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'importApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  importApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'importApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  reimportApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'reimportApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  reimportApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'reimportApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  reimportApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'reimportApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  resetAuthorizersCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'resetAuthorizersCache', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  resetAuthorizersCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'resetAuthorizersCache', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  resetAuthorizersCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'resetAuthorizersCache', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'tagResource', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'tagResource', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'tagResource', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'untagResource', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'untagResource', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'untagResource', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApi', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApi', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApi', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateApiMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApiMapping', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateApiMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApiMapping', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateApiMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateApiMapping', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateAuthorizer', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateAuthorizer', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateAuthorizer', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDeployment', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDeployment', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDeployment', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateDomainName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDomainName', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateDomainNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDomainName', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateDomainNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateDomainName', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegration', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegration', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegration', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateIntegrationResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateIntegrationResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegrationResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateIntegrationResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateIntegrationResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateModel', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateModel', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateModel', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRoute', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRoute', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRoute', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateRouteResponse: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRouteResponse', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateRouteResponseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRouteResponse', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateRouteResponseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateRouteResponse', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateStage', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateStage', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateStage', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  updateVpcLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateVpcLink', 'ApiGatewayV2', Promise.resolve(result), true, mock)
  },
  updateVpcLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateVpcLink', 'ApiGatewayV2', Promise.resolve(result), false, mock)
  },
  updateVpcLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'updateVpcLink', 'ApiGatewayV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'send', 'ApiGatewayV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'send', 'ApiGatewayV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewayv2', 'send', 'ApiGatewayV2Client', Promise.reject(result), true, mock)
  }
}