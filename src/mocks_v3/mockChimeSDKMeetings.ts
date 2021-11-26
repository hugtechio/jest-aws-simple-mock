
/**
* @description mocks_v3:mockChimeSDKMeetings module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockChimeSDKMeetings = {
  batchCreateAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'batchCreateAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  batchCreateAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'batchCreateAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  batchCreateAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'batchCreateAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createMeetingWithAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createMeetingWithAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createMeetingWithAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  deleteAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  deleteAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  deleteAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  deleteMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  deleteMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  deleteMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'deleteMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'destroy', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'destroy', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'destroy', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  getAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  getAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  getAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  getMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  getMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  getMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'getMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  listAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'listAttendees', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  listAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'listAttendees', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  listAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'listAttendees', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  startMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'startMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  startMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'startMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  startMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'startMeetingTranscription', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  stopMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'stopMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  stopMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'stopMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  stopMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'stopMeetingTranscription', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'send', 'ChimeSDKMeetingsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'send', 'ChimeSDKMeetingsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-meetings', 'send', 'ChimeSDKMeetingsClient', Promise.reject(result), true, mock)
  }
}