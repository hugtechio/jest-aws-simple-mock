
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
  export const mockGroundStation = {
  cancelContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  cancelContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  cancelContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  createConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  createDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  createMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  createMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  createMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  deleteMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  deleteMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  deleteMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  describeContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  describeContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  describeContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GroundStation', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GroundStation', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GroundStation', Promise.reject(result), true, mock)
  },
  getConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  getDataflowEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getDataflowEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowEndpointGroup', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getDataflowEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataflowEndpointGroup', 'GroundStation', Promise.reject(result), true, mock)
  },
  getMinuteUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMinuteUsage', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getMinuteUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMinuteUsage', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getMinuteUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMinuteUsage', 'GroundStation', Promise.reject(result), true, mock)
  },
  getMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
  getSatellite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSatellite', 'GroundStation', Promise.resolve(result), true, mock)
  },
  getSatelliteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSatellite', 'GroundStation', Promise.resolve(result), false, mock)
  },
  getSatelliteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSatellite', 'GroundStation', Promise.reject(result), true, mock)
  },
  listConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigs', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigs', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigs', 'GroundStation', Promise.reject(result), true, mock)
  },
  listContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContacts', 'GroundStation', Promise.reject(result), true, mock)
  },
  listDataflowEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataflowEndpointGroups', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listDataflowEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataflowEndpointGroups', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listDataflowEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataflowEndpointGroups', 'GroundStation', Promise.reject(result), true, mock)
  },
  listGroundStations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroundStations', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listGroundStationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroundStations', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listGroundStationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroundStations', 'GroundStation', Promise.reject(result), true, mock)
  },
  listMissionProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMissionProfiles', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listMissionProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMissionProfiles', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listMissionProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMissionProfiles', 'GroundStation', Promise.reject(result), true, mock)
  },
  listSatellites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSatellites', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listSatellitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSatellites', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listSatellitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSatellites', 'GroundStation', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  reserveContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reserveContact', 'GroundStation', Promise.resolve(result), true, mock)
  },
  reserveContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reserveContact', 'GroundStation', Promise.resolve(result), false, mock)
  },
  reserveContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('reserveContact', 'GroundStation', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GroundStation', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GroundStation', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfig', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfig', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConfig', 'GroundStation', Promise.reject(result), true, mock)
  },
  updateMissionProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMissionProfile', 'GroundStation', Promise.resolve(result), true, mock)
  },
  updateMissionProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMissionProfile', 'GroundStation', Promise.resolve(result), false, mock)
  },
  updateMissionProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMissionProfile', 'GroundStation', Promise.reject(result), true, mock)
  },
}
