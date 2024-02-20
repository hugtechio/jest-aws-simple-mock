
/**
* @description mocks_v3:mockScheduler module is mocks for AWS-SDK V3
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
export const mockScheduler = {
  createSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createSchedule', 'Scheduler', Promise.resolve(result), true, mock)
  },
  createScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createSchedule', 'Scheduler', Promise.resolve(result), false, mock)
  },
  createScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createSchedule', 'Scheduler', Promise.reject(result), true, mock)
  },
  createScheduleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createScheduleGroup', 'Scheduler', Promise.resolve(result), true, mock)
  },
  createScheduleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createScheduleGroup', 'Scheduler', Promise.resolve(result), false, mock)
  },
  createScheduleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'createScheduleGroup', 'Scheduler', Promise.reject(result), true, mock)
  },
  deleteSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteSchedule', 'Scheduler', Promise.resolve(result), true, mock)
  },
  deleteScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteSchedule', 'Scheduler', Promise.resolve(result), false, mock)
  },
  deleteScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteSchedule', 'Scheduler', Promise.reject(result), true, mock)
  },
  deleteScheduleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteScheduleGroup', 'Scheduler', Promise.resolve(result), true, mock)
  },
  deleteScheduleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteScheduleGroup', 'Scheduler', Promise.resolve(result), false, mock)
  },
  deleteScheduleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'deleteScheduleGroup', 'Scheduler', Promise.reject(result), true, mock)
  },
  getSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getSchedule', 'Scheduler', Promise.resolve(result), true, mock)
  },
  getScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getSchedule', 'Scheduler', Promise.resolve(result), false, mock)
  },
  getScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getSchedule', 'Scheduler', Promise.reject(result), true, mock)
  },
  getScheduleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getScheduleGroup', 'Scheduler', Promise.resolve(result), true, mock)
  },
  getScheduleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getScheduleGroup', 'Scheduler', Promise.resolve(result), false, mock)
  },
  getScheduleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'getScheduleGroup', 'Scheduler', Promise.reject(result), true, mock)
  },
  listScheduleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listScheduleGroups', 'Scheduler', Promise.resolve(result), true, mock)
  },
  listScheduleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listScheduleGroups', 'Scheduler', Promise.resolve(result), false, mock)
  },
  listScheduleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listScheduleGroups', 'Scheduler', Promise.reject(result), true, mock)
  },
  listSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listSchedules', 'Scheduler', Promise.resolve(result), true, mock)
  },
  listSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listSchedules', 'Scheduler', Promise.resolve(result), false, mock)
  },
  listSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listSchedules', 'Scheduler', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listTagsForResource', 'Scheduler', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listTagsForResource', 'Scheduler', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'listTagsForResource', 'Scheduler', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'tagResource', 'Scheduler', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'tagResource', 'Scheduler', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'tagResource', 'Scheduler', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'untagResource', 'Scheduler', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'untagResource', 'Scheduler', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'untagResource', 'Scheduler', Promise.reject(result), true, mock)
  },
  updateSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'updateSchedule', 'Scheduler', Promise.resolve(result), true, mock)
  },
  updateScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'updateSchedule', 'Scheduler', Promise.resolve(result), false, mock)
  },
  updateScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'updateSchedule', 'Scheduler', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'send', 'SchedulerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'send', 'SchedulerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-scheduler', 'send', 'SchedulerClient', Promise.reject(result), true, mock)
  }
}
