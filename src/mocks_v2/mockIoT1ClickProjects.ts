
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
  export const mockIoT1ClickProjects = {
  associateDeviceWithPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  associateDeviceWithPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  associateDeviceWithPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  createPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  createPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  createPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  deletePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  deletePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  deletePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  describePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  describePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  describePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  disassociateDeviceFromPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  disassociateDeviceFromPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  disassociateDeviceFromPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  getDevicesInPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicesInPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  getDevicesInPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicesInPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  getDevicesInPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicesInPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listPlacements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlacements', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listPlacementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlacements', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listPlacementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlacements', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  updatePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  updatePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  updatePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
}
