
/**
* @description mocks_v3:mockIVSRealTime module is mocks for AWS-SDK V3
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
export const mockIVSRealTime = {
  createEncoderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  createEncoderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  createEncoderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createEncoderConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  createParticipantToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createParticipantToken', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  createParticipantTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createParticipantToken', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  createParticipantTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createParticipantToken', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  createStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStage', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  createStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStage', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  createStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStage', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  createStorageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStorageConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  createStorageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStorageConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  createStorageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'createStorageConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  deleteEncoderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  deleteEncoderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  deleteEncoderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteEncoderConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  deleteStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStage', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  deleteStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStage', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  deleteStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStage', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  deleteStorageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStorageConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  deleteStorageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStorageConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  deleteStorageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'deleteStorageConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  disconnectParticipant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'disconnectParticipant', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  disconnectParticipantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'disconnectParticipant', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  disconnectParticipantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'disconnectParticipant', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getComposition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getComposition', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getCompositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getComposition', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getCompositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getComposition', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getEncoderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getEncoderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getEncoderConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getEncoderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getEncoderConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getParticipant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getParticipant', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getParticipantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getParticipant', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getParticipantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getParticipant', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStage', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStage', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStage', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getStageSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStageSession', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getStageSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStageSession', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getStageSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStageSession', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  getStorageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStorageConfiguration', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  getStorageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStorageConfiguration', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  getStorageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'getStorageConfiguration', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listCompositions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listCompositions', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listCompositionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listCompositions', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listCompositionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listCompositions', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listEncoderConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listEncoderConfigurations', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listEncoderConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listEncoderConfigurations', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listEncoderConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listEncoderConfigurations', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listParticipantEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipantEvents', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listParticipantEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipantEvents', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listParticipantEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipantEvents', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listParticipants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipants', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listParticipantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipants', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listParticipantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listParticipants', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listStageSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStageSessions', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listStageSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStageSessions', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listStageSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStageSessions', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listStages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStages', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listStagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStages', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listStagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStages', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listStorageConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStorageConfigurations', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listStorageConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStorageConfigurations', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listStorageConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listStorageConfigurations', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listTagsForResource', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listTagsForResource', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'listTagsForResource', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  startComposition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'startComposition', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  startCompositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'startComposition', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  startCompositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'startComposition', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  stopComposition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'stopComposition', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  stopCompositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'stopComposition', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  stopCompositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'stopComposition', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'tagResource', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'tagResource', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'tagResource', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'untagResource', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'untagResource', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'untagResource', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  updateStage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'updateStage', 'IVSRealTime', Promise.resolve(result), true, mock)
  },
  updateStageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'updateStage', 'IVSRealTime', Promise.resolve(result), false, mock)
  },
  updateStageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'updateStage', 'IVSRealTime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'send', 'IVSRealTimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'send', 'IVSRealTimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs-realtime', 'send', 'IVSRealTimeClient', Promise.reject(result), true, mock)
  }
}
