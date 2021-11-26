
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAppSync = {
  createApiCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiCache', 'AppSync', Promise.resolve(result), true, mock)
  },
  createApiCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiCache', 'AppSync', Promise.resolve(result), false, mock)
  },
  createApiCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiCache', 'AppSync', Promise.reject(result), true, mock)
  },
  createApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiKey', 'AppSync', Promise.resolve(result), true, mock)
  },
  createApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiKey', 'AppSync', Promise.resolve(result), false, mock)
  },
  createApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createApiKey', 'AppSync', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createDataSource', 'AppSync', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createDataSource', 'AppSync', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createDataSource', 'AppSync', Promise.reject(result), true, mock)
  },
  createFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createFunction', 'AppSync', Promise.resolve(result), true, mock)
  },
  createFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createFunction', 'AppSync', Promise.resolve(result), false, mock)
  },
  createFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createFunction', 'AppSync', Promise.reject(result), true, mock)
  },
  createGraphqlApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createGraphqlApi', 'AppSync', Promise.resolve(result), true, mock)
  },
  createGraphqlApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createGraphqlApi', 'AppSync', Promise.resolve(result), false, mock)
  },
  createGraphqlApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createGraphqlApi', 'AppSync', Promise.reject(result), true, mock)
  },
  createResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createResolver', 'AppSync', Promise.resolve(result), true, mock)
  },
  createResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createResolver', 'AppSync', Promise.resolve(result), false, mock)
  },
  createResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createResolver', 'AppSync', Promise.reject(result), true, mock)
  },
  createType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createType', 'AppSync', Promise.resolve(result), true, mock)
  },
  createTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createType', 'AppSync', Promise.resolve(result), false, mock)
  },
  createTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'createType', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteApiCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiCache', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteApiCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiCache', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteApiCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiCache', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiKey', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiKey', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteApiKey', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteDataSource', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteDataSource', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteDataSource', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteFunction', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteFunction', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteFunction', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteGraphqlApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteGraphqlApi', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteGraphqlApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteGraphqlApi', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteGraphqlApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteGraphqlApi', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteResolver', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteResolver', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteResolver', 'AppSync', Promise.reject(result), true, mock)
  },
  deleteType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteType', 'AppSync', Promise.resolve(result), true, mock)
  },
  deleteTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteType', 'AppSync', Promise.resolve(result), false, mock)
  },
  deleteTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'deleteType', 'AppSync', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'destroy', 'AppSync', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'destroy', 'AppSync', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'destroy', 'AppSync', Promise.reject(result), true, mock)
  },
  flushApiCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'flushApiCache', 'AppSync', Promise.resolve(result), true, mock)
  },
  flushApiCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'flushApiCache', 'AppSync', Promise.resolve(result), false, mock)
  },
  flushApiCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'flushApiCache', 'AppSync', Promise.reject(result), true, mock)
  },
  getApiCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getApiCache', 'AppSync', Promise.resolve(result), true, mock)
  },
  getApiCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getApiCache', 'AppSync', Promise.resolve(result), false, mock)
  },
  getApiCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getApiCache', 'AppSync', Promise.reject(result), true, mock)
  },
  getDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getDataSource', 'AppSync', Promise.resolve(result), true, mock)
  },
  getDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getDataSource', 'AppSync', Promise.resolve(result), false, mock)
  },
  getDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getDataSource', 'AppSync', Promise.reject(result), true, mock)
  },
  getFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getFunction', 'AppSync', Promise.resolve(result), true, mock)
  },
  getFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getFunction', 'AppSync', Promise.resolve(result), false, mock)
  },
  getFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getFunction', 'AppSync', Promise.reject(result), true, mock)
  },
  getGraphqlApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getGraphqlApi', 'AppSync', Promise.resolve(result), true, mock)
  },
  getGraphqlApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getGraphqlApi', 'AppSync', Promise.resolve(result), false, mock)
  },
  getGraphqlApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getGraphqlApi', 'AppSync', Promise.reject(result), true, mock)
  },
  getIntrospectionSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getIntrospectionSchema', 'AppSync', Promise.resolve(result), true, mock)
  },
  getIntrospectionSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getIntrospectionSchema', 'AppSync', Promise.resolve(result), false, mock)
  },
  getIntrospectionSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getIntrospectionSchema', 'AppSync', Promise.reject(result), true, mock)
  },
  getResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getResolver', 'AppSync', Promise.resolve(result), true, mock)
  },
  getResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getResolver', 'AppSync', Promise.resolve(result), false, mock)
  },
  getResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getResolver', 'AppSync', Promise.reject(result), true, mock)
  },
  getSchemaCreationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getSchemaCreationStatus', 'AppSync', Promise.resolve(result), true, mock)
  },
  getSchemaCreationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getSchemaCreationStatus', 'AppSync', Promise.resolve(result), false, mock)
  },
  getSchemaCreationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getSchemaCreationStatus', 'AppSync', Promise.reject(result), true, mock)
  },
  getType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getType', 'AppSync', Promise.resolve(result), true, mock)
  },
  getTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getType', 'AppSync', Promise.resolve(result), false, mock)
  },
  getTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'getType', 'AppSync', Promise.reject(result), true, mock)
  },
  listApiKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listApiKeys', 'AppSync', Promise.resolve(result), true, mock)
  },
  listApiKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listApiKeys', 'AppSync', Promise.resolve(result), false, mock)
  },
  listApiKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listApiKeys', 'AppSync', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listDataSources', 'AppSync', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listDataSources', 'AppSync', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listDataSources', 'AppSync', Promise.reject(result), true, mock)
  },
  listFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listFunctions', 'AppSync', Promise.resolve(result), true, mock)
  },
  listFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listFunctions', 'AppSync', Promise.resolve(result), false, mock)
  },
  listFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listFunctions', 'AppSync', Promise.reject(result), true, mock)
  },
  listGraphqlApis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listGraphqlApis', 'AppSync', Promise.resolve(result), true, mock)
  },
  listGraphqlApisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listGraphqlApis', 'AppSync', Promise.resolve(result), false, mock)
  },
  listGraphqlApisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listGraphqlApis', 'AppSync', Promise.reject(result), true, mock)
  },
  listResolvers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolvers', 'AppSync', Promise.resolve(result), true, mock)
  },
  listResolversAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolvers', 'AppSync', Promise.resolve(result), false, mock)
  },
  listResolversThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolvers', 'AppSync', Promise.reject(result), true, mock)
  },
  listResolversByFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolversByFunction', 'AppSync', Promise.resolve(result), true, mock)
  },
  listResolversByFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolversByFunction', 'AppSync', Promise.resolve(result), false, mock)
  },
  listResolversByFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listResolversByFunction', 'AppSync', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTagsForResource', 'AppSync', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTagsForResource', 'AppSync', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTagsForResource', 'AppSync', Promise.reject(result), true, mock)
  },
  listTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTypes', 'AppSync', Promise.resolve(result), true, mock)
  },
  listTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTypes', 'AppSync', Promise.resolve(result), false, mock)
  },
  listTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'listTypes', 'AppSync', Promise.reject(result), true, mock)
  },
  startSchemaCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'startSchemaCreation', 'AppSync', Promise.resolve(result), true, mock)
  },
  startSchemaCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'startSchemaCreation', 'AppSync', Promise.resolve(result), false, mock)
  },
  startSchemaCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'startSchemaCreation', 'AppSync', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'tagResource', 'AppSync', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'tagResource', 'AppSync', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'tagResource', 'AppSync', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'untagResource', 'AppSync', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'untagResource', 'AppSync', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'untagResource', 'AppSync', Promise.reject(result), true, mock)
  },
  updateApiCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiCache', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateApiCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiCache', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateApiCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiCache', 'AppSync', Promise.reject(result), true, mock)
  },
  updateApiKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiKey', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateApiKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiKey', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateApiKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateApiKey', 'AppSync', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateDataSource', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateDataSource', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateDataSource', 'AppSync', Promise.reject(result), true, mock)
  },
  updateFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateFunction', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateFunction', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateFunction', 'AppSync', Promise.reject(result), true, mock)
  },
  updateGraphqlApi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateGraphqlApi', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateGraphqlApiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateGraphqlApi', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateGraphqlApiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateGraphqlApi', 'AppSync', Promise.reject(result), true, mock)
  },
  updateResolver: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateResolver', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateResolverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateResolver', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateResolverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateResolver', 'AppSync', Promise.reject(result), true, mock)
  },
  updateType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateType', 'AppSync', Promise.resolve(result), true, mock)
  },
  updateTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateType', 'AppSync', Promise.resolve(result), false, mock)
  },
  updateTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'updateType', 'AppSync', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'send', 'AppSyncClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'send', 'AppSyncClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appsync', 'send', 'AppSyncClient', Promise.reject(result), true, mock)
  }
}