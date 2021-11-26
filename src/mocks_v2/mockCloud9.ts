
/**
* @description mocks_v2:mockCloud9.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCloud9 = {
  createEnvironmentEC2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentEC2', 'Cloud9', result, true, true, mock)
  },
  createEnvironmentEC2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentEC2', 'Cloud9', result, false, true, mock)
  },
  createEnvironmentEC2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentEC2', 'Cloud9', result, true, false, mock)
  },
  createEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentMembership', 'Cloud9', result, true, true, mock)
  },
  createEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentMembership', 'Cloud9', result, false, true, mock)
  },
  createEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEnvironmentMembership', 'Cloud9', result, true, false, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Cloud9', result, true, true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Cloud9', result, false, true, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironment', 'Cloud9', result, true, false, mock)
  },
  deleteEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironmentMembership', 'Cloud9', result, true, true, mock)
  },
  deleteEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironmentMembership', 'Cloud9', result, false, true, mock)
  },
  deleteEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEnvironmentMembership', 'Cloud9', result, true, false, mock)
  },
  describeEnvironmentMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentMemberships', 'Cloud9', result, true, true, mock)
  },
  describeEnvironmentMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentMemberships', 'Cloud9', result, false, true, mock)
  },
  describeEnvironmentMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentMemberships', 'Cloud9', result, true, false, mock)
  },
  describeEnvironmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentStatus', 'Cloud9', result, true, true, mock)
  },
  describeEnvironmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentStatus', 'Cloud9', result, false, true, mock)
  },
  describeEnvironmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironmentStatus', 'Cloud9', result, true, false, mock)
  },
  describeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironments', 'Cloud9', result, true, true, mock)
  },
  describeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironments', 'Cloud9', result, false, true, mock)
  },
  describeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEnvironments', 'Cloud9', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Cloud9', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Cloud9', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Cloud9', result, true, false, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Cloud9', result, true, true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Cloud9', result, false, true, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnvironments', 'Cloud9', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Cloud9', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Cloud9', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Cloud9', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Cloud9', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Cloud9', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Cloud9', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Cloud9', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Cloud9', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Cloud9', result, true, false, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Cloud9', result, true, true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Cloud9', result, false, true, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironment', 'Cloud9', result, true, false, mock)
  },
  updateEnvironmentMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironmentMembership', 'Cloud9', result, true, true, mock)
  },
  updateEnvironmentMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironmentMembership', 'Cloud9', result, false, true, mock)
  },
  updateEnvironmentMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnvironmentMembership', 'Cloud9', result, true, false, mock)
  },
}
