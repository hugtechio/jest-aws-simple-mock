
/**
* @description mocks_v2:mockElasticInference.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockElasticInference = {
  describeAcceleratorOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorOfferings', 'ElasticInference', result, true, true, mock)
  },
  describeAcceleratorOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorOfferings', 'ElasticInference', result, false, true, mock)
  },
  describeAcceleratorOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorOfferings', 'ElasticInference', result, true, false, mock)
  },
  describeAcceleratorTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorTypes', 'ElasticInference', result, true, true, mock)
  },
  describeAcceleratorTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorTypes', 'ElasticInference', result, false, true, mock)
  },
  describeAcceleratorTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorTypes', 'ElasticInference', result, true, false, mock)
  },
  describeAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerators', 'ElasticInference', result, true, true, mock)
  },
  describeAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerators', 'ElasticInference', result, false, true, mock)
  },
  describeAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerators', 'ElasticInference', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticInference', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticInference', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticInference', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ElasticInference', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ElasticInference', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ElasticInference', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ElasticInference', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ElasticInference', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ElasticInference', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ElasticInference', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ElasticInference', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ElasticInference', result, true, false, mock)
  },
}
