
/**
* @description mocks_v3:mockCloud9 module is mocks for AWS-SDK V3
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

  export const mockCloud9 = {
  createEnvironmentEC2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentEC2', 'Cloud9', Promise.resolve(result), true, mock)
  },
  createEnvironmentEC2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentEC2', 'Cloud9', Promise.resolve(result), false, mock)
  },
  createEnvironmentEC2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentEC2', 'Cloud9', Promise.reject(result), true, mock)
  },
  createEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentMembership', 'Cloud9', Promise.resolve(result), true, mock)
  },
  createEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentMembership', 'Cloud9', Promise.resolve(result), false, mock)
  },
  createEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'createEnvironmentMembership', 'Cloud9', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironment', 'Cloud9', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironment', 'Cloud9', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironment', 'Cloud9', Promise.reject(result), true, mock)
  },
  deleteEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironmentMembership', 'Cloud9', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironmentMembership', 'Cloud9', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'deleteEnvironmentMembership', 'Cloud9', Promise.reject(result), true, mock)
  },
  describeEnvironmentMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentMemberships', 'Cloud9', Promise.resolve(result), true, mock)
  },
  describeEnvironmentMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentMemberships', 'Cloud9', Promise.resolve(result), false, mock)
  },
  describeEnvironmentMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentMemberships', 'Cloud9', Promise.reject(result), true, mock)
  },
  describeEnvironmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentStatus', 'Cloud9', Promise.resolve(result), true, mock)
  },
  describeEnvironmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentStatus', 'Cloud9', Promise.resolve(result), false, mock)
  },
  describeEnvironmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironmentStatus', 'Cloud9', Promise.reject(result), true, mock)
  },
  describeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironments', 'Cloud9', Promise.resolve(result), true, mock)
  },
  describeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironments', 'Cloud9', Promise.resolve(result), false, mock)
  },
  describeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'describeEnvironments', 'Cloud9', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'destroy', 'Cloud9', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'destroy', 'Cloud9', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'destroy', 'Cloud9', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listEnvironments', 'Cloud9', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listEnvironments', 'Cloud9', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listEnvironments', 'Cloud9', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listTagsForResource', 'Cloud9', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listTagsForResource', 'Cloud9', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'listTagsForResource', 'Cloud9', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'tagResource', 'Cloud9', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'tagResource', 'Cloud9', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'tagResource', 'Cloud9', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'untagResource', 'Cloud9', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'untagResource', 'Cloud9', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'untagResource', 'Cloud9', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironment', 'Cloud9', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironment', 'Cloud9', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironment', 'Cloud9', Promise.reject(result), true, mock)
  },
  updateEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironmentMembership', 'Cloud9', Promise.resolve(result), true, mock)
  },
  updateEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironmentMembership', 'Cloud9', Promise.resolve(result), false, mock)
  },
  updateEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'updateEnvironmentMembership', 'Cloud9', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'send', 'Cloud9Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'send', 'Cloud9Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloud9', 'send', 'Cloud9Client', Promise.reject(result), true, mock)
  }
}