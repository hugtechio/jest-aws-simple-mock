
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockPinpoint = {
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createApp', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createApp', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createApp', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createCampaign', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createCampaign', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createCampaign', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createEmailTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createEmailTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createEmailTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createExportJob', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createExportJob', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createExportJob', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createImportJob', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createImportJob', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createImportJob', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createInAppTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createInAppTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createInAppTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createInAppTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createInAppTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createInAppTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createJourney: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createJourney', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createJourneyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createJourney', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createJourneyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createJourney', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createPushTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createPushTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createPushTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createPushTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createPushTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createPushTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createRecommenderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createRecommenderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createRecommenderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createRecommenderConfiguration', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSegment', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSegment', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSegment', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createSmsTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSmsTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createSmsTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSmsTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createSmsTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createSmsTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  createVoiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createVoiceTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  createVoiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createVoiceTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  createVoiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'createVoiceTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteAdmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteAdmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteAdmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteAdmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteAdmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteAdmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteApnsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteApnsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteApnsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteApnsSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteApnsSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteApnsSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteApnsVoipChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteApnsVoipChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteApnsVoipChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteApnsVoipSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteApnsVoipSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteApnsVoipSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApnsVoipSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApp', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApp', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteApp', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteBaiduChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteBaiduChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteBaiduChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteBaiduChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteBaiduChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteBaiduChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteCampaign', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteCampaign', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteCampaign', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteEmailChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteEmailChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteEmailChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEmailTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEndpoint', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEndpoint', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEndpoint', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEventStream', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEventStream', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteEventStream', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteGcmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteGcmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteGcmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteGcmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteGcmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteGcmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteInAppTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteInAppTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteInAppTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteInAppTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteInAppTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteInAppTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteJourney: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteJourney', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteJourneyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteJourney', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteJourneyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteJourney', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deletePushTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deletePushTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deletePushTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deletePushTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deletePushTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deletePushTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteRecommenderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteRecommenderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteRecommenderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteRecommenderConfiguration', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSegment', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSegment', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSegment', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteSmsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteSmsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteSmsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteSmsTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteSmsTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteSmsTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteSmsTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteUserEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteUserEndpoints', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteUserEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteUserEndpoints', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteUserEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteUserEndpoints', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteVoiceChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteVoiceChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteVoiceChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  deleteVoiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  deleteVoiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  deleteVoiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'deleteVoiceTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'destroy', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'destroy', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'destroy', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getAdmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getAdmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getAdmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getAdmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getAdmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getAdmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApnsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApnsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApnsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApnsSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApnsSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApnsSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApnsVoipChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApnsVoipChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApnsVoipChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApnsVoipSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApnsVoipSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApnsVoipSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApnsVoipSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApp', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApp', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApp', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApplicationDateRangeKpi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationDateRangeKpi', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApplicationDateRangeKpiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationDateRangeKpi', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApplicationDateRangeKpiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationDateRangeKpi', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApplicationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationSettings', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getApplicationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationSettings', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getApplicationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApplicationSettings', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApps', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApps', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getApps', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getBaiduChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getBaiduChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getBaiduChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getBaiduChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getBaiduChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getBaiduChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaign', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaign', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaign', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaignActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignActivities', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignActivities', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignActivities', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaignDateRangeKpi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignDateRangeKpi', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignDateRangeKpiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignDateRangeKpi', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignDateRangeKpiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignDateRangeKpi', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaignVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersion', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersion', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersion', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaignVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersions', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersions', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaignVersions', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaigns', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaigns', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getCampaigns', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getChannels', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getChannels', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getChannels', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getEmailChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getEmailChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getEmailChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEmailTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEndpoint', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEndpoint', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEndpoint', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEventStream', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEventStream', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getEventStream', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJob', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJob', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJob', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJobs', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJobs', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getExportJobs', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getGcmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getGcmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getGcmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getGcmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getGcmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getGcmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJob', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJob', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJob', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJobs', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJobs', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getImportJobs', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getInAppMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppMessages', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getInAppMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppMessages', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getInAppMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppMessages', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getInAppTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getInAppTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getInAppTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getInAppTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getJourney: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourney', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getJourneyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourney', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getJourneyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourney', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getJourneyDateRangeKpi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyDateRangeKpi', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getJourneyDateRangeKpiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyDateRangeKpi', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getJourneyDateRangeKpiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyDateRangeKpi', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getJourneyExecutionActivityMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionActivityMetrics', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getJourneyExecutionActivityMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionActivityMetrics', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getJourneyExecutionActivityMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionActivityMetrics', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getJourneyExecutionMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionMetrics', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getJourneyExecutionMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionMetrics', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getJourneyExecutionMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getJourneyExecutionMetrics', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getPushTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getPushTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getPushTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getPushTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getPushTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getPushTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getRecommenderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getRecommenderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getRecommenderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfiguration', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getRecommenderConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfigurations', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getRecommenderConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfigurations', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getRecommenderConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getRecommenderConfigurations', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegment', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegment', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegment', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegmentExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentExportJobs', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentExportJobs', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentExportJobs', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegmentImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentImportJobs', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentImportJobs', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentImportJobs', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegmentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersion', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersion', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersion', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegmentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersions', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersions', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegmentVersions', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSegments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegments', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSegmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegments', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSegmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSegments', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSmsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSmsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSmsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getSmsTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getSmsTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getSmsTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getSmsTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getUserEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getUserEndpoints', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getUserEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getUserEndpoints', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getUserEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getUserEndpoints', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getVoiceChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getVoiceChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getVoiceChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  getVoiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  getVoiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  getVoiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'getVoiceTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  listJourneys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listJourneys', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  listJourneysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listJourneys', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  listJourneysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listJourneys', 'Pinpoint', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTagsForResource', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTagsForResource', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTagsForResource', 'Pinpoint', Promise.reject(result), true, mock)
  },
  listTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplateVersions', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  listTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplateVersions', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  listTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplateVersions', 'Pinpoint', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplates', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplates', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'listTemplates', 'Pinpoint', Promise.reject(result), true, mock)
  },
  phoneNumberValidate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'phoneNumberValidate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  phoneNumberValidateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'phoneNumberValidate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  phoneNumberValidateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'phoneNumberValidate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  putEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEventStream', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  putEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEventStream', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  putEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEventStream', 'Pinpoint', Promise.reject(result), true, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEvents', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEvents', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'putEvents', 'Pinpoint', Promise.reject(result), true, mock)
  },
  removeAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'removeAttributes', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  removeAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'removeAttributes', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  removeAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'removeAttributes', 'Pinpoint', Promise.reject(result), true, mock)
  },
  sendMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendMessages', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  sendMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendMessages', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  sendMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendMessages', 'Pinpoint', Promise.reject(result), true, mock)
  },
  sendUsersMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendUsersMessages', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  sendUsersMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendUsersMessages', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  sendUsersMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'sendUsersMessages', 'Pinpoint', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'tagResource', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'tagResource', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'tagResource', 'Pinpoint', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'untagResource', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'untagResource', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'untagResource', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateAdmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateAdmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateAdmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateAdmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateAdmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateAdmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateApnsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateApnsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateApnsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateApnsSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateApnsSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateApnsSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateApnsVoipChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateApnsVoipChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateApnsVoipChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateApnsVoipSandboxChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateApnsVoipSandboxChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipSandboxChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateApnsVoipSandboxChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApnsVoipSandboxChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateApplicationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApplicationSettings', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateApplicationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApplicationSettings', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateApplicationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateApplicationSettings', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateBaiduChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateBaiduChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateBaiduChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateBaiduChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateBaiduChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateBaiduChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateCampaign', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateCampaign', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateCampaign', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateEmailChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateEmailChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateEmailChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateEmailTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateEmailTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateEmailTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEmailTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpoint', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpoint', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpoint', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateEndpointsBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpointsBatch', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateEndpointsBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpointsBatch', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateEndpointsBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateEndpointsBatch', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateGcmChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateGcmChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateGcmChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateGcmChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateGcmChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateGcmChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateInAppTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateInAppTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateInAppTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateInAppTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateInAppTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateInAppTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateJourney: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourney', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateJourneyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourney', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateJourneyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourney', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateJourneyState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourneyState', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateJourneyStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourneyState', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateJourneyStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateJourneyState', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updatePushTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updatePushTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updatePushTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updatePushTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updatePushTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updatePushTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateRecommenderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateRecommenderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateRecommenderConfiguration', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateRecommenderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateRecommenderConfiguration', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateSegment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSegment', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateSegmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSegment', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateSegmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSegment', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateSmsChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateSmsChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateSmsChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateSmsTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateSmsTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateSmsTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateSmsTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateTemplateActiveVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateTemplateActiveVersion', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateTemplateActiveVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateTemplateActiveVersion', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateTemplateActiveVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateTemplateActiveVersion', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateVoiceChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceChannel', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateVoiceChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceChannel', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateVoiceChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceChannel', 'Pinpoint', Promise.reject(result), true, mock)
  },
  updateVoiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceTemplate', 'Pinpoint', Promise.resolve(result), true, mock)
  },
  updateVoiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceTemplate', 'Pinpoint', Promise.resolve(result), false, mock)
  },
  updateVoiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'updateVoiceTemplate', 'Pinpoint', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'send', 'PinpointClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'send', 'PinpointClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint', 'send', 'PinpointClient', Promise.reject(result), true, mock)
  }
}