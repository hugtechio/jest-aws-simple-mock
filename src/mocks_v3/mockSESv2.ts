
/**
* @description mocks_v3:mockSESv2 module is mocks for AWS-SDK V3
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
export const mockSESv2 = {
  batchGetMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'batchGetMetricData', 'SESv2', Promise.resolve(result), true, mock)
  },
  batchGetMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'batchGetMetricData', 'SESv2', Promise.resolve(result), false, mock)
  },
  batchGetMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'batchGetMetricData', 'SESv2', Promise.reject(result), true, mock)
  },
  cancelExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'cancelExportJob', 'SESv2', Promise.resolve(result), true, mock)
  },
  cancelExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'cancelExportJob', 'SESv2', Promise.resolve(result), false, mock)
  },
  cancelExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'cancelExportJob', 'SESv2', Promise.reject(result), true, mock)
  },
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSet', 'SESv2', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSet', 'SESv2', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSet', 'SESv2', Promise.reject(result), true, mock)
  },
  createConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  createConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  createConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createConfigurationSetEventDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  createContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContact', 'SESv2', Promise.resolve(result), true, mock)
  },
  createContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContact', 'SESv2', Promise.resolve(result), false, mock)
  },
  createContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContact', 'SESv2', Promise.reject(result), true, mock)
  },
  createContactList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContactList', 'SESv2', Promise.resolve(result), true, mock)
  },
  createContactListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContactList', 'SESv2', Promise.resolve(result), false, mock)
  },
  createContactListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createContactList', 'SESv2', Promise.reject(result), true, mock)
  },
  createCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  createCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  createCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createCustomVerificationEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  createDedicatedIpPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDedicatedIpPool', 'SESv2', Promise.resolve(result), true, mock)
  },
  createDedicatedIpPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDedicatedIpPool', 'SESv2', Promise.resolve(result), false, mock)
  },
  createDedicatedIpPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDedicatedIpPool', 'SESv2', Promise.reject(result), true, mock)
  },
  createDeliverabilityTestReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDeliverabilityTestReport', 'SESv2', Promise.resolve(result), true, mock)
  },
  createDeliverabilityTestReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDeliverabilityTestReport', 'SESv2', Promise.resolve(result), false, mock)
  },
  createDeliverabilityTestReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createDeliverabilityTestReport', 'SESv2', Promise.reject(result), true, mock)
  },
  createEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentity', 'SESv2', Promise.resolve(result), true, mock)
  },
  createEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentity', 'SESv2', Promise.resolve(result), false, mock)
  },
  createEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentity', 'SESv2', Promise.reject(result), true, mock)
  },
  createEmailIdentityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentityPolicy', 'SESv2', Promise.resolve(result), true, mock)
  },
  createEmailIdentityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentityPolicy', 'SESv2', Promise.resolve(result), false, mock)
  },
  createEmailIdentityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailIdentityPolicy', 'SESv2', Promise.reject(result), true, mock)
  },
  createEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  createEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  createEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  createExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createExportJob', 'SESv2', Promise.resolve(result), true, mock)
  },
  createExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createExportJob', 'SESv2', Promise.resolve(result), false, mock)
  },
  createExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createExportJob', 'SESv2', Promise.reject(result), true, mock)
  },
  createImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createImportJob', 'SESv2', Promise.resolve(result), true, mock)
  },
  createImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createImportJob', 'SESv2', Promise.resolve(result), false, mock)
  },
  createImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'createImportJob', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSet', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSet', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSet', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteConfigurationSetEventDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContact', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContact', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContact', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteContactList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContactList', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteContactListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContactList', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteContactListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteContactList', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteCustomVerificationEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteDedicatedIpPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteDedicatedIpPool', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteDedicatedIpPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteDedicatedIpPool', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteDedicatedIpPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteDedicatedIpPool', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentity', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentity', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentity', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteEmailIdentityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentityPolicy', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteEmailIdentityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentityPolicy', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteEmailIdentityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailIdentityPolicy', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  deleteSuppressedDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteSuppressedDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  deleteSuppressedDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteSuppressedDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  deleteSuppressedDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'deleteSuppressedDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  getAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getAccount', 'SESv2', Promise.resolve(result), true, mock)
  },
  getAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getAccount', 'SESv2', Promise.resolve(result), false, mock)
  },
  getAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getAccount', 'SESv2', Promise.reject(result), true, mock)
  },
  getBlacklistReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getBlacklistReports', 'SESv2', Promise.resolve(result), true, mock)
  },
  getBlacklistReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getBlacklistReports', 'SESv2', Promise.resolve(result), false, mock)
  },
  getBlacklistReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getBlacklistReports', 'SESv2', Promise.reject(result), true, mock)
  },
  getConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSet', 'SESv2', Promise.resolve(result), true, mock)
  },
  getConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSet', 'SESv2', Promise.resolve(result), false, mock)
  },
  getConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSet', 'SESv2', Promise.reject(result), true, mock)
  },
  getConfigurationSetEventDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSetEventDestinations', 'SESv2', Promise.resolve(result), true, mock)
  },
  getConfigurationSetEventDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSetEventDestinations', 'SESv2', Promise.resolve(result), false, mock)
  },
  getConfigurationSetEventDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getConfigurationSetEventDestinations', 'SESv2', Promise.reject(result), true, mock)
  },
  getContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContact', 'SESv2', Promise.resolve(result), true, mock)
  },
  getContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContact', 'SESv2', Promise.resolve(result), false, mock)
  },
  getContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContact', 'SESv2', Promise.reject(result), true, mock)
  },
  getContactList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContactList', 'SESv2', Promise.resolve(result), true, mock)
  },
  getContactListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContactList', 'SESv2', Promise.resolve(result), false, mock)
  },
  getContactListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getContactList', 'SESv2', Promise.reject(result), true, mock)
  },
  getCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  getCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  getCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getCustomVerificationEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  getDedicatedIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIp', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDedicatedIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIp', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDedicatedIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIp', 'SESv2', Promise.reject(result), true, mock)
  },
  getDedicatedIpPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIpPool', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDedicatedIpPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIpPool', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDedicatedIpPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIpPool', 'SESv2', Promise.reject(result), true, mock)
  },
  getDedicatedIps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIps', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDedicatedIpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIps', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDedicatedIpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDedicatedIps', 'SESv2', Promise.reject(result), true, mock)
  },
  getDeliverabilityDashboardOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityDashboardOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDeliverabilityDashboardOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityDashboardOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDeliverabilityDashboardOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityDashboardOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  getDeliverabilityTestReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityTestReport', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDeliverabilityTestReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityTestReport', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDeliverabilityTestReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDeliverabilityTestReport', 'SESv2', Promise.reject(result), true, mock)
  },
  getDomainDeliverabilityCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainDeliverabilityCampaign', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDomainDeliverabilityCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainDeliverabilityCampaign', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDomainDeliverabilityCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainDeliverabilityCampaign', 'SESv2', Promise.reject(result), true, mock)
  },
  getDomainStatisticsReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainStatisticsReport', 'SESv2', Promise.resolve(result), true, mock)
  },
  getDomainStatisticsReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainStatisticsReport', 'SESv2', Promise.resolve(result), false, mock)
  },
  getDomainStatisticsReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getDomainStatisticsReport', 'SESv2', Promise.reject(result), true, mock)
  },
  getEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentity', 'SESv2', Promise.resolve(result), true, mock)
  },
  getEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentity', 'SESv2', Promise.resolve(result), false, mock)
  },
  getEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentity', 'SESv2', Promise.reject(result), true, mock)
  },
  getEmailIdentityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentityPolicies', 'SESv2', Promise.resolve(result), true, mock)
  },
  getEmailIdentityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentityPolicies', 'SESv2', Promise.resolve(result), false, mock)
  },
  getEmailIdentityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailIdentityPolicies', 'SESv2', Promise.reject(result), true, mock)
  },
  getEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  getEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  getEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  getExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getExportJob', 'SESv2', Promise.resolve(result), true, mock)
  },
  getExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getExportJob', 'SESv2', Promise.resolve(result), false, mock)
  },
  getExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getExportJob', 'SESv2', Promise.reject(result), true, mock)
  },
  getImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getImportJob', 'SESv2', Promise.resolve(result), true, mock)
  },
  getImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getImportJob', 'SESv2', Promise.resolve(result), false, mock)
  },
  getImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getImportJob', 'SESv2', Promise.reject(result), true, mock)
  },
  getMessageInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getMessageInsights', 'SESv2', Promise.resolve(result), true, mock)
  },
  getMessageInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getMessageInsights', 'SESv2', Promise.resolve(result), false, mock)
  },
  getMessageInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getMessageInsights', 'SESv2', Promise.reject(result), true, mock)
  },
  getSuppressedDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getSuppressedDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  getSuppressedDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getSuppressedDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  getSuppressedDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'getSuppressedDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  listConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listConfigurationSets', 'SESv2', Promise.resolve(result), true, mock)
  },
  listConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listConfigurationSets', 'SESv2', Promise.resolve(result), false, mock)
  },
  listConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listConfigurationSets', 'SESv2', Promise.reject(result), true, mock)
  },
  listContactLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContactLists', 'SESv2', Promise.resolve(result), true, mock)
  },
  listContactListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContactLists', 'SESv2', Promise.resolve(result), false, mock)
  },
  listContactListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContactLists', 'SESv2', Promise.reject(result), true, mock)
  },
  listContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContacts', 'SESv2', Promise.resolve(result), true, mock)
  },
  listContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContacts', 'SESv2', Promise.resolve(result), false, mock)
  },
  listContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listContacts', 'SESv2', Promise.reject(result), true, mock)
  },
  listCustomVerificationEmailTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listCustomVerificationEmailTemplates', 'SESv2', Promise.resolve(result), true, mock)
  },
  listCustomVerificationEmailTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listCustomVerificationEmailTemplates', 'SESv2', Promise.resolve(result), false, mock)
  },
  listCustomVerificationEmailTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listCustomVerificationEmailTemplates', 'SESv2', Promise.reject(result), true, mock)
  },
  listDedicatedIpPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDedicatedIpPools', 'SESv2', Promise.resolve(result), true, mock)
  },
  listDedicatedIpPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDedicatedIpPools', 'SESv2', Promise.resolve(result), false, mock)
  },
  listDedicatedIpPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDedicatedIpPools', 'SESv2', Promise.reject(result), true, mock)
  },
  listDeliverabilityTestReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDeliverabilityTestReports', 'SESv2', Promise.resolve(result), true, mock)
  },
  listDeliverabilityTestReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDeliverabilityTestReports', 'SESv2', Promise.resolve(result), false, mock)
  },
  listDeliverabilityTestReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDeliverabilityTestReports', 'SESv2', Promise.reject(result), true, mock)
  },
  listDomainDeliverabilityCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDomainDeliverabilityCampaigns', 'SESv2', Promise.resolve(result), true, mock)
  },
  listDomainDeliverabilityCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDomainDeliverabilityCampaigns', 'SESv2', Promise.resolve(result), false, mock)
  },
  listDomainDeliverabilityCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listDomainDeliverabilityCampaigns', 'SESv2', Promise.reject(result), true, mock)
  },
  listEmailIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailIdentities', 'SESv2', Promise.resolve(result), true, mock)
  },
  listEmailIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailIdentities', 'SESv2', Promise.resolve(result), false, mock)
  },
  listEmailIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailIdentities', 'SESv2', Promise.reject(result), true, mock)
  },
  listEmailTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailTemplates', 'SESv2', Promise.resolve(result), true, mock)
  },
  listEmailTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailTemplates', 'SESv2', Promise.resolve(result), false, mock)
  },
  listEmailTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listEmailTemplates', 'SESv2', Promise.reject(result), true, mock)
  },
  listExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listExportJobs', 'SESv2', Promise.resolve(result), true, mock)
  },
  listExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listExportJobs', 'SESv2', Promise.resolve(result), false, mock)
  },
  listExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listExportJobs', 'SESv2', Promise.reject(result), true, mock)
  },
  listImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listImportJobs', 'SESv2', Promise.resolve(result), true, mock)
  },
  listImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listImportJobs', 'SESv2', Promise.resolve(result), false, mock)
  },
  listImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listImportJobs', 'SESv2', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listRecommendations', 'SESv2', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listRecommendations', 'SESv2', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listRecommendations', 'SESv2', Promise.reject(result), true, mock)
  },
  listSuppressedDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listSuppressedDestinations', 'SESv2', Promise.resolve(result), true, mock)
  },
  listSuppressedDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listSuppressedDestinations', 'SESv2', Promise.resolve(result), false, mock)
  },
  listSuppressedDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listSuppressedDestinations', 'SESv2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listTagsForResource', 'SESv2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listTagsForResource', 'SESv2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'listTagsForResource', 'SESv2', Promise.reject(result), true, mock)
  },
  putAccountDedicatedIpWarmupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDedicatedIpWarmupAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putAccountDedicatedIpWarmupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDedicatedIpWarmupAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putAccountDedicatedIpWarmupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDedicatedIpWarmupAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putAccountDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDetails', 'SESv2', Promise.resolve(result), true, mock)
  },
  putAccountDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDetails', 'SESv2', Promise.resolve(result), false, mock)
  },
  putAccountDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountDetails', 'SESv2', Promise.reject(result), true, mock)
  },
  putAccountSendingAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSendingAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putAccountSendingAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSendingAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putAccountSendingAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSendingAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putAccountSuppressionAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSuppressionAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putAccountSuppressionAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSuppressionAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putAccountSuppressionAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountSuppressionAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putAccountVdmAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountVdmAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putAccountVdmAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountVdmAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putAccountVdmAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putAccountVdmAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetDeliveryOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetDeliveryOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetDeliveryOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetDeliveryOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetDeliveryOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetDeliveryOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetReputationOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetReputationOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetReputationOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetReputationOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetReputationOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetReputationOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetSendingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSendingOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetSendingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSendingOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetSendingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSendingOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetSuppressionOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSuppressionOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetSuppressionOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSuppressionOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetSuppressionOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetSuppressionOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetTrackingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetTrackingOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetTrackingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetTrackingOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetTrackingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetTrackingOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putConfigurationSetVdmOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetVdmOptions', 'SESv2', Promise.resolve(result), true, mock)
  },
  putConfigurationSetVdmOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetVdmOptions', 'SESv2', Promise.resolve(result), false, mock)
  },
  putConfigurationSetVdmOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putConfigurationSetVdmOptions', 'SESv2', Promise.reject(result), true, mock)
  },
  putDedicatedIpInPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpInPool', 'SESv2', Promise.resolve(result), true, mock)
  },
  putDedicatedIpInPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpInPool', 'SESv2', Promise.resolve(result), false, mock)
  },
  putDedicatedIpInPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpInPool', 'SESv2', Promise.reject(result), true, mock)
  },
  putDedicatedIpPoolScalingAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpPoolScalingAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putDedicatedIpPoolScalingAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpPoolScalingAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putDedicatedIpPoolScalingAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpPoolScalingAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putDedicatedIpWarmupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpWarmupAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putDedicatedIpWarmupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpWarmupAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putDedicatedIpWarmupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDedicatedIpWarmupAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putDeliverabilityDashboardOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDeliverabilityDashboardOption', 'SESv2', Promise.resolve(result), true, mock)
  },
  putDeliverabilityDashboardOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDeliverabilityDashboardOption', 'SESv2', Promise.resolve(result), false, mock)
  },
  putDeliverabilityDashboardOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putDeliverabilityDashboardOption', 'SESv2', Promise.reject(result), true, mock)
  },
  putEmailIdentityConfigurationSetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityConfigurationSetAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putEmailIdentityConfigurationSetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityConfigurationSetAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putEmailIdentityConfigurationSetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityConfigurationSetAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putEmailIdentityDkimAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putEmailIdentityDkimAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putEmailIdentityDkimAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putEmailIdentityDkimSigningAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimSigningAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putEmailIdentityDkimSigningAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimSigningAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putEmailIdentityDkimSigningAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityDkimSigningAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putEmailIdentityFeedbackAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityFeedbackAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putEmailIdentityFeedbackAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityFeedbackAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putEmailIdentityFeedbackAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityFeedbackAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putEmailIdentityMailFromAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityMailFromAttributes', 'SESv2', Promise.resolve(result), true, mock)
  },
  putEmailIdentityMailFromAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityMailFromAttributes', 'SESv2', Promise.resolve(result), false, mock)
  },
  putEmailIdentityMailFromAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putEmailIdentityMailFromAttributes', 'SESv2', Promise.reject(result), true, mock)
  },
  putSuppressedDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putSuppressedDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  putSuppressedDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putSuppressedDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  putSuppressedDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'putSuppressedDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  sendBulkEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendBulkEmail', 'SESv2', Promise.resolve(result), true, mock)
  },
  sendBulkEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendBulkEmail', 'SESv2', Promise.resolve(result), false, mock)
  },
  sendBulkEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendBulkEmail', 'SESv2', Promise.reject(result), true, mock)
  },
  sendCustomVerificationEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendCustomVerificationEmail', 'SESv2', Promise.resolve(result), true, mock)
  },
  sendCustomVerificationEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendCustomVerificationEmail', 'SESv2', Promise.resolve(result), false, mock)
  },
  sendCustomVerificationEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendCustomVerificationEmail', 'SESv2', Promise.reject(result), true, mock)
  },
  sendEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendEmail', 'SESv2', Promise.resolve(result), true, mock)
  },
  sendEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendEmail', 'SESv2', Promise.resolve(result), false, mock)
  },
  sendEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'sendEmail', 'SESv2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'tagResource', 'SESv2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'tagResource', 'SESv2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'tagResource', 'SESv2', Promise.reject(result), true, mock)
  },
  testRenderEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'testRenderEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  testRenderEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'testRenderEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  testRenderEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'testRenderEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'untagResource', 'SESv2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'untagResource', 'SESv2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'untagResource', 'SESv2', Promise.reject(result), true, mock)
  },
  updateConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateConfigurationSetEventDestination', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateConfigurationSetEventDestination', 'SESv2', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContact', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContact', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContact', 'SESv2', Promise.reject(result), true, mock)
  },
  updateContactList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContactList', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateContactListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContactList', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateContactListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateContactList', 'SESv2', Promise.reject(result), true, mock)
  },
  updateCustomVerificationEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateCustomVerificationEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateCustomVerificationEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateCustomVerificationEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateCustomVerificationEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  updateEmailIdentityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailIdentityPolicy', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateEmailIdentityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailIdentityPolicy', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateEmailIdentityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailIdentityPolicy', 'SESv2', Promise.reject(result), true, mock)
  },
  updateEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailTemplate', 'SESv2', Promise.resolve(result), true, mock)
  },
  updateEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailTemplate', 'SESv2', Promise.resolve(result), false, mock)
  },
  updateEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'updateEmailTemplate', 'SESv2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'send', 'SESv2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'send', 'SESv2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sesv2', 'send', 'SESv2Client', Promise.reject(result), true, mock)
  }
}
