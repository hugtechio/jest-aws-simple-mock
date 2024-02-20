
/**
* @description mocks_v3:mockEC2InstanceConnect module is mocks for AWS-SDK V3
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
export const mockEC2InstanceConnect = {
  sendSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), true, mock)
  },
  sendSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), false, mock)
  },
  sendSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSSHPublicKey', 'EC2InstanceConnect', Promise.reject(result), true, mock)
  },
  sendSerialConsoleSSHPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), true, mock)
  },
  sendSerialConsoleSSHPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.resolve(result), false, mock)
  },
  sendSerialConsoleSSHPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'sendSerialConsoleSSHPublicKey', 'EC2InstanceConnect', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'send', 'EC2InstanceConnectClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'send', 'EC2InstanceConnectClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ec2-instance-connect', 'send', 'EC2InstanceConnectClient', Promise.reject(result), true, mock)
  }
}
