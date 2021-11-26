
/**
* @description mocks_v2:mockMediaStore.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMediaStore = {
  createContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', result, true, true, mock)
  },
  createContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', result, false, true, mock)
  },
  createContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainer', 'MediaStore', result, true, false, mock)
  },
  deleteContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', result, true, true, mock)
  },
  deleteContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', result, false, true, mock)
  },
  deleteContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainer', 'MediaStore', result, true, false, mock)
  },
  deleteContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', result, true, true, mock)
  },
  deleteContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', result, false, true, mock)
  },
  deleteContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerPolicy', 'MediaStore', result, true, false, mock)
  },
  deleteCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', result, true, true, mock)
  },
  deleteCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', result, false, true, mock)
  },
  deleteCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCorsPolicy', 'MediaStore', result, true, false, mock)
  },
  deleteLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', result, true, true, mock)
  },
  deleteLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', result, false, true, mock)
  },
  deleteLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecyclePolicy', 'MediaStore', result, true, false, mock)
  },
  deleteMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', result, true, true, mock)
  },
  deleteMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', result, false, true, mock)
  },
  deleteMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMetricPolicy', 'MediaStore', result, true, false, mock)
  },
  describeContainer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', result, true, true, mock)
  },
  describeContainerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', result, false, true, mock)
  },
  describeContainerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainer', 'MediaStore', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStore', result, true, false, mock)
  },
  getContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', result, true, true, mock)
  },
  getContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', result, false, true, mock)
  },
  getContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerPolicy', 'MediaStore', result, true, false, mock)
  },
  getCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', result, true, true, mock)
  },
  getCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', result, false, true, mock)
  },
  getCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCorsPolicy', 'MediaStore', result, true, false, mock)
  },
  getLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', result, true, true, mock)
  },
  getLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', result, false, true, mock)
  },
  getLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLifecyclePolicy', 'MediaStore', result, true, false, mock)
  },
  getMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', result, true, true, mock)
  },
  getMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', result, false, true, mock)
  },
  getMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricPolicy', 'MediaStore', result, true, false, mock)
  },
  listContainers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', result, true, true, mock)
  },
  listContainersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', result, false, true, mock)
  },
  listContainersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainers', 'MediaStore', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaStore', result, true, false, mock)
  },
  putContainerPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', result, true, true, mock)
  },
  putContainerPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', result, false, true, mock)
  },
  putContainerPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putContainerPolicy', 'MediaStore', result, true, false, mock)
  },
  putCorsPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', result, true, true, mock)
  },
  putCorsPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', result, false, true, mock)
  },
  putCorsPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putCorsPolicy', 'MediaStore', result, true, false, mock)
  },
  putLifecyclePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', result, true, true, mock)
  },
  putLifecyclePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', result, false, true, mock)
  },
  putLifecyclePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecyclePolicy', 'MediaStore', result, true, false, mock)
  },
  putMetricPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', result, true, true, mock)
  },
  putMetricPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', result, false, true, mock)
  },
  putMetricPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetricPolicy', 'MediaStore', result, true, false, mock)
  },
  startAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', result, true, true, mock)
  },
  startAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', result, false, true, mock)
  },
  startAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAccessLogging', 'MediaStore', result, true, false, mock)
  },
  stopAccessLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', result, true, true, mock)
  },
  stopAccessLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', result, false, true, mock)
  },
  stopAccessLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAccessLogging', 'MediaStore', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaStore', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaStore', result, true, false, mock)
  },
}
