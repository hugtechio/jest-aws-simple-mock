
/**
* @description mocks_v3:mockQLDB module is mocks for AWS-SDK V3
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

  export const mockQLDB = {
  cancelJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'cancelJournalKinesisStream', 'QLDB', Promise.resolve(result), true, mock)
  },
  cancelJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'cancelJournalKinesisStream', 'QLDB', Promise.resolve(result), false, mock)
  },
  cancelJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'cancelJournalKinesisStream', 'QLDB', Promise.reject(result), true, mock)
  },
  createLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'createLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  createLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'createLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  createLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'createLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  deleteLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'deleteLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  deleteLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'deleteLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  deleteLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'deleteLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  describeJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalKinesisStream', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalKinesisStream', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalKinesisStream', 'QLDB', Promise.reject(result), true, mock)
  },
  describeJournalS3Export: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalS3Export', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeJournalS3ExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalS3Export', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeJournalS3ExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeJournalS3Export', 'QLDB', Promise.reject(result), true, mock)
  },
  describeLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'describeLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'destroy', 'QLDB', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'destroy', 'QLDB', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'destroy', 'QLDB', Promise.reject(result), true, mock)
  },
  exportJournalToS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'exportJournalToS3', 'QLDB', Promise.resolve(result), true, mock)
  },
  exportJournalToS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'exportJournalToS3', 'QLDB', Promise.resolve(result), false, mock)
  },
  exportJournalToS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'exportJournalToS3', 'QLDB', Promise.reject(result), true, mock)
  },
  getBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getBlock', 'QLDB', Promise.resolve(result), true, mock)
  },
  getBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getBlock', 'QLDB', Promise.resolve(result), false, mock)
  },
  getBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getBlock', 'QLDB', Promise.reject(result), true, mock)
  },
  getDigest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getDigest', 'QLDB', Promise.resolve(result), true, mock)
  },
  getDigestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getDigest', 'QLDB', Promise.resolve(result), false, mock)
  },
  getDigestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getDigest', 'QLDB', Promise.reject(result), true, mock)
  },
  getRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getRevision', 'QLDB', Promise.resolve(result), true, mock)
  },
  getRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getRevision', 'QLDB', Promise.resolve(result), false, mock)
  },
  getRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'getRevision', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalKinesisStreamsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalKinesisStreamsForLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalKinesisStreamsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalKinesisStreamsForLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalKinesisStreamsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalKinesisStreamsForLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalS3Exports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3Exports', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalS3ExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3Exports', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalS3ExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3Exports', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalS3ExportsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3ExportsForLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalS3ExportsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3ExportsForLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalS3ExportsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listJournalS3ExportsForLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  listLedgers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listLedgers', 'QLDB', Promise.resolve(result), true, mock)
  },
  listLedgersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listLedgers', 'QLDB', Promise.resolve(result), false, mock)
  },
  listLedgersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listLedgers', 'QLDB', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listTagsForResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listTagsForResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'listTagsForResource', 'QLDB', Promise.reject(result), true, mock)
  },
  streamJournalToKinesis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'streamJournalToKinesis', 'QLDB', Promise.resolve(result), true, mock)
  },
  streamJournalToKinesisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'streamJournalToKinesis', 'QLDB', Promise.resolve(result), false, mock)
  },
  streamJournalToKinesisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'streamJournalToKinesis', 'QLDB', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'tagResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'tagResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'tagResource', 'QLDB', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'untagResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'untagResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'untagResource', 'QLDB', Promise.reject(result), true, mock)
  },
  updateLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  updateLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  updateLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  updateLedgerPermissionsMode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedgerPermissionsMode', 'QLDB', Promise.resolve(result), true, mock)
  },
  updateLedgerPermissionsModeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedgerPermissionsMode', 'QLDB', Promise.resolve(result), false, mock)
  },
  updateLedgerPermissionsModeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'updateLedgerPermissionsMode', 'QLDB', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'send', 'QLDBClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'send', 'QLDBClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-qldb', 'send', 'QLDBClient', Promise.reject(result), true, mock)
  }
}