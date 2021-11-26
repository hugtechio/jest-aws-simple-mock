
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
  export const mockSavingsplans = {
  createSavingsPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSavingsPlan', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  createSavingsPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSavingsPlan', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  createSavingsPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSavingsPlan', 'Savingsplans', Promise.reject(result), true, mock)
  },
  deleteQueuedSavingsPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueuedSavingsPlan', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  deleteQueuedSavingsPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueuedSavingsPlan', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  deleteQueuedSavingsPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQueuedSavingsPlan', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlanRates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlanRates', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlanRatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlanRates', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlanRatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlanRates', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlans', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlans', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlans', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlansOfferingRates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferingRates', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansOfferingRatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferingRates', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansOfferingRatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferingRates', 'Savingsplans', Promise.reject(result), true, mock)
  },
  describeSavingsPlansOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferings', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  describeSavingsPlansOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferings', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  describeSavingsPlansOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSavingsPlansOfferings', 'Savingsplans', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Savingsplans', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Savingsplans', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Savingsplans', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Savingsplans', Promise.reject(result), true, mock)
  },
}
