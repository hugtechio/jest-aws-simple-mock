
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockRoboMaker = {
  batchDeleteWorlds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDeleteWorlds', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  batchDeleteWorldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDeleteWorlds', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  batchDeleteWorldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDeleteWorlds', 'RoboMaker', Promise.reject(result), true, mock)
  },
  batchDescribeSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDescribeSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  batchDescribeSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDescribeSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  batchDescribeSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'batchDescribeSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  cancelWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  cancelWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  cancelWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'cancelWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createRobotApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplicationVersion', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createRobotApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplicationVersion', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createRobotApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createRobotApplicationVersion', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplicationVersion', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplicationVersion', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationApplicationVersion', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  createWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  createWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  createWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'createWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deleteWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deleteWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deleteWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deleteWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  deregisterRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deregisterRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  deregisterRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deregisterRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  deregisterRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'deregisterRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeFleet', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeFleet', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeFleet', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorld: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorld', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorld', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorld', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldExportJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldExportJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldExportJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldGenerationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldGenerationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldGenerationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  describeWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  describeWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  describeWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'describeWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'destroy', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'destroy', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'destroy', 'RoboMaker', Promise.reject(result), true, mock)
  },
  getWorldTemplateBody: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'getWorldTemplateBody', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  getWorldTemplateBodyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'getWorldTemplateBody', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  getWorldTemplateBodyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'getWorldTemplateBody', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listDeploymentJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listDeploymentJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listDeploymentJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listDeploymentJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listDeploymentJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listDeploymentJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listFleets', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listFleets', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listFleets', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listRobotApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobotApplications', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listRobotApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobotApplications', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listRobotApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobotApplications', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listRobots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobots', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listRobotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobots', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listRobotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listRobots', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationApplications', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationApplications', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationApplications', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationJobBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobBatches', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationJobBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobBatches', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationJobBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobBatches', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listSimulationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listSimulationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listSimulationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listSimulationJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listTagsForResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listTagsForResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listTagsForResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldExportJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldExportJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldExportJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldGenerationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldGenerationJobs', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldGenerationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldGenerationJobs', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldGenerationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldGenerationJobs', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorldTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldTemplates', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldTemplates', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorldTemplates', 'RoboMaker', Promise.reject(result), true, mock)
  },
  listWorlds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorlds', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  listWorldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorlds', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  listWorldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'listWorlds', 'RoboMaker', Promise.reject(result), true, mock)
  },
  registerRobot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'registerRobot', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  registerRobotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'registerRobot', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  registerRobotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'registerRobot', 'RoboMaker', Promise.reject(result), true, mock)
  },
  restartSimulationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'restartSimulationJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  restartSimulationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'restartSimulationJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  restartSimulationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'restartSimulationJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  startSimulationJobBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'startSimulationJobBatch', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  startSimulationJobBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'startSimulationJobBatch', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  startSimulationJobBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'startSimulationJobBatch', 'RoboMaker', Promise.reject(result), true, mock)
  },
  syncDeploymentJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'syncDeploymentJob', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  syncDeploymentJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'syncDeploymentJob', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  syncDeploymentJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'syncDeploymentJob', 'RoboMaker', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'tagResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'tagResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'tagResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'untagResource', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'untagResource', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'untagResource', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateRobotApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateRobotApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateRobotApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateRobotApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateRobotApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateRobotApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateSimulationApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateSimulationApplication', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateSimulationApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateSimulationApplication', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateSimulationApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateSimulationApplication', 'RoboMaker', Promise.reject(result), true, mock)
  },
  updateWorldTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateWorldTemplate', 'RoboMaker', Promise.resolve(result), true, mock)
  },
  updateWorldTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateWorldTemplate', 'RoboMaker', Promise.resolve(result), false, mock)
  },
  updateWorldTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'updateWorldTemplate', 'RoboMaker', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'send', 'RoboMakerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'send', 'RoboMakerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-robomaker', 'send', 'RoboMakerClient', Promise.reject(result), true, mock)
  }
}