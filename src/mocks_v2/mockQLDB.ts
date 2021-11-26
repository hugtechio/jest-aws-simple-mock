
/**
* @description mocks_v2:mockQLDB.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockQLDB = {
  cancelJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', result, true, true, mock)
  },
  cancelJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', result, false, true, mock)
  },
  cancelJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', result, true, false, mock)
  },
  createLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', result, true, true, mock)
  },
  createLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', result, false, true, mock)
  },
  createLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', result, true, false, mock)
  },
  deleteLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', result, true, true, mock)
  },
  deleteLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', result, false, true, mock)
  },
  deleteLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', result, true, false, mock)
  },
  describeJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', result, true, true, mock)
  },
  describeJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', result, false, true, mock)
  },
  describeJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', result, true, false, mock)
  },
  describeJournalS3Export: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', result, true, true, mock)
  },
  describeJournalS3ExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', result, false, true, mock)
  },
  describeJournalS3ExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', result, true, false, mock)
  },
  describeLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', result, true, true, mock)
  },
  describeLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', result, false, true, mock)
  },
  describeLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', result, true, false, mock)
  },
  exportJournalToS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', result, true, true, mock)
  },
  exportJournalToS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', result, false, true, mock)
  },
  exportJournalToS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', result, true, false, mock)
  },
  getBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', result, true, true, mock)
  },
  getBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', result, false, true, mock)
  },
  getBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', result, true, false, mock)
  },
  getDigest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', result, true, true, mock)
  },
  getDigestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', result, false, true, mock)
  },
  getDigestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', result, true, false, mock)
  },
  getRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', result, true, true, mock)
  },
  getRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', result, false, true, mock)
  },
  getRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', result, true, false, mock)
  },
  listJournalKinesisStreamsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', result, true, true, mock)
  },
  listJournalKinesisStreamsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', result, false, true, mock)
  },
  listJournalKinesisStreamsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', result, true, false, mock)
  },
  listJournalS3Exports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', result, true, true, mock)
  },
  listJournalS3ExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', result, false, true, mock)
  },
  listJournalS3ExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', result, true, false, mock)
  },
  listJournalS3ExportsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', result, true, true, mock)
  },
  listJournalS3ExportsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', result, false, true, mock)
  },
  listJournalS3ExportsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', result, true, false, mock)
  },
  listLedgers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', result, true, true, mock)
  },
  listLedgersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', result, false, true, mock)
  },
  listLedgersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', result, true, false, mock)
  },
  streamJournalToKinesis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', result, true, true, mock)
  },
  streamJournalToKinesisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', result, false, true, mock)
  },
  streamJournalToKinesisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', result, true, false, mock)
  },
  updateLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', result, true, true, mock)
  },
  updateLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', result, false, true, mock)
  },
  updateLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', result, true, false, mock)
  },
  updateLedgerPermissionsMode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', result, true, true, mock)
  },
  updateLedgerPermissionsModeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', result, false, true, mock)
  },
  updateLedgerPermissionsModeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', result, true, false, mock)
  },
}
