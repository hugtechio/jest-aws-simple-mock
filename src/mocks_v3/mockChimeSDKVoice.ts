
/**
* @description mocks_v3:mockChimeSDKVoice module is mocks for AWS-SDK V3
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
export const mockChimeSDKVoice = {
  associatePhoneNumbersWithVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  associatePhoneNumbersWithVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  associatePhoneNumbersWithVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'associatePhoneNumbersWithVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  batchDeletePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchDeletePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  batchDeletePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchDeletePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  batchDeletePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchDeletePhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  batchUpdatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchUpdatePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  batchUpdatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchUpdatePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  batchUpdatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'batchUpdatePhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createPhoneNumberOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createPhoneNumberOrder', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createPhoneNumberOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createPhoneNumberOrder', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createPhoneNumberOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createPhoneNumberOrder', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createProxySession', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createProxySession', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createProxySession', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createSipMediaApplicationCall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplicationCall', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createSipMediaApplicationCallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplicationCall', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createSipMediaApplicationCallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplicationCall', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipMediaApplication', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipRule', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipRule', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createSipRule', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createVoiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createVoiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createVoiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfile', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  createVoiceProfileDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  createVoiceProfileDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  createVoiceProfileDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'createVoiceProfileDomain', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deletePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deletePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deletePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deletePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deletePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deletePhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteProxySession', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteProxySession', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteProxySession', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipMediaApplication', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipRule', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipRule', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteSipRule', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorProxy', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTermination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfile', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  deleteVoiceProfileDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  deleteVoiceProfileDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  deleteVoiceProfileDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'deleteVoiceProfileDomain', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumbersFromVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'disassociatePhoneNumbersFromVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getGlobalSettings', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getGlobalSettings', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getGlobalSettings', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getPhoneNumberOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberOrder', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getPhoneNumberOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberOrder', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getPhoneNumberOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberOrder', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getPhoneNumberSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberSettings', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getPhoneNumberSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberSettings', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getPhoneNumberSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getPhoneNumberSettings', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getProxySession', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getProxySession', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getProxySession', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getSipMediaApplicationAlexaSkillConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getSipMediaApplicationAlexaSkillConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getSipMediaApplicationAlexaSkillConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplication', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getSipMediaApplicationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getSipMediaApplicationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getSipMediaApplicationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipRule', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipRule', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSipRule', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getSpeakerSearchTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorProxy', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTermination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceConnectorTerminationHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTerminationHealth', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceConnectorTerminationHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTerminationHealth', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceConnectorTerminationHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceConnectorTerminationHealth', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfile', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceProfileDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceProfileDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceProfileDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceProfileDomain', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  getVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  getVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  getVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'getVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listAvailableVoiceConnectorRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listAvailableVoiceConnectorRegions', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listAvailableVoiceConnectorRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listAvailableVoiceConnectorRegions', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listAvailableVoiceConnectorRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listAvailableVoiceConnectorRegions', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listPhoneNumberOrders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumberOrders', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listPhoneNumberOrdersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumberOrders', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listPhoneNumberOrdersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumberOrders', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumbers', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumbers', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listPhoneNumbers', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listProxySessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listProxySessions', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listProxySessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listProxySessions', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listProxySessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listProxySessions', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listSipMediaApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipMediaApplications', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listSipMediaApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipMediaApplications', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listSipMediaApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipMediaApplications', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listSipRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipRules', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listSipRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipRules', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listSipRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSipRules', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listSupportedPhoneNumberCountries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSupportedPhoneNumberCountries', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listSupportedPhoneNumberCountriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSupportedPhoneNumberCountries', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listSupportedPhoneNumberCountriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listSupportedPhoneNumberCountries', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listTagsForResource', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listTagsForResource', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listTagsForResource', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listVoiceConnectorGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorGroups', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorGroups', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorGroups', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listVoiceConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectors', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listVoiceConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectors', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listVoiceConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceConnectors', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listVoiceProfileDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfileDomains', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listVoiceProfileDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfileDomains', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listVoiceProfileDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfileDomains', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  listVoiceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfiles', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  listVoiceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfiles', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  listVoiceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'listVoiceProfiles', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putSipMediaApplicationAlexaSkillConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putSipMediaApplicationAlexaSkillConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putSipMediaApplicationAlexaSkillConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationAlexaSkillConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putSipMediaApplicationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putSipMediaApplicationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putSipMediaApplicationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putSipMediaApplicationLoggingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorEmergencyCallingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorEmergencyCallingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorEmergencyCallingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorEmergencyCallingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorLoggingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorOrigination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorOriginationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorOriginationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorOrigination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorProxy', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorProxy', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorStreamingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorStreamingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorStreamingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorStreamingConfiguration', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTermination', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTermination', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  putVoiceConnectorTerminationCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  putVoiceConnectorTerminationCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  putVoiceConnectorTerminationCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'putVoiceConnectorTerminationCredentials', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  restorePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'restorePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  restorePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'restorePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  restorePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'restorePhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  searchAvailablePhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'searchAvailablePhoneNumbers', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  searchAvailablePhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'searchAvailablePhoneNumbers', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  searchAvailablePhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'searchAvailablePhoneNumbers', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  startSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  startSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  startSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startSpeakerSearchTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  startVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  startVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  startVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'startVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  stopSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  stopSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopSpeakerSearchTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  stopSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopSpeakerSearchTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  stopVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  stopVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  stopVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'stopVoiceToneAnalysisTask', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'tagResource', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'tagResource', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'tagResource', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'untagResource', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'untagResource', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'untagResource', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateGlobalSettings', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateGlobalSettings', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateGlobalSettings', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumber', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumber', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updatePhoneNumberSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumberSettings', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumberSettings', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updatePhoneNumberSettings', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateProxySession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateProxySession', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateProxySessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateProxySession', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateProxySessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateProxySession', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateSipMediaApplicationCall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplicationCall', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateSipMediaApplicationCallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplicationCall', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateSipMediaApplicationCallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplicationCall', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateSipMediaApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateSipMediaApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplication', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateSipMediaApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipMediaApplication', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateSipRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipRule', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateSipRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipRule', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateSipRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateSipRule', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateVoiceConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateVoiceConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnector', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateVoiceConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnector', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateVoiceConnectorGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateVoiceConnectorGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnectorGroup', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateVoiceConnectorGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceConnectorGroup', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateVoiceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateVoiceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfile', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateVoiceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfile', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  updateVoiceProfileDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  updateVoiceProfileDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfileDomain', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  updateVoiceProfileDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'updateVoiceProfileDomain', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  validateE911Address: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'validateE911Address', 'ChimeSDKVoice', Promise.resolve(result), true, mock)
  },
  validateE911AddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'validateE911Address', 'ChimeSDKVoice', Promise.resolve(result), false, mock)
  },
  validateE911AddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'validateE911Address', 'ChimeSDKVoice', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'send', 'ChimeSDKVoiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'send', 'ChimeSDKVoiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-voice', 'send', 'ChimeSDKVoiceClient', Promise.reject(result), true, mock)
  }
}
