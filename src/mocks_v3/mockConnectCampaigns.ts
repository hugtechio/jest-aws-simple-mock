
/**
* @description mocks_v3:mockConnectCampaigns module is mocks for AWS-SDK V3
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
export const mockConnectCampaigns = {
  createCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'createCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  createCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'createCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  createCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'createCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  deleteCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  deleteCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  deleteCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  deleteConnectInstanceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteConnectInstanceConfig', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  deleteConnectInstanceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteConnectInstanceConfig', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  deleteConnectInstanceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteConnectInstanceConfig', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  deleteInstanceOnboardingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteInstanceOnboardingJob', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  deleteInstanceOnboardingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteInstanceOnboardingJob', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  deleteInstanceOnboardingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'deleteInstanceOnboardingJob', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  describeCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'describeCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  describeCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'describeCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  describeCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'describeCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  getCampaignStateBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignStateBatch', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  getCampaignStateBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignStateBatch', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  getCampaignStateBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignStateBatch', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  getCampaignState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignState', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  getCampaignStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignState', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  getCampaignStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getCampaignState', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  getConnectInstanceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getConnectInstanceConfig', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  getConnectInstanceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getConnectInstanceConfig', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  getConnectInstanceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getConnectInstanceConfig', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  getInstanceOnboardingJobStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getInstanceOnboardingJobStatus', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  getInstanceOnboardingJobStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getInstanceOnboardingJobStatus', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  getInstanceOnboardingJobStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'getInstanceOnboardingJobStatus', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  listCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listCampaigns', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  listCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listCampaigns', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  listCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listCampaigns', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listTagsForResource', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listTagsForResource', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'listTagsForResource', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  pauseCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'pauseCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  pauseCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'pauseCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  pauseCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'pauseCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  putDialRequestBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'putDialRequestBatch', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  putDialRequestBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'putDialRequestBatch', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  putDialRequestBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'putDialRequestBatch', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  resumeCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'resumeCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  resumeCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'resumeCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  resumeCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'resumeCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  startCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  startCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  startCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  startInstanceOnboardingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startInstanceOnboardingJob', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  startInstanceOnboardingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startInstanceOnboardingJob', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  startInstanceOnboardingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'startInstanceOnboardingJob', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  stopCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'stopCampaign', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  stopCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'stopCampaign', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  stopCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'stopCampaign', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'tagResource', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'tagResource', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'tagResource', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'untagResource', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'untagResource', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'untagResource', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  updateCampaignDialerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignDialerConfig', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  updateCampaignDialerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignDialerConfig', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  updateCampaignDialerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignDialerConfig', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  updateCampaignName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignName', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  updateCampaignNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignName', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  updateCampaignNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignName', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  updateCampaignOutboundCallConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignOutboundCallConfig', 'ConnectCampaigns', Promise.resolve(result), true, mock)
  },
  updateCampaignOutboundCallConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignOutboundCallConfig', 'ConnectCampaigns', Promise.resolve(result), false, mock)
  },
  updateCampaignOutboundCallConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'updateCampaignOutboundCallConfig', 'ConnectCampaigns', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'send', 'ConnectCampaignsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'send', 'ConnectCampaignsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcampaigns', 'send', 'ConnectCampaignsClient', Promise.reject(result), true, mock)
  }
}
