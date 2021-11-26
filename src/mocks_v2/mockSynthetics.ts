
/**
* @description mocks_v2:mockSynthetics.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSynthetics = {
  createCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', result, true, true, mock)
  },
  createCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', result, false, true, mock)
  },
  createCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCanary', 'Synthetics', result, true, false, mock)
  },
  deleteCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', result, true, true, mock)
  },
  deleteCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', result, false, true, mock)
  },
  deleteCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCanary', 'Synthetics', result, true, false, mock)
  },
  describeCanaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', result, true, true, mock)
  },
  describeCanariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', result, false, true, mock)
  },
  describeCanariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanaries', 'Synthetics', result, true, false, mock)
  },
  describeCanariesLastRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', result, true, true, mock)
  },
  describeCanariesLastRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', result, false, true, mock)
  },
  describeCanariesLastRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCanariesLastRun', 'Synthetics', result, true, false, mock)
  },
  describeRuntimeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', result, true, true, mock)
  },
  describeRuntimeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', result, false, true, mock)
  },
  describeRuntimeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeVersions', 'Synthetics', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Synthetics', result, true, false, mock)
  },
  getCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', result, true, true, mock)
  },
  getCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', result, false, true, mock)
  },
  getCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanary', 'Synthetics', result, true, false, mock)
  },
  getCanaryRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', result, true, true, mock)
  },
  getCanaryRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', result, false, true, mock)
  },
  getCanaryRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCanaryRuns', 'Synthetics', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Synthetics', result, true, false, mock)
  },
  startCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', result, true, true, mock)
  },
  startCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', result, false, true, mock)
  },
  startCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCanary', 'Synthetics', result, true, false, mock)
  },
  stopCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', result, true, true, mock)
  },
  stopCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', result, false, true, mock)
  },
  stopCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopCanary', 'Synthetics', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Synthetics', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Synthetics', result, true, false, mock)
  },
  updateCanary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', result, true, true, mock)
  },
  updateCanaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', result, false, true, mock)
  },
  updateCanaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCanary', 'Synthetics', result, true, false, mock)
  },
}
