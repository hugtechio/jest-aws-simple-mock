
/**
* @description mocks_v3:mockBackupStorage module is mocks for AWS-SDK V3
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
export const mockBackupStorage = {
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'deleteObject', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'deleteObject', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'deleteObject', 'BackupStorage', Promise.reject(result), true, mock)
  },
  getChunk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getChunk', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  getChunkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getChunk', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  getChunkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getChunk', 'BackupStorage', Promise.reject(result), true, mock)
  },
  getObjectMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getObjectMetadata', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  getObjectMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getObjectMetadata', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  getObjectMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'getObjectMetadata', 'BackupStorage', Promise.reject(result), true, mock)
  },
  listChunks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listChunks', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  listChunksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listChunks', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  listChunksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listChunks', 'BackupStorage', Promise.reject(result), true, mock)
  },
  listObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listObjects', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  listObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listObjects', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  listObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'listObjects', 'BackupStorage', Promise.reject(result), true, mock)
  },
  notifyObjectComplete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'notifyObjectComplete', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  notifyObjectCompleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'notifyObjectComplete', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  notifyObjectCompleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'notifyObjectComplete', 'BackupStorage', Promise.reject(result), true, mock)
  },
  putChunk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putChunk', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  putChunkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putChunk', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  putChunkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putChunk', 'BackupStorage', Promise.reject(result), true, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putObject', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putObject', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'putObject', 'BackupStorage', Promise.reject(result), true, mock)
  },
  startObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'startObject', 'BackupStorage', Promise.resolve(result), true, mock)
  },
  startObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'startObject', 'BackupStorage', Promise.resolve(result), false, mock)
  },
  startObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'startObject', 'BackupStorage', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'send', 'BackupStorageClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'send', 'BackupStorageClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backupstorage', 'send', 'BackupStorageClient', Promise.reject(result), true, mock)
  }
}
