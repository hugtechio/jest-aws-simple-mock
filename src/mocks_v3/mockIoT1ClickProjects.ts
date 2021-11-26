
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockIoT1ClickProjects = {
  associateDeviceWithPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  associateDeviceWithPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  associateDeviceWithPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'associateDeviceWithPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  createPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  createPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  createPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'createProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  deletePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deletePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  deletePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deletePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  deletePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deletePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deleteProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deleteProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'deleteProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  describePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  describePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  describePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describeProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describeProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'describeProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'destroy', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'destroy', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'destroy', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  disassociateDeviceFromPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  disassociateDeviceFromPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  disassociateDeviceFromPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'disassociateDeviceFromPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  getDevicesInPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'getDevicesInPlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  getDevicesInPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'getDevicesInPlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  getDevicesInPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'getDevicesInPlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listPlacements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listPlacements', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listPlacementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listPlacements', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listPlacementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listPlacements', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listProjects', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listProjects', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listProjects', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listTagsForResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listTagsForResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'listTagsForResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'tagResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'tagResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'tagResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'untagResource', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'untagResource', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'untagResource', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  updatePlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updatePlacement', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  updatePlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updatePlacement', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  updatePlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updatePlacement', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updateProject', 'IoT1ClickProjects', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updateProject', 'IoT1ClickProjects', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'updateProject', 'IoT1ClickProjects', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'send', 'IoT1ClickProjectsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'send', 'IoT1ClickProjectsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-1click-projects', 'send', 'IoT1ClickProjectsClient', Promise.reject(result), true, mock)
  }
}