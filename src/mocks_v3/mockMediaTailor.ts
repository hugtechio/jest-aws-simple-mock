
/**
* @description mocks_v3:mockMediaTailor module is mocks for AWS-SDK V3
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
export const mockMediaTailor = {
  configureLogsForChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  configureLogsForChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  configureLogsForChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  configureLogsForPlaybackConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  configureLogsForPlaybackConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  configureLogsForPlaybackConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'configureLogsForPlaybackConfiguration', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createLiveSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createLiveSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createLiveSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createLiveSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createLiveSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createLiveSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createPrefetchSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createPrefetchSchedule', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createPrefetchScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createPrefetchSchedule', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createPrefetchScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createPrefetchSchedule', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createProgram', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createProgram', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createProgram', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createSourceLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createSourceLocation', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createSourceLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createSourceLocation', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createSourceLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createSourceLocation', 'MediaTailor', Promise.reject(result), true, mock)
  },
  createVodSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createVodSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  createVodSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createVodSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  createVodSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'createVodSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannelPolicy', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannelPolicy', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteChannelPolicy', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteLiveSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteLiveSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteLiveSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteLiveSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteLiveSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteLiveSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deletePlaybackConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePlaybackConfiguration', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deletePlaybackConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePlaybackConfiguration', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deletePlaybackConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePlaybackConfiguration', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deletePrefetchSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePrefetchSchedule', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deletePrefetchScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePrefetchSchedule', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deletePrefetchScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deletePrefetchSchedule', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteProgram', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteProgram', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteProgram', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteSourceLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteSourceLocation', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteSourceLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteSourceLocation', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteSourceLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteSourceLocation', 'MediaTailor', Promise.reject(result), true, mock)
  },
  deleteVodSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteVodSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  deleteVodSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteVodSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  deleteVodSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'deleteVodSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  describeLiveSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeLiveSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  describeLiveSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeLiveSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  describeLiveSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeLiveSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  describeProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeProgram', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  describeProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeProgram', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  describeProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeProgram', 'MediaTailor', Promise.reject(result), true, mock)
  },
  describeSourceLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeSourceLocation', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  describeSourceLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeSourceLocation', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  describeSourceLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeSourceLocation', 'MediaTailor', Promise.reject(result), true, mock)
  },
  describeVodSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeVodSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  describeVodSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeVodSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  describeVodSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'describeVodSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  getChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelPolicy', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  getChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelPolicy', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  getChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelPolicy', 'MediaTailor', Promise.reject(result), true, mock)
  },
  getChannelSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelSchedule', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  getChannelScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelSchedule', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  getChannelScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getChannelSchedule', 'MediaTailor', Promise.reject(result), true, mock)
  },
  getPlaybackConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  getPlaybackConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  getPlaybackConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPlaybackConfiguration', 'MediaTailor', Promise.reject(result), true, mock)
  },
  getPrefetchSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPrefetchSchedule', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  getPrefetchScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPrefetchSchedule', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  getPrefetchScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'getPrefetchSchedule', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listAlerts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listAlerts', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listAlertsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listAlerts', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listAlertsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listAlerts', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listChannels', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listChannels', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listChannels', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listLiveSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listLiveSources', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listLiveSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listLiveSources', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listLiveSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listLiveSources', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listPlaybackConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPlaybackConfigurations', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listPlaybackConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPlaybackConfigurations', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listPlaybackConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPlaybackConfigurations', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listPrefetchSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPrefetchSchedules', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listPrefetchSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPrefetchSchedules', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listPrefetchSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listPrefetchSchedules', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listSourceLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listSourceLocations', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listSourceLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listSourceLocations', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listSourceLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listSourceLocations', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listTagsForResource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listTagsForResource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listTagsForResource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  listVodSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listVodSources', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  listVodSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listVodSources', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  listVodSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'listVodSources', 'MediaTailor', Promise.reject(result), true, mock)
  },
  putChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putChannelPolicy', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  putChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putChannelPolicy', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  putChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putChannelPolicy', 'MediaTailor', Promise.reject(result), true, mock)
  },
  putPlaybackConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  putPlaybackConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putPlaybackConfiguration', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  putPlaybackConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'putPlaybackConfiguration', 'MediaTailor', Promise.reject(result), true, mock)
  },
  startChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'startChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  startChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'startChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  startChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'startChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  stopChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'stopChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  stopChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'stopChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  stopChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'stopChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'tagResource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'tagResource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'tagResource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'untagResource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'untagResource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'untagResource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateChannel', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateChannel', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateChannel', 'MediaTailor', Promise.reject(result), true, mock)
  },
  updateLiveSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateLiveSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  updateLiveSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateLiveSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  updateLiveSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateLiveSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  updateProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateProgram', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  updateProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateProgram', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  updateProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateProgram', 'MediaTailor', Promise.reject(result), true, mock)
  },
  updateSourceLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateSourceLocation', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  updateSourceLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateSourceLocation', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  updateSourceLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateSourceLocation', 'MediaTailor', Promise.reject(result), true, mock)
  },
  updateVodSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateVodSource', 'MediaTailor', Promise.resolve(result), true, mock)
  },
  updateVodSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateVodSource', 'MediaTailor', Promise.resolve(result), false, mock)
  },
  updateVodSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'updateVodSource', 'MediaTailor', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'send', 'MediaTailorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'send', 'MediaTailorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediatailor', 'send', 'MediaTailorClient', Promise.reject(result), true, mock)
  }
}
