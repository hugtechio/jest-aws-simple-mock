
/**
* @description mocks_v2:mockCloudSearchDomain.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCloudSearchDomain = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudSearchDomain', result, true, false, mock)
  },
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', result, true, true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', result, false, true, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('search', 'CloudSearchDomain', result, true, false, mock)
  },
  suggest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', result, true, true, mock)
  },
  suggestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', result, false, true, mock)
  },
  suggestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suggest', 'CloudSearchDomain', result, true, false, mock)
  },
  uploadDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', result, true, true, mock)
  },
  uploadDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', result, false, true, mock)
  },
  uploadDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadDocuments', 'CloudSearchDomain', result, true, false, mock)
  },
}
