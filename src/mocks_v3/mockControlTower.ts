
/**
* @description mocks_v3:mockControlTower module is mocks for AWS-SDK V3
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
export const mockControlTower = {
  createLandingZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'createLandingZone', 'ControlTower', Promise.resolve(result), true, mock)
  },
  createLandingZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'createLandingZone', 'ControlTower', Promise.resolve(result), false, mock)
  },
  createLandingZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'createLandingZone', 'ControlTower', Promise.reject(result), true, mock)
  },
  deleteLandingZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'deleteLandingZone', 'ControlTower', Promise.resolve(result), true, mock)
  },
  deleteLandingZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'deleteLandingZone', 'ControlTower', Promise.resolve(result), false, mock)
  },
  deleteLandingZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'deleteLandingZone', 'ControlTower', Promise.reject(result), true, mock)
  },
  disableBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  disableBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  disableBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  disableControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableControl', 'ControlTower', Promise.resolve(result), true, mock)
  },
  disableControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableControl', 'ControlTower', Promise.resolve(result), false, mock)
  },
  disableControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'disableControl', 'ControlTower', Promise.reject(result), true, mock)
  },
  enableBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  enableBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  enableBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  enableControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableControl', 'ControlTower', Promise.resolve(result), true, mock)
  },
  enableControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableControl', 'ControlTower', Promise.resolve(result), false, mock)
  },
  enableControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'enableControl', 'ControlTower', Promise.reject(result), true, mock)
  },
  getBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  getBaselineOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaselineOperation', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getBaselineOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaselineOperation', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getBaselineOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getBaselineOperation', 'ControlTower', Promise.reject(result), true, mock)
  },
  getControlOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getControlOperation', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getControlOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getControlOperation', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getControlOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getControlOperation', 'ControlTower', Promise.reject(result), true, mock)
  },
  getEnabledBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getEnabledBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getEnabledBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  getEnabledControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledControl', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getEnabledControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledControl', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getEnabledControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getEnabledControl', 'ControlTower', Promise.reject(result), true, mock)
  },
  getLandingZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZone', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getLandingZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZone', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getLandingZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZone', 'ControlTower', Promise.reject(result), true, mock)
  },
  getLandingZoneOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZoneOperation', 'ControlTower', Promise.resolve(result), true, mock)
  },
  getLandingZoneOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZoneOperation', 'ControlTower', Promise.resolve(result), false, mock)
  },
  getLandingZoneOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'getLandingZoneOperation', 'ControlTower', Promise.reject(result), true, mock)
  },
  listBaselines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listBaselines', 'ControlTower', Promise.resolve(result), true, mock)
  },
  listBaselinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listBaselines', 'ControlTower', Promise.resolve(result), false, mock)
  },
  listBaselinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listBaselines', 'ControlTower', Promise.reject(result), true, mock)
  },
  listEnabledBaselines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledBaselines', 'ControlTower', Promise.resolve(result), true, mock)
  },
  listEnabledBaselinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledBaselines', 'ControlTower', Promise.resolve(result), false, mock)
  },
  listEnabledBaselinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledBaselines', 'ControlTower', Promise.reject(result), true, mock)
  },
  listEnabledControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledControls', 'ControlTower', Promise.resolve(result), true, mock)
  },
  listEnabledControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledControls', 'ControlTower', Promise.resolve(result), false, mock)
  },
  listEnabledControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listEnabledControls', 'ControlTower', Promise.reject(result), true, mock)
  },
  listLandingZones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listLandingZones', 'ControlTower', Promise.resolve(result), true, mock)
  },
  listLandingZonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listLandingZones', 'ControlTower', Promise.resolve(result), false, mock)
  },
  listLandingZonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listLandingZones', 'ControlTower', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listTagsForResource', 'ControlTower', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listTagsForResource', 'ControlTower', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'listTagsForResource', 'ControlTower', Promise.reject(result), true, mock)
  },
  resetEnabledBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetEnabledBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  resetEnabledBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetEnabledBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  resetEnabledBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetEnabledBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  resetLandingZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetLandingZone', 'ControlTower', Promise.resolve(result), true, mock)
  },
  resetLandingZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetLandingZone', 'ControlTower', Promise.resolve(result), false, mock)
  },
  resetLandingZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'resetLandingZone', 'ControlTower', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'tagResource', 'ControlTower', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'tagResource', 'ControlTower', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'tagResource', 'ControlTower', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'untagResource', 'ControlTower', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'untagResource', 'ControlTower', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'untagResource', 'ControlTower', Promise.reject(result), true, mock)
  },
  updateEnabledBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledBaseline', 'ControlTower', Promise.resolve(result), true, mock)
  },
  updateEnabledBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledBaseline', 'ControlTower', Promise.resolve(result), false, mock)
  },
  updateEnabledBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledBaseline', 'ControlTower', Promise.reject(result), true, mock)
  },
  updateEnabledControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledControl', 'ControlTower', Promise.resolve(result), true, mock)
  },
  updateEnabledControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledControl', 'ControlTower', Promise.resolve(result), false, mock)
  },
  updateEnabledControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateEnabledControl', 'ControlTower', Promise.reject(result), true, mock)
  },
  updateLandingZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateLandingZone', 'ControlTower', Promise.resolve(result), true, mock)
  },
  updateLandingZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateLandingZone', 'ControlTower', Promise.resolve(result), false, mock)
  },
  updateLandingZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'updateLandingZone', 'ControlTower', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'send', 'ControlTowerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'send', 'ControlTowerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-controltower', 'send', 'ControlTowerClient', Promise.reject(result), true, mock)
  }
}
