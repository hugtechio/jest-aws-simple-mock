
/**
* @description mocks_v3:mockPinpointSMSVoice module is mocks for AWS-SDK V3
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
export const mockPinpointSMSVoice = {
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSet', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  createConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  createConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  createConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSet', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  getConfigurationSetEventDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  getConfigurationSetEventDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  getConfigurationSetEventDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  listConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'listConfigurationSets', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  listConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'listConfigurationSets', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  listConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'listConfigurationSets', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  sendVoiceMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'sendVoiceMessage', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  sendVoiceMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'sendVoiceMessage', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  sendVoiceMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'sendVoiceMessage', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  updateConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'send', 'PinpointSMSVoiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'send', 'PinpointSMSVoiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pinpoint-sms-voice', 'send', 'PinpointSMSVoiceClient', Promise.reject(result), true, mock)
  }
}
