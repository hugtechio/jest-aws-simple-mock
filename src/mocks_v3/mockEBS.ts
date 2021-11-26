
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockEBS = {
  completeSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'completeSnapshot', 'EBS', Promise.resolve(result), true, mock)
  },
  completeSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'completeSnapshot', 'EBS', Promise.resolve(result), false, mock)
  },
  completeSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'completeSnapshot', 'EBS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'destroy', 'EBS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'destroy', 'EBS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'destroy', 'EBS', Promise.reject(result), true, mock)
  },
  getSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'getSnapshotBlock', 'EBS', Promise.resolve(result), true, mock)
  },
  getSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'getSnapshotBlock', 'EBS', Promise.resolve(result), false, mock)
  },
  getSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'getSnapshotBlock', 'EBS', Promise.reject(result), true, mock)
  },
  listChangedBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listChangedBlocks', 'EBS', Promise.resolve(result), true, mock)
  },
  listChangedBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listChangedBlocks', 'EBS', Promise.resolve(result), false, mock)
  },
  listChangedBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listChangedBlocks', 'EBS', Promise.reject(result), true, mock)
  },
  listSnapshotBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listSnapshotBlocks', 'EBS', Promise.resolve(result), true, mock)
  },
  listSnapshotBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listSnapshotBlocks', 'EBS', Promise.resolve(result), false, mock)
  },
  listSnapshotBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'listSnapshotBlocks', 'EBS', Promise.reject(result), true, mock)
  },
  putSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'putSnapshotBlock', 'EBS', Promise.resolve(result), true, mock)
  },
  putSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'putSnapshotBlock', 'EBS', Promise.resolve(result), false, mock)
  },
  putSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'putSnapshotBlock', 'EBS', Promise.reject(result), true, mock)
  },
  startSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'startSnapshot', 'EBS', Promise.resolve(result), true, mock)
  },
  startSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'startSnapshot', 'EBS', Promise.resolve(result), false, mock)
  },
  startSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'startSnapshot', 'EBS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'send', 'EBSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'send', 'EBSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ebs', 'send', 'EBSClient', Promise.reject(result), true, mock)
  }
}