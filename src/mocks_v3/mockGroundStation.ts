
/**
* @description mocks_v3:mockGroundStation module is mocks for AWS-SDK V3
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
export const mockGroundStation = {
  cancelContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'cancelContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  cancelContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'cancelContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  cancelContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'cancelContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  createConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  createDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  createEphemeris: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createEphemeris', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createEphemerisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createEphemeris', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createEphemerisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createEphemeris', 'GroundStation', Promise.reject(result), true, mock)
  },
  createMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'createMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteEphemeris: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteEphemeris', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteEphemerisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteEphemeris', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteEphemerisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteEphemeris', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'deleteMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  describeContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  describeContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  describeContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  describeEphemeris: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeEphemeris', 'GroundStation', Promise.resolve(result), true, mock)
  },
  describeEphemerisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeEphemeris', 'GroundStation', Promise.resolve(result), false, mock)
  },
  describeEphemerisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'describeEphemeris', 'GroundStation', Promise.reject(result), true, mock)
  },
  getAgentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getAgentConfiguration', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getAgentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getAgentConfiguration', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getAgentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getAgentConfiguration', 'GroundStation', Promise.reject(result), true, mock)
  },
  getConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  getDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  getMinuteUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMinuteUsage', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getMinuteUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMinuteUsage', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getMinuteUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMinuteUsage', 'GroundStation', Promise.reject(result), true, mock)
  },
  getMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  getSatellite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getSatellite', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getSatelliteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getSatellite', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getSatelliteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'getSatellite', 'GroundStation', Promise.reject(result), true, mock)
  },
  listConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listConfigs', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listConfigs', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listConfigs', 'GroundStation', Promise.reject(result), true, mock)
  },
  listContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listContacts', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listContacts', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listContacts', 'GroundStation', Promise.reject(result), true, mock)
  },
  listDataflowEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listDataflowEndpointGroups', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listDataflowEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listDataflowEndpointGroups', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listDataflowEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listDataflowEndpointGroups', 'GroundStation', Promise.reject(result), true, mock)
  },
  listEphemerides: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listEphemerides', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listEphemeridesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listEphemerides', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listEphemeridesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listEphemerides', 'GroundStation', Promise.reject(result), true, mock)
  },
  listGroundStations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listGroundStations', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listGroundStationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listGroundStations', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listGroundStationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listGroundStations', 'GroundStation', Promise.reject(result), true, mock)
  },
  listMissionProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listMissionProfiles', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listMissionProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listMissionProfiles', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listMissionProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listMissionProfiles', 'GroundStation', Promise.reject(result), true, mock)
  },
  listSatellites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listSatellites', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listSatellitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listSatellites', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listSatellitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listSatellites', 'GroundStation', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listTagsForResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listTagsForResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'listTagsForResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  registerAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'registerAgent', 'GroundStation', Promise.resolve(result), true, mock)
  },
  registerAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'registerAgent', 'GroundStation', Promise.resolve(result), false, mock)
  },
  registerAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'registerAgent', 'GroundStation', Promise.reject(result), true, mock)
  },
  reserveContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'reserveContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  reserveContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'reserveContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  reserveContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'reserveContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'tagResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'tagResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'tagResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'untagResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'untagResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'untagResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateAgentStatus', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateAgentStatus', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateAgentStatus', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateEphemeris: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateEphemeris', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateEphemerisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateEphemeris', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateEphemerisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateEphemeris', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'updateMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'send', 'GroundStationClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'send', 'GroundStationClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-groundstation', 'send', 'GroundStationClient', Promise.reject(result), true, mock)
  }
}
