
/**
* @description mocks_v3:mockFinspaceData module is mocks for AWS-SDK V3
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

  export const mockFinspaceData = {
  createChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'destroy', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'destroy', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'destroy', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getProgrammaticAccessCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getProgrammaticAccessCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getProgrammaticAccessCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getWorkingLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getWorkingLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getWorkingLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.reject(result), true, mock)
  }
}