
/**
* @description mocks_v3:mockTransfer module is mocks for AWS-SDK V3
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
export const mockTransfer = {
  createAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  createAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  createAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  createAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAgreement', 'Transfer', Promise.resolve(result), true, mock)
  },
  createAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAgreement', 'Transfer', Promise.resolve(result), false, mock)
  },
  createAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createAgreement', 'Transfer', Promise.reject(result), true, mock)
  },
  createConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createConnector', 'Transfer', Promise.resolve(result), true, mock)
  },
  createConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createConnector', 'Transfer', Promise.resolve(result), false, mock)
  },
  createConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createConnector', 'Transfer', Promise.reject(result), true, mock)
  },
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createProfile', 'Transfer', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createProfile', 'Transfer', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createProfile', 'Transfer', Promise.reject(result), true, mock)
  },
  createServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  createServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  createServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createServer', 'Transfer', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createUser', 'Transfer', Promise.reject(result), true, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'createWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAgreement', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAgreement', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteAgreement', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteCertificate', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteCertificate', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteCertificate', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteConnector', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteConnector', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteConnector', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteHostKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteHostKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteHostKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteHostKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteHostKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteHostKey', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteProfile', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteProfile', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteProfile', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteServer', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteSshPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteSshPublicKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteSshPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteSshPublicKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteSshPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteSshPublicKey', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteUser', 'Transfer', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'deleteWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  describeAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  describeAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAgreement', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAgreement', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeAgreement', 'Transfer', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeCertificate', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeCertificate', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeCertificate', 'Transfer', Promise.reject(result), true, mock)
  },
  describeConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeConnector', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeConnector', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeConnector', 'Transfer', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeExecution', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeExecution', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeExecution', 'Transfer', Promise.reject(result), true, mock)
  },
  describeHostKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeHostKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeHostKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeHostKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeHostKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeHostKey', 'Transfer', Promise.reject(result), true, mock)
  },
  describeProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeProfile', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeProfile', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeProfile', 'Transfer', Promise.reject(result), true, mock)
  },
  describeSecurityPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeSecurityPolicy', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeSecurityPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeSecurityPolicy', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeSecurityPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeSecurityPolicy', 'Transfer', Promise.reject(result), true, mock)
  },
  describeServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeServer', 'Transfer', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeUser', 'Transfer', Promise.reject(result), true, mock)
  },
  describeWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeWorkflow', 'Transfer', Promise.resolve(result), true, mock)
  },
  describeWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeWorkflow', 'Transfer', Promise.resolve(result), false, mock)
  },
  describeWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'describeWorkflow', 'Transfer', Promise.reject(result), true, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importCertificate', 'Transfer', Promise.resolve(result), true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importCertificate', 'Transfer', Promise.resolve(result), false, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importCertificate', 'Transfer', Promise.reject(result), true, mock)
  },
  importHostKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importHostKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  importHostKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importHostKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  importHostKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importHostKey', 'Transfer', Promise.reject(result), true, mock)
  },
  importSshPublicKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importSshPublicKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  importSshPublicKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importSshPublicKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  importSshPublicKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'importSshPublicKey', 'Transfer', Promise.reject(result), true, mock)
  },
  listAccesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAccesses', 'Transfer', Promise.resolve(result), true, mock)
  },
  listAccessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAccesses', 'Transfer', Promise.resolve(result), false, mock)
  },
  listAccessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAccesses', 'Transfer', Promise.reject(result), true, mock)
  },
  listAgreements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAgreements', 'Transfer', Promise.resolve(result), true, mock)
  },
  listAgreementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAgreements', 'Transfer', Promise.resolve(result), false, mock)
  },
  listAgreementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listAgreements', 'Transfer', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listCertificates', 'Transfer', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listCertificates', 'Transfer', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listCertificates', 'Transfer', Promise.reject(result), true, mock)
  },
  listConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listConnectors', 'Transfer', Promise.resolve(result), true, mock)
  },
  listConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listConnectors', 'Transfer', Promise.resolve(result), false, mock)
  },
  listConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listConnectors', 'Transfer', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listExecutions', 'Transfer', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listExecutions', 'Transfer', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listExecutions', 'Transfer', Promise.reject(result), true, mock)
  },
  listHostKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listHostKeys', 'Transfer', Promise.resolve(result), true, mock)
  },
  listHostKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listHostKeys', 'Transfer', Promise.resolve(result), false, mock)
  },
  listHostKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listHostKeys', 'Transfer', Promise.reject(result), true, mock)
  },
  listProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listProfiles', 'Transfer', Promise.resolve(result), true, mock)
  },
  listProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listProfiles', 'Transfer', Promise.resolve(result), false, mock)
  },
  listProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listProfiles', 'Transfer', Promise.reject(result), true, mock)
  },
  listSecurityPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listSecurityPolicies', 'Transfer', Promise.resolve(result), true, mock)
  },
  listSecurityPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listSecurityPolicies', 'Transfer', Promise.resolve(result), false, mock)
  },
  listSecurityPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listSecurityPolicies', 'Transfer', Promise.reject(result), true, mock)
  },
  listServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listServers', 'Transfer', Promise.resolve(result), true, mock)
  },
  listServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listServers', 'Transfer', Promise.resolve(result), false, mock)
  },
  listServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listServers', 'Transfer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listTagsForResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listTagsForResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listTagsForResource', 'Transfer', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listUsers', 'Transfer', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listUsers', 'Transfer', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listUsers', 'Transfer', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listWorkflows', 'Transfer', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listWorkflows', 'Transfer', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'listWorkflows', 'Transfer', Promise.reject(result), true, mock)
  },
  sendWorkflowStepState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'sendWorkflowStepState', 'Transfer', Promise.resolve(result), true, mock)
  },
  sendWorkflowStepStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'sendWorkflowStepState', 'Transfer', Promise.resolve(result), false, mock)
  },
  sendWorkflowStepStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'sendWorkflowStepState', 'Transfer', Promise.reject(result), true, mock)
  },
  startFileTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startFileTransfer', 'Transfer', Promise.resolve(result), true, mock)
  },
  startFileTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startFileTransfer', 'Transfer', Promise.resolve(result), false, mock)
  },
  startFileTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startFileTransfer', 'Transfer', Promise.reject(result), true, mock)
  },
  startServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  startServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  startServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'startServer', 'Transfer', Promise.reject(result), true, mock)
  },
  stopServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'stopServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  stopServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'stopServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  stopServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'stopServer', 'Transfer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'tagResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'tagResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'tagResource', 'Transfer', Promise.reject(result), true, mock)
  },
  testConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testConnection', 'Transfer', Promise.resolve(result), true, mock)
  },
  testConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testConnection', 'Transfer', Promise.resolve(result), false, mock)
  },
  testConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testConnection', 'Transfer', Promise.reject(result), true, mock)
  },
  testIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testIdentityProvider', 'Transfer', Promise.resolve(result), true, mock)
  },
  testIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testIdentityProvider', 'Transfer', Promise.resolve(result), false, mock)
  },
  testIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'testIdentityProvider', 'Transfer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'untagResource', 'Transfer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'untagResource', 'Transfer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'untagResource', 'Transfer', Promise.reject(result), true, mock)
  },
  updateAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAccess', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAccess', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAccess', 'Transfer', Promise.reject(result), true, mock)
  },
  updateAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAgreement', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAgreement', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateAgreement', 'Transfer', Promise.reject(result), true, mock)
  },
  updateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateCertificate', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateCertificate', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateCertificate', 'Transfer', Promise.reject(result), true, mock)
  },
  updateConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateConnector', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateConnector', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateConnector', 'Transfer', Promise.reject(result), true, mock)
  },
  updateHostKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateHostKey', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateHostKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateHostKey', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateHostKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateHostKey', 'Transfer', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateProfile', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateProfile', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateProfile', 'Transfer', Promise.reject(result), true, mock)
  },
  updateServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateServer', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateServer', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateServer', 'Transfer', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateUser', 'Transfer', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateUser', 'Transfer', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'updateUser', 'Transfer', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'send', 'TransferClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'send', 'TransferClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transfer', 'send', 'TransferClient', Promise.reject(result), true, mock)
  }
}
