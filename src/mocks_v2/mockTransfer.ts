
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
  export const mockTransfer = {
  createAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  createAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  createAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  createServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  createServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  createServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createServer', 'Transfer', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Transfer', Promise.reject(result), true, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServer', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteSshPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSshPublicKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteSshPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSshPublicKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteSshPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSshPublicKey', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  describeAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'Transfer', Promise.reject(result), true, mock)
  },
  describeSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityPolicy', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityPolicy', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityPolicy', 'Transfer', Promise.reject(result), true, mock)
  },
  describeServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServer', 'Transfer', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Transfer', Promise.reject(result), true, mock)
  },
  describeWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transfer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transfer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Transfer', Promise.reject(result), true, mock)
  },
  importSshPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSshPublicKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  importSshPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSshPublicKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  importSshPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSshPublicKey', 'Transfer', Promise.reject(result), true, mock)
  },
  listAccesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccesses', 'Transfer', Promise.resolve(result), true, mock)
  },
  listAccessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccesses', 'Transfer', Promise.resolve(result), false, mock)
  },
  listAccessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccesses', 'Transfer', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'Transfer', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'Transfer', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'Transfer', Promise.reject(result), true, mock)
  },
  listSecurityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityPolicies', 'Transfer', Promise.resolve(result), true, mock)
  },
  listSecurityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityPolicies', 'Transfer', Promise.resolve(result), false, mock)
  },
  listSecurityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityPolicies', 'Transfer', Promise.reject(result), true, mock)
  },
  listServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'Transfer', Promise.resolve(result), true, mock)
  },
  listServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'Transfer', Promise.resolve(result), false, mock)
  },
  listServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'Transfer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Transfer', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Transfer', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Transfer', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Transfer', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Transfer', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Transfer', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkflows', 'Transfer', Promise.reject(result), true, mock)
  },
  sendWorkflowStepState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendWorkflowStepState', 'Transfer', Promise.resolve(result), true, mock)
  },
  sendWorkflowStepStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendWorkflowStepState', 'Transfer', Promise.resolve(result), false, mock)
  },
  sendWorkflowStepStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendWorkflowStepState', 'Transfer', Promise.reject(result), true, mock)
  },
  startServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  startServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  startServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServer', 'Transfer', Promise.reject(result), true, mock)
  },
  stopServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  stopServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  stopServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopServer', 'Transfer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Transfer', Promise.reject(result), true, mock)
  },
  testIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testIdentityProvider', 'Transfer', Promise.resolve(result), true, mock)
  },
  testIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testIdentityProvider', 'Transfer', Promise.resolve(result), false, mock)
  },
  testIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testIdentityProvider', 'Transfer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Transfer', Promise.reject(result), true, mock)
  },
  updateAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  updateServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServer', 'Transfer', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'Transfer', Promise.reject(result), true, mock)
  },
}
