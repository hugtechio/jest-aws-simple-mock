
/**
* @description mocks_v3:mockMigrationHub module is mocks for AWS-SDK V3
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

  export const mockMigrationHub = {
  associateCreatedArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateCreatedArtifact', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  associateCreatedArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateCreatedArtifact', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  associateCreatedArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateCreatedArtifact', 'MigrationHub', Promise.reject(result), true, mock)
  },
  associateDiscoveredResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateDiscoveredResource', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  associateDiscoveredResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateDiscoveredResource', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  associateDiscoveredResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'associateDiscoveredResource', 'MigrationHub', Promise.reject(result), true, mock)
  },
  createProgressUpdateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'createProgressUpdateStream', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  createProgressUpdateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'createProgressUpdateStream', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  createProgressUpdateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'createProgressUpdateStream', 'MigrationHub', Promise.reject(result), true, mock)
  },
  deleteProgressUpdateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'deleteProgressUpdateStream', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  deleteProgressUpdateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'deleteProgressUpdateStream', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  deleteProgressUpdateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'deleteProgressUpdateStream', 'MigrationHub', Promise.reject(result), true, mock)
  },
  describeApplicationState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeApplicationState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  describeApplicationStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeApplicationState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  describeApplicationStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeApplicationState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  describeMigrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeMigrationTask', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  describeMigrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeMigrationTask', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  describeMigrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'describeMigrationTask', 'MigrationHub', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'destroy', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'destroy', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'destroy', 'MigrationHub', Promise.reject(result), true, mock)
  },
  disassociateCreatedArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateCreatedArtifact', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  disassociateCreatedArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateCreatedArtifact', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  disassociateCreatedArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateCreatedArtifact', 'MigrationHub', Promise.reject(result), true, mock)
  },
  disassociateDiscoveredResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateDiscoveredResource', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  disassociateDiscoveredResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateDiscoveredResource', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  disassociateDiscoveredResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'disassociateDiscoveredResource', 'MigrationHub', Promise.reject(result), true, mock)
  },
  importMigrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'importMigrationTask', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  importMigrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'importMigrationTask', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  importMigrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'importMigrationTask', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listApplicationStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listApplicationStates', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listApplicationStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listApplicationStates', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listApplicationStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listApplicationStates', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listCreatedArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listCreatedArtifacts', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listCreatedArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listCreatedArtifacts', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listCreatedArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listCreatedArtifacts', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listDiscoveredResources', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listDiscoveredResources', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listDiscoveredResources', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listMigrationTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listMigrationTasks', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listMigrationTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listMigrationTasks', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listMigrationTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listMigrationTasks', 'MigrationHub', Promise.reject(result), true, mock)
  },
  listProgressUpdateStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listProgressUpdateStreams', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  listProgressUpdateStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listProgressUpdateStreams', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  listProgressUpdateStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'listProgressUpdateStreams', 'MigrationHub', Promise.reject(result), true, mock)
  },
  notifyApplicationState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyApplicationState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  notifyApplicationStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyApplicationState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  notifyApplicationStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyApplicationState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  notifyMigrationTaskState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyMigrationTaskState', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  notifyMigrationTaskStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyMigrationTaskState', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  notifyMigrationTaskStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'notifyMigrationTaskState', 'MigrationHub', Promise.reject(result), true, mock)
  },
  putResourceAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'putResourceAttributes', 'MigrationHub', Promise.resolve(result), true, mock)
  },
  putResourceAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'putResourceAttributes', 'MigrationHub', Promise.resolve(result), false, mock)
  },
  putResourceAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'putResourceAttributes', 'MigrationHub', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'send', 'MigrationHubClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'send', 'MigrationHubClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-migration-hub', 'send', 'MigrationHubClient', Promise.reject(result), true, mock)
  }
}