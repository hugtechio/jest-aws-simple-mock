
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
  export const mockPinpointSMSVoice = {
  createConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  createConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  createConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSet', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  createConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  createConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  createConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  deleteConfigurationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSet', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  deleteConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  deleteConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  deleteConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  getConfigurationSetEventDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  getConfigurationSetEventDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  getConfigurationSetEventDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfigurationSetEventDestinations', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  listConfigurationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  listConfigurationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  listConfigurationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationSets', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  sendVoiceMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendVoiceMessage', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  sendVoiceMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendVoiceMessage', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  sendVoiceMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendVoiceMessage', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
  updateConfigurationSetEventDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), true, mock)
  },
  updateConfigurationSetEventDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.resolve(result), false, mock)
  },
  updateConfigurationSetEventDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfigurationSetEventDestination', 'PinpointSMSVoice', Promise.reject(result), true, mock)
  },
}
