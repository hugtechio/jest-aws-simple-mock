
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
  export const mockSupport = {
  addAttachmentsToSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addAttachmentsToSet', 'Support', Promise.resolve(result), true, mock)
  },
  addAttachmentsToSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addAttachmentsToSet', 'Support', Promise.resolve(result), false, mock)
  },
  addAttachmentsToSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addAttachmentsToSet', 'Support', Promise.reject(result), true, mock)
  },
  addCommunicationToCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCommunicationToCase', 'Support', Promise.resolve(result), true, mock)
  },
  addCommunicationToCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCommunicationToCase', 'Support', Promise.resolve(result), false, mock)
  },
  addCommunicationToCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCommunicationToCase', 'Support', Promise.reject(result), true, mock)
  },
  createCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCase', 'Support', Promise.resolve(result), true, mock)
  },
  createCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCase', 'Support', Promise.resolve(result), false, mock)
  },
  createCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCase', 'Support', Promise.reject(result), true, mock)
  },
  describeAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttachment', 'Support', Promise.resolve(result), true, mock)
  },
  describeAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttachment', 'Support', Promise.resolve(result), false, mock)
  },
  describeAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttachment', 'Support', Promise.reject(result), true, mock)
  },
  describeCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCases', 'Support', Promise.resolve(result), true, mock)
  },
  describeCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCases', 'Support', Promise.resolve(result), false, mock)
  },
  describeCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCases', 'Support', Promise.reject(result), true, mock)
  },
  describeCommunications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCommunications', 'Support', Promise.resolve(result), true, mock)
  },
  describeCommunicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCommunications', 'Support', Promise.resolve(result), false, mock)
  },
  describeCommunicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCommunications', 'Support', Promise.reject(result), true, mock)
  },
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Support', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Support', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'Support', Promise.reject(result), true, mock)
  },
  describeSeverityLevels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSeverityLevels', 'Support', Promise.resolve(result), true, mock)
  },
  describeSeverityLevelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSeverityLevels', 'Support', Promise.resolve(result), false, mock)
  },
  describeSeverityLevelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSeverityLevels', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckRefreshStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckRefreshStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckRefreshStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckRefreshStatuses', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckResult', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckResult', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckResult', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorCheckSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckSummaries', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorCheckSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckSummaries', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorCheckSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorCheckSummaries', 'Support', Promise.reject(result), true, mock)
  },
  describeTrustedAdvisorChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorChecks', 'Support', Promise.resolve(result), true, mock)
  },
  describeTrustedAdvisorChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorChecks', 'Support', Promise.resolve(result), false, mock)
  },
  describeTrustedAdvisorChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrustedAdvisorChecks', 'Support', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Support', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Support', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Support', Promise.reject(result), true, mock)
  },
  refreshTrustedAdvisorCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshTrustedAdvisorCheck', 'Support', Promise.resolve(result), true, mock)
  },
  refreshTrustedAdvisorCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshTrustedAdvisorCheck', 'Support', Promise.resolve(result), false, mock)
  },
  refreshTrustedAdvisorCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshTrustedAdvisorCheck', 'Support', Promise.reject(result), true, mock)
  },
  resolveCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCase', 'Support', Promise.resolve(result), true, mock)
  },
  resolveCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCase', 'Support', Promise.resolve(result), false, mock)
  },
  resolveCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveCase', 'Support', Promise.reject(result), true, mock)
  },
}
