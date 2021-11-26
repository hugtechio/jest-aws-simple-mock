
/**
* @description mocks_v2:mockPersonalizeEvents.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockPersonalizeEvents = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'PersonalizeEvents', result, true, false, mock)
  },
  putEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', result, true, true, mock)
  },
  putEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', result, false, true, mock)
  },
  putEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvents', 'PersonalizeEvents', result, true, false, mock)
  },
  putItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', result, true, true, mock)
  },
  putItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', result, false, true, mock)
  },
  putItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putItems', 'PersonalizeEvents', result, true, false, mock)
  },
  putUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', result, true, true, mock)
  },
  putUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', result, false, true, mock)
  },
  putUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putUsers', 'PersonalizeEvents', result, true, false, mock)
  },
}
