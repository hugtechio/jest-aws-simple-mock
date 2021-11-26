
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
  export const mockKinesisVideoSignaling = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
  getIceServerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  getIceServerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  getIceServerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIceServerConfig', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
  sendAlexaOfferToMaster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  sendAlexaOfferToMasterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  sendAlexaOfferToMasterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
}
