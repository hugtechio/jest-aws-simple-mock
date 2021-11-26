
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSupport = {
  addAttachmentsToSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addAttachmentsToSet', 'Support', Promise.resolve(result), true, mock)
  },
  addAttachmentsToSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addAttachmentsToSet', 'Support', Promise.resolve(result), false, mock)
  },
  addAttachmentsToSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addAttachmentsToSet', 'Support', Promise.reject(result), true, mock)
  },
  addCommunicationToCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addCommunicationToCase', 'Support', Promise.resolve(result), true, mock)
  },
  addCommunicationToCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addCommunicationToCase', 'Support', Promise.resolve(result), false, mock)
  },
  addCommunicationToCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'addCommunicationToCase', 'Support', Promise.reject(result), true, mock)
  },
  createCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'createCase', 'Support', Promise.resolve(result), true, mock)
  },
  createCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'createCase', 'Support', Promise.resolve(result), false, mock)
  },
  createCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'createCase', 'Support', Promise.reject(result), true, mock)
  },
  describeAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeAttachment', 'Support', Promise.resolve(result), true, mock)
  },
  describeAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeAttachment', 'Support', Promise.resolve(result), false, mock)
  },
  describeAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeAttachment', 'Support', Promise.reject(result), true, mock)
  },
  describeCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCases', 'Support', Promise.resolve(result), true, mock)
  },
  describeCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCases', 'Support', Promise.resolve(result), false, mock)
  },
  describeCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCases', 'Support', Promise.reject(result), true, mock)
  },
  describeCommunications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCommunications', 'Support', Promise.resolve(result), true, mock)
  },
  describeCommunicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCommunications', 'Support', Promise.resolve(result), false, mock)
  },
  describeCommunicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeCommunications', 'Support', Promise.reject(result), true, mock)
  },
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeServices', 'Support', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeServices', 'Support', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeServices', 'Support', Promise.reject(result), true, mock)
  },
  describeSeverityLevels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeSeverityLevels', 'Support', Promise.resolve(result), true, mock)
  },
  describeSeverityLevelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeSeverityLevels', 'Support', Promise.resolve(result), false, mock)
  },
  describeSeverityLevelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeSeverityLevels', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckRefreshStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckRefreshStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckRefreshStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckResult', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckResult', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckResult', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckSummaries', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckSummaries', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorCheckSummaries', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorChecks', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorChecks', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'describeTrustedAdvisorChecks', 'Support', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'destroy', 'Support', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'destroy', 'Support', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'destroy', 'Support', Promise.reject(result), true, mock)
  },
  refreshTrustedAdvisorCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'refreshTrustedAdvisorCheck', 'Support', Promise.resolve(result), true, mock)
  },
  refreshTrustedAdvisorCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'refreshTrustedAdvisorCheck', 'Support', Promise.resolve(result), false, mock)
  },
  refreshTrustedAdvisorCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'refreshTrustedAdvisorCheck', 'Support', Promise.reject(result), true, mock)
  },
  resolveCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'resolveCase', 'Support', Promise.resolve(result), true, mock)
  },
  resolveCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'resolveCase', 'Support', Promise.resolve(result), false, mock)
  },
  resolveCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'resolveCase', 'Support', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'send', 'SupportClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'send', 'SupportClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-support', 'send', 'SupportClient', Promise.reject(result), true, mock)
  }
}