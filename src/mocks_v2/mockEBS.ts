
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
  export const mockEBS = {
  completeSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', Promise.resolve(result), true, mock)
  },
  completeSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', Promise.resolve(result), false, mock)
  },
  completeSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', Promise.reject(result), true, mock)
  },
  getSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', Promise.resolve(result), true, mock)
  },
  getSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', Promise.resolve(result), false, mock)
  },
  getSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', Promise.reject(result), true, mock)
  },
  listChangedBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', Promise.resolve(result), true, mock)
  },
  listChangedBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', Promise.resolve(result), false, mock)
  },
  listChangedBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', Promise.reject(result), true, mock)
  },
  listSnapshotBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', Promise.resolve(result), true, mock)
  },
  listSnapshotBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', Promise.resolve(result), false, mock)
  },
  listSnapshotBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', Promise.reject(result), true, mock)
  },
  putSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', Promise.resolve(result), true, mock)
  },
  putSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', Promise.resolve(result), false, mock)
  },
  putSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', Promise.reject(result), true, mock)
  },
  startSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', Promise.resolve(result), true, mock)
  },
  startSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', Promise.resolve(result), false, mock)
  },
  startSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', Promise.reject(result), true, mock)
  },
}
