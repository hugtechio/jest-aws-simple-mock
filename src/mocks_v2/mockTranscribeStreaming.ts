
/**
* @description mocks_v2:mockTranscribeStreaming.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockTranscribeStreaming = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', result, true, false, mock)
  },
  startMedicalStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', result, true, true, mock)
  },
  startMedicalStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', result, false, true, mock)
  },
  startMedicalStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', result, true, false, mock)
  },
  startStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', result, true, true, mock)
  },
  startStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', result, false, true, mock)
  },
  startStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', result, true, false, mock)
  },
}
