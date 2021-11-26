
/**
* @description mocks_v2:mockMediaStoreData.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMediaStoreData = {
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', result, true, true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', result, false, true, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', result, true, false, mock)
  },
  describeObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', result, true, true, mock)
  },
  describeObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', result, false, true, mock)
  },
  describeObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', result, true, false, mock)
  },
  getObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', result, true, true, mock)
  },
  getObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', result, false, true, mock)
  },
  getObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', result, true, false, mock)
  },
  listItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', result, true, true, mock)
  },
  listItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', result, false, true, mock)
  },
  listItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', result, true, false, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', result, true, true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', result, false, true, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', result, true, false, mock)
  },
}
