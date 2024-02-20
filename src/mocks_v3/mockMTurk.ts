
/**
* @description mocks_v3:mockMTurk module is mocks for AWS-SDK V3
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
export const mockMTurk = {
  acceptQualificationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'acceptQualificationRequest', 'MTurk', Promise.resolve(result), true, mock)
  },
  acceptQualificationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'acceptQualificationRequest', 'MTurk', Promise.resolve(result), false, mock)
  },
  acceptQualificationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'acceptQualificationRequest', 'MTurk', Promise.reject(result), true, mock)
  },
  approveAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'approveAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  approveAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'approveAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  approveAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'approveAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  associateQualificationWithWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'associateQualificationWithWorker', 'MTurk', Promise.resolve(result), true, mock)
  },
  associateQualificationWithWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'associateQualificationWithWorker', 'MTurk', Promise.resolve(result), false, mock)
  },
  associateQualificationWithWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'associateQualificationWithWorker', 'MTurk', Promise.reject(result), true, mock)
  },
  createAdditionalAssignmentsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createAdditionalAssignmentsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  createAdditionalAssignmentsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createAdditionalAssignmentsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  createAdditionalAssignmentsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createAdditionalAssignmentsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  createHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  createHITType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITType', 'MTurk', Promise.reject(result), true, mock)
  },
  createHITWithHITType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITWithHITType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createHITWithHITTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITWithHITType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createHITWithHITTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createHITWithHITType', 'MTurk', Promise.reject(result), true, mock)
  },
  createQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  createQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  createQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  createWorkerBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createWorkerBlock', 'MTurk', Promise.resolve(result), true, mock)
  },
  createWorkerBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createWorkerBlock', 'MTurk', Promise.resolve(result), false, mock)
  },
  createWorkerBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'createWorkerBlock', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  deleteWorkerBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteWorkerBlock', 'MTurk', Promise.resolve(result), true, mock)
  },
  deleteWorkerBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteWorkerBlock', 'MTurk', Promise.resolve(result), false, mock)
  },
  deleteWorkerBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'deleteWorkerBlock', 'MTurk', Promise.reject(result), true, mock)
  },
  disassociateQualificationFromWorker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'disassociateQualificationFromWorker', 'MTurk', Promise.resolve(result), true, mock)
  },
  disassociateQualificationFromWorkerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'disassociateQualificationFromWorker', 'MTurk', Promise.resolve(result), false, mock)
  },
  disassociateQualificationFromWorkerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'disassociateQualificationFromWorker', 'MTurk', Promise.reject(result), true, mock)
  },
  getAccountBalance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAccountBalance', 'MTurk', Promise.resolve(result), true, mock)
  },
  getAccountBalanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAccountBalance', 'MTurk', Promise.resolve(result), false, mock)
  },
  getAccountBalanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAccountBalance', 'MTurk', Promise.reject(result), true, mock)
  },
  getAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  getAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  getAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  getFileUploadURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getFileUploadURL', 'MTurk', Promise.resolve(result), true, mock)
  },
  getFileUploadURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getFileUploadURL', 'MTurk', Promise.resolve(result), false, mock)
  },
  getFileUploadURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getFileUploadURL', 'MTurk', Promise.reject(result), true, mock)
  },
  getHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  getHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  getHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  getQualificationScore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationScore', 'MTurk', Promise.resolve(result), true, mock)
  },
  getQualificationScoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationScore', 'MTurk', Promise.resolve(result), false, mock)
  },
  getQualificationScoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationScore', 'MTurk', Promise.reject(result), true, mock)
  },
  getQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  getQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  getQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'getQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  listAssignmentsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listAssignmentsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  listAssignmentsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listAssignmentsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  listAssignmentsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listAssignmentsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  listBonusPayments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listBonusPayments', 'MTurk', Promise.resolve(result), true, mock)
  },
  listBonusPaymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listBonusPayments', 'MTurk', Promise.resolve(result), false, mock)
  },
  listBonusPaymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listBonusPayments', 'MTurk', Promise.reject(result), true, mock)
  },
  listHITs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITs', 'MTurk', Promise.resolve(result), true, mock)
  },
  listHITsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITs', 'MTurk', Promise.resolve(result), false, mock)
  },
  listHITsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITs', 'MTurk', Promise.reject(result), true, mock)
  },
  listHITsForQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITsForQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  listHITsForQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITsForQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  listHITsForQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listHITsForQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  listQualificationRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationRequests', 'MTurk', Promise.resolve(result), true, mock)
  },
  listQualificationRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationRequests', 'MTurk', Promise.resolve(result), false, mock)
  },
  listQualificationRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationRequests', 'MTurk', Promise.reject(result), true, mock)
  },
  listQualificationTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationTypes', 'MTurk', Promise.resolve(result), true, mock)
  },
  listQualificationTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationTypes', 'MTurk', Promise.resolve(result), false, mock)
  },
  listQualificationTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listQualificationTypes', 'MTurk', Promise.reject(result), true, mock)
  },
  listReviewPolicyResultsForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewPolicyResultsForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  listReviewPolicyResultsForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewPolicyResultsForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  listReviewPolicyResultsForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewPolicyResultsForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  listReviewableHITs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewableHITs', 'MTurk', Promise.resolve(result), true, mock)
  },
  listReviewableHITsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewableHITs', 'MTurk', Promise.resolve(result), false, mock)
  },
  listReviewableHITsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listReviewableHITs', 'MTurk', Promise.reject(result), true, mock)
  },
  listWorkerBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkerBlocks', 'MTurk', Promise.resolve(result), true, mock)
  },
  listWorkerBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkerBlocks', 'MTurk', Promise.resolve(result), false, mock)
  },
  listWorkerBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkerBlocks', 'MTurk', Promise.reject(result), true, mock)
  },
  listWorkersWithQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkersWithQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  listWorkersWithQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkersWithQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  listWorkersWithQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'listWorkersWithQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  notifyWorkers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'notifyWorkers', 'MTurk', Promise.resolve(result), true, mock)
  },
  notifyWorkersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'notifyWorkers', 'MTurk', Promise.resolve(result), false, mock)
  },
  notifyWorkersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'notifyWorkers', 'MTurk', Promise.reject(result), true, mock)
  },
  rejectAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectAssignment', 'MTurk', Promise.resolve(result), true, mock)
  },
  rejectAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectAssignment', 'MTurk', Promise.resolve(result), false, mock)
  },
  rejectAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectAssignment', 'MTurk', Promise.reject(result), true, mock)
  },
  rejectQualificationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectQualificationRequest', 'MTurk', Promise.resolve(result), true, mock)
  },
  rejectQualificationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectQualificationRequest', 'MTurk', Promise.resolve(result), false, mock)
  },
  rejectQualificationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'rejectQualificationRequest', 'MTurk', Promise.reject(result), true, mock)
  },
  sendBonus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendBonus', 'MTurk', Promise.resolve(result), true, mock)
  },
  sendBonusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendBonus', 'MTurk', Promise.resolve(result), false, mock)
  },
  sendBonusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendBonus', 'MTurk', Promise.reject(result), true, mock)
  },
  sendTestEventNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendTestEventNotification', 'MTurk', Promise.resolve(result), true, mock)
  },
  sendTestEventNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendTestEventNotification', 'MTurk', Promise.resolve(result), false, mock)
  },
  sendTestEventNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'sendTestEventNotification', 'MTurk', Promise.reject(result), true, mock)
  },
  updateExpirationForHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateExpirationForHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateExpirationForHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateExpirationForHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateExpirationForHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateExpirationForHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  updateHITReviewStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITReviewStatus', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateHITReviewStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITReviewStatus', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateHITReviewStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITReviewStatus', 'MTurk', Promise.reject(result), true, mock)
  },
  updateHITTypeOfHIT: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITTypeOfHIT', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateHITTypeOfHITAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITTypeOfHIT', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateHITTypeOfHITThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateHITTypeOfHIT', 'MTurk', Promise.reject(result), true, mock)
  },
  updateNotificationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateNotificationSettings', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateNotificationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateNotificationSettings', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateNotificationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateNotificationSettings', 'MTurk', Promise.reject(result), true, mock)
  },
  updateQualificationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateQualificationType', 'MTurk', Promise.resolve(result), true, mock)
  },
  updateQualificationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateQualificationType', 'MTurk', Promise.resolve(result), false, mock)
  },
  updateQualificationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'updateQualificationType', 'MTurk', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'send', 'MTurkClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'send', 'MTurkClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mturk', 'send', 'MTurkClient', Promise.reject(result), true, mock)
  }
}
