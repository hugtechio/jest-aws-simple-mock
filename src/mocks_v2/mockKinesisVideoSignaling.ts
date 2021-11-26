
/**
* @description mocks_v2:mockKinesisVideoSignaling.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockKinesisVideoSignaling = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', result, true, false, mock)
  },
  getIceServerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', result, true, true, mock)
  },
  getIceServerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', result, false, true, mock)
  },
  getIceServerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', result, true, false, mock)
  },
  sendAlexaOfferToMaster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', result, true, true, mock)
  },
  sendAlexaOfferToMasterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', result, false, true, mock)
  },
  sendAlexaOfferToMasterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', result, true, false, mock)
  },
}
