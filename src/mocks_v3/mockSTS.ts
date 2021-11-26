
/**
* @description mocks_v3:mockSTS module is mocks for AWS-SDK V3
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

  export const mockSTS = {
  assumeRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRole', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRole', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRole', 'STS', Promise.reject(result), true, mock)
  },
  assumeRoleWithSAML: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithSAML', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleWithSAMLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithSAML', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleWithSAMLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithSAML', 'STS', Promise.reject(result), true, mock)
  },
  assumeRoleWithWebIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithWebIdentity', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleWithWebIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithWebIdentity', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleWithWebIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'assumeRoleWithWebIdentity', 'STS', Promise.reject(result), true, mock)
  },
  decodeAuthorizationMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'decodeAuthorizationMessage', 'STS', Promise.resolve(result), true, mock)
  },
  decodeAuthorizationMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'decodeAuthorizationMessage', 'STS', Promise.resolve(result), false, mock)
  },
  decodeAuthorizationMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'decodeAuthorizationMessage', 'STS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'destroy', 'STS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'destroy', 'STS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'destroy', 'STS', Promise.reject(result), true, mock)
  },
  getAccessKeyInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getAccessKeyInfo', 'STS', Promise.resolve(result), true, mock)
  },
  getAccessKeyInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getAccessKeyInfo', 'STS', Promise.resolve(result), false, mock)
  },
  getAccessKeyInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getAccessKeyInfo', 'STS', Promise.reject(result), true, mock)
  },
  getCallerIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getCallerIdentity', 'STS', Promise.resolve(result), true, mock)
  },
  getCallerIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getCallerIdentity', 'STS', Promise.resolve(result), false, mock)
  },
  getCallerIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getCallerIdentity', 'STS', Promise.reject(result), true, mock)
  },
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getFederationToken', 'STS', Promise.resolve(result), true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getFederationToken', 'STS', Promise.resolve(result), false, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getFederationToken', 'STS', Promise.reject(result), true, mock)
  },
  getSessionToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getSessionToken', 'STS', Promise.resolve(result), true, mock)
  },
  getSessionTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getSessionToken', 'STS', Promise.resolve(result), false, mock)
  },
  getSessionTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'getSessionToken', 'STS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'send', 'STSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'send', 'STSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sts', 'send', 'STSClient', Promise.reject(result), true, mock)
  }
}