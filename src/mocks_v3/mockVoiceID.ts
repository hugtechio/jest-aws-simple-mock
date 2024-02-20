
/**
* @description mocks_v3:mockVoiceID module is mocks for AWS-SDK V3
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
export const mockVoiceID = {
  associateFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'associateFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  associateFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'associateFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  associateFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'associateFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  createWatchlist: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createWatchlist', 'VoiceID', Promise.resolve(result), true, mock)
  },
  createWatchlistAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createWatchlist', 'VoiceID', Promise.resolve(result), false, mock)
  },
  createWatchlistThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'createWatchlist', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  deleteWatchlist: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteWatchlist', 'VoiceID', Promise.resolve(result), true, mock)
  },
  deleteWatchlistAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteWatchlist', 'VoiceID', Promise.resolve(result), false, mock)
  },
  deleteWatchlistThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'deleteWatchlist', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeFraudsterRegistrationJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeSpeakerEnrollmentJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  describeWatchlist: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeWatchlist', 'VoiceID', Promise.resolve(result), true, mock)
  },
  describeWatchlistAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeWatchlist', 'VoiceID', Promise.resolve(result), false, mock)
  },
  describeWatchlistThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'describeWatchlist', 'VoiceID', Promise.reject(result), true, mock)
  },
  disassociateFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'disassociateFraudster', 'VoiceID', Promise.resolve(result), true, mock)
  },
  disassociateFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'disassociateFraudster', 'VoiceID', Promise.resolve(result), false, mock)
  },
  disassociateFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'disassociateFraudster', 'VoiceID', Promise.reject(result), true, mock)
  },
  evaluateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'evaluateSession', 'VoiceID', Promise.resolve(result), true, mock)
  },
  evaluateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'evaluateSession', 'VoiceID', Promise.resolve(result), false, mock)
  },
  evaluateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'evaluateSession', 'VoiceID', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listDomains', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listDomains', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listDomains', 'VoiceID', Promise.reject(result), true, mock)
  },
  listFraudsterRegistrationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsterRegistrationJobs', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listFraudsterRegistrationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsterRegistrationJobs', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listFraudsterRegistrationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsterRegistrationJobs', 'VoiceID', Promise.reject(result), true, mock)
  },
  listFraudsters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsters', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listFraudstersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsters', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listFraudstersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listFraudsters', 'VoiceID', Promise.reject(result), true, mock)
  },
  listSpeakerEnrollmentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakerEnrollmentJobs', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listSpeakerEnrollmentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakerEnrollmentJobs', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listSpeakerEnrollmentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakerEnrollmentJobs', 'VoiceID', Promise.reject(result), true, mock)
  },
  listSpeakers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakers', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listSpeakersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakers', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listSpeakersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listSpeakers', 'VoiceID', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listTagsForResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listTagsForResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listTagsForResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  listWatchlists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listWatchlists', 'VoiceID', Promise.resolve(result), true, mock)
  },
  listWatchlistsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listWatchlists', 'VoiceID', Promise.resolve(result), false, mock)
  },
  listWatchlistsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'listWatchlists', 'VoiceID', Promise.reject(result), true, mock)
  },
  optOutSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'optOutSpeaker', 'VoiceID', Promise.resolve(result), true, mock)
  },
  optOutSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'optOutSpeaker', 'VoiceID', Promise.resolve(result), false, mock)
  },
  optOutSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'optOutSpeaker', 'VoiceID', Promise.reject(result), true, mock)
  },
  startFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  startFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startFraudsterRegistrationJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  startFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startFraudsterRegistrationJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  startSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), true, mock)
  },
  startSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startSpeakerEnrollmentJob', 'VoiceID', Promise.resolve(result), false, mock)
  },
  startSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'startSpeakerEnrollmentJob', 'VoiceID', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'tagResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'tagResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'tagResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'untagResource', 'VoiceID', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'untagResource', 'VoiceID', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'untagResource', 'VoiceID', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateDomain', 'VoiceID', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateDomain', 'VoiceID', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateDomain', 'VoiceID', Promise.reject(result), true, mock)
  },
  updateWatchlist: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateWatchlist', 'VoiceID', Promise.resolve(result), true, mock)
  },
  updateWatchlistAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateWatchlist', 'VoiceID', Promise.resolve(result), false, mock)
  },
  updateWatchlistThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'updateWatchlist', 'VoiceID', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'send', 'VoiceIDClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'send', 'VoiceIDClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-voice-id', 'send', 'VoiceIDClient', Promise.reject(result), true, mock)
  }
}
