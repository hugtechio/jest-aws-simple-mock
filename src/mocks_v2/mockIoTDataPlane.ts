
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
  export const mockIoTDataPlane = {
  deleteThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  deleteThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  deleteThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  getRetainedMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRetainedMessage', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  getRetainedMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRetainedMessage', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  getRetainedMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRetainedMessage', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  getThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  getThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  getThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  listNamedShadowsForThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedShadowsForThing', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  listNamedShadowsForThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedShadowsForThing', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  listNamedShadowsForThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamedShadowsForThing', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  listRetainedMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetainedMessages', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  listRetainedMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetainedMessages', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  listRetainedMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRetainedMessages', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  publish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  publishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  publishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publish', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  updateThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  updateThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  updateThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
}
