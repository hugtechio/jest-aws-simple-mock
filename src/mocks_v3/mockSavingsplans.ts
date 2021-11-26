
/**
* @description mocks_v3:mockSavingsplans module is mocks for AWS-SDK V3
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

  export const mockSavingsplans = {
  createSavingsPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'createSavingsPlan', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  createSavingsPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'createSavingsPlan', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  createSavingsPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'createSavingsPlan', 'Savingsplans', Promise.reject(result), true, mock)
  },
  deleteQueuedSavingsPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'deleteQueuedSavingsPlan', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  deleteQueuedSavingsPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'deleteQueuedSavingsPlan', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  deleteQueuedSavingsPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'deleteQueuedSavingsPlan', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlanRates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlanRates', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlanRatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlanRates', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlanRatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlanRates', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlans', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlans', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlans', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlansOfferingRates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferingRates', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansOfferingRatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferingRates', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansOfferingRatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferingRates', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlansOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferings', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferings', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'describeSavingsPlansOfferings', 'Savingsplans', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'destroy', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'destroy', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'destroy', 'Savingsplans', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'listTagsForResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'listTagsForResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'listTagsForResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'tagResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'tagResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'tagResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'untagResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'untagResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'untagResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'send', 'SavingsplansClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'send', 'SavingsplansClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-savingsplans', 'send', 'SavingsplansClient', Promise.reject(result), true, mock)
  }
}