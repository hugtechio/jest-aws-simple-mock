
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
  export const mockDataSync = {
  cancelTaskExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTaskExecution', 'DataSync', Promise.resolve(result), true, mock)
  },
  cancelTaskExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTaskExecution', 'DataSync', Promise.resolve(result), false, mock)
  },
  cancelTaskExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTaskExecution', 'DataSync', Promise.reject(result), true, mock)
  },
  createAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgent', 'DataSync', Promise.resolve(result), true, mock)
  },
  createAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgent', 'DataSync', Promise.resolve(result), false, mock)
  },
  createAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgent', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationEfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationEfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationEfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationEfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationEfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationEfs', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationFsxWindows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationFsxWindows', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationFsxWindowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationFsxWindows', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationFsxWindowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationFsxWindows', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationHdfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationHdfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationHdfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationHdfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationHdfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationHdfs', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationNfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationNfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationNfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationNfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationNfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationNfs', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationObjectStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationObjectStorage', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationObjectStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationObjectStorage', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationObjectStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationObjectStorage', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationS3', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationS3', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationS3', 'DataSync', Promise.reject(result), true, mock)
  },
  createLocationSmb: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationSmb', 'DataSync', Promise.resolve(result), true, mock)
  },
  createLocationSmbAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationSmb', 'DataSync', Promise.resolve(result), false, mock)
  },
  createLocationSmbThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLocationSmb', 'DataSync', Promise.reject(result), true, mock)
  },
  createTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'DataSync', Promise.resolve(result), true, mock)
  },
  createTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'DataSync', Promise.resolve(result), false, mock)
  },
  createTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'DataSync', Promise.reject(result), true, mock)
  },
  deleteAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAgent', 'DataSync', Promise.resolve(result), true, mock)
  },
  deleteAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAgent', 'DataSync', Promise.resolve(result), false, mock)
  },
  deleteAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAgent', 'DataSync', Promise.reject(result), true, mock)
  },
  deleteLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLocation', 'DataSync', Promise.resolve(result), true, mock)
  },
  deleteLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLocation', 'DataSync', Promise.resolve(result), false, mock)
  },
  deleteLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLocation', 'DataSync', Promise.reject(result), true, mock)
  },
  deleteTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTask', 'DataSync', Promise.resolve(result), true, mock)
  },
  deleteTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTask', 'DataSync', Promise.resolve(result), false, mock)
  },
  deleteTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTask', 'DataSync', Promise.reject(result), true, mock)
  },
  describeAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgent', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgent', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgent', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationEfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationEfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationEfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationEfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationEfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationEfs', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationFsxWindows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationFsxWindows', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationFsxWindowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationFsxWindows', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationFsxWindowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationFsxWindows', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationHdfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationHdfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationHdfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationHdfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationHdfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationHdfs', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationNfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationNfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationNfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationNfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationNfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationNfs', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationObjectStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationObjectStorage', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationObjectStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationObjectStorage', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationObjectStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationObjectStorage', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationS3', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationS3', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationS3', 'DataSync', Promise.reject(result), true, mock)
  },
  describeLocationSmb: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationSmb', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeLocationSmbAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationSmb', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeLocationSmbThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocationSmb', 'DataSync', Promise.reject(result), true, mock)
  },
  describeTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'DataSync', Promise.reject(result), true, mock)
  },
  describeTaskExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskExecution', 'DataSync', Promise.resolve(result), true, mock)
  },
  describeTaskExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskExecution', 'DataSync', Promise.resolve(result), false, mock)
  },
  describeTaskExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskExecution', 'DataSync', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataSync', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataSync', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataSync', Promise.reject(result), true, mock)
  },
  listAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgents', 'DataSync', Promise.resolve(result), true, mock)
  },
  listAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgents', 'DataSync', Promise.resolve(result), false, mock)
  },
  listAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgents', 'DataSync', Promise.reject(result), true, mock)
  },
  listLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocations', 'DataSync', Promise.resolve(result), true, mock)
  },
  listLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocations', 'DataSync', Promise.resolve(result), false, mock)
  },
  listLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocations', 'DataSync', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataSync', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataSync', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataSync', Promise.reject(result), true, mock)
  },
  listTaskExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskExecutions', 'DataSync', Promise.resolve(result), true, mock)
  },
  listTaskExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskExecutions', 'DataSync', Promise.resolve(result), false, mock)
  },
  listTaskExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskExecutions', 'DataSync', Promise.reject(result), true, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'DataSync', Promise.resolve(result), true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'DataSync', Promise.resolve(result), false, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'DataSync', Promise.reject(result), true, mock)
  },
  startTaskExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskExecution', 'DataSync', Promise.resolve(result), true, mock)
  },
  startTaskExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskExecution', 'DataSync', Promise.resolve(result), false, mock)
  },
  startTaskExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskExecution', 'DataSync', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataSync', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataSync', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataSync', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataSync', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataSync', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataSync', Promise.reject(result), true, mock)
  },
  updateAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgent', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgent', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgent', 'DataSync', Promise.reject(result), true, mock)
  },
  updateLocationHdfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationHdfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateLocationHdfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationHdfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateLocationHdfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationHdfs', 'DataSync', Promise.reject(result), true, mock)
  },
  updateLocationNfs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationNfs', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateLocationNfsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationNfs', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateLocationNfsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationNfs', 'DataSync', Promise.reject(result), true, mock)
  },
  updateLocationObjectStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationObjectStorage', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateLocationObjectStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationObjectStorage', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateLocationObjectStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationObjectStorage', 'DataSync', Promise.reject(result), true, mock)
  },
  updateLocationSmb: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationSmb', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateLocationSmbAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationSmb', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateLocationSmbThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLocationSmb', 'DataSync', Promise.reject(result), true, mock)
  },
  updateTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTask', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTask', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTask', 'DataSync', Promise.reject(result), true, mock)
  },
  updateTaskExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskExecution', 'DataSync', Promise.resolve(result), true, mock)
  },
  updateTaskExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskExecution', 'DataSync', Promise.resolve(result), false, mock)
  },
  updateTaskExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskExecution', 'DataSync', Promise.reject(result), true, mock)
  },
}
