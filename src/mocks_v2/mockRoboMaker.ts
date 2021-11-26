
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
  export const mockRoboMaker = {
  batchDeleteWorlds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteWorlds', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  batchDeleteWorldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteWorlds', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  batchDeleteWorldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteWorlds', 'RoboMaker', Promise.reject(result), true, mock)
  },
  batchDescribeSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  batchDescribeSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  batchDescribeSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDescribeSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobotApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplicationVersion', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplicationVersion', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRobotApplicationVersion', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplicationVersion', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplicationVersion', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationApplicationVersion', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deregisterRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deregisterRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deregisterRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorld: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorld', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorld', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorld', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'RoboMaker', Promise.reject(result), true, mock)
  },
  getWorldTemplateBody: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorldTemplateBody', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  getWorldTemplateBodyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorldTemplateBody', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  getWorldTemplateBodyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWorldTemplateBody', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listDeploymentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listDeploymentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listDeploymentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listRobotApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobotApplications', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listRobotApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobotApplications', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listRobotApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobotApplications', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listRobots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobots', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listRobotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobots', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listRobotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRobots', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationApplications', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationApplications', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationApplications', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationJobBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobBatches', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationJobBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobBatches', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationJobBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobBatches', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSimulationJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldExportJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldExportJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldExportJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldGenerationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldGenerationJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldGenerationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldGenerationJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldGenerationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldGenerationJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldTemplates', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldTemplates', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorldTemplates', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorlds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorlds', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorlds', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorlds', 'RoboMaker', Promise.reject(result), true, mock)
  },
  registerRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  registerRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  registerRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  restartSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restartSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  restartSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restartSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  restartSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restartSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  startSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  startSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  startSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  syncDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('syncDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  syncDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('syncDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  syncDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('syncDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
}
