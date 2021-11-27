
/**
* @description mocks_v2:common.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


const Template = {
  promise: function(result: any): any {
    return {
      promise: () => Promise.resolve(result)
    };
  },
  throw: function(result: any): any {
    return {
      promise: () => Promise.reject(result)
    };
  }
};

export function attachMock(method:string, name:string, result:any, once:boolean=true, resolved=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  let awsSdkObject 
  let service
  let returnValue = Template.promise(result)
  if (name === 'DocumentClient') {
    awsSdkObject = mod.DynamoDB.DocumentClient
    new awsSdkObject
    service = awsSdkObject
  } else {
    awsSdkObject = mod[name]
    new awsSdkObject
    service = currentVersion(mod[name].services)
  }

  if (name === 'S3' && ['getSignedUrl', 'getSignedUrlPromise'].indexOf(method) >= 0) {
    service = awsSdkObject
    if (method === 'getSignedUrl') returnValue = result
    else if (method === 'getSignedUrlPromise') returnValue = Promise.resolve(result)
  }

  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(service.prototype, method)
  if (!resolved) return tmp.mockImplementationOnce(() => Template.throw(result)) 
  return (once) ? tmp.mockImplementationOnce(() => returnValue) : tmp.mockImplementation(() => returnValue)
}

export const currentVersion = (services: any): any => {
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


