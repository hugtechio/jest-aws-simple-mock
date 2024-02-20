
/**
* @description mocks_v3:mockLicenseManager module is mocks for AWS-SDK V3
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
export const mockLicenseManager = {
  acceptGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'acceptGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  acceptGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'acceptGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  acceptGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'acceptGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkInLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkInLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkInLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkInLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkInLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkInLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkoutBorrowLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutBorrowLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkoutBorrowLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutBorrowLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkoutBorrowLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutBorrowLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  checkoutLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  checkoutLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  checkoutLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'checkoutLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createGrantVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrantVersion', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createGrantVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrantVersion', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createGrantVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createGrantVersion', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseConversionTaskForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConversionTaskForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseConversionTaskForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConversionTaskForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseConversionTaskForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseConversionTaskForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createLicenseVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseVersion', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createLicenseVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseVersion', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createLicenseVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createLicenseVersion', 'LicenseManager', Promise.reject(result), true, mock)
  },
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'createToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  deleteToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  deleteTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  deleteTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'deleteToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  extendLicenseConsumption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'extendLicenseConsumption', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  extendLicenseConsumptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'extendLicenseConsumption', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  extendLicenseConsumptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'extendLicenseConsumption', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getAccessToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getAccessToken', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getAccessTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getAccessToken', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getAccessTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getAccessToken', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicense', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicense', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicense', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseConversionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConversionTask', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseConversionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConversionTask', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseConversionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseConversionTask', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getLicenseUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseUsage', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getLicenseUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseUsage', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getLicenseUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getLicenseUsage', 'LicenseManager', Promise.reject(result), true, mock)
  },
  getServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getServiceSettings', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  getServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getServiceSettings', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  getServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'getServiceSettings', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listAssociationsForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listAssociationsForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listAssociationsForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listAssociationsForLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listDistributedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listDistributedGrants', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listDistributedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listDistributedGrants', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listDistributedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listDistributedGrants', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listFailuresForLicenseConfigurationOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listFailuresForLicenseConfigurationOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listFailuresForLicenseConfigurationOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listFailuresForLicenseConfigurationOperations', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConfigurations', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConfigurations', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConfigurations', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseConversionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConversionTasks', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseConversionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConversionTasks', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseConversionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseConversionTasks', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseManagerReportGenerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseManagerReportGenerators', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseManagerReportGeneratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseManagerReportGenerators', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseManagerReportGeneratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseManagerReportGenerators', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseSpecificationsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenseVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseVersions', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicenseVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseVersions', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicenseVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenseVersions', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenses', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenses', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listLicenses', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrants', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrants', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrants', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedGrantsForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrantsForOrganization', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedGrantsForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrantsForOrganization', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedGrantsForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedGrantsForOrganization', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicenses', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicenses', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicenses', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listReceivedLicensesForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicensesForOrganization', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listReceivedLicensesForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicensesForOrganization', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listReceivedLicensesForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listReceivedLicensesForOrganization', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listResourceInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listResourceInventory', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listResourceInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listResourceInventory', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listResourceInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listResourceInventory', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTagsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTagsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTagsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listTokens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTokens', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listTokensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTokens', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listTokensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listTokens', 'LicenseManager', Promise.reject(result), true, mock)
  },
  listUsageForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listUsageForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  listUsageForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listUsageForLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  listUsageForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'listUsageForLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  rejectGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'rejectGrant', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  rejectGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'rejectGrant', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  rejectGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'rejectGrant', 'LicenseManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'tagResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'tagResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'tagResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'untagResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'untagResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'untagResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseConfiguration', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseConfiguration', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseConfiguration', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseManagerReportGenerator', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseManagerReportGenerator', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseSpecificationsForResource', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateLicenseSpecificationsForResource', 'LicenseManager', Promise.reject(result), true, mock)
  },
  updateServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateServiceSettings', 'LicenseManager', Promise.resolve(result), true, mock)
  },
  updateServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateServiceSettings', 'LicenseManager', Promise.resolve(result), false, mock)
  },
  updateServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'updateServiceSettings', 'LicenseManager', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'send', 'LicenseManagerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'send', 'LicenseManagerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager', 'send', 'LicenseManagerClient', Promise.reject(result), true, mock)
  }
}
