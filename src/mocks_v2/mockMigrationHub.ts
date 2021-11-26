
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
  export const mockMigrationHub = {
  associateCreatedArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCreatedArtifact', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  associateCreatedArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCreatedArtifact', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  associateCreatedArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateCreatedArtifact', 'MigrationHub', Promise.reject(result), true, mock)
  },
  associateDiscoveredResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDiscoveredResource', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  associateDiscoveredResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDiscoveredResource', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  associateDiscoveredResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDiscoveredResource', 'MigrationHub', Promise.reject(result), true, mock)
  },
  createProgressUpdateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProgressUpdateStream', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  createProgressUpdateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProgressUpdateStream', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  createProgressUpdateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProgressUpdateStream', 'MigrationHub', Promise.reject(result), true, mock)
  },
  deleteProgressUpdateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProgressUpdateStream', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  deleteProgressUpdateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProgressUpdateStream', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  deleteProgressUpdateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProgressUpdateStream', 'MigrationHub', Promise.reject(result), true, mock)
  },
  describeApplicationState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  describeApplicationStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  describeApplicationStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  describeMigrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMigrationTask', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  describeMigrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMigrationTask', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  describeMigrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMigrationTask', 'MigrationHub', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHub', Promise.reject(result), true, mock)
  },
  disassociateCreatedArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCreatedArtifact', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  disassociateCreatedArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCreatedArtifact', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  disassociateCreatedArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateCreatedArtifact', 'MigrationHub', Promise.reject(result), true, mock)
  },
  disassociateDiscoveredResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDiscoveredResource', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  disassociateDiscoveredResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDiscoveredResource', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  disassociateDiscoveredResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDiscoveredResource', 'MigrationHub', Promise.reject(result), true, mock)
  },
  importMigrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importMigrationTask', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  importMigrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importMigrationTask', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  importMigrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importMigrationTask', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listApplicationStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationStates', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listApplicationStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationStates', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listApplicationStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationStates', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listCreatedArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreatedArtifacts', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listCreatedArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreatedArtifacts', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listCreatedArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCreatedArtifacts', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listMigrationTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMigrationTasks', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listMigrationTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMigrationTasks', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listMigrationTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMigrationTasks', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listProgressUpdateStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProgressUpdateStreams', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listProgressUpdateStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProgressUpdateStreams', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listProgressUpdateStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProgressUpdateStreams', 'MigrationHub', Promise.reject(result), true, mock)
  },
  notifyApplicationState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyApplicationState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  notifyApplicationStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyApplicationState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  notifyApplicationStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyApplicationState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  notifyMigrationTaskState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyMigrationTaskState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  notifyMigrationTaskStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyMigrationTaskState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  notifyMigrationTaskStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyMigrationTaskState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  putResourceAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceAttributes', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  putResourceAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceAttributes', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  putResourceAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceAttributes', 'MigrationHub', Promise.reject(result), true, mock)
  },
}
