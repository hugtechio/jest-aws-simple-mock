
/**
* @description mocks_v3:mockLambda module is mocks for AWS-SDK V3
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
export const mockLambda = {
  addLayerVersionPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addLayerVersionPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  addLayerVersionPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addLayerVersionPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  addLayerVersionPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addLayerVersionPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'addPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  createCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  createCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  createCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  createEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  createEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  createEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  createFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  createFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  createFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  createFunctionUrlConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunctionUrlConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  createFunctionUrlConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunctionUrlConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  createFunctionUrlConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'createFunctionUrlConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionUrlConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionUrlConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionUrlConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionUrlConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionUrlConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteFunctionUrlConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'deleteProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAccountSettings', 'Lambda', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAccountSettings', 'Lambda', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAccountSettings', 'Lambda', Promise.reject(result), true, mock)
  },
  getAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  getAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  getAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  getCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  getEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  getEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConfiguration', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConfiguration', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionConfiguration', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionUrlConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionUrlConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionUrlConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionUrlConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionUrlConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getFunctionUrlConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersionByArn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionByArn', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionByArnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionByArn', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionByArnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionByArn', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionPolicy', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionPolicy', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getLayerVersionPolicy', 'Lambda', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getPolicy', 'Lambda', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getPolicy', 'Lambda', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getPolicy', 'Lambda', Promise.reject(result), true, mock)
  },
  getProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getRuntimeManagementConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getRuntimeManagementConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getRuntimeManagementConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getRuntimeManagementConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getRuntimeManagementConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'getRuntimeManagementConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  invokeAsync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeAsync', 'Lambda', Promise.resolve(result), true, mock)
  },
  invokeAsyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeAsync', 'Lambda', Promise.resolve(result), false, mock)
  },
  invokeAsyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeAsync', 'Lambda', Promise.reject(result), true, mock)
  },
  invoke: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invoke', 'Lambda', Promise.resolve(result), true, mock)
  },
  invokeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invoke', 'Lambda', Promise.resolve(result), false, mock)
  },
  invokeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invoke', 'Lambda', Promise.reject(result), true, mock)
  },
  invokeWithResponseStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeWithResponseStream', 'Lambda', Promise.resolve(result), true, mock)
  },
  invokeWithResponseStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeWithResponseStream', 'Lambda', Promise.resolve(result), false, mock)
  },
  invokeWithResponseStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'invokeWithResponseStream', 'Lambda', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listAliases', 'Lambda', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listAliases', 'Lambda', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listAliases', 'Lambda', Promise.reject(result), true, mock)
  },
  listCodeSigningConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listCodeSigningConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listCodeSigningConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listCodeSigningConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listCodeSigningConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listCodeSigningConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listEventSourceMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listEventSourceMappings', 'Lambda', Promise.resolve(result), true, mock)
  },
  listEventSourceMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listEventSourceMappings', 'Lambda', Promise.resolve(result), false, mock)
  },
  listEventSourceMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listEventSourceMappings', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctionEventInvokeConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionEventInvokeConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionEventInvokeConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionEventInvokeConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionEventInvokeConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionEventInvokeConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctionUrlConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionUrlConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionUrlConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionUrlConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionUrlConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionUrlConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctionsByCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionsByCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionsByCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionsByCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionsByCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctionsByCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctions', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctions', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listFunctions', 'Lambda', Promise.reject(result), true, mock)
  },
  listLayerVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayerVersions', 'Lambda', Promise.resolve(result), true, mock)
  },
  listLayerVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayerVersions', 'Lambda', Promise.resolve(result), false, mock)
  },
  listLayerVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayerVersions', 'Lambda', Promise.reject(result), true, mock)
  },
  listLayers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayers', 'Lambda', Promise.resolve(result), true, mock)
  },
  listLayersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayers', 'Lambda', Promise.resolve(result), false, mock)
  },
  listLayersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listLayers', 'Lambda', Promise.reject(result), true, mock)
  },
  listProvisionedConcurrencyConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listProvisionedConcurrencyConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listProvisionedConcurrencyConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listProvisionedConcurrencyConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listProvisionedConcurrencyConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listProvisionedConcurrencyConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listTags', 'Lambda', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listTags', 'Lambda', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listTags', 'Lambda', Promise.reject(result), true, mock)
  },
  listVersionsByFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listVersionsByFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  listVersionsByFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listVersionsByFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  listVersionsByFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'listVersionsByFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  publishLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  publishLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  publishLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  publishVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  publishVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  publishVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'publishVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  putProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  putRuntimeManagementConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putRuntimeManagementConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putRuntimeManagementConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putRuntimeManagementConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putRuntimeManagementConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'putRuntimeManagementConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  removeLayerVersionPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removeLayerVersionPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  removeLayerVersionPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removeLayerVersionPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  removeLayerVersionPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removeLayerVersionPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removePermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removePermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'removePermission', 'Lambda', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'tagResource', 'Lambda', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'tagResource', 'Lambda', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'tagResource', 'Lambda', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'untagResource', 'Lambda', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'untagResource', 'Lambda', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'untagResource', 'Lambda', Promise.reject(result), true, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  updateCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  updateEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionCode', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionCode', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionCode', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionConfiguration', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionConfiguration', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionConfiguration', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionUrlConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionUrlConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionUrlConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionUrlConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionUrlConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'updateFunctionUrlConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'send', 'LambdaClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'send', 'LambdaClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lambda', 'send', 'LambdaClient', Promise.reject(result), true, mock)
  }
}
