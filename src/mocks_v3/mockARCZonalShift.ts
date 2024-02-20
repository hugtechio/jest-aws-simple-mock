
/**
* @description mocks_v3:mockARCZonalShift module is mocks for AWS-SDK V3
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
export const mockARCZonalShift = {
  cancelZonalShift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'cancelZonalShift', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  cancelZonalShiftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'cancelZonalShift', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  cancelZonalShiftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'cancelZonalShift', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  createPracticeRunConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'createPracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  createPracticeRunConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'createPracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  createPracticeRunConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'createPracticeRunConfiguration', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  deletePracticeRunConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'deletePracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  deletePracticeRunConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'deletePracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  deletePracticeRunConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'deletePracticeRunConfiguration', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  getManagedResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'getManagedResource', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  getManagedResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'getManagedResource', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  getManagedResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'getManagedResource', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  listAutoshifts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listAutoshifts', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  listAutoshiftsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listAutoshifts', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  listAutoshiftsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listAutoshifts', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  listManagedResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listManagedResources', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  listManagedResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listManagedResources', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  listManagedResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listManagedResources', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  listZonalShifts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listZonalShifts', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  listZonalShiftsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listZonalShifts', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  listZonalShiftsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'listZonalShifts', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  startZonalShift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'startZonalShift', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  startZonalShiftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'startZonalShift', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  startZonalShiftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'startZonalShift', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  updatePracticeRunConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updatePracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  updatePracticeRunConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updatePracticeRunConfiguration', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  updatePracticeRunConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updatePracticeRunConfiguration', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  updateZonalAutoshiftConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalAutoshiftConfiguration', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  updateZonalAutoshiftConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalAutoshiftConfiguration', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  updateZonalAutoshiftConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalAutoshiftConfiguration', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  updateZonalShift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalShift', 'ARCZonalShift', Promise.resolve(result), true, mock)
  },
  updateZonalShiftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalShift', 'ARCZonalShift', Promise.resolve(result), false, mock)
  },
  updateZonalShiftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'updateZonalShift', 'ARCZonalShift', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'send', 'ARCZonalShiftClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'send', 'ARCZonalShiftClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-arc-zonal-shift', 'send', 'ARCZonalShiftClient', Promise.reject(result), true, mock)
  }
}
