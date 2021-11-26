
/**
* @description mocks_v2:mockLicenseManager.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockLicenseManager = {
  acceptGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', result, true, true, mock)
  },
  acceptGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', result, false, true, mock)
  },
  acceptGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptGrant', 'LicenseManager', result, true, false, mock)
  },
  checkInLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', result, true, true, mock)
  },
  checkInLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', result, false, true, mock)
  },
  checkInLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkInLicense', 'LicenseManager', result, true, false, mock)
  },
  checkoutBorrowLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', result, true, true, mock)
  },
  checkoutBorrowLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', result, false, true, mock)
  },
  checkoutBorrowLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutBorrowLicense', 'LicenseManager', result, true, false, mock)
  },
  checkoutLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', result, true, true, mock)
  },
  checkoutLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', result, false, true, mock)
  },
  checkoutLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkoutLicense', 'LicenseManager', result, true, false, mock)
  },
  createGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', result, true, true, mock)
  },
  createGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', result, false, true, mock)
  },
  createGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrant', 'LicenseManager', result, true, false, mock)
  },
  createGrantVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', result, true, true, mock)
  },
  createGrantVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', result, false, true, mock)
  },
  createGrantVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGrantVersion', 'LicenseManager', result, true, false, mock)
  },
  createLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', result, true, true, mock)
  },
  createLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', result, false, true, mock)
  },
  createLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicense', 'LicenseManager', result, true, false, mock)
  },
  createLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  createLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  createLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  createLicenseConversionTaskForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', result, true, true, mock)
  },
  createLicenseConversionTaskForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', result, false, true, mock)
  },
  createLicenseConversionTaskForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseConversionTaskForResource', 'LicenseManager', result, true, false, mock)
  },
  createLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', result, true, true, mock)
  },
  createLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', result, false, true, mock)
  },
  createLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseManagerReportGenerator', 'LicenseManager', result, true, false, mock)
  },
  createLicenseVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', result, true, true, mock)
  },
  createLicenseVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', result, false, true, mock)
  },
  createLicenseVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLicenseVersion', 'LicenseManager', result, true, false, mock)
  },
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', result, true, true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', result, false, true, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'LicenseManager', result, true, false, mock)
  },
  deleteGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', result, true, true, mock)
  },
  deleteGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', result, false, true, mock)
  },
  deleteGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGrant', 'LicenseManager', result, true, false, mock)
  },
  deleteLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', result, true, true, mock)
  },
  deleteLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', result, false, true, mock)
  },
  deleteLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicense', 'LicenseManager', result, true, false, mock)
  },
  deleteLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  deleteLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  deleteLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  deleteLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', result, true, true, mock)
  },
  deleteLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', result, false, true, mock)
  },
  deleteLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLicenseManagerReportGenerator', 'LicenseManager', result, true, false, mock)
  },
  deleteToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', result, true, true, mock)
  },
  deleteTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', result, false, true, mock)
  },
  deleteTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteToken', 'LicenseManager', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LicenseManager', result, true, false, mock)
  },
  extendLicenseConsumption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', result, true, true, mock)
  },
  extendLicenseConsumptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', result, false, true, mock)
  },
  extendLicenseConsumptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('extendLicenseConsumption', 'LicenseManager', result, true, false, mock)
  },
  getAccessToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', result, true, true, mock)
  },
  getAccessTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', result, false, true, mock)
  },
  getAccessTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessToken', 'LicenseManager', result, true, false, mock)
  },
  getGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', result, true, true, mock)
  },
  getGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', result, false, true, mock)
  },
  getGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGrant', 'LicenseManager', result, true, false, mock)
  },
  getLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', result, true, true, mock)
  },
  getLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', result, false, true, mock)
  },
  getLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicense', 'LicenseManager', result, true, false, mock)
  },
  getLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  getLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  getLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  getLicenseConversionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', result, true, true, mock)
  },
  getLicenseConversionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', result, false, true, mock)
  },
  getLicenseConversionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseConversionTask', 'LicenseManager', result, true, false, mock)
  },
  getLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', result, true, true, mock)
  },
  getLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', result, false, true, mock)
  },
  getLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseManagerReportGenerator', 'LicenseManager', result, true, false, mock)
  },
  getLicenseUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', result, true, true, mock)
  },
  getLicenseUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', result, false, true, mock)
  },
  getLicenseUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLicenseUsage', 'LicenseManager', result, true, false, mock)
  },
  getServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', result, true, true, mock)
  },
  getServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', result, false, true, mock)
  },
  getServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSettings', 'LicenseManager', result, true, false, mock)
  },
  listAssociationsForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  listAssociationsForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  listAssociationsForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationsForLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  listDistributedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', result, true, true, mock)
  },
  listDistributedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', result, false, true, mock)
  },
  listDistributedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDistributedGrants', 'LicenseManager', result, true, false, mock)
  },
  listFailuresForLicenseConfigurationOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', result, true, true, mock)
  },
  listFailuresForLicenseConfigurationOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', result, false, true, mock)
  },
  listFailuresForLicenseConfigurationOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFailuresForLicenseConfigurationOperations', 'LicenseManager', result, true, false, mock)
  },
  listLicenseConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', result, true, true, mock)
  },
  listLicenseConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', result, false, true, mock)
  },
  listLicenseConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConfigurations', 'LicenseManager', result, true, false, mock)
  },
  listLicenseConversionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', result, true, true, mock)
  },
  listLicenseConversionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', result, false, true, mock)
  },
  listLicenseConversionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseConversionTasks', 'LicenseManager', result, true, false, mock)
  },
  listLicenseManagerReportGenerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', result, true, true, mock)
  },
  listLicenseManagerReportGeneratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', result, false, true, mock)
  },
  listLicenseManagerReportGeneratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseManagerReportGenerators', 'LicenseManager', result, true, false, mock)
  },
  listLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', result, true, true, mock)
  },
  listLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', result, false, true, mock)
  },
  listLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseSpecificationsForResource', 'LicenseManager', result, true, false, mock)
  },
  listLicenseVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', result, true, true, mock)
  },
  listLicenseVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', result, false, true, mock)
  },
  listLicenseVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenseVersions', 'LicenseManager', result, true, false, mock)
  },
  listLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', result, true, true, mock)
  },
  listLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', result, false, true, mock)
  },
  listLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLicenses', 'LicenseManager', result, true, false, mock)
  },
  listReceivedGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', result, true, true, mock)
  },
  listReceivedGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', result, false, true, mock)
  },
  listReceivedGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedGrants', 'LicenseManager', result, true, false, mock)
  },
  listReceivedLicenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', result, true, true, mock)
  },
  listReceivedLicensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', result, false, true, mock)
  },
  listReceivedLicensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReceivedLicenses', 'LicenseManager', result, true, false, mock)
  },
  listResourceInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', result, true, true, mock)
  },
  listResourceInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', result, false, true, mock)
  },
  listResourceInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceInventory', 'LicenseManager', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LicenseManager', result, true, false, mock)
  },
  listTokens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', result, true, true, mock)
  },
  listTokensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', result, false, true, mock)
  },
  listTokensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTokens', 'LicenseManager', result, true, false, mock)
  },
  listUsageForLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  listUsageForLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  listUsageForLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsageForLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  rejectGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', result, true, true, mock)
  },
  rejectGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', result, false, true, mock)
  },
  rejectGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectGrant', 'LicenseManager', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LicenseManager', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LicenseManager', result, true, false, mock)
  },
  updateLicenseConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', result, true, true, mock)
  },
  updateLicenseConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', result, false, true, mock)
  },
  updateLicenseConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseConfiguration', 'LicenseManager', result, true, false, mock)
  },
  updateLicenseManagerReportGenerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', result, true, true, mock)
  },
  updateLicenseManagerReportGeneratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', result, false, true, mock)
  },
  updateLicenseManagerReportGeneratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseManagerReportGenerator', 'LicenseManager', result, true, false, mock)
  },
  updateLicenseSpecificationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', result, true, true, mock)
  },
  updateLicenseSpecificationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', result, false, true, mock)
  },
  updateLicenseSpecificationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLicenseSpecificationsForResource', 'LicenseManager', result, true, false, mock)
  },
  updateServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', result, true, true, mock)
  },
  updateServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', result, false, true, mock)
  },
  updateServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSettings', 'LicenseManager', result, true, false, mock)
  },
}
