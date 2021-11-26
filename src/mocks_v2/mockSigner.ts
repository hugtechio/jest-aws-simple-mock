
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
  export const mockSigner = {
  addProfilePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfilePermission', 'Signer', Promise.resolve(result), true, mock)
  },
  addProfilePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfilePermission', 'Signer', Promise.resolve(result), false, mock)
  },
  addProfilePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfilePermission', 'Signer', Promise.reject(result), true, mock)
  },
  cancelSigningProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSigningProfile', 'Signer', Promise.resolve(result), true, mock)
  },
  cancelSigningProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSigningProfile', 'Signer', Promise.resolve(result), false, mock)
  },
  cancelSigningProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSigningProfile', 'Signer', Promise.reject(result), true, mock)
  },
  describeSigningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSigningJob', 'Signer', Promise.resolve(result), true, mock)
  },
  describeSigningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSigningJob', 'Signer', Promise.resolve(result), false, mock)
  },
  describeSigningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSigningJob', 'Signer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Signer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Signer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Signer', Promise.reject(result), true, mock)
  },
  getSigningPlatform: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningPlatform', 'Signer', Promise.resolve(result), true, mock)
  },
  getSigningPlatformAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningPlatform', 'Signer', Promise.resolve(result), false, mock)
  },
  getSigningPlatformThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningPlatform', 'Signer', Promise.reject(result), true, mock)
  },
  getSigningProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningProfile', 'Signer', Promise.resolve(result), true, mock)
  },
  getSigningProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningProfile', 'Signer', Promise.resolve(result), false, mock)
  },
  getSigningProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSigningProfile', 'Signer', Promise.reject(result), true, mock)
  },
  listProfilePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilePermissions', 'Signer', Promise.resolve(result), true, mock)
  },
  listProfilePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilePermissions', 'Signer', Promise.resolve(result), false, mock)
  },
  listProfilePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilePermissions', 'Signer', Promise.reject(result), true, mock)
  },
  listSigningJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningJobs', 'Signer', Promise.resolve(result), true, mock)
  },
  listSigningJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningJobs', 'Signer', Promise.resolve(result), false, mock)
  },
  listSigningJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningJobs', 'Signer', Promise.reject(result), true, mock)
  },
  listSigningPlatforms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningPlatforms', 'Signer', Promise.resolve(result), true, mock)
  },
  listSigningPlatformsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningPlatforms', 'Signer', Promise.resolve(result), false, mock)
  },
  listSigningPlatformsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningPlatforms', 'Signer', Promise.reject(result), true, mock)
  },
  listSigningProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningProfiles', 'Signer', Promise.resolve(result), true, mock)
  },
  listSigningProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningProfiles', 'Signer', Promise.resolve(result), false, mock)
  },
  listSigningProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSigningProfiles', 'Signer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Signer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Signer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Signer', Promise.reject(result), true, mock)
  },
  putSigningProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSigningProfile', 'Signer', Promise.resolve(result), true, mock)
  },
  putSigningProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSigningProfile', 'Signer', Promise.resolve(result), false, mock)
  },
  putSigningProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSigningProfile', 'Signer', Promise.reject(result), true, mock)
  },
  removeProfilePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeProfilePermission', 'Signer', Promise.resolve(result), true, mock)
  },
  removeProfilePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeProfilePermission', 'Signer', Promise.resolve(result), false, mock)
  },
  removeProfilePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeProfilePermission', 'Signer', Promise.reject(result), true, mock)
  },
  revokeSignature: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSignature', 'Signer', Promise.resolve(result), true, mock)
  },
  revokeSignatureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSignature', 'Signer', Promise.resolve(result), false, mock)
  },
  revokeSignatureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSignature', 'Signer', Promise.reject(result), true, mock)
  },
  revokeSigningProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSigningProfile', 'Signer', Promise.resolve(result), true, mock)
  },
  revokeSigningProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSigningProfile', 'Signer', Promise.resolve(result), false, mock)
  },
  revokeSigningProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSigningProfile', 'Signer', Promise.reject(result), true, mock)
  },
  startSigningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSigningJob', 'Signer', Promise.resolve(result), true, mock)
  },
  startSigningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSigningJob', 'Signer', Promise.resolve(result), false, mock)
  },
  startSigningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSigningJob', 'Signer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Signer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Signer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Signer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Signer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Signer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Signer', Promise.reject(result), true, mock)
  },
}
