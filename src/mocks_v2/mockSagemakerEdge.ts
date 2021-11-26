
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
  export const mockSagemakerEdge = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
  getDeviceRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  getDeviceRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  getDeviceRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceRegistration', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
  sendHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  sendHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  sendHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendHeartbeat', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
}
