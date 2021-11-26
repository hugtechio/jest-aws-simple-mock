
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockIoTDataPlane = {
  deleteThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'deleteThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  deleteThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'deleteThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  deleteThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'deleteThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'destroy', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'destroy', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'destroy', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  getRetainedMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getRetainedMessage', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  getRetainedMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getRetainedMessage', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  getRetainedMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getRetainedMessage', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  getThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  getThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  getThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'getThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  listNamedShadowsForThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listNamedShadowsForThing', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  listNamedShadowsForThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listNamedShadowsForThing', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  listNamedShadowsForThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listNamedShadowsForThing', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  listRetainedMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listRetainedMessages', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  listRetainedMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listRetainedMessages', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  listRetainedMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'listRetainedMessages', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  publish: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'publish', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  publishAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'publish', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  publishThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'publish', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  updateThingShadow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'updateThingShadow', 'IoTDataPlane', Promise.resolve(result), true, mock)
  },
  updateThingShadowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'updateThingShadow', 'IoTDataPlane', Promise.resolve(result), false, mock)
  },
  updateThingShadowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'updateThingShadow', 'IoTDataPlane', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'send', 'IoTDataPlaneClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'send', 'IoTDataPlaneClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-data-plane', 'send', 'IoTDataPlaneClient', Promise.reject(result), true, mock)
  }
}