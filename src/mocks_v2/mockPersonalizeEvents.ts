
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
  export const mockPersonalizeEvents = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
}
