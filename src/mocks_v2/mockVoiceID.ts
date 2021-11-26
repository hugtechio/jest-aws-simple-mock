
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
  export const mockVoiceID = {
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', Promise.reject(result), true, mock)
  },
  evaluateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', Promise.resolve(result), true, mock)
  },
  evaluateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', Promise.resolve(result), false, mock)
  },
  evaluateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', Promise.reject(result), true, mock)
  },
  listFraudsterRegistrationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listFraudsterRegistrationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listFraudsterRegistrationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', Promise.reject(result), true, mock)
  },
  listSpeakerEnrollmentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listSpeakerEnrollmentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listSpeakerEnrollmentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', Promise.reject(result), true, mock)
  },
  listSpeakers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listSpeakersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listSpeakersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  optOutSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  optOutSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  optOutSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  startFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  startFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  startFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  startSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  startSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  startSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
}
