
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
  export const mockComprehendMedical = {
  describeEntitiesDetectionV2Job: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  describeEntitiesDetectionV2JobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  describeEntitiesDetectionV2JobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionV2Job', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  describeICD10CMInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  describeICD10CMInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  describeICD10CMInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeICD10CMInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  describePHIDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  describePHIDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  describePHIDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePHIDetectionJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  describeRxNormInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  describeRxNormInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  describeRxNormInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRxNormInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  detectEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  detectEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  detectEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  detectEntitiesV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntitiesV2', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  detectEntitiesV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntitiesV2', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  detectEntitiesV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntitiesV2', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  detectPHI: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPHI', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  detectPHIAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPHI', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  detectPHIThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPHI', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  inferICD10CM: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferICD10CM', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  inferICD10CMAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferICD10CM', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  inferICD10CMThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferICD10CM', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  inferRxNorm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferRxNorm', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  inferRxNormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferRxNorm', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  inferRxNormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inferRxNorm', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  listEntitiesDetectionV2Jobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionV2Jobs', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  listEntitiesDetectionV2JobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionV2Jobs', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  listEntitiesDetectionV2JobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionV2Jobs', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  listICD10CMInferenceJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listICD10CMInferenceJobs', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  listICD10CMInferenceJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listICD10CMInferenceJobs', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  listICD10CMInferenceJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listICD10CMInferenceJobs', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  listPHIDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPHIDetectionJobs', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  listPHIDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPHIDetectionJobs', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  listPHIDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPHIDetectionJobs', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  listRxNormInferenceJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRxNormInferenceJobs', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  listRxNormInferenceJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRxNormInferenceJobs', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  listRxNormInferenceJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRxNormInferenceJobs', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  startEntitiesDetectionV2Job: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  startEntitiesDetectionV2JobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  startEntitiesDetectionV2JobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionV2Job', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  startICD10CMInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  startICD10CMInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  startICD10CMInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startICD10CMInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  startPHIDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  startPHIDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  startPHIDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPHIDetectionJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  startRxNormInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  startRxNormInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  startRxNormInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRxNormInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  stopEntitiesDetectionV2Job: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  stopEntitiesDetectionV2JobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionV2Job', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  stopEntitiesDetectionV2JobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionV2Job', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  stopICD10CMInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  stopICD10CMInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopICD10CMInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  stopICD10CMInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopICD10CMInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  stopPHIDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  stopPHIDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPHIDetectionJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  stopPHIDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPHIDetectionJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
  stopRxNormInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), true, mock)
  },
  stopRxNormInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRxNormInferenceJob', 'ComprehendMedical', Promise.resolve(result), false, mock)
  },
  stopRxNormInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRxNormInferenceJob', 'ComprehendMedical', Promise.reject(result), true, mock)
  },
}
