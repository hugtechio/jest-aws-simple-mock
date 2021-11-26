
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
  export const mockAlexaForBusiness = {
  approveSkill: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveSkill', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  approveSkillAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveSkill', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  approveSkillThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('approveSkill', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateContactWithAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateContactWithAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateContactWithAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateContactWithAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateContactWithAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateContactWithAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateDeviceWithNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateDeviceWithNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateDeviceWithNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithNetworkProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateDeviceWithRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateDeviceWithRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateDeviceWithRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDeviceWithRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateSkillGroupWithRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillGroupWithRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateSkillGroupWithRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillGroupWithRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateSkillGroupWithRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillGroupWithRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateSkillWithSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateSkillWithSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateSkillWithSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  associateSkillWithUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithUsers', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  associateSkillWithUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithUsers', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  associateSkillWithUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSkillWithUsers', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createBusinessReportSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createBusinessReportScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createBusinessReportScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBusinessReportSchedule', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createConferenceProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createConferenceProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createConferenceProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConferenceProvider', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContact', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createGatewayGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createGatewayGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createGatewayGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteBusinessReportSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteBusinessReportScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteBusinessReportScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBusinessReportSchedule', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteConferenceProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteConferenceProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteConferenceProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConferenceProvider', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContact', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteDeviceUsageData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceUsageData', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteDeviceUsageDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceUsageData', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteDeviceUsageDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeviceUsageData', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteGatewayGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteGatewayGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteGatewayGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteRoomSkillParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteRoomSkillParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteRoomSkillParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoomSkillParameter', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteSkillAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillAuthorization', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteSkillAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillAuthorization', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteSkillAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillAuthorization', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  disassociateContactFromAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateContactFromAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  disassociateContactFromAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateContactFromAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  disassociateContactFromAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateContactFromAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  disassociateDeviceFromRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  disassociateDeviceFromRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  disassociateDeviceFromRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDeviceFromRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  disassociateSkillFromSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  disassociateSkillFromSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  disassociateSkillFromSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  disassociateSkillFromUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromUsers', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  disassociateSkillFromUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromUsers', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  disassociateSkillFromUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillFromUsers', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  disassociateSkillGroupFromRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillGroupFromRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  disassociateSkillGroupFromRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillGroupFromRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  disassociateSkillGroupFromRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSkillGroupFromRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  forgetSmartHomeAppliances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetSmartHomeAppliances', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  forgetSmartHomeAppliancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetSmartHomeAppliances', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  forgetSmartHomeAppliancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('forgetSmartHomeAppliances', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getConferencePreference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferencePreference', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getConferencePreferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferencePreference', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getConferencePreferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferencePreference', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getConferenceProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getConferenceProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getConferenceProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConferenceProvider', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContact', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGateway', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGateway', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGateway', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getGatewayGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getGatewayGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getGatewayGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGatewayGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getInvitationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationConfiguration', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getInvitationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationConfiguration', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getInvitationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationConfiguration', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getRoomSkillParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getRoomSkillParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getRoomSkillParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoomSkillParameter', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  getSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  getSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  getSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listBusinessReportSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBusinessReportSchedules', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listBusinessReportSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBusinessReportSchedules', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listBusinessReportSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBusinessReportSchedules', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listConferenceProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConferenceProviders', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listConferenceProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConferenceProviders', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listConferenceProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConferenceProviders', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listDeviceEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listDeviceEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listDeviceEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceEvents', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listGatewayGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayGroups', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listGatewayGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayGroups', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listGatewayGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayGroups', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listSkills: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkills', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listSkillsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkills', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listSkillsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkills', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listSkillsStoreCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreCategories', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listSkillsStoreCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreCategories', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listSkillsStoreCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreCategories', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listSkillsStoreSkillsByCategory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreSkillsByCategory', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listSkillsStoreSkillsByCategoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreSkillsByCategory', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listSkillsStoreSkillsByCategoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSkillsStoreSkillsByCategory', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listSmartHomeAppliances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSmartHomeAppliances', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listSmartHomeAppliancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSmartHomeAppliances', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listSmartHomeAppliancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSmartHomeAppliances', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  putConferencePreference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConferencePreference', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  putConferencePreferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConferencePreference', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  putConferencePreferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConferencePreference', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  putInvitationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInvitationConfiguration', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  putInvitationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInvitationConfiguration', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  putInvitationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInvitationConfiguration', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  putRoomSkillParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  putRoomSkillParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRoomSkillParameter', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  putRoomSkillParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRoomSkillParameter', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  putSkillAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSkillAuthorization', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  putSkillAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSkillAuthorization', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  putSkillAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSkillAuthorization', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  registerAVSDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAVSDevice', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  registerAVSDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAVSDevice', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  registerAVSDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAVSDevice', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  rejectSkill: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSkill', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  rejectSkillAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSkill', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  rejectSkillThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSkill', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  resolveRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  resolveRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  resolveRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  revokeInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeInvitation', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  revokeInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeInvitation', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  revokeInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeInvitation', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchAddressBooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchAddressBooks', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchAddressBooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchAddressBooks', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchAddressBooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchAddressBooks', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContacts', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContacts', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchContacts', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchNetworkProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchNetworkProfiles', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchNetworkProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchNetworkProfiles', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchNetworkProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchNetworkProfiles', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchRooms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchRooms', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchRoomsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchRooms', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchRoomsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchRooms', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchSkillGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSkillGroups', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchSkillGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSkillGroups', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchSkillGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSkillGroups', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  searchUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchUsers', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  searchUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchUsers', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  searchUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchUsers', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  sendAnnouncement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAnnouncement', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  sendAnnouncementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAnnouncement', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  sendAnnouncementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAnnouncement', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  sendInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendInvitation', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  sendInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendInvitation', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  sendInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendInvitation', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  startDeviceSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceSync', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  startDeviceSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceSync', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  startDeviceSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceSync', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  startSmartHomeApplianceDiscovery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSmartHomeApplianceDiscovery', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  startSmartHomeApplianceDiscoveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSmartHomeApplianceDiscovery', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  startSmartHomeApplianceDiscoveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSmartHomeApplianceDiscovery', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateAddressBook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddressBook', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateAddressBookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddressBook', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateAddressBookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAddressBook', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateBusinessReportSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateBusinessReportScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBusinessReportSchedule', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateBusinessReportScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBusinessReportSchedule', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateConferenceProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateConferenceProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConferenceProvider', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateConferenceProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConferenceProvider', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevice', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGateway', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGateway', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGateway', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateGatewayGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateGatewayGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateGatewayGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoom', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoom', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoom', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
  updateSkillGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSkillGroup', 'AlexaForBusiness', Promise.resolve(result), true, mock)
  },
  updateSkillGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSkillGroup', 'AlexaForBusiness', Promise.resolve(result), false, mock)
  },
  updateSkillGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSkillGroup', 'AlexaForBusiness', Promise.reject(result), true, mock)
  },
}
