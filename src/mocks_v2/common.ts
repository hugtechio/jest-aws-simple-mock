
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
  const awsSdkObject = mod[name]
  new awsSdkObject
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  if (!resolved) return tmp.mockImplementationOnce(() => Template.throw(result)) 
  return (once) ? tmp.mockImplementationOnce(() => Template.promise(result)) : tmp.mockImplementation(() => Template.promise(result))
}

export function attachMockForDynamoDocClient(method:string, result:any, once:boolean=true, resolved=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(mod.DynamoDB.DocumentClient.prototype, method)
  if (!resolved) return tmp.mockImplementationOnce(() => Template.throw(result)) 
  return (once) ? tmp.mockImplementationOnce(() => Template.promise(result)) : tmp.mockImplementation(() => Template.promise(result))
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


