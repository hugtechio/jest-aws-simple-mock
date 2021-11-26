
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
  export const mockHealth = {
  describeAffectedAccountsForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedAccountsForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  describeAffectedAccountsForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedAccountsForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  describeAffectedAccountsForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedAccountsForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  describeAffectedEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntities', 'Health', Promise.resolve(result), true, mock)
  },
  describeAffectedEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntities', 'Health', Promise.resolve(result), false, mock)
  },
  describeAffectedEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntities', 'Health', Promise.reject(result), true, mock)
  },
  describeAffectedEntitiesForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntitiesForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  describeAffectedEntitiesForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntitiesForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  describeAffectedEntitiesForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAffectedEntitiesForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  describeEntityAggregates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityAggregates', 'Health', Promise.resolve(result), true, mock)
  },
  describeEntityAggregatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityAggregates', 'Health', Promise.resolve(result), false, mock)
  },
  describeEntityAggregatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityAggregates', 'Health', Promise.reject(result), true, mock)
  },
  describeEventAggregates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventAggregates', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventAggregatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventAggregates', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventAggregatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventAggregates', 'Health', Promise.reject(result), true, mock)
  },
  describeEventDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetails', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetails', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetails', 'Health', Promise.reject(result), true, mock)
  },
  describeEventDetailsForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetailsForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventDetailsForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetailsForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventDetailsForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventDetailsForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  describeEventTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTypes', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTypes', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTypes', 'Health', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Health', Promise.reject(result), true, mock)
  },
  describeEventsForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  describeEventsForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  describeEventsForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  describeHealthServiceStatusForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHealthServiceStatusForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  describeHealthServiceStatusForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHealthServiceStatusForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  describeHealthServiceStatusForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHealthServiceStatusForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Health', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Health', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Health', Promise.reject(result), true, mock)
  },
  disableHealthServiceAccessForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableHealthServiceAccessForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  disableHealthServiceAccessForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableHealthServiceAccessForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  disableHealthServiceAccessForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableHealthServiceAccessForOrganization', 'Health', Promise.reject(result), true, mock)
  },
  enableHealthServiceAccessForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableHealthServiceAccessForOrganization', 'Health', Promise.resolve(result), true, mock)
  },
  enableHealthServiceAccessForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableHealthServiceAccessForOrganization', 'Health', Promise.resolve(result), false, mock)
  },
  enableHealthServiceAccessForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableHealthServiceAccessForOrganization', 'Health', Promise.reject(result), true, mock)
  },
}
