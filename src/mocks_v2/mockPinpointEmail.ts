
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
  export const mockPinpointEmail = {
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  createConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  createConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  createConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  createDedicatedIpPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDedicatedIpPool', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  createDedicatedIpPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDedicatedIpPool', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  createDedicatedIpPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDedicatedIpPool', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  createDeliverabilityTestReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliverabilityTestReport', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  createDeliverabilityTestReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliverabilityTestReport', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  createDeliverabilityTestReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeliverabilityTestReport', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  createEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEmailIdentity', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  createEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEmailIdentity', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  createEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEmailIdentity', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  deleteDedicatedIpPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDedicatedIpPool', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  deleteDedicatedIpPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDedicatedIpPool', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  deleteDedicatedIpPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDedicatedIpPool', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  deleteEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEmailIdentity', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  deleteEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEmailIdentity', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  deleteEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEmailIdentity', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccount', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getBlacklistReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlacklistReports', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getBlacklistReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlacklistReports', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getBlacklistReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlacklistReports', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSet', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSet', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSet', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getConfigurationSetEventDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getConfigurationSetEventDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getConfigurationSetEventDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDedicatedIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIp', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDedicatedIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIp', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDedicatedIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIp', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDedicatedIps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIps', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDedicatedIpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIps', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDedicatedIpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDedicatedIps', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDeliverabilityDashboardOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityDashboardOptions', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDeliverabilityDashboardOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityDashboardOptions', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDeliverabilityDashboardOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityDashboardOptions', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDeliverabilityTestReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityTestReport', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDeliverabilityTestReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityTestReport', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDeliverabilityTestReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeliverabilityTestReport', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDomainDeliverabilityCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainDeliverabilityCampaign', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDomainDeliverabilityCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainDeliverabilityCampaign', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDomainDeliverabilityCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainDeliverabilityCampaign', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getDomainStatisticsReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainStatisticsReport', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getDomainStatisticsReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainStatisticsReport', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getDomainStatisticsReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainStatisticsReport', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  getEmailIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEmailIdentity', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  getEmailIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEmailIdentity', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  getEmailIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEmailIdentity', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listDedicatedIpPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDedicatedIpPools', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listDedicatedIpPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDedicatedIpPools', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listDedicatedIpPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDedicatedIpPools', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listDeliverabilityTestReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliverabilityTestReports', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listDeliverabilityTestReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliverabilityTestReports', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listDeliverabilityTestReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeliverabilityTestReports', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listDomainDeliverabilityCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainDeliverabilityCampaigns', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listDomainDeliverabilityCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainDeliverabilityCampaigns', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listDomainDeliverabilityCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainDeliverabilityCampaigns', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listEmailIdentities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEmailIdentities', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listEmailIdentitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEmailIdentities', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listEmailIdentitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEmailIdentities', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putAccountDedicatedIpWarmupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putAccountDedicatedIpWarmupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putAccountDedicatedIpWarmupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putAccountSendingAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSendingAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putAccountSendingAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSendingAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putAccountSendingAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSendingAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putConfigurationSetDeliveryOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetDeliveryOptions', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putConfigurationSetDeliveryOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetDeliveryOptions', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putConfigurationSetDeliveryOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetDeliveryOptions', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putConfigurationSetReputationOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetReputationOptions', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putConfigurationSetReputationOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetReputationOptions', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putConfigurationSetReputationOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetReputationOptions', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putConfigurationSetSendingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetSendingOptions', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putConfigurationSetSendingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetSendingOptions', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putConfigurationSetSendingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetSendingOptions', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putConfigurationSetTrackingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetTrackingOptions', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putConfigurationSetTrackingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetTrackingOptions', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putConfigurationSetTrackingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationSetTrackingOptions', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putDedicatedIpInPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpInPool', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putDedicatedIpInPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpInPool', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putDedicatedIpInPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpInPool', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putDedicatedIpWarmupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putDedicatedIpWarmupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putDedicatedIpWarmupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDedicatedIpWarmupAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putDeliverabilityDashboardOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliverabilityDashboardOption', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putDeliverabilityDashboardOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliverabilityDashboardOption', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putDeliverabilityDashboardOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliverabilityDashboardOption', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putEmailIdentityDkimAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityDkimAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putEmailIdentityDkimAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityDkimAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putEmailIdentityDkimAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityDkimAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putEmailIdentityFeedbackAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityFeedbackAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putEmailIdentityFeedbackAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityFeedbackAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putEmailIdentityFeedbackAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityFeedbackAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  putEmailIdentityMailFromAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityMailFromAttributes', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  putEmailIdentityMailFromAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityMailFromAttributes', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  putEmailIdentityMailFromAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEmailIdentityMailFromAttributes', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  sendEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEmail', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  sendEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEmail', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  sendEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEmail', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'PinpointEmail', Promise.reject(result), true, mock)
  },
  updateConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointEmail', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointEmail', Promise.reject(result), true, mock)
  },
}
