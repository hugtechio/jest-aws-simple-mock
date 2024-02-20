
/**
* @description mocks_v3:mockB2bi module is mocks for AWS-SDK V3
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
export const mockB2bi = {
  createCapability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createCapability', 'B2bi', Promise.resolve(result), true, mock)
  },
  createCapabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createCapability', 'B2bi', Promise.resolve(result), false, mock)
  },
  createCapabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createCapability', 'B2bi', Promise.reject(result), true, mock)
  },
  createPartnership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createPartnership', 'B2bi', Promise.resolve(result), true, mock)
  },
  createPartnershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createPartnership', 'B2bi', Promise.resolve(result), false, mock)
  },
  createPartnershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createPartnership', 'B2bi', Promise.reject(result), true, mock)
  },
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createProfile', 'B2bi', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createProfile', 'B2bi', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createProfile', 'B2bi', Promise.reject(result), true, mock)
  },
  createTransformer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createTransformer', 'B2bi', Promise.resolve(result), true, mock)
  },
  createTransformerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createTransformer', 'B2bi', Promise.resolve(result), false, mock)
  },
  createTransformerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'createTransformer', 'B2bi', Promise.reject(result), true, mock)
  },
  deleteCapability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteCapability', 'B2bi', Promise.resolve(result), true, mock)
  },
  deleteCapabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteCapability', 'B2bi', Promise.resolve(result), false, mock)
  },
  deleteCapabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteCapability', 'B2bi', Promise.reject(result), true, mock)
  },
  deletePartnership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deletePartnership', 'B2bi', Promise.resolve(result), true, mock)
  },
  deletePartnershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deletePartnership', 'B2bi', Promise.resolve(result), false, mock)
  },
  deletePartnershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deletePartnership', 'B2bi', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteProfile', 'B2bi', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteProfile', 'B2bi', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteProfile', 'B2bi', Promise.reject(result), true, mock)
  },
  deleteTransformer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteTransformer', 'B2bi', Promise.resolve(result), true, mock)
  },
  deleteTransformerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteTransformer', 'B2bi', Promise.resolve(result), false, mock)
  },
  deleteTransformerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'deleteTransformer', 'B2bi', Promise.reject(result), true, mock)
  },
  getCapability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getCapability', 'B2bi', Promise.resolve(result), true, mock)
  },
  getCapabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getCapability', 'B2bi', Promise.resolve(result), false, mock)
  },
  getCapabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getCapability', 'B2bi', Promise.reject(result), true, mock)
  },
  getPartnership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getPartnership', 'B2bi', Promise.resolve(result), true, mock)
  },
  getPartnershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getPartnership', 'B2bi', Promise.resolve(result), false, mock)
  },
  getPartnershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getPartnership', 'B2bi', Promise.reject(result), true, mock)
  },
  getProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getProfile', 'B2bi', Promise.resolve(result), true, mock)
  },
  getProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getProfile', 'B2bi', Promise.resolve(result), false, mock)
  },
  getProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getProfile', 'B2bi', Promise.reject(result), true, mock)
  },
  getTransformer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformer', 'B2bi', Promise.resolve(result), true, mock)
  },
  getTransformerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformer', 'B2bi', Promise.resolve(result), false, mock)
  },
  getTransformerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformer', 'B2bi', Promise.reject(result), true, mock)
  },
  getTransformerJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformerJob', 'B2bi', Promise.resolve(result), true, mock)
  },
  getTransformerJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformerJob', 'B2bi', Promise.resolve(result), false, mock)
  },
  getTransformerJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'getTransformerJob', 'B2bi', Promise.reject(result), true, mock)
  },
  listCapabilities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listCapabilities', 'B2bi', Promise.resolve(result), true, mock)
  },
  listCapabilitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listCapabilities', 'B2bi', Promise.resolve(result), false, mock)
  },
  listCapabilitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listCapabilities', 'B2bi', Promise.reject(result), true, mock)
  },
  listPartnerships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listPartnerships', 'B2bi', Promise.resolve(result), true, mock)
  },
  listPartnershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listPartnerships', 'B2bi', Promise.resolve(result), false, mock)
  },
  listPartnershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listPartnerships', 'B2bi', Promise.reject(result), true, mock)
  },
  listProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listProfiles', 'B2bi', Promise.resolve(result), true, mock)
  },
  listProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listProfiles', 'B2bi', Promise.resolve(result), false, mock)
  },
  listProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listProfiles', 'B2bi', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTagsForResource', 'B2bi', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTagsForResource', 'B2bi', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTagsForResource', 'B2bi', Promise.reject(result), true, mock)
  },
  listTransformers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTransformers', 'B2bi', Promise.resolve(result), true, mock)
  },
  listTransformersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTransformers', 'B2bi', Promise.resolve(result), false, mock)
  },
  listTransformersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'listTransformers', 'B2bi', Promise.reject(result), true, mock)
  },
  startTransformerJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'startTransformerJob', 'B2bi', Promise.resolve(result), true, mock)
  },
  startTransformerJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'startTransformerJob', 'B2bi', Promise.resolve(result), false, mock)
  },
  startTransformerJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'startTransformerJob', 'B2bi', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'tagResource', 'B2bi', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'tagResource', 'B2bi', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'tagResource', 'B2bi', Promise.reject(result), true, mock)
  },
  testMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testMapping', 'B2bi', Promise.resolve(result), true, mock)
  },
  testMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testMapping', 'B2bi', Promise.resolve(result), false, mock)
  },
  testMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testMapping', 'B2bi', Promise.reject(result), true, mock)
  },
  testParsing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testParsing', 'B2bi', Promise.resolve(result), true, mock)
  },
  testParsingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testParsing', 'B2bi', Promise.resolve(result), false, mock)
  },
  testParsingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'testParsing', 'B2bi', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'untagResource', 'B2bi', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'untagResource', 'B2bi', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'untagResource', 'B2bi', Promise.reject(result), true, mock)
  },
  updateCapability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateCapability', 'B2bi', Promise.resolve(result), true, mock)
  },
  updateCapabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateCapability', 'B2bi', Promise.resolve(result), false, mock)
  },
  updateCapabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateCapability', 'B2bi', Promise.reject(result), true, mock)
  },
  updatePartnership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updatePartnership', 'B2bi', Promise.resolve(result), true, mock)
  },
  updatePartnershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updatePartnership', 'B2bi', Promise.resolve(result), false, mock)
  },
  updatePartnershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updatePartnership', 'B2bi', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateProfile', 'B2bi', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateProfile', 'B2bi', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateProfile', 'B2bi', Promise.reject(result), true, mock)
  },
  updateTransformer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateTransformer', 'B2bi', Promise.resolve(result), true, mock)
  },
  updateTransformerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateTransformer', 'B2bi', Promise.resolve(result), false, mock)
  },
  updateTransformerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'updateTransformer', 'B2bi', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'send', 'B2biClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'send', 'B2biClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-b2bi', 'send', 'B2biClient', Promise.reject(result), true, mock)
  }
}
