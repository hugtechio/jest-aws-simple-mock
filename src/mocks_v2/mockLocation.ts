
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
  export const mockLocation = {
  associateTrackerConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTrackerConsumer', 'Location', Promise.resolve(result), true, mock)
  },
  associateTrackerConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTrackerConsumer', 'Location', Promise.resolve(result), false, mock)
  },
  associateTrackerConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateTrackerConsumer', 'Location', Promise.reject(result), true, mock)
  },
  batchDeleteDevicePositionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDevicePositionHistory', 'Location', Promise.resolve(result), true, mock)
  },
  batchDeleteDevicePositionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDevicePositionHistory', 'Location', Promise.resolve(result), false, mock)
  },
  batchDeleteDevicePositionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteDevicePositionHistory', 'Location', Promise.reject(result), true, mock)
  },
  batchDeleteGeofence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteGeofence', 'Location', Promise.resolve(result), true, mock)
  },
  batchDeleteGeofenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteGeofence', 'Location', Promise.resolve(result), false, mock)
  },
  batchDeleteGeofenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteGeofence', 'Location', Promise.reject(result), true, mock)
  },
  batchEvaluateGeofences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEvaluateGeofences', 'Location', Promise.resolve(result), true, mock)
  },
  batchEvaluateGeofencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEvaluateGeofences', 'Location', Promise.resolve(result), false, mock)
  },
  batchEvaluateGeofencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEvaluateGeofences', 'Location', Promise.reject(result), true, mock)
  },
  batchGetDevicePosition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevicePosition', 'Location', Promise.resolve(result), true, mock)
  },
  batchGetDevicePositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevicePosition', 'Location', Promise.resolve(result), false, mock)
  },
  batchGetDevicePositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDevicePosition', 'Location', Promise.reject(result), true, mock)
  },
  batchPutGeofence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutGeofence', 'Location', Promise.resolve(result), true, mock)
  },
  batchPutGeofenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutGeofence', 'Location', Promise.resolve(result), false, mock)
  },
  batchPutGeofenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutGeofence', 'Location', Promise.reject(result), true, mock)
  },
  batchUpdateDevicePosition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDevicePosition', 'Location', Promise.resolve(result), true, mock)
  },
  batchUpdateDevicePositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDevicePosition', 'Location', Promise.resolve(result), false, mock)
  },
  batchUpdateDevicePositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDevicePosition', 'Location', Promise.reject(result), true, mock)
  },
  calculateRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('calculateRoute', 'Location', Promise.resolve(result), true, mock)
  },
  calculateRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('calculateRoute', 'Location', Promise.resolve(result), false, mock)
  },
  calculateRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('calculateRoute', 'Location', Promise.reject(result), true, mock)
  },
  createGeofenceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeofenceCollection', 'Location', Promise.resolve(result), true, mock)
  },
  createGeofenceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeofenceCollection', 'Location', Promise.resolve(result), false, mock)
  },
  createGeofenceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeofenceCollection', 'Location', Promise.reject(result), true, mock)
  },
  createMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMap', 'Location', Promise.resolve(result), true, mock)
  },
  createMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMap', 'Location', Promise.resolve(result), false, mock)
  },
  createMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMap', 'Location', Promise.reject(result), true, mock)
  },
  createPlaceIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlaceIndex', 'Location', Promise.resolve(result), true, mock)
  },
  createPlaceIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlaceIndex', 'Location', Promise.resolve(result), false, mock)
  },
  createPlaceIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPlaceIndex', 'Location', Promise.reject(result), true, mock)
  },
  createRouteCalculator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRouteCalculator', 'Location', Promise.resolve(result), true, mock)
  },
  createRouteCalculatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRouteCalculator', 'Location', Promise.resolve(result), false, mock)
  },
  createRouteCalculatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRouteCalculator', 'Location', Promise.reject(result), true, mock)
  },
  createTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTracker', 'Location', Promise.resolve(result), true, mock)
  },
  createTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTracker', 'Location', Promise.resolve(result), false, mock)
  },
  createTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTracker', 'Location', Promise.reject(result), true, mock)
  },
  deleteGeofenceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeofenceCollection', 'Location', Promise.resolve(result), true, mock)
  },
  deleteGeofenceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeofenceCollection', 'Location', Promise.resolve(result), false, mock)
  },
  deleteGeofenceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeofenceCollection', 'Location', Promise.reject(result), true, mock)
  },
  deleteMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMap', 'Location', Promise.resolve(result), true, mock)
  },
  deleteMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMap', 'Location', Promise.resolve(result), false, mock)
  },
  deleteMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMap', 'Location', Promise.reject(result), true, mock)
  },
  deletePlaceIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaceIndex', 'Location', Promise.resolve(result), true, mock)
  },
  deletePlaceIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaceIndex', 'Location', Promise.resolve(result), false, mock)
  },
  deletePlaceIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaceIndex', 'Location', Promise.reject(result), true, mock)
  },
  deleteRouteCalculator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRouteCalculator', 'Location', Promise.resolve(result), true, mock)
  },
  deleteRouteCalculatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRouteCalculator', 'Location', Promise.resolve(result), false, mock)
  },
  deleteRouteCalculatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRouteCalculator', 'Location', Promise.reject(result), true, mock)
  },
  deleteTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTracker', 'Location', Promise.resolve(result), true, mock)
  },
  deleteTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTracker', 'Location', Promise.resolve(result), false, mock)
  },
  deleteTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTracker', 'Location', Promise.reject(result), true, mock)
  },
  describeGeofenceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGeofenceCollection', 'Location', Promise.resolve(result), true, mock)
  },
  describeGeofenceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGeofenceCollection', 'Location', Promise.resolve(result), false, mock)
  },
  describeGeofenceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGeofenceCollection', 'Location', Promise.reject(result), true, mock)
  },
  describeMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMap', 'Location', Promise.resolve(result), true, mock)
  },
  describeMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMap', 'Location', Promise.resolve(result), false, mock)
  },
  describeMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMap', 'Location', Promise.reject(result), true, mock)
  },
  describePlaceIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlaceIndex', 'Location', Promise.resolve(result), true, mock)
  },
  describePlaceIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlaceIndex', 'Location', Promise.resolve(result), false, mock)
  },
  describePlaceIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePlaceIndex', 'Location', Promise.reject(result), true, mock)
  },
  describeRouteCalculator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouteCalculator', 'Location', Promise.resolve(result), true, mock)
  },
  describeRouteCalculatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouteCalculator', 'Location', Promise.resolve(result), false, mock)
  },
  describeRouteCalculatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouteCalculator', 'Location', Promise.reject(result), true, mock)
  },
  describeTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTracker', 'Location', Promise.resolve(result), true, mock)
  },
  describeTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTracker', 'Location', Promise.resolve(result), false, mock)
  },
  describeTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTracker', 'Location', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Location', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Location', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Location', Promise.reject(result), true, mock)
  },
  disassociateTrackerConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTrackerConsumer', 'Location', Promise.resolve(result), true, mock)
  },
  disassociateTrackerConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTrackerConsumer', 'Location', Promise.resolve(result), false, mock)
  },
  disassociateTrackerConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateTrackerConsumer', 'Location', Promise.reject(result), true, mock)
  },
  getDevicePosition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePosition', 'Location', Promise.resolve(result), true, mock)
  },
  getDevicePositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePosition', 'Location', Promise.resolve(result), false, mock)
  },
  getDevicePositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePosition', 'Location', Promise.reject(result), true, mock)
  },
  getDevicePositionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePositionHistory', 'Location', Promise.resolve(result), true, mock)
  },
  getDevicePositionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePositionHistory', 'Location', Promise.resolve(result), false, mock)
  },
  getDevicePositionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePositionHistory', 'Location', Promise.reject(result), true, mock)
  },
  getGeofence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeofence', 'Location', Promise.resolve(result), true, mock)
  },
  getGeofenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeofence', 'Location', Promise.resolve(result), false, mock)
  },
  getGeofenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeofence', 'Location', Promise.reject(result), true, mock)
  },
  getMapGlyphs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapGlyphs', 'Location', Promise.resolve(result), true, mock)
  },
  getMapGlyphsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapGlyphs', 'Location', Promise.resolve(result), false, mock)
  },
  getMapGlyphsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapGlyphs', 'Location', Promise.reject(result), true, mock)
  },
  getMapSprites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapSprites', 'Location', Promise.resolve(result), true, mock)
  },
  getMapSpritesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapSprites', 'Location', Promise.resolve(result), false, mock)
  },
  getMapSpritesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapSprites', 'Location', Promise.reject(result), true, mock)
  },
  getMapStyleDescriptor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapStyleDescriptor', 'Location', Promise.resolve(result), true, mock)
  },
  getMapStyleDescriptorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapStyleDescriptor', 'Location', Promise.resolve(result), false, mock)
  },
  getMapStyleDescriptorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapStyleDescriptor', 'Location', Promise.reject(result), true, mock)
  },
  getMapTile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapTile', 'Location', Promise.resolve(result), true, mock)
  },
  getMapTileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapTile', 'Location', Promise.resolve(result), false, mock)
  },
  getMapTileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMapTile', 'Location', Promise.reject(result), true, mock)
  },
  listDevicePositions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePositions', 'Location', Promise.resolve(result), true, mock)
  },
  listDevicePositionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePositions', 'Location', Promise.resolve(result), false, mock)
  },
  listDevicePositionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePositions', 'Location', Promise.reject(result), true, mock)
  },
  listGeofenceCollections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofenceCollections', 'Location', Promise.resolve(result), true, mock)
  },
  listGeofenceCollectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofenceCollections', 'Location', Promise.resolve(result), false, mock)
  },
  listGeofenceCollectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofenceCollections', 'Location', Promise.reject(result), true, mock)
  },
  listGeofences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofences', 'Location', Promise.resolve(result), true, mock)
  },
  listGeofencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofences', 'Location', Promise.resolve(result), false, mock)
  },
  listGeofencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeofences', 'Location', Promise.reject(result), true, mock)
  },
  listMaps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMaps', 'Location', Promise.resolve(result), true, mock)
  },
  listMapsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMaps', 'Location', Promise.resolve(result), false, mock)
  },
  listMapsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMaps', 'Location', Promise.reject(result), true, mock)
  },
  listPlaceIndexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaceIndexes', 'Location', Promise.resolve(result), true, mock)
  },
  listPlaceIndexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaceIndexes', 'Location', Promise.resolve(result), false, mock)
  },
  listPlaceIndexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaceIndexes', 'Location', Promise.reject(result), true, mock)
  },
  listRouteCalculators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRouteCalculators', 'Location', Promise.resolve(result), true, mock)
  },
  listRouteCalculatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRouteCalculators', 'Location', Promise.resolve(result), false, mock)
  },
  listRouteCalculatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRouteCalculators', 'Location', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Location', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Location', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Location', Promise.reject(result), true, mock)
  },
  listTrackerConsumers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackerConsumers', 'Location', Promise.resolve(result), true, mock)
  },
  listTrackerConsumersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackerConsumers', 'Location', Promise.resolve(result), false, mock)
  },
  listTrackerConsumersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackerConsumers', 'Location', Promise.reject(result), true, mock)
  },
  listTrackers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackers', 'Location', Promise.resolve(result), true, mock)
  },
  listTrackersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackers', 'Location', Promise.resolve(result), false, mock)
  },
  listTrackersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrackers', 'Location', Promise.reject(result), true, mock)
  },
  putGeofence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGeofence', 'Location', Promise.resolve(result), true, mock)
  },
  putGeofenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGeofence', 'Location', Promise.resolve(result), false, mock)
  },
  putGeofenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGeofence', 'Location', Promise.reject(result), true, mock)
  },
  searchPlaceIndexForPosition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForPosition', 'Location', Promise.resolve(result), true, mock)
  },
  searchPlaceIndexForPositionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForPosition', 'Location', Promise.resolve(result), false, mock)
  },
  searchPlaceIndexForPositionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForPosition', 'Location', Promise.reject(result), true, mock)
  },
  searchPlaceIndexForText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForText', 'Location', Promise.resolve(result), true, mock)
  },
  searchPlaceIndexForTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForText', 'Location', Promise.resolve(result), false, mock)
  },
  searchPlaceIndexForTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchPlaceIndexForText', 'Location', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Location', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Location', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Location', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Location', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Location', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Location', Promise.reject(result), true, mock)
  },
  updateGeofenceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeofenceCollection', 'Location', Promise.resolve(result), true, mock)
  },
  updateGeofenceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeofenceCollection', 'Location', Promise.resolve(result), false, mock)
  },
  updateGeofenceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeofenceCollection', 'Location', Promise.reject(result), true, mock)
  },
  updateMap: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMap', 'Location', Promise.resolve(result), true, mock)
  },
  updateMapAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMap', 'Location', Promise.resolve(result), false, mock)
  },
  updateMapThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMap', 'Location', Promise.reject(result), true, mock)
  },
  updatePlaceIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlaceIndex', 'Location', Promise.resolve(result), true, mock)
  },
  updatePlaceIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlaceIndex', 'Location', Promise.resolve(result), false, mock)
  },
  updatePlaceIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePlaceIndex', 'Location', Promise.reject(result), true, mock)
  },
  updateRouteCalculator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRouteCalculator', 'Location', Promise.resolve(result), true, mock)
  },
  updateRouteCalculatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRouteCalculator', 'Location', Promise.resolve(result), false, mock)
  },
  updateRouteCalculatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRouteCalculator', 'Location', Promise.reject(result), true, mock)
  },
  updateTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTracker', 'Location', Promise.resolve(result), true, mock)
  },
  updateTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTracker', 'Location', Promise.resolve(result), false, mock)
  },
  updateTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTracker', 'Location', Promise.reject(result), true, mock)
  },
}
