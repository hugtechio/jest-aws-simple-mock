
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockServiceQuotas = {
  associateServiceQuotaTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'associateServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  associateServiceQuotaTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'associateServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  associateServiceQuotaTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'associateServiceQuotaTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  deleteServiceQuotaIncreaseRequestFromTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'deleteServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  deleteServiceQuotaIncreaseRequestFromTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'deleteServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  deleteServiceQuotaIncreaseRequestFromTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'deleteServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'destroy', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'destroy', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'destroy', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  disassociateServiceQuotaTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'disassociateServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  disassociateServiceQuotaTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'disassociateServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  disassociateServiceQuotaTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'disassociateServiceQuotaTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  getAWSDefaultServiceQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAWSDefaultServiceQuota', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  getAWSDefaultServiceQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAWSDefaultServiceQuota', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  getAWSDefaultServiceQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAWSDefaultServiceQuota', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  getAssociationForServiceQuotaTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAssociationForServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  getAssociationForServiceQuotaTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAssociationForServiceQuotaTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  getAssociationForServiceQuotaTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getAssociationForServiceQuotaTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  getRequestedServiceQuotaChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getRequestedServiceQuotaChange', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  getRequestedServiceQuotaChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getRequestedServiceQuotaChange', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  getRequestedServiceQuotaChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getRequestedServiceQuotaChange', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  getServiceQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuota', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  getServiceQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuota', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  getServiceQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuota', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  getServiceQuotaIncreaseRequestFromTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  getServiceQuotaIncreaseRequestFromTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  getServiceQuotaIncreaseRequestFromTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'getServiceQuotaIncreaseRequestFromTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listAWSDefaultServiceQuotas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listAWSDefaultServiceQuotas', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listAWSDefaultServiceQuotasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listAWSDefaultServiceQuotas', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listAWSDefaultServiceQuotasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listAWSDefaultServiceQuotas', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listRequestedServiceQuotaChangeHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistory', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listRequestedServiceQuotaChangeHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistory', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listRequestedServiceQuotaChangeHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistory', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listRequestedServiceQuotaChangeHistoryByQuota: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistoryByQuota', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listRequestedServiceQuotaChangeHistoryByQuotaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistoryByQuota', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listRequestedServiceQuotaChangeHistoryByQuotaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listRequestedServiceQuotaChangeHistoryByQuota', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listServiceQuotaIncreaseRequestsInTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotaIncreaseRequestsInTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listServiceQuotaIncreaseRequestsInTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotaIncreaseRequestsInTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listServiceQuotaIncreaseRequestsInTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotaIncreaseRequestsInTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listServiceQuotas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotas', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listServiceQuotasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotas', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listServiceQuotasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServiceQuotas', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServices', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServices', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listServices', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listTagsForResource', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listTagsForResource', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'listTagsForResource', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  putServiceQuotaIncreaseRequestIntoTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'putServiceQuotaIncreaseRequestIntoTemplate', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  putServiceQuotaIncreaseRequestIntoTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'putServiceQuotaIncreaseRequestIntoTemplate', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  putServiceQuotaIncreaseRequestIntoTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'putServiceQuotaIncreaseRequestIntoTemplate', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  requestServiceQuotaIncrease: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'requestServiceQuotaIncrease', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  requestServiceQuotaIncreaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'requestServiceQuotaIncrease', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  requestServiceQuotaIncreaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'requestServiceQuotaIncrease', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'tagResource', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'tagResource', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'tagResource', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'untagResource', 'ServiceQuotas', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'untagResource', 'ServiceQuotas', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'untagResource', 'ServiceQuotas', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'send', 'ServiceQuotasClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'send', 'ServiceQuotasClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-quotas', 'send', 'ServiceQuotasClient', Promise.reject(result), true, mock)
  }
}