
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
  export const mockMigrationHubConfig = {
  createHomeRegionControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  createHomeRegionControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  createHomeRegionControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHomeRegionControl', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  describeHomeRegionControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  describeHomeRegionControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  describeHomeRegionControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHomeRegionControls', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
  getHomeRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', Promise.resolve(result), true, mock)
  },
  getHomeRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', Promise.resolve(result), false, mock)
  },
  getHomeRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHomeRegion', 'MigrationHubConfig', Promise.reject(result), true, mock)
  },
}
