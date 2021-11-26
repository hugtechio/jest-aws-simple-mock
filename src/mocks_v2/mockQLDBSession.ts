
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
  export const mockQLDBSession = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDBSession', Promise.reject(result), true, mock)
  },
  sendCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', Promise.resolve(result), true, mock)
  },
  sendCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', Promise.resolve(result), false, mock)
  },
  sendCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'QLDBSession', Promise.reject(result), true, mock)
  },
}
