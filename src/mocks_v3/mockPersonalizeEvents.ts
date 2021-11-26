
/**
* @description mocks_v3:mockPersonalizeEvents module is mocks for AWS-SDK V3
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

  export const mockPersonalizeEvents = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'destroy', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'destroy', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'destroy', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putEvents', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putEvents', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putEvents', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putItems', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putItems', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putItems', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  putUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putUsers', 'PersonalizeEvents', Promise.resolve(result), true, mock)
  },
  putUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putUsers', 'PersonalizeEvents', Promise.resolve(result), false, mock)
  },
  putUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'putUsers', 'PersonalizeEvents', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'send', 'PersonalizeEventsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'send', 'PersonalizeEventsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize-events', 'send', 'PersonalizeEventsClient', Promise.reject(result), true, mock)
  }
}