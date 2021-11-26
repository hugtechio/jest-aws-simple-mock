
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
  export const mockAppflow = {
  createConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  createConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  createConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  createFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  createFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  createFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  deleteConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  deleteConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  deleteConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  deleteFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  deleteFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  deleteFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectorEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorEntity', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorEntity', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorEntity', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectorProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorProfiles', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorProfiles', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectorProfiles', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectors', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectors', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectors', 'Appflow', Promise.reject(result), true, mock)
  },
  describeFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  describeFlowExecutionRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlowExecutionRecords', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeFlowExecutionRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlowExecutionRecords', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeFlowExecutionRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFlowExecutionRecords', 'Appflow', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Appflow', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Appflow', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Appflow', Promise.reject(result), true, mock)
  },
  listConnectorEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectorEntities', 'Appflow', Promise.resolve(result), true, mock)
  },
  listConnectorEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectorEntities', 'Appflow', Promise.resolve(result), false, mock)
  },
  listConnectorEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnectorEntities', 'Appflow', Promise.reject(result), true, mock)
  },
  listFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlows', 'Appflow', Promise.resolve(result), true, mock)
  },
  listFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlows', 'Appflow', Promise.resolve(result), false, mock)
  },
  listFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlows', 'Appflow', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Appflow', Promise.reject(result), true, mock)
  },
  startFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  startFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  startFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  stopFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  stopFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  stopFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Appflow', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Appflow', Promise.reject(result), true, mock)
  },
  updateConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  updateConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  updateConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  updateFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  updateFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  updateFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlow', 'Appflow', Promise.reject(result), true, mock)
  },
}
