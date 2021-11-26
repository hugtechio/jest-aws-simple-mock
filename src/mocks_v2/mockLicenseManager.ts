
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
  export const mockLicenseManager = {
  acceptGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  acceptGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  acceptGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkInLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkInLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkInLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkoutBorrowLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkoutBorrowLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkoutBorrowLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkoutLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkoutLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkoutLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createGrantVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createGrantVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createGrantVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseConversionTaskForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseConversionTaskForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseConversionTaskForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', Promise.reject(result), true, mock)
  },
  extendLicenseConsumption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  extendLicenseConsumptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  extendLicenseConsumptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getAccessToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getAccessTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getAccessTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseConversionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseConversionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseConversionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listAssociationsForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listAssociationsForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listAssociationsForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listDistributedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listDistributedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listDistributedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listFailuresForLicenseConfigurationOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listFailuresForLicenseConfigurationOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listFailuresForLicenseConfigurationOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseConversionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseConversionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseConversionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseManagerReportGenerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseManagerReportGeneratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseManagerReportGeneratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listResourceInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listResourceInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listResourceInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listTokens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listTokensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listTokensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listUsageForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listUsageForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listUsageForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  rejectGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  rejectGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  rejectGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', Promise.reject(result), true, mock)
  },
}
