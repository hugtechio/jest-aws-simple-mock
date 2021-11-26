
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
  export const mockCloudSearchDomain = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  suggest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  suggestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  suggestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  uploadDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  uploadDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  uploadDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
}
