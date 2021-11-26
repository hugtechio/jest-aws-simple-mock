
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockChimeSDKMeetings = {
  batchCreateAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  batchCreateAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  batchCreateAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchCreateAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  createMeetingWithAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  createMeetingWithAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  createMeetingWithAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMeetingWithAttendees', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  deleteAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  deleteAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  deleteAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  deleteMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  deleteMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  deleteMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  getAttendee: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttendee', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  getAttendeeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttendee', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  getAttendeeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttendee', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  getMeeting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMeeting', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  getMeetingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMeeting', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  getMeetingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMeeting', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  listAttendees: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttendees', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  listAttendeesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttendees', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  listAttendeesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttendees', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  startMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  startMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  startMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMeetingTranscription', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
  stopMeetingTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), true, mock)
  },
  stopMeetingTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMeetingTranscription', 'ChimeSDKMeetings', Promise.resolve(result), false, mock)
  },
  stopMeetingTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMeetingTranscription', 'ChimeSDKMeetings', Promise.reject(result), true, mock)
  },
}
