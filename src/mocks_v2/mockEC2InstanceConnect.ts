
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
  export const mockEC2InstanceConnect = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EC2InstanceConnect', Promise.reject(result), true, mock)
  },
  sendSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), true, mock)
  },
  sendSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), false, mock)
  },
  sendSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSSHPublicKey', 'EC2InstanceConnect', Promise.reject(result), true, mock)
  },
  sendSerialConsoleSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), true, mock)
  },
  sendSerialConsoleSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), false, mock)
  },
  sendSerialConsoleSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.reject(result), true, mock)
  },
}
