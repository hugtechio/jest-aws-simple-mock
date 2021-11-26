
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
  export const mockMediaLive = {
  acceptInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  acceptInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  acceptInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchDelete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDelete', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchDeleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDelete', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchDeleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDelete', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchStart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStart', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchStartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStart', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchStartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStart', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchStop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStop', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchStopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStop', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchStopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchStop', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchUpdateSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchUpdateScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchUpdateScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  cancelInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  cancelInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  cancelInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  claimDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  claimDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  claimDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('claimDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  createInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  createInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  createMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  createMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  createPartnerInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartnerInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createPartnerInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartnerInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createPartnerInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPartnerInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputDeviceThumbnail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDeviceThumbnail', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputDeviceThumbnailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDeviceThumbnail', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputDeviceThumbnailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputDeviceThumbnail', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOffering', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOffering', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOffering', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaLive', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaLive', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaLive', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputDeviceTransfers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDeviceTransfers', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputDeviceTransfersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDeviceTransfers', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputDeviceTransfersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDeviceTransfers', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDevices', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDevices', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputDevices', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputSecurityGroups', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputSecurityGroups', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputSecurityGroups', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputs', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputs', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInputs', 'MediaLive', Promise.reject(result), true, mock)
  },
  listMultiplexPrograms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexPrograms', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listMultiplexProgramsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexPrograms', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listMultiplexProgramsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexPrograms', 'MediaLive', Promise.reject(result), true, mock)
  },
  listMultiplexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexes', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listMultiplexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexes', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listMultiplexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultiplexes', 'MediaLive', Promise.reject(result), true, mock)
  },
  listOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'MediaLive', Promise.reject(result), true, mock)
  },
  listReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReservations', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReservations', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReservations', 'MediaLive', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaLive', Promise.reject(result), true, mock)
  },
  purchaseOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'MediaLive', Promise.resolve(result), true, mock)
  },
  purchaseOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'MediaLive', Promise.resolve(result), false, mock)
  },
  purchaseOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'MediaLive', Promise.reject(result), true, mock)
  },
  rejectInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  rejectInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  rejectInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  startChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  startChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  startChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  startMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  startMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  startMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  stopChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  stopChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  stopChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  stopMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  stopMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  stopMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  transferInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transferInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  transferInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transferInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  transferInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('transferInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateChannelClass: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelClass', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateChannelClassAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelClass', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateChannelClassThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannelClass', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
}
