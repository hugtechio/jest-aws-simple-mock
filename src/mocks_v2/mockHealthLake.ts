
/**
* @description mocks_v2:mockHealthLake.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockHealthLake = {
  createFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', result, true, true, mock)
  },
  createFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', result, false, true, mock)
  },
  createFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', result, true, false, mock)
  },
  deleteFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', result, true, true, mock)
  },
  deleteFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', result, false, true, mock)
  },
  deleteFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', result, true, false, mock)
  },
  describeFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', result, true, true, mock)
  },
  describeFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', result, false, true, mock)
  },
  describeFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', result, true, false, mock)
  },
  describeFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', result, true, true, mock)
  },
  describeFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', result, false, true, mock)
  },
  describeFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', result, true, false, mock)
  },
  describeFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', result, true, true, mock)
  },
  describeFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', result, false, true, mock)
  },
  describeFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', result, true, false, mock)
  },
  listFHIRDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', result, true, true, mock)
  },
  listFHIRDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', result, false, true, mock)
  },
  listFHIRDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', result, true, false, mock)
  },
  listFHIRExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', result, true, true, mock)
  },
  listFHIRExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', result, false, true, mock)
  },
  listFHIRExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', result, true, false, mock)
  },
  listFHIRImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', result, true, true, mock)
  },
  listFHIRImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', result, false, true, mock)
  },
  listFHIRImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', result, true, false, mock)
  },
  startFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', result, true, true, mock)
  },
  startFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', result, false, true, mock)
  },
  startFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', result, true, false, mock)
  },
  startFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', result, true, true, mock)
  },
  startFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', result, false, true, mock)
  },
  startFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', result, true, false, mock)
  },
}
