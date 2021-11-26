
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
  export const mockMTurk = {
  acceptQualificationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptQualificationRequest', 'MTurk', Promise.resolve(result), true, mock)
  },
  acceptQualificationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptQualificationRequest', 'MTurk', Promise.resolve(result), false, mock)
  },
  acceptQualificationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptQualificationRequest', 'MTurk', Promise.reject(result), true, mock)
  },
  approveAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  approveAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  approveAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  associateQualificationWithWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQualificationWithWorker', 'MTurk', Promise.resolve(result), true, mock)
  },
  associateQualificationWithWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQualificationWithWorker', 'MTurk', Promise.resolve(result), false, mock)
  },
  associateQualificationWithWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQualificationWithWorker', 'MTurk', Promise.reject(result), true, mock)
  },
  createAdditionalAssignmentsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAdditionalAssignmentsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  createAdditionalAssignmentsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAdditionalAssignmentsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  createAdditionalAssignmentsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAdditionalAssignmentsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  createHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  createHITType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITType', 'MTurk', Promise.reject(result), true, mock)
  },
  createHITWithHITType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITWithHITType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITWithHITTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITWithHITType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITWithHITTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHITWithHITType', 'MTurk', Promise.reject(result), true, mock)
  },
  createQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  createWorkerBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerBlock', 'MTurk', Promise.resolve(result), true, mock)
  },
  createWorkerBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerBlock', 'MTurk', Promise.resolve(result), false, mock)
  },
  createWorkerBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWorkerBlock', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteWorkerBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkerBlock', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteWorkerBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkerBlock', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteWorkerBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWorkerBlock', 'MTurk', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MTurk', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MTurk', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MTurk', Promise.reject(result), true, mock)
  },
  disassociateQualificationFromWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQualificationFromWorker', 'MTurk', Promise.resolve(result), true, mock)
  },
  disassociateQualificationFromWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQualificationFromWorker', 'MTurk', Promise.resolve(result), false, mock)
  },
  disassociateQualificationFromWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQualificationFromWorker', 'MTurk', Promise.reject(result), true, mock)
  },
  getAccountBalance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountBalance', 'MTurk', Promise.resolve(result), true, mock)
  },
  getAccountBalanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountBalance', 'MTurk', Promise.resolve(result), false, mock)
  },
  getAccountBalanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountBalance', 'MTurk', Promise.reject(result), true, mock)
  },
  getAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  getAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  getAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  getFileUploadURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFileUploadURL', 'MTurk', Promise.resolve(result), true, mock)
  },
  getFileUploadURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFileUploadURL', 'MTurk', Promise.resolve(result), false, mock)
  },
  getFileUploadURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFileUploadURL', 'MTurk', Promise.reject(result), true, mock)
  },
  getHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  getHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  getHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  getQualificationScore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationScore', 'MTurk', Promise.resolve(result), true, mock)
  },
  getQualificationScoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationScore', 'MTurk', Promise.resolve(result), false, mock)
  },
  getQualificationScoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationScore', 'MTurk', Promise.reject(result), true, mock)
  },
  getQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  getQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  getQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  listAssignmentsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssignmentsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  listAssignmentsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssignmentsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  listAssignmentsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssignmentsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  listBonusPayments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBonusPayments', 'MTurk', Promise.resolve(result), true, mock)
  },
  listBonusPaymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBonusPayments', 'MTurk', Promise.resolve(result), false, mock)
  },
  listBonusPaymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBonusPayments', 'MTurk', Promise.reject(result), true, mock)
  },
  listHITs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITs', 'MTurk', Promise.resolve(result), true, mock)
  },
  listHITsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITs', 'MTurk', Promise.resolve(result), false, mock)
  },
  listHITsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITs', 'MTurk', Promise.reject(result), true, mock)
  },
  listHITsForQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITsForQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  listHITsForQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITsForQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  listHITsForQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHITsForQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  listQualificationRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationRequests', 'MTurk', Promise.resolve(result), true, mock)
  },
  listQualificationRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationRequests', 'MTurk', Promise.resolve(result), false, mock)
  },
  listQualificationRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationRequests', 'MTurk', Promise.reject(result), true, mock)
  },
  listQualificationTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationTypes', 'MTurk', Promise.resolve(result), true, mock)
  },
  listQualificationTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationTypes', 'MTurk', Promise.resolve(result), false, mock)
  },
  listQualificationTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQualificationTypes', 'MTurk', Promise.reject(result), true, mock)
  },
  listReviewPolicyResultsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewPolicyResultsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  listReviewPolicyResultsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewPolicyResultsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  listReviewPolicyResultsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewPolicyResultsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  listReviewableHITs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewableHITs', 'MTurk', Promise.resolve(result), true, mock)
  },
  listReviewableHITsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewableHITs', 'MTurk', Promise.resolve(result), false, mock)
  },
  listReviewableHITsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReviewableHITs', 'MTurk', Promise.reject(result), true, mock)
  },
  listWorkerBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerBlocks', 'MTurk', Promise.resolve(result), true, mock)
  },
  listWorkerBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerBlocks', 'MTurk', Promise.resolve(result), false, mock)
  },
  listWorkerBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkerBlocks', 'MTurk', Promise.reject(result), true, mock)
  },
  listWorkersWithQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkersWithQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  listWorkersWithQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkersWithQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  listWorkersWithQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWorkersWithQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  notifyWorkers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWorkers', 'MTurk', Promise.resolve(result), true, mock)
  },
  notifyWorkersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWorkers', 'MTurk', Promise.resolve(result), false, mock)
  },
  notifyWorkersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWorkers', 'MTurk', Promise.reject(result), true, mock)
  },
  rejectAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  rejectAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  rejectAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  rejectQualificationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectQualificationRequest', 'MTurk', Promise.resolve(result), true, mock)
  },
  rejectQualificationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectQualificationRequest', 'MTurk', Promise.resolve(result), false, mock)
  },
  rejectQualificationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectQualificationRequest', 'MTurk', Promise.reject(result), true, mock)
  },
  sendBonus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendBonus', 'MTurk', Promise.resolve(result), true, mock)
  },
  sendBonusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendBonus', 'MTurk', Promise.resolve(result), false, mock)
  },
  sendBonusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendBonus', 'MTurk', Promise.reject(result), true, mock)
  },
  sendTestEventNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTestEventNotification', 'MTurk', Promise.resolve(result), true, mock)
  },
  sendTestEventNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTestEventNotification', 'MTurk', Promise.resolve(result), false, mock)
  },
  sendTestEventNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendTestEventNotification', 'MTurk', Promise.reject(result), true, mock)
  },
  updateExpirationForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExpirationForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateExpirationForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExpirationForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateExpirationForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExpirationForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  updateHITReviewStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITReviewStatus', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateHITReviewStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITReviewStatus', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateHITReviewStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITReviewStatus', 'MTurk', Promise.reject(result), true, mock)
  },
  updateHITTypeOfHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITTypeOfHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateHITTypeOfHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITTypeOfHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateHITTypeOfHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHITTypeOfHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  updateNotificationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationSettings', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateNotificationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationSettings', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateNotificationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationSettings', 'MTurk', Promise.reject(result), true, mock)
  },
  updateQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
}
