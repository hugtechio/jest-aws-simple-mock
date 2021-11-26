
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
  export const mockFinspaceData = {
  createChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChangeset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getProgrammaticAccessCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getProgrammaticAccessCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getProgrammaticAccessCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProgrammaticAccessCredentials', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getWorkingLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getWorkingLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getWorkingLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorkingLocation', 'FinspaceData', Promise.reject(result), true, mock)
  },
}
