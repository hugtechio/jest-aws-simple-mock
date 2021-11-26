
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
  export const mockDirectConnect = {
  acceptDirectConnectGatewayAssociationProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  acceptDirectConnectGatewayAssociationProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  acceptDirectConnectGatewayAssociationProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.reject(result), true, mock)
  },
  allocateConnectionOnInterconnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateConnectionOnInterconnect', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  allocateConnectionOnInterconnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateConnectionOnInterconnect', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  allocateConnectionOnInterconnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateConnectionOnInterconnect', 'DirectConnect', Promise.reject(result), true, mock)
  },
  allocateHostedConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateHostedConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  allocateHostedConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateHostedConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  allocateHostedConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateHostedConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  allocatePrivateVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  allocatePrivateVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  allocatePrivateVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePrivateVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  allocatePublicVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePublicVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  allocatePublicVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePublicVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  allocatePublicVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocatePublicVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  allocateTransitVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  allocateTransitVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  allocateTransitVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateTransitVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  associateConnectionWithLag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionWithLag', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  associateConnectionWithLagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionWithLag', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  associateConnectionWithLagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateConnectionWithLag', 'DirectConnect', Promise.reject(result), true, mock)
  },
  associateHostedConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHostedConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  associateHostedConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHostedConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  associateHostedConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHostedConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  associateMacSecKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMacSecKey', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  associateMacSecKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMacSecKey', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  associateMacSecKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMacSecKey', 'DirectConnect', Promise.reject(result), true, mock)
  },
  associateVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  associateVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  associateVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  confirmConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  confirmConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  confirmConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  confirmCustomerAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmCustomerAgreement', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  confirmCustomerAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmCustomerAgreement', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  confirmCustomerAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmCustomerAgreement', 'DirectConnect', Promise.reject(result), true, mock)
  },
  confirmPrivateVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  confirmPrivateVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  confirmPrivateVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPrivateVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  confirmPublicVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPublicVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  confirmPublicVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPublicVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  confirmPublicVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmPublicVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  confirmTransitVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  confirmTransitVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  confirmTransitVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('confirmTransitVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createBGPPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBGPPeer', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createBGPPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBGPPeer', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createBGPPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBGPPeer', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createDirectConnectGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGateway', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createDirectConnectGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGateway', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createDirectConnectGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGateway', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createDirectConnectGatewayAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createDirectConnectGatewayAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createDirectConnectGatewayAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociation', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createDirectConnectGatewayAssociationProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createDirectConnectGatewayAssociationProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createDirectConnectGatewayAssociationProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createInterconnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInterconnect', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createInterconnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInterconnect', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createInterconnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInterconnect', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createLag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLag', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createLagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLag', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createLagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLag', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createPrivateVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createPrivateVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createPrivateVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createPublicVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createPublicVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createPublicVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  createTransitVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  createTransitVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTransitVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  createTransitVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTransitVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteBGPPeer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBGPPeer', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteBGPPeerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBGPPeer', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteBGPPeerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBGPPeer', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteDirectConnectGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGateway', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteDirectConnectGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGateway', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteDirectConnectGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGateway', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteDirectConnectGatewayAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteDirectConnectGatewayAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteDirectConnectGatewayAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociation', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteDirectConnectGatewayAssociationProposal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteDirectConnectGatewayAssociationProposalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteDirectConnectGatewayAssociationProposalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectConnectGatewayAssociationProposal', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteInterconnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInterconnect', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteInterconnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInterconnect', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteInterconnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInterconnect', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteLag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLag', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteLagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLag', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteLagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLag', 'DirectConnect', Promise.reject(result), true, mock)
  },
  deleteVirtualInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualInterface', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  deleteVirtualInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualInterface', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  deleteVirtualInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualInterface', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeConnectionLoa: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionLoa', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeConnectionLoaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionLoa', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeConnectionLoaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionLoa', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnections', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeConnectionsOnInterconnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionsOnInterconnect', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeConnectionsOnInterconnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionsOnInterconnect', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeConnectionsOnInterconnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConnectionsOnInterconnect', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeCustomerMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomerMetadata', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeCustomerMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomerMetadata', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeCustomerMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomerMetadata', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeDirectConnectGatewayAssociationProposals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociationProposals', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeDirectConnectGatewayAssociationProposalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociationProposals', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeDirectConnectGatewayAssociationProposalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociationProposals', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeDirectConnectGatewayAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociations', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeDirectConnectGatewayAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociations', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeDirectConnectGatewayAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAssociations', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeDirectConnectGatewayAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAttachments', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeDirectConnectGatewayAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAttachments', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeDirectConnectGatewayAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGatewayAttachments', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeDirectConnectGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGateways', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeDirectConnectGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGateways', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeDirectConnectGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectConnectGateways', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeHostedConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHostedConnections', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeHostedConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHostedConnections', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeHostedConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHostedConnections', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeInterconnectLoa: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnectLoa', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeInterconnectLoaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnectLoa', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeInterconnectLoaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnectLoa', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeInterconnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnects', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeInterconnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnects', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeInterconnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInterconnects', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeLags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLags', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeLagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLags', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeLagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLags', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeLoa: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoa', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeLoaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoa', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeLoaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoa', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocations', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocations', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLocations', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeRouterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouterConfiguration', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeRouterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouterConfiguration', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeRouterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRouterConfiguration', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeVirtualGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateways', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeVirtualGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateways', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeVirtualGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateways', 'DirectConnect', Promise.reject(result), true, mock)
  },
  describeVirtualInterfaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualInterfaces', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  describeVirtualInterfacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualInterfaces', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  describeVirtualInterfacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualInterfaces', 'DirectConnect', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectConnect', Promise.reject(result), true, mock)
  },
  disassociateConnectionFromLag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionFromLag', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  disassociateConnectionFromLagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionFromLag', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  disassociateConnectionFromLagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnectionFromLag', 'DirectConnect', Promise.reject(result), true, mock)
  },
  disassociateMacSecKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMacSecKey', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  disassociateMacSecKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMacSecKey', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  disassociateMacSecKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMacSecKey', 'DirectConnect', Promise.reject(result), true, mock)
  },
  listVirtualInterfaceTestHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualInterfaceTestHistory', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  listVirtualInterfaceTestHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualInterfaceTestHistory', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  listVirtualInterfaceTestHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualInterfaceTestHistory', 'DirectConnect', Promise.reject(result), true, mock)
  },
  startBgpFailoverTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBgpFailoverTest', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  startBgpFailoverTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBgpFailoverTest', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  startBgpFailoverTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBgpFailoverTest', 'DirectConnect', Promise.reject(result), true, mock)
  },
  stopBgpFailoverTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBgpFailoverTest', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  stopBgpFailoverTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBgpFailoverTest', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  stopBgpFailoverTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBgpFailoverTest', 'DirectConnect', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DirectConnect', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DirectConnect', Promise.reject(result), true, mock)
  },
  updateConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  updateConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  updateConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConnection', 'DirectConnect', Promise.reject(result), true, mock)
  },
  updateDirectConnectGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGateway', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  updateDirectConnectGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGateway', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  updateDirectConnectGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGateway', 'DirectConnect', Promise.reject(result), true, mock)
  },
  updateDirectConnectGatewayAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  updateDirectConnectGatewayAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGatewayAssociation', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  updateDirectConnectGatewayAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectConnectGatewayAssociation', 'DirectConnect', Promise.reject(result), true, mock)
  },
  updateLag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLag', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  updateLagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLag', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  updateLagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLag', 'DirectConnect', Promise.reject(result), true, mock)
  },
  updateVirtualInterfaceAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualInterfaceAttributes', 'DirectConnect', Promise.resolve(result), true, mock)
  },
  updateVirtualInterfaceAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualInterfaceAttributes', 'DirectConnect', Promise.resolve(result), false, mock)
  },
  updateVirtualInterfaceAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualInterfaceAttributes', 'DirectConnect', Promise.reject(result), true, mock)
  },
}
