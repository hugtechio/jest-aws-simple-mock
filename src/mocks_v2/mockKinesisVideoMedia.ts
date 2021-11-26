
/**
* @description mocks_v2:mockKinesisVideoMedia.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockKinesisVideoMedia = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoMedia', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoMedia', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoMedia', result, true, false, mock)
  },
  getMedia: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedia', 'KinesisVideoMedia', result, true, true, mock)
  },
  getMediaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedia', 'KinesisVideoMedia', result, false, true, mock)
  },
  getMediaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMedia', 'KinesisVideoMedia', result, true, false, mock)
  },
}
