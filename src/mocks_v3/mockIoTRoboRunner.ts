
/**
* @description mocks_v3:mockIoTRoboRunner module is mocks for AWS-SDK V3
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
export const mockIoTRoboRunner = {
  createDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createDestination', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  createDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createDestination', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  createDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createDestination', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  createSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createSite', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  createSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createSite', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  createSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createSite', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  createWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorker', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  createWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorker', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  createWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorker', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  createWorkerFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  createWorkerFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  createWorkerFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'createWorkerFleet', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  deleteDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteDestination', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  deleteDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteDestination', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  deleteDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteDestination', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteSite', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteSite', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteSite', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  deleteWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorker', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  deleteWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorker', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  deleteWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorker', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  deleteWorkerFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  deleteWorkerFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  deleteWorkerFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'deleteWorkerFleet', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  getDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getDestination', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  getDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getDestination', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  getDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getDestination', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  getSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getSite', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  getSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getSite', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  getSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getSite', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  getWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorker', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  getWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorker', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  getWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorker', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  getWorkerFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  getWorkerFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  getWorkerFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'getWorkerFleet', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  listDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listDestinations', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  listDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listDestinations', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  listDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listDestinations', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  listSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listSites', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  listSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listSites', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  listSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listSites', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  listWorkerFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkerFleets', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  listWorkerFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkerFleets', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  listWorkerFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkerFleets', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  listWorkers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkers', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  listWorkersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkers', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  listWorkersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'listWorkers', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  updateDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateDestination', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  updateDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateDestination', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  updateDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateDestination', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  updateSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateSite', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  updateSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateSite', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  updateSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateSite', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  updateWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorker', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  updateWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorker', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  updateWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorker', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  updateWorkerFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), true, mock)
  },
  updateWorkerFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorkerFleet', 'IoTRoboRunner', Promise.resolve(result), false, mock)
  },
  updateWorkerFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'updateWorkerFleet', 'IoTRoboRunner', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'send', 'IoTRoboRunnerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'send', 'IoTRoboRunnerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-roborunner', 'send', 'IoTRoboRunnerClient', Promise.reject(result), true, mock)
  }
}
