
/**
* @description mocks_v3:mockMigrationHubConfig module is mocks for AWS-SDK V3
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

  export const mockMigrationHubConfig = {
  createHomeRegionControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'createHomeRegionControl', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  createHomeRegionControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'createHomeRegionControl', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  createHomeRegionControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'createHomeRegionControl', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  describeHomeRegionControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'describeHomeRegionControls', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  describeHomeRegionControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'describeHomeRegionControls', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  describeHomeRegionControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'describeHomeRegionControls', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'destroy', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'destroy', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'destroy', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  getHomeRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'getHomeRegion', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  getHomeRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'getHomeRegion', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  getHomeRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'getHomeRegion', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'send', 'MigrationHubConfigClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'send', 'MigrationHubConfigClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migrationhub-config', 'send', 'MigrationHubConfigClient', Promise.reject(result), true, mock)
  }
}