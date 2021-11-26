
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
  export const mockGameLift = {
  acceptMatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptMatch', 'GameLift', Promise.resolve(result), true, mock)
  },
  acceptMatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptMatch', 'GameLift', Promise.resolve(result), false, mock)
  },
  acceptMatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptMatch', 'GameLift', Promise.reject(result), true, mock)
  },
  claimGameServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimGameServer', 'GameLift', Promise.resolve(result), true, mock)
  },
  claimGameServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimGameServer', 'GameLift', Promise.resolve(result), false, mock)
  },
  claimGameServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimGameServer', 'GameLift', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'GameLift', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'GameLift', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'GameLift', Promise.reject(result), true, mock)
  },
  createBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBuild', 'GameLift', Promise.resolve(result), true, mock)
  },
  createBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBuild', 'GameLift', Promise.resolve(result), false, mock)
  },
  createBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBuild', 'GameLift', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'GameLift', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'GameLift', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'GameLift', Promise.reject(result), true, mock)
  },
  createFleetLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleetLocations', 'GameLift', Promise.resolve(result), true, mock)
  },
  createFleetLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleetLocations', 'GameLift', Promise.resolve(result), false, mock)
  },
  createFleetLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleetLocations', 'GameLift', Promise.reject(result), true, mock)
  },
  createGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  createGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  createGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  createGameSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSession', 'GameLift', Promise.resolve(result), true, mock)
  },
  createGameSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSession', 'GameLift', Promise.resolve(result), false, mock)
  },
  createGameSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSession', 'GameLift', Promise.reject(result), true, mock)
  },
  createGameSessionQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSessionQueue', 'GameLift', Promise.resolve(result), true, mock)
  },
  createGameSessionQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSessionQueue', 'GameLift', Promise.resolve(result), false, mock)
  },
  createGameSessionQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGameSessionQueue', 'GameLift', Promise.reject(result), true, mock)
  },
  createMatchmakingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingConfiguration', 'GameLift', Promise.resolve(result), true, mock)
  },
  createMatchmakingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingConfiguration', 'GameLift', Promise.resolve(result), false, mock)
  },
  createMatchmakingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingConfiguration', 'GameLift', Promise.reject(result), true, mock)
  },
  createMatchmakingRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingRuleSet', 'GameLift', Promise.resolve(result), true, mock)
  },
  createMatchmakingRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingRuleSet', 'GameLift', Promise.resolve(result), false, mock)
  },
  createMatchmakingRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMatchmakingRuleSet', 'GameLift', Promise.reject(result), true, mock)
  },
  createPlayerSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSession', 'GameLift', Promise.resolve(result), true, mock)
  },
  createPlayerSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSession', 'GameLift', Promise.resolve(result), false, mock)
  },
  createPlayerSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSession', 'GameLift', Promise.reject(result), true, mock)
  },
  createPlayerSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSessions', 'GameLift', Promise.resolve(result), true, mock)
  },
  createPlayerSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSessions', 'GameLift', Promise.resolve(result), false, mock)
  },
  createPlayerSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlayerSessions', 'GameLift', Promise.reject(result), true, mock)
  },
  createScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'GameLift', Promise.resolve(result), true, mock)
  },
  createScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'GameLift', Promise.resolve(result), false, mock)
  },
  createScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScript', 'GameLift', Promise.reject(result), true, mock)
  },
  createVpcPeeringAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringAuthorization', 'GameLift', Promise.resolve(result), true, mock)
  },
  createVpcPeeringAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringAuthorization', 'GameLift', Promise.resolve(result), false, mock)
  },
  createVpcPeeringAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringAuthorization', 'GameLift', Promise.reject(result), true, mock)
  },
  createVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringConnection', 'GameLift', Promise.resolve(result), true, mock)
  },
  createVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringConnection', 'GameLift', Promise.resolve(result), false, mock)
  },
  createVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVpcPeeringConnection', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlias', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuild', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuild', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuild', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteFleetLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleetLocations', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteFleetLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleetLocations', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteFleetLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleetLocations', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteGameSessionQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameSessionQueue', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteGameSessionQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameSessionQueue', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteGameSessionQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGameSessionQueue', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteMatchmakingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingConfiguration', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteMatchmakingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingConfiguration', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteMatchmakingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingConfiguration', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteMatchmakingRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingRuleSet', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteMatchmakingRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingRuleSet', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteMatchmakingRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMatchmakingRuleSet', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScript', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScript', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScript', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteVpcPeeringAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringAuthorization', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteVpcPeeringAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringAuthorization', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteVpcPeeringAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringAuthorization', 'GameLift', Promise.reject(result), true, mock)
  },
  deleteVpcPeeringConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringConnection', 'GameLift', Promise.resolve(result), true, mock)
  },
  deleteVpcPeeringConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringConnection', 'GameLift', Promise.resolve(result), false, mock)
  },
  deleteVpcPeeringConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVpcPeeringConnection', 'GameLift', Promise.reject(result), true, mock)
  },
  deregisterGameServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterGameServer', 'GameLift', Promise.resolve(result), true, mock)
  },
  deregisterGameServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterGameServer', 'GameLift', Promise.resolve(result), false, mock)
  },
  deregisterGameServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterGameServer', 'GameLift', Promise.reject(result), true, mock)
  },
  describeAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlias', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlias', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlias', 'GameLift', Promise.reject(result), true, mock)
  },
  describeBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuild', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuild', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuild', 'GameLift', Promise.reject(result), true, mock)
  },
  describeEC2InstanceLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEC2InstanceLimits', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeEC2InstanceLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEC2InstanceLimits', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeEC2InstanceLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEC2InstanceLimits', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetAttributes', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetAttributes', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetAttributes', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetCapacity', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetCapacity', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetCapacity', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetEvents', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetEvents', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetEvents', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetLocationAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationAttributes', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetLocationAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationAttributes', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetLocationAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationAttributes', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetLocationCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationCapacity', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetLocationCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationCapacity', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetLocationCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationCapacity', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetLocationUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationUtilization', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetLocationUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationUtilization', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetLocationUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetLocationUtilization', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetPortSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetPortSettings', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetPortSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetPortSettings', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetPortSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetPortSettings', 'GameLift', Promise.reject(result), true, mock)
  },
  describeFleetUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetUtilization', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeFleetUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetUtilization', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeFleetUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetUtilization', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServer', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServer', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServer', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameServerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerInstances', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameServerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerInstances', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameServerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameServerInstances', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameSessionDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionDetails', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameSessionDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionDetails', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameSessionDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionDetails', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameSessionPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionPlacement', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameSessionPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionPlacement', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameSessionPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionPlacement', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameSessionQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionQueues', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameSessionQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionQueues', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameSessionQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessionQueues', 'GameLift', Promise.reject(result), true, mock)
  },
  describeGameSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessions', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeGameSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessions', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeGameSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGameSessions', 'GameLift', Promise.reject(result), true, mock)
  },
  describeInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstances', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstances', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstances', 'GameLift', Promise.reject(result), true, mock)
  },
  describeMatchmaking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmaking', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeMatchmakingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmaking', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeMatchmakingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmaking', 'GameLift', Promise.reject(result), true, mock)
  },
  describeMatchmakingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingConfigurations', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeMatchmakingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingConfigurations', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeMatchmakingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingConfigurations', 'GameLift', Promise.reject(result), true, mock)
  },
  describeMatchmakingRuleSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingRuleSets', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeMatchmakingRuleSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingRuleSets', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeMatchmakingRuleSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMatchmakingRuleSets', 'GameLift', Promise.reject(result), true, mock)
  },
  describePlayerSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlayerSessions', 'GameLift', Promise.resolve(result), true, mock)
  },
  describePlayerSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlayerSessions', 'GameLift', Promise.resolve(result), false, mock)
  },
  describePlayerSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlayerSessions', 'GameLift', Promise.reject(result), true, mock)
  },
  describeRuntimeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeConfiguration', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeRuntimeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeConfiguration', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeRuntimeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRuntimeConfiguration', 'GameLift', Promise.reject(result), true, mock)
  },
  describeScalingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeScalingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeScalingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'GameLift', Promise.reject(result), true, mock)
  },
  describeScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScript', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScript', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScript', 'GameLift', Promise.reject(result), true, mock)
  },
  describeVpcPeeringAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringAuthorizations', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeVpcPeeringAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringAuthorizations', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeVpcPeeringAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringAuthorizations', 'GameLift', Promise.reject(result), true, mock)
  },
  describeVpcPeeringConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringConnections', 'GameLift', Promise.resolve(result), true, mock)
  },
  describeVpcPeeringConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringConnections', 'GameLift', Promise.resolve(result), false, mock)
  },
  describeVpcPeeringConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVpcPeeringConnections', 'GameLift', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GameLift', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GameLift', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GameLift', Promise.reject(result), true, mock)
  },
  getGameSessionLogUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGameSessionLogUrl', 'GameLift', Promise.resolve(result), true, mock)
  },
  getGameSessionLogUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGameSessionLogUrl', 'GameLift', Promise.resolve(result), false, mock)
  },
  getGameSessionLogUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGameSessionLogUrl', 'GameLift', Promise.reject(result), true, mock)
  },
  getInstanceAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccess', 'GameLift', Promise.resolve(result), true, mock)
  },
  getInstanceAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccess', 'GameLift', Promise.resolve(result), false, mock)
  },
  getInstanceAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccess', 'GameLift', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'GameLift', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'GameLift', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAliases', 'GameLift', Promise.reject(result), true, mock)
  },
  listBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'GameLift', Promise.resolve(result), true, mock)
  },
  listBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'GameLift', Promise.resolve(result), false, mock)
  },
  listBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'GameLift', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'GameLift', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'GameLift', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'GameLift', Promise.reject(result), true, mock)
  },
  listGameServerGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServerGroups', 'GameLift', Promise.resolve(result), true, mock)
  },
  listGameServerGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServerGroups', 'GameLift', Promise.resolve(result), false, mock)
  },
  listGameServerGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServerGroups', 'GameLift', Promise.reject(result), true, mock)
  },
  listGameServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServers', 'GameLift', Promise.resolve(result), true, mock)
  },
  listGameServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServers', 'GameLift', Promise.resolve(result), false, mock)
  },
  listGameServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGameServers', 'GameLift', Promise.reject(result), true, mock)
  },
  listScripts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listScripts', 'GameLift', Promise.resolve(result), true, mock)
  },
  listScriptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listScripts', 'GameLift', Promise.resolve(result), false, mock)
  },
  listScriptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listScripts', 'GameLift', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GameLift', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GameLift', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GameLift', Promise.reject(result), true, mock)
  },
  putScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'GameLift', Promise.resolve(result), true, mock)
  },
  putScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'GameLift', Promise.resolve(result), false, mock)
  },
  putScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'GameLift', Promise.reject(result), true, mock)
  },
  registerGameServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerGameServer', 'GameLift', Promise.resolve(result), true, mock)
  },
  registerGameServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerGameServer', 'GameLift', Promise.resolve(result), false, mock)
  },
  registerGameServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerGameServer', 'GameLift', Promise.reject(result), true, mock)
  },
  requestUploadCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestUploadCredentials', 'GameLift', Promise.resolve(result), true, mock)
  },
  requestUploadCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestUploadCredentials', 'GameLift', Promise.resolve(result), false, mock)
  },
  requestUploadCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestUploadCredentials', 'GameLift', Promise.reject(result), true, mock)
  },
  resolveAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveAlias', 'GameLift', Promise.resolve(result), true, mock)
  },
  resolveAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveAlias', 'GameLift', Promise.resolve(result), false, mock)
  },
  resolveAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveAlias', 'GameLift', Promise.reject(result), true, mock)
  },
  resumeGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  resumeGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  resumeGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  searchGameSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchGameSessions', 'GameLift', Promise.resolve(result), true, mock)
  },
  searchGameSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchGameSessions', 'GameLift', Promise.resolve(result), false, mock)
  },
  searchGameSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchGameSessions', 'GameLift', Promise.reject(result), true, mock)
  },
  startFleetActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleetActions', 'GameLift', Promise.resolve(result), true, mock)
  },
  startFleetActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleetActions', 'GameLift', Promise.resolve(result), false, mock)
  },
  startFleetActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleetActions', 'GameLift', Promise.reject(result), true, mock)
  },
  startGameSessionPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGameSessionPlacement', 'GameLift', Promise.resolve(result), true, mock)
  },
  startGameSessionPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGameSessionPlacement', 'GameLift', Promise.resolve(result), false, mock)
  },
  startGameSessionPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGameSessionPlacement', 'GameLift', Promise.reject(result), true, mock)
  },
  startMatchBackfill: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchBackfill', 'GameLift', Promise.resolve(result), true, mock)
  },
  startMatchBackfillAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchBackfill', 'GameLift', Promise.resolve(result), false, mock)
  },
  startMatchBackfillThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchBackfill', 'GameLift', Promise.reject(result), true, mock)
  },
  startMatchmaking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchmaking', 'GameLift', Promise.resolve(result), true, mock)
  },
  startMatchmakingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchmaking', 'GameLift', Promise.resolve(result), false, mock)
  },
  startMatchmakingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMatchmaking', 'GameLift', Promise.reject(result), true, mock)
  },
  stopFleetActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleetActions', 'GameLift', Promise.resolve(result), true, mock)
  },
  stopFleetActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleetActions', 'GameLift', Promise.resolve(result), false, mock)
  },
  stopFleetActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleetActions', 'GameLift', Promise.reject(result), true, mock)
  },
  stopGameSessionPlacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopGameSessionPlacement', 'GameLift', Promise.resolve(result), true, mock)
  },
  stopGameSessionPlacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopGameSessionPlacement', 'GameLift', Promise.resolve(result), false, mock)
  },
  stopGameSessionPlacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopGameSessionPlacement', 'GameLift', Promise.reject(result), true, mock)
  },
  stopMatchmaking: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMatchmaking', 'GameLift', Promise.resolve(result), true, mock)
  },
  stopMatchmakingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMatchmaking', 'GameLift', Promise.resolve(result), false, mock)
  },
  stopMatchmakingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMatchmaking', 'GameLift', Promise.reject(result), true, mock)
  },
  suspendGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  suspendGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  suspendGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GameLift', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GameLift', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GameLift', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GameLift', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GameLift', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GameLift', Promise.reject(result), true, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAlias', 'GameLift', Promise.reject(result), true, mock)
  },
  updateBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBuild', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBuild', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBuild', 'GameLift', Promise.reject(result), true, mock)
  },
  updateFleetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetAttributes', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateFleetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetAttributes', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateFleetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetAttributes', 'GameLift', Promise.reject(result), true, mock)
  },
  updateFleetCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetCapacity', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateFleetCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetCapacity', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateFleetCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetCapacity', 'GameLift', Promise.reject(result), true, mock)
  },
  updateFleetPortSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetPortSettings', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateFleetPortSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetPortSettings', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateFleetPortSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetPortSettings', 'GameLift', Promise.reject(result), true, mock)
  },
  updateGameServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServer', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateGameServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServer', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateGameServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServer', 'GameLift', Promise.reject(result), true, mock)
  },
  updateGameServerGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServerGroup', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateGameServerGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServerGroup', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateGameServerGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameServerGroup', 'GameLift', Promise.reject(result), true, mock)
  },
  updateGameSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSession', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateGameSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSession', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateGameSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSession', 'GameLift', Promise.reject(result), true, mock)
  },
  updateGameSessionQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSessionQueue', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateGameSessionQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSessionQueue', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateGameSessionQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGameSessionQueue', 'GameLift', Promise.reject(result), true, mock)
  },
  updateMatchmakingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMatchmakingConfiguration', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateMatchmakingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMatchmakingConfiguration', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateMatchmakingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMatchmakingConfiguration', 'GameLift', Promise.reject(result), true, mock)
  },
  updateRuntimeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuntimeConfiguration', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateRuntimeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuntimeConfiguration', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateRuntimeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuntimeConfiguration', 'GameLift', Promise.reject(result), true, mock)
  },
  updateScript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScript', 'GameLift', Promise.resolve(result), true, mock)
  },
  updateScriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScript', 'GameLift', Promise.resolve(result), false, mock)
  },
  updateScriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScript', 'GameLift', Promise.reject(result), true, mock)
  },
  validateMatchmakingRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateMatchmakingRuleSet', 'GameLift', Promise.resolve(result), true, mock)
  },
  validateMatchmakingRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateMatchmakingRuleSet', 'GameLift', Promise.resolve(result), false, mock)
  },
  validateMatchmakingRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validateMatchmakingRuleSet', 'GameLift', Promise.reject(result), true, mock)
  },
}
