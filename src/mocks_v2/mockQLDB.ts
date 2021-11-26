
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
  export const mockQLDB = {
  cancelJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', Promise.resolve(result), true, mock)
  },
  cancelJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', Promise.resolve(result), false, mock)
  },
  cancelJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJournalKinesisStream', 'QLDB', Promise.reject(result), true, mock)
  },
  createLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  createLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  createLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  deleteLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  deleteLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  deleteLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  describeJournalKinesisStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeJournalKinesisStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeJournalKinesisStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalKinesisStream', 'QLDB', Promise.reject(result), true, mock)
  },
  describeJournalS3Export: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeJournalS3ExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeJournalS3ExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJournalS3Export', 'QLDB', Promise.reject(result), true, mock)
  },
  describeLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  describeLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  describeLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'QLDB', Promise.reject(result), true, mock)
  },
  exportJournalToS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', Promise.resolve(result), true, mock)
  },
  exportJournalToS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', Promise.resolve(result), false, mock)
  },
  exportJournalToS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportJournalToS3', 'QLDB', Promise.reject(result), true, mock)
  },
  getBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', Promise.resolve(result), true, mock)
  },
  getBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', Promise.resolve(result), false, mock)
  },
  getBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlock', 'QLDB', Promise.reject(result), true, mock)
  },
  getDigest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', Promise.resolve(result), true, mock)
  },
  getDigestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', Promise.resolve(result), false, mock)
  },
  getDigestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDigest', 'QLDB', Promise.reject(result), true, mock)
  },
  getRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', Promise.resolve(result), true, mock)
  },
  getRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', Promise.resolve(result), false, mock)
  },
  getRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRevision', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalKinesisStreamsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalKinesisStreamsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalKinesisStreamsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalKinesisStreamsForLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalS3Exports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalS3ExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalS3ExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3Exports', 'QLDB', Promise.reject(result), true, mock)
  },
  listJournalS3ExportsForLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  listJournalS3ExportsForLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  listJournalS3ExportsForLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJournalS3ExportsForLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  listLedgers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', Promise.resolve(result), true, mock)
  },
  listLedgersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', Promise.resolve(result), false, mock)
  },
  listLedgersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLedgers', 'QLDB', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'QLDB', Promise.reject(result), true, mock)
  },
  streamJournalToKinesis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', Promise.resolve(result), true, mock)
  },
  streamJournalToKinesisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', Promise.resolve(result), false, mock)
  },
  streamJournalToKinesisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('streamJournalToKinesis', 'QLDB', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'QLDB', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'QLDB', Promise.reject(result), true, mock)
  },
  updateLedger: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', Promise.resolve(result), true, mock)
  },
  updateLedgerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', Promise.resolve(result), false, mock)
  },
  updateLedgerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedger', 'QLDB', Promise.reject(result), true, mock)
  },
  updateLedgerPermissionsMode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', Promise.resolve(result), true, mock)
  },
  updateLedgerPermissionsModeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', Promise.resolve(result), false, mock)
  },
  updateLedgerPermissionsModeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLedgerPermissionsMode', 'QLDB', Promise.reject(result), true, mock)
  },
}
