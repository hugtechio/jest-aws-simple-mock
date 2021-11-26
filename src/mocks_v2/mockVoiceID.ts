
/**
* @description mocks_v2:mockVoiceID.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockVoiceID = {
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', result, true, true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', result, false, true, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'VoiceID', result, true, false, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', result, true, true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', result, false, true, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'VoiceID', result, true, false, mock)
  },
  deleteFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', result, true, true, mock)
  },
  deleteFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', result, false, true, mock)
  },
  deleteFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFraudster', 'VoiceID', result, true, false, mock)
  },
  deleteSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', result, true, true, mock)
  },
  deleteSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', result, false, true, mock)
  },
  deleteSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSpeaker', 'VoiceID', result, true, false, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', result, true, true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', result, false, true, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'VoiceID', result, true, false, mock)
  },
  describeFraudster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', result, true, true, mock)
  },
  describeFraudsterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', result, false, true, mock)
  },
  describeFraudsterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudster', 'VoiceID', result, true, false, mock)
  },
  describeFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', result, true, true, mock)
  },
  describeFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', result, false, true, mock)
  },
  describeFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFraudsterRegistrationJob', 'VoiceID', result, true, false, mock)
  },
  describeSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', result, true, true, mock)
  },
  describeSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', result, false, true, mock)
  },
  describeSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeaker', 'VoiceID', result, true, false, mock)
  },
  describeSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', result, true, true, mock)
  },
  describeSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', result, false, true, mock)
  },
  describeSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSpeakerEnrollmentJob', 'VoiceID', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'VoiceID', result, true, false, mock)
  },
  evaluateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', result, true, true, mock)
  },
  evaluateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', result, false, true, mock)
  },
  evaluateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('evaluateSession', 'VoiceID', result, true, false, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', result, true, true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', result, false, true, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'VoiceID', result, true, false, mock)
  },
  listFraudsterRegistrationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', result, true, true, mock)
  },
  listFraudsterRegistrationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', result, false, true, mock)
  },
  listFraudsterRegistrationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFraudsterRegistrationJobs', 'VoiceID', result, true, false, mock)
  },
  listSpeakerEnrollmentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', result, true, true, mock)
  },
  listSpeakerEnrollmentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', result, false, true, mock)
  },
  listSpeakerEnrollmentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakerEnrollmentJobs', 'VoiceID', result, true, false, mock)
  },
  listSpeakers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', result, true, true, mock)
  },
  listSpeakersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', result, false, true, mock)
  },
  listSpeakersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeakers', 'VoiceID', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'VoiceID', result, true, false, mock)
  },
  optOutSpeaker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', result, true, true, mock)
  },
  optOutSpeakerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', result, false, true, mock)
  },
  optOutSpeakerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('optOutSpeaker', 'VoiceID', result, true, false, mock)
  },
  startFraudsterRegistrationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', result, true, true, mock)
  },
  startFraudsterRegistrationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', result, false, true, mock)
  },
  startFraudsterRegistrationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFraudsterRegistrationJob', 'VoiceID', result, true, false, mock)
  },
  startSpeakerEnrollmentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', result, true, true, mock)
  },
  startSpeakerEnrollmentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', result, false, true, mock)
  },
  startSpeakerEnrollmentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeakerEnrollmentJob', 'VoiceID', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'VoiceID', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'VoiceID', result, true, false, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', result, true, true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', result, false, true, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'VoiceID', result, true, false, mock)
  },
}
