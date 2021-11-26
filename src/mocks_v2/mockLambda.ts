
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
  export const mockLambda = {
  addLayerVersionPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLayerVersionPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  addLayerVersionPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLayerVersionPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  addLayerVersionPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLayerVersionPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  addPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  addPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  addPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  createCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  createCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  createCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  createEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  createEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  createEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  createFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  createFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  createFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  deleteProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  deleteProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  deleteProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lambda', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lambda', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lambda', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'Lambda', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'Lambda', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'Lambda', Promise.reject(result), true, mock)
  },
  getAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  getAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  getAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  getCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  getEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  getEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConfiguration', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConfiguration', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionConfiguration', 'Lambda', Promise.reject(result), true, mock)
  },
  getFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersionByArn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionByArn', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionByArnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionByArn', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionByArnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionByArn', 'Lambda', Promise.reject(result), true, mock)
  },
  getLayerVersionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionPolicy', 'Lambda', Promise.resolve(result), true, mock)
  },
  getLayerVersionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionPolicy', 'Lambda', Promise.resolve(result), false, mock)
  },
  getLayerVersionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLayerVersionPolicy', 'Lambda', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'Lambda', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'Lambda', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'Lambda', Promise.reject(result), true, mock)
  },
  getProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  getProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  getProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  invoke: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invoke', 'Lambda', Promise.resolve(result), true, mock)
  },
  invokeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invoke', 'Lambda', Promise.resolve(result), false, mock)
  },
  invokeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invoke', 'Lambda', Promise.reject(result), true, mock)
  },
  invokeAsync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeAsync', 'Lambda', Promise.resolve(result), true, mock)
  },
  invokeAsyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeAsync', 'Lambda', Promise.resolve(result), false, mock)
  },
  invokeAsyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invokeAsync', 'Lambda', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'Lambda', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'Lambda', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'Lambda', Promise.reject(result), true, mock)
  },
  listCodeSigningConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeSigningConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listCodeSigningConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeSigningConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listCodeSigningConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeSigningConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listEventSourceMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventSourceMappings', 'Lambda', Promise.resolve(result), true, mock)
  },
  listEventSourceMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventSourceMappings', 'Lambda', Promise.resolve(result), false, mock)
  },
  listEventSourceMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventSourceMappings', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctionEventInvokeConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionEventInvokeConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionEventInvokeConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionEventInvokeConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionEventInvokeConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionEventInvokeConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctions', 'Lambda', Promise.reject(result), true, mock)
  },
  listFunctionsByCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionsByCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  listFunctionsByCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionsByCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  listFunctionsByCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFunctionsByCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  listLayerVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayerVersions', 'Lambda', Promise.resolve(result), true, mock)
  },
  listLayerVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayerVersions', 'Lambda', Promise.resolve(result), false, mock)
  },
  listLayerVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayerVersions', 'Lambda', Promise.reject(result), true, mock)
  },
  listLayers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayers', 'Lambda', Promise.resolve(result), true, mock)
  },
  listLayersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayers', 'Lambda', Promise.resolve(result), false, mock)
  },
  listLayersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLayers', 'Lambda', Promise.reject(result), true, mock)
  },
  listProvisionedConcurrencyConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedConcurrencyConfigs', 'Lambda', Promise.resolve(result), true, mock)
  },
  listProvisionedConcurrencyConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedConcurrencyConfigs', 'Lambda', Promise.resolve(result), false, mock)
  },
  listProvisionedConcurrencyConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedConcurrencyConfigs', 'Lambda', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Lambda', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Lambda', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Lambda', Promise.reject(result), true, mock)
  },
  listVersionsByFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersionsByFunction', 'Lambda', Promise.resolve(result), true, mock)
  },
  listVersionsByFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersionsByFunction', 'Lambda', Promise.resolve(result), false, mock)
  },
  listVersionsByFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersionsByFunction', 'Lambda', Promise.reject(result), true, mock)
  },
  publishLayerVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishLayerVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  publishLayerVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishLayerVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  publishLayerVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishLayerVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  publishVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishVersion', 'Lambda', Promise.resolve(result), true, mock)
  },
  publishVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishVersion', 'Lambda', Promise.resolve(result), false, mock)
  },
  publishVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishVersion', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionConcurrency', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionConcurrency', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionConcurrency', 'Lambda', Promise.reject(result), true, mock)
  },
  putFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  putProvisionedConcurrencyConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  putProvisionedConcurrencyConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProvisionedConcurrencyConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  putProvisionedConcurrencyConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProvisionedConcurrencyConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  removeLayerVersionPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLayerVersionPermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  removeLayerVersionPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLayerVersionPermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  removeLayerVersionPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLayerVersionPermission', 'Lambda', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'Lambda', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'Lambda', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'Lambda', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lambda', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lambda', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lambda', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lambda', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lambda', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lambda', Promise.reject(result), true, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'Lambda', Promise.reject(result), true, mock)
  },
  updateCodeSigningConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCodeSigningConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateCodeSigningConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCodeSigningConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateCodeSigningConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCodeSigningConfig', 'Lambda', Promise.reject(result), true, mock)
  },
  updateEventSourceMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventSourceMapping', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateEventSourceMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventSourceMapping', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateEventSourceMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventSourceMapping', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionCode', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionCode', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionCode', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionConfiguration', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionConfiguration', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionConfiguration', 'Lambda', Promise.reject(result), true, mock)
  },
  updateFunctionEventInvokeConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), true, mock)
  },
  updateFunctionEventInvokeConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionEventInvokeConfig', 'Lambda', Promise.resolve(result), false, mock)
  },
  updateFunctionEventInvokeConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFunctionEventInvokeConfig', 'Lambda', Promise.reject(result), true, mock)
  },
}
