
/**
* @description mocks_v2:mockEBS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockEBS = {
  completeSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', result, true, true, mock)
  },
  completeSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', result, false, true, mock)
  },
  completeSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeSnapshot', 'EBS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EBS', result, true, false, mock)
  },
  getSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', result, true, true, mock)
  },
  getSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', result, false, true, mock)
  },
  getSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotBlock', 'EBS', result, true, false, mock)
  },
  listChangedBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', result, true, true, mock)
  },
  listChangedBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', result, false, true, mock)
  },
  listChangedBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangedBlocks', 'EBS', result, true, false, mock)
  },
  listSnapshotBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', result, true, true, mock)
  },
  listSnapshotBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', result, false, true, mock)
  },
  listSnapshotBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSnapshotBlocks', 'EBS', result, true, false, mock)
  },
  putSnapshotBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', result, true, true, mock)
  },
  putSnapshotBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', result, false, true, mock)
  },
  putSnapshotBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSnapshotBlock', 'EBS', result, true, false, mock)
  },
  startSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', result, true, true, mock)
  },
  startSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', result, false, true, mock)
  },
  startSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSnapshot', 'EBS', result, true, false, mock)
  },
}
