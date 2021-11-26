
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSSOOIDC = {
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'createToken', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'createToken', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'createToken', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'destroy', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'destroy', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'destroy', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  registerClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'registerClient', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  registerClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'registerClient', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  registerClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'registerClient', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  startDeviceAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'startDeviceAuthorization', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  startDeviceAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'startDeviceAuthorization', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  startDeviceAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'startDeviceAuthorization', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'send', 'SSOOIDCClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'send', 'SSOOIDCClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sso-oidc', 'send', 'SSOOIDCClient', Promise.reject(result), true, mock)
  }
}