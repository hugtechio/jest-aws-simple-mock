
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
  export const mockGrafana = {
  associateLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLicense', 'Grafana', Promise.resolve(result), true, mock)
  },
  associateLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLicense', 'Grafana', Promise.resolve(result), false, mock)
  },
  associateLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLicense', 'Grafana', Promise.reject(result), true, mock)
  },
  createWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  createWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  createWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  deleteWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  describeWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  describeWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  describeWorkspaceAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceAuthentication', 'Grafana', Promise.resolve(result), true, mock)
  },
  describeWorkspaceAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceAuthentication', 'Grafana', Promise.resolve(result), false, mock)
  },
  describeWorkspaceAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkspaceAuthentication', 'Grafana', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Grafana', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Grafana', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Grafana', Promise.reject(result), true, mock)
  },
  disassociateLicense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLicense', 'Grafana', Promise.resolve(result), true, mock)
  },
  disassociateLicenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLicense', 'Grafana', Promise.resolve(result), false, mock)
  },
  disassociateLicenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLicense', 'Grafana', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'Grafana', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'Grafana', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'Grafana', Promise.reject(result), true, mock)
  },
  listWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Grafana', Promise.resolve(result), true, mock)
  },
  listWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Grafana', Promise.resolve(result), false, mock)
  },
  listWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkspaces', 'Grafana', Promise.reject(result), true, mock)
  },
  updatePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissions', 'Grafana', Promise.resolve(result), true, mock)
  },
  updatePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissions', 'Grafana', Promise.resolve(result), false, mock)
  },
  updatePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePermissions', 'Grafana', Promise.reject(result), true, mock)
  },
  updateWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspace', 'Grafana', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspace', 'Grafana', Promise.resolve(result), false, mock)
  },
  updateWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspace', 'Grafana', Promise.reject(result), true, mock)
  },
  updateWorkspaceAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAuthentication', 'Grafana', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAuthentication', 'Grafana', Promise.resolve(result), false, mock)
  },
  updateWorkspaceAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWorkspaceAuthentication', 'Grafana', Promise.reject(result), true, mock)
  },
}
